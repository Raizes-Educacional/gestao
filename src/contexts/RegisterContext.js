import { createContext, useState } from "react"

export const RegisterContext = createContext({
  registerYear: new Date().getFullYear() + 1,
  studentName: null,
  setStudentName: () => {},
  studentAge: null,
  setStudentAge: () => {},
  studentEmail: null,
  setStudentEmail: () => {},
  studentPhone: null,
  setStudentPhone: () => {},
  studentZipCode: null,
  setStudentZipCode: () => {},
  studentCity: null,
  setStudentCity: () => {},
  studentNeighborhood: null,
  setStudentNeighborhood: () => {},
  studentAddress: null,
  setStudentAddress: () => {},
  studentAddressNumber: null,
  setStudentAddressNumber: () => {},
  studentAddressComplement: null,
  setStudentAddressComplement: () => {},
  studentSchool: null,
  setStudentSchool: () => {},
  studentGrade: null,
  setStudentGrade: () => {},
  howMeetUs: null,
  setHowMeetUs: () => {},
  isDeficientStudent: null,
  setIsDeficientStudent: () => {},
  isAvailableTime: null,
  setIsAvailableTime: () => {},
  responsibleName: null,
  setResponsibleName: () => {},
  responsibleEmail: null,
  setResponsibleEmail: () => {},
  responsibleRg: null,
  setResponsibleRg: () => {},
  responsibleRgPicture: null,
  setResponsibleRgPicture: () => {},
  responsiblePhone: null,
  setResponsiblePhone: () => {},
})

export const RegisterProvider = ({ children }) => {
  const [studentName, setStudentName] = useState(null)
  const [studentAge, setStudentAge] = useState(null)
  const [studentEmail, setStudentEmail] = useState(null)
  const [studentPhone, setStudentPhone] = useState(null)
  const [studentZipCode, setStudentZipCode] = useState(null)
  const [studentCity, setStudentCity] = useState(null)
  const [studentNeighborhood, setStudentNeighborhood] = useState(null)
  const [studentAddress, setStudentAddress] = useState(null)
  const [studentAddressNumber, setStudentAddressNumber] = useState(null)
  const [studentAddressComplement, setStudentAddressComplement] = useState(null)
  const [studentSchool, setStudentSchool] = useState(null)
  const [studentGrade, setStudentGrade] = useState(null)
  const [howMeetUs, setHowMeetUs] = useState(null)
  const [isDeficientStudent, setIsDeficientStudent] = useState(null)
  const [isAvailableTime, setIsAvailableTime] = useState(null)

  return (
    <RegisterContext.Provider
      value={{
        studentName,
        setStudentName,
        studentAge,
        setStudentAge,
        studentEmail,
        setStudentEmail,
        studentPhone,
        setStudentPhone,
        studentZipCode,
        setStudentZipCode,
        studentCity,
        setStudentCity,
        studentNeighborhood,
        setStudentNeighborhood,
        studentAddress,
        setStudentAddress,
        studentAddressNumber,
        setStudentAddressNumber,
        studentAddressComplement,
        setStudentAddressComplement,
        studentSchool,
        setStudentSchool,
        studentGrade,
        setStudentGrade,
        howMeetUs,
        setHowMeetUs,
        isDeficientStudent,
        setIsDeficientStudent,
        isAvailableTime,
        setIsAvailableTime,
      }}
    >
      {children}
    </RegisterContext.Provider>
  )
}
