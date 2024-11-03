import { createContext, useState } from "react"

export const RegisterContext = createContext({
  registerYear: null,
  isLoading: false,
  setIsLoading: () => {},
  student: null,
  setStudent: () => {},
  responsible: null,
  setResponsible: () => {},
})

export const RegisterProvider = ({ children }) => {
  const [student, setStudent] = useState(null)
  const [responsible, setResponsible] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const registerYear = new Date().getFullYear() + 1

  return (
    <RegisterContext.Provider
      value={{
        registerYear,
        isLoading,
        setIsLoading,
        student,
        setStudent,
        responsible,
        setResponsible,
      }}
    >
      {children}
    </RegisterContext.Provider>
  )
}
