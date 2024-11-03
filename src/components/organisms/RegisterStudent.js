import { Button, Flex, Form, Input, Radio, Select } from "antd"
import { MaskedInput } from "antd-mask-input"
import { useContext } from "react"
import { RegisterContext } from "../../contexts/RegisterContext"
import spaces from "../../utils/spaces"

export const RegisterStudent = ({ onSubmit, onCancel, submitText, cancelText }) => {
  const { registerYear } = useContext(RegisterContext)

  return (
    <Form name="basic" layout="vertical" onFinish={onSubmit}>
      <Flex vertical>
        <h3 style={{ marginBottom: spaces.space1 }}>Dados pessoais</h3>

        <Form.Item
          label="Nome completo"
          name="name"
          rules={[{ required: true, message: "Nome completo é obrigatório" }]}
          style={{ marginBottom: spaces.space2 }}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Idade" name="age" rules={[{ required: true, message: "Idade é obrigatória" }]} style={{ marginBottom: spaces.space2 }}>
          <MaskedInput mask="00" />
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
          <Input />
        </Form.Item>
      </Flex>
      <Flex vertical>
        <h3 style={{ marginBottom: spaces.space1 }}>Endereço</h3>

        <Form.Item label="CEP" name="zipcode" rules={[{ required: true, message: "CEP é obrigatório" }]} style={{ marginBottom: spaces.space2 }}>
          <MaskedInput mask="00000-000" />
        </Form.Item>

        <Form.Item label="Cidade" name="city" rules={[{ required: true, message: "Cidade é obrigatória" }]} style={{ marginBottom: spaces.space2 }}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Bairro"
          name="neighborhood"
          rules={[{ required: true, message: "Bairro é obrigatório" }]}
          style={{ marginBottom: spaces.space2 }}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Endereço"
          name="address"
          rules={[{ required: true, message: "Endereço é obrigatório" }]}
          style={{ marginBottom: spaces.space2 }}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Número" name="number" rules={[{ required: true, message: "Número é obrigatório" }]} style={{ marginBottom: spaces.space2 }}>
          <Input />
        </Form.Item>

        <Form.Item label="Complemento" name="complement" style={{ marginBottom: spaces.space2 }}>
          <Input />
        </Form.Item>
      </Flex>
      <Flex vertical>
        <h3 style={{ marginBottom: spaces.space1 }}>Dados escolares</h3>

        <Form.Item label="Escola" name="school" rules={[{ required: true, message: "Escola é obrigatória" }]} style={{ marginBottom: spaces.space2 }}>
          <Input />
        </Form.Item>

        <Form.Item
          label={`Qual ano/série o aluno cursará em ${registerYear}?`}
          name="grade"
          rules={[{ required: true, message: "Ano é obrigatório" }]}
          style={{ marginBottom: spaces.space2 }}
        >
          <Select>
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
          name="howMeetUs"
          rules={[{ required: true, message: "Como conheceu é obrigatório" }]}
          style={{ marginBottom: spaces.space2 }}
        >
          <Select>
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
          name="isDeficientStudent"
          rules={[{ required: true, message: "Necessidade de acessibilidade é obrigatório" }]}
          style={{ marginBottom: spaces.space2 }}
        >
          <Radio.Group>
            <Radio value="true">Sim</Radio>
            <Radio value="false">Não</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="O aluno possui disponibilidade de horário para participar das atividades?"
          name="isAvailableTime"
          rules={[{ required: true, message: "Disponibilidade de horário é obrigatório" }]}
          style={{ marginBottom: spaces.space2 }}
        >
          <Radio.Group>
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
