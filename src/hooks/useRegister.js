import { useContext } from "react"
import { RegisterContext } from "../contexts/RegisterContext"
import { useSupabase } from "./useSupabase"

export const useRegister = () => {
  const supabase = useSupabase()
  const context = useContext(RegisterContext)

  console.log(supabase)

  const finish = async () => {
    console.log("finish")
    console.log(context)
  }

  return { finish }
}
