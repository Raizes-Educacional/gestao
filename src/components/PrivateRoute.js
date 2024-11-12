import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSupabase } from "../hooks/useSupabase"

export const PrivateRoute = ({ children }) => {
    const supabase = useSupabase()
    const navigate = useNavigate()

    useEffect(() => {
        supabase.auth.getSession(({ data: { session } }) => !session && navigate('/login'))
    })

    return children
}