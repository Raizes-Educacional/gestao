import { Button, Flex, Form, Input, Radio, Select } from "antd"
import { useContext } from "react"
import { RegisterContext } from "../../contexts/RegisterContext"
import spaces from "../../utils/spaces"
import { convertToBoolean } from "../../utils/types"

export const RegisterStudent = ({ onSubmit, onCancel, submitText, cancelText }) => {
  const context = useContext(RegisterContext)

  return (
    <Form name="basic" layout="vertical" onFinish={onSubmit}>
      <Flex vertical>
        <h3 style={{ marginBottom: spaces.space1 }}>Dados pessoais</h3>

        <Form.Item
          label="Nome completo"
          name="nome"
          rules={[{ required: true, message: "Nome completo é obrigatório" }]}
          style={{ marginBottom: spaces.space2 }}
        >
          <Input onChange={(e) => context.setStudentName(e.target.value)} />
        </Form.Item>

        <Form.Item label="Idade" name="idade" rules={[{ required: true, message: "Idade é obrigatória" }]} style={{ marginBottom: spaces.space2 }}>
          <Input onChange={(e) => context.setStudentAge(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Email é obrigatório" },
            { type: "email", message: "Insira um email válido" },
          ]}
          style={{ marginBottom: spaces.space2 }}
        >
          <Input onChange={(e) => context.setStudentEmail(e.target.value)} />
        </Form.Item>
      </Flex>
      <Flex vertical>
        <h3 style={{ marginBottom: spaces.space1 }}>Endereço</h3>

        <Form.Item label="CEP" name="cep" rules={[{ required: true, message: "CEP é obrigatório" }]} style={{ marginBottom: spaces.space2 }}>
          <Input onChange={(e) => context.setStudentZipCode(e.target.value)} />
        </Form.Item>

        <Form.Item label="Cidade" name="cidade" rules={[{ required: true, message: "Cidade é obrigatória" }]} style={{ marginBottom: spaces.space2 }}>
          <Input onChange={(e) => context.setStudentCity(e.target.value)} />
        </Form.Item>

        <Form.Item label="Bairro" name="bairro" rules={[{ required: true, message: "Bairro é obrigatório" }]} style={{ marginBottom: spaces.space2 }}>
          <Input onChange={(e) => context.setStudentNeighborhood(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Endereço"
          name="endereco"
          rules={[{ required: true, message: "Endereço é obrigatório" }]}
          style={{ marginBottom: spaces.space2 }}
        >
          <Input onChange={(e) => context.setStudentAddress(e.target.value)} />
        </Form.Item>

        <Form.Item label="Número" name="numero" rules={[{ required: true, message: "Número é obrigatório" }]} style={{ marginBottom: spaces.space2 }}>
          <Input onChange={(e) => context.setStudentAddressNumber(e.target.value)} />
        </Form.Item>

        <Form.Item label="Complemento" name="complemento" style={{ marginBottom: spaces.space2 }}>
          <Input onChange={(e) => context.setStudentAddressComplement(e.target.value)} />
        </Form.Item>
      </Flex>
      <Flex vertical>
        <h3 style={{ marginBottom: spaces.space1 }}>Dados escolares</h3>

        <Form.Item label="Escola" name="escola" rules={[{ required: true, message: "Escola é obrigatória" }]} style={{ marginBottom: spaces.space2 }}>
          <Input onChange={(e) => context.setStudentSchool(e.target.value)} />
        </Form.Item>

        <Form.Item
          label={`Qual ano/série o aluno cursará em ${context.registerYear}?`}
          name="ano"
          rules={[{ required: true, message: "Ano é obrigatório" }]}
          style={{ marginBottom: spaces.space2 }}
        >
          <Select onChange={(value) => context.setStudentGrade(value)}>
            <Select.Option value="1">1° ano</Select.Option>
            <Select.Option value="2">2° ano</Select.Option>
            <Select.Option value="3">3° ano</Select.Option>
            <Select.Option value="4">4° ano</Select.Option>
            <Select.Option value="5">5° ano</Select.Option>
            <Select.Option value="6">6° ano</Select.Option>
            <Select.Option value="7">7° ano</Select.Option>
            <Select.Option value="8">8° ano</Select.Option>
            <Select.Option value="9">9° ano</Select.Option>
          </Select>
        </Form.Item>
      </Flex>
      <Flex vertical>
        <h3 style={{ marginBottom: spaces.space1 }}>Acessibilidade, Disponibilidade e Referências</h3>

        <Form.Item
          label="Por onde ficou sabendo do Raízes?"
          name="comoConheceu"
          rules={[{ required: true, message: "Como conheceu é obrigatório" }]}
          style={{ marginBottom: spaces.space2 }}
        >
          <Select onChange={(value) => context.setHowMeetUs(value)}>
            <Select.Option value="google">Google</Select.Option>
            <Select.Option value="facebook">Facebook</Select.Option>
            <Select.Option value="instagram">Instagram</Select.Option>
            <Select.Option value="amigo">Amigo</Select.Option>
            <Select.Option value="escola">Escola</Select.Option>
            <Select.Option value="outros">Outros</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="O aluno possui alguma necessidade de acessibilidade devido a uma deficiência ou condição?"
          name="necessidadeAcessibilidade"
          rules={[{ required: true, message: "Necessidade de acessibilidade é obrigatório" }]}
          style={{ marginBottom: spaces.space2 }}
        >
          <Radio.Group onChange={(e) => context.setIsDeficientStudent(convertToBoolean(e.target.value))}>
            <Radio value="true">Sim</Radio>
            <Radio value="false">Não</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="O aluno possui disponibilidade de horário para participar das atividades?"
          name="disponibilidadeHorario"
          rules={[{ required: true, message: "Disponibilidade de horário é obrigatório" }]}
          style={{ marginBottom: spaces.space2 }}
        >
          <Radio.Group onChange={(e) => context.setIsAvailableTime(convertToBoolean(e.target.value))}>
            <Radio value="true">Sim</Radio>
            <Radio value="false">Não</Radio>
          </Radio.Group>
        </Form.Item>
      </Flex>
      <Flex gap={spaces.space1}>
        {submitText && (
          <Button type="primary" htmlType="submit">
            {submitText}
          </Button>
        )}
        {cancelText && (
          <Button type="default" onClick={onCancel}>
            {cancelText}
          </Button>
        )}
      </Flex>
    </Form>
  )
}
