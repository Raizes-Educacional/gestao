import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"

export const useSupabase = () => {
    const { supabase } = useContext(GlobalContext)
    return supabase
}