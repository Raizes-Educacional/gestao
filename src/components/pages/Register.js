import { Flex, Steps } from "antd"
import { useContext, useState } from "react"
import { RegisterContext } from "../../contexts/RegisterContext"
import { useRegister } from "../../hooks/useRegister"
import spaces from "../../utils/spaces"
import { Loader } from "../atoms/Loader"
import { Logo } from "../atoms/Logo"
import { RegisterFinish } from "../organisms/RegisterFinish"
import { RegisterInfo } from "../organisms/RegisterInfo"
import { RegisterReponsible } from "../organisms/RegisterResponsible"
import { RegisterStudent } from "../organisms/RegisterStudent"

export const Register = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [registerFinished, setRegisterFinished] = useState(false)
  const { isLoading, student, setStudent, setResponsible } = useContext(RegisterContext)

  useRegister({ setRegisterFinished })

  const steps = [
    {
      title: "Início",
      children: <RegisterInfo submitText={"Continuar"} onSubmit={() => setCurrentStep(currentStep + 1)} />,
    },
    {
      title: "Aluno",
      children: (
        <RegisterStudent
          onSubmit={(student) => {
            setStudent(student)
            setCurrentStep(currentStep + 1)
          }}
          onCancel={() => setCurrentStep(currentStep - 1)}
          submitText={"Próximo"}
          cancelText={"Anterior"}
          initialValues={student}
        />
      ),
    },
    {
      title: "Responsável",
      children: (
        <RegisterReponsible
          submitText={"Finalizar"}
          onSubmit={setResponsible}
          cancelText={"Anterior"}
          onCancel={() => setCurrentStep(currentStep - 1)}
          studentPhone={student?.phone}
        />
      ),
    },
  ]

  if (isLoading)
    return (
      <Flex style={{ height: "95vh", justifyContent: "center", alignItems: "center" }}>
        <Loader />
      </Flex>
    )

  return (
    <Flex
      vertical
      style={{
        margin: `${spaces.space3} auto`, 
        alignItems: "center",
        gap: spaces.space2,
        width: "90vw",
        maxWidth: 600,
        justifySelf: "center",
      }}
    >
      <Flex style={{ alignItems: "center", gap: spaces.space2 }}>
        <Logo width={90} />
        <h1>Formulário de Matrícula</h1>
      </Flex>
      {registerFinished ? (
        <RegisterFinish />
      ) : (
        <>
          <Steps
            size="small"
            current={currentStep}
            items={steps.map((step) => ({ title: step.title }))}
            onChange={setCurrentStep}
            style={{ marginBottom: spaces.space2 }}
          />
          {steps[currentStep].children}
        </>
      )}
    </Flex>
  )
}
