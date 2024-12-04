import {  useNavigate } from "react-router-dom"
import { useAuthenticationSession } from "../hooks/useAuthenticationSession"
import { useEffect } from "react";

export const PrivateRoute = ({children}) => {
    const navigate = useNavigate()
    const session = useAuthenticationSession();
    
    useEffect(() => {
        if (!session) {
            return navigate('login')
        }
    }, [session, navigate])

    return children
}