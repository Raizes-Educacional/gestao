import { Flex, Steps } from "antd"
import { useState } from "react"
import { useRegister } from "../../hooks/useRegister"
import spaces from "../../utils/spaces"
import { Logo } from "../atoms/Logo"
import { RegisterInfo } from "../organisms/RegisterInfo"
import { RegisterReponsible } from "../organisms/RegisterResponsible"
import { RegisterStudent } from "../organisms/RegisterStudent"

export const Register = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [registerFinished, setRegisterFinished] = useState(false)
  const { finish } = useRegister()

  console.log(registerFinished)

  const currentYear = new Date().getFullYear() + 1

  const finishRegister = () => {
    finish().then(() => setRegisterFinished(true))
  }

  const steps = [
    {
      title: "Início",
      children: <RegisterInfo submitText={"Continuar"} onSubmit={() => setCurrentStep(currentStep + 1)} />,
    },
    {
      title: "Aluno",
      children: (
        <RegisterStudent
          onSubmit={() => setCurrentStep(currentStep + 1)}
          onCancel={() => setCurrentStep(currentStep - 1)}
          submitText={"Próximo"}
          cancelText={"Anterior"}
        />
      ),
    },
    {
      title: "Responsável",
      children: (
        <RegisterReponsible
          submitText={"Finalizar"}
          onSubmit={finishRegister}
          cancelText={"Anterior"}
          onCancel={() => setCurrentStep(currentStep - 1)}
        />
      ),
    },
  ]

  return (
    <Flex vertical style={{ paddingLeft: spaces.space5, paddingRight: spaces.space5, alignItems: "center", gap: spaces.space2 }}>
      <Flex style={{ alignItems: "center", gap: spaces.space2 }}>
        <Logo width={90} />
        <h1>Formulário de Matrícula - Raízes {currentYear}</h1>
      </Flex>
      <Steps size="small" current={currentStep} items={steps.map((step) => ({ title: step.title }))} onChange={setCurrentStep} />
      {steps[currentStep].children}
    </Flex>
  )
}
