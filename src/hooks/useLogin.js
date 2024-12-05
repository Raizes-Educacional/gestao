import { useState } from 'react';
import { useSupabase } from './useSupabase';

const useLogin = () => {
  const supabase = useSupabase()
  
  const [ loginError, setLoginError ] = useState(false)

  const onFinish = async (values) => {
    const { error } = await supabase.auth.signInWithPassword({
      email: values.username,
      password: values.password,
    })
      
    if(error?.__isAuthError) { loginErrorHandle() }
  };

  const loginErrorHandle = () => {
    setLoginError('Usuário ou senha inválidos')
    setTimeout(() => setLoginError(false), 3500)
  }
  
  return {
    loginError,
            setLoginError,
    onFinish
  }
}

export default useLogin