import { UploadOutlined } from "@ant-design/icons"
import { Button, Checkbox, Flex, Form, Input, Upload } from "antd"
import { MaskedInput } from "antd-mask-input"
import { useState } from "react"
import spaces from "../../utils/spaces"

export const RegisterReponsible = ({ submitText, cancelText, onSubmit, onCancel }) => {
  const [rgFile, setRgFile] = useState(null)

  const onFinish = (values) => onSubmit({ ...values, rgFile })

  return (
    <Form name="basic" layout="vertical" onFinish={onFinish}>
      <Flex vertical gap={spaces.space3}>
        <Flex vertical gap={spaces.space2}>
          <h3 style={{ marginBottom: spaces.space1 }}>Dados pessoais</h3>
          <Form.Item
            label="Nome completo"
            name="name"
            rules={[{ required: true, message: "Nome completo é obrigatório" }]}
            style={{ marginBottom: 0 }}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Email é obrigatório" },
              { type: "email", message: "Insira um email válido" },
            ]}
            style={{ marginBottom: 0 }}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Número do RG" name="rg" rules={[{ required: true, message: "Número do RG é obrigatório" }]} style={{ marginBottom: 0 }}>
            <Input />
          </Form.Item>

          <Form.Item label="Anexe uma foto do RG" rules={[{ required: true, message: "Anexe uma foto do RG" }]} style={{ marginBottom: 0 }}>
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

          <Form.Item label="Celular" name="phone" rules={[{ required: true, message: "Celular é obrigatório" }]} style={{ marginBottom: 0 }}>
            <MaskedInput mask={"(00)00000-0000"} />
          </Form.Item>
        </Flex>

        <Flex vertical gap={spaces.space2}>
          <h3>Termos de responsabilidade e autorização</h3>
          <Form.Item
            name="acceptSafetyTerms"
            valuePropName="checked"
            rules={[{ required: true, message: "Você precisa aceitar os termos de responsabilidade" }]}
            style={{ marginBottom: 0 }}
          >
            <Checkbox>Eu me responsabilizo pela segurança do menor no trajeto de ida e vinda ao Raízes.</Checkbox>
          </Form.Item>

          <Form.Item
            name="acceptFoodTerms"
            valuePropName="checked"
            rules={[{ required: true, message: "Você precisa aceitar os termos de responsabilidade" }]}
            style={{ marginBottom: 0 }}
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
            style={{ marginBottom: 0 }}
          >
            <Checkbox>
              Eu autorizo o uso de minha imagem e do menor sob minha responsabilidade em fotos ou vídeos, sem finalidade comercial, para ser utilizada
              pelo Raízes. A presente autorização é concedida a título gratuito, abrangendo o uso da imagem acima mencionada em todo território
              nacional e no exterior, em todas as suas modalidades.
            </Checkbox>
          </Form.Item>
        </Flex>

        <Flex gap={spaces.space1}>
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
      </Flex>
    </Form>
  )
}
