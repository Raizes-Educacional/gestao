import { useContext, useState } from "react"
import { useSupabase } from "./useSupabase"
import { ToasterContext } from "../contexts/ToasterContext"

const useLogin = () => {
  const supabase = useSupabase()

  const [loginError, setLoginError] = useState(false)

  const { messageApi } = useContext(ToasterContext)

  const onFinish = async (values) => {
    messageApi.open({
      type: "loading",
      content: "Loading...",
      duration: 0,
    })

    const { error } = await supabase.auth.signInWithPassword({
      email: values.username,
      password: values.password,
    })

    messageApi.destroy()

    if (error?.__isAuthError) {
      loginErrorHandle()
      return
    }

    messageApi.open({
      type: "success",
      content: "Usuário autenticado com succeso!",
      duration: 0,
    })
  }

  const loginErrorHandle = () => {
    setLoginError("Usuário ou senha inválidos")
    setTimeout(() => setLoginError(false), 3500)
  }

  return {
    loginError,
    setLoginError,
    onFinish,
  }
}

export default useLogin
