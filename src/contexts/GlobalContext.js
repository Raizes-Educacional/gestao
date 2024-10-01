import { createClient } from "@supabase/supabase-js"
import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const GlobalContext = createContext({
  supabase: null,
  session: null,
})

export const GlobalProvider = ({ children }) => {
  const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_ANON_KEY)

  const [session, setSession] = useState(null)

  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    if (!session) navigate("/login");

    return () => subscription.unsubscribe()
  }, [])

  return <GlobalContext.Provider value={{ supabase, session }}>{children}</GlobalContext.Provider>
}
