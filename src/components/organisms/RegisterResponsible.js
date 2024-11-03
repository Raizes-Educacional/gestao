import { UploadOutlined } from "@ant-design/icons"
import { Button, Checkbox, Flex, Form, Input, Upload } from "antd"
import { useState } from "react"
import spaces from "../../utils/spaces"
import { MaskedInput } from "antd-mask-input"

export const RegisterReponsible = ({ submitText, cancelText, onSubmit, onCancel }) => {
  const [rgFile, setRgFile] = useState(null)

  const onFinish = (values) => onSubmit({ ...values, rgFile })

  return (
    <Form name="basic" layout="vertical" onFinish={onFinish}>
      <Flex vertical>
        <h3 style={{ marginBottom: spaces.space1 }}>Dados pessoais</h3>
        <Form.Item label="Nome completo" name="name" rules={[{ required: true, message: "Nome completo é obrigatório" }]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Email é obrigatório" },
            { type: "email", message: "Insira um email válido" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Número do RG" name="rg" rules={[{ required: true, message: "Número do RG é obrigatório" }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Anexe uma foto do RG" rules={[{ required: true, message: "Anexe uma foto do RG" }]}>
          <Upload
            beforeUpload={(file) => {
              setRgFile(file)
              return false
            }}
            accept={["image/*", "pdf"]}
            maxCount={1}
          >
            <Button icon={<UploadOutlined />} type="primary">
              Anexar
            </Button>
          </Upload>
        </Form.Item>

        <Form.Item label="Celular" name="phone" rules={[{ required: true, message: "Celular é obrigatório" }]}>
          <MaskedInput mask={"(00)00000-0000"} />
        </Form.Item>

        <h3>Termos de responsabilidade e autorização</h3>

        <Flex vertical>
          <Form.Item
            name="acceptSafetyTerms"
            valuePropName="checked"
            rules={[{ required: true, message: "Você precisa aceitar os termos de responsabilidade" }]}
          >
            <Checkbox>Eu me responsabilizo pela segurança do menor no trajeto de ida e vinda ao Raízes.</Checkbox>
          </Form.Item>

          <Form.Item
            name="acceptFoodTerms"
            valuePropName="checked"
            rules={[{ required: true, message: "Você precisa aceitar os termos de responsabilidade" }]}
          >
            <Checkbox>
              Estou ciente que serei responsável pela alimentação do menor sob minha responsabilidade enquanto este estiver em período letivo do
              Raízes.
            </Checkbox>
          </Form.Item>

          <Form.Item
            name="acceptImageTerms"
            valuePropName="checked"
            rules={[{ required: true, message: "Você precisa aceitar os termos de responsabilidade" }]}
          >
            <Checkbox>
              Eu autorizo o uso de minha imagem e do menor sob minha responsabilidade em fotos ou vídeos, sem finalidade comercial, para ser utilizada
              pelo Raízes. A presente autorização é concedida a título gratuito, abrangendo o uso da imagem acima mencionada em todo território
              nacional e no exterior, em todas as suas modalidades.
            </Checkbox>
          </Form.Item>
        </Flex>

        {submitText && (
          <Button type="primary" htmlType="submit">
            {submitText}
          </Button>
        )}
        {cancelText && (
          <Button type="text" htmlType="button" onClick={onCancel}>
            {cancelText}
          </Button>
        )}
      </Flex>
    </Form>
  )
}
