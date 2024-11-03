import { createClient } from "@supabase/supabase-js"
import { createContext, useEffect, useState } from "react"

export const GlobalContext = createContext({
  supabase: null,
  session: null,
})

export const GlobalProvider = ({ children }) => {
  const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_ANON_KEY)

  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [supabase, session])

  return <GlobalContext.Provider value={{ supabase, session }}>{children}</GlobalContext.Provider>
}
