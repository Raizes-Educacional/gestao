import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"

export const useAuthenticationSession = () => {
    const { session } = useContext(GlobalContext)

    return session
}