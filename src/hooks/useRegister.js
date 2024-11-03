import { useContext, useEffect } from "react"
import { RegisterContext } from "../contexts/RegisterContext"
import { useSupabase } from "./useSupabase"

export const useRegister = ({ setRegisterFinished }) => {
  const supabase = useSupabase()
  const { student, responsible, setIsLoading } = useContext(RegisterContext)

  useEffect(() => {
    const save = async () => {
      setIsLoading(true)

      const uuid = crypto.randomUUID()

      await supabase.storage.from("rg").upload(uuid, responsible.rgFile)

      await supabase.from("responsible").insert({
        ...responsible,
        uuid,
        rgFile: undefined,
      })

      await supabase.from("student").insert({
        ...student,
        uuidResponsible: uuid,
      })

      setIsLoading(false)
    }

    if (!student || !responsible) return () => {}

    save().then(() => setRegisterFinished(true))
  }, [student, responsible, supabase, setRegisterFinished, setIsLoading])
}
