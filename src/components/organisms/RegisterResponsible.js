import { UploadOutlined } from "@ant-design/icons"
import { Button, Checkbox, Flex, Form, Input, Upload } from "antd"
import { MaskedInput } from "antd-mask-input"
import { useState } from "react"
import masks from "../../utils/masks"
import spaces from "../../utils/spaces"

export const RegisterReponsible = ({ submitText, cancelText, onSubmit, onCancel, studentPhone }) => {
  const [rgFile, setRgFile] = useState(null)

  const onFinish = (values) => onSubmit({ ...values, rgFile })

  const isPhoneDifferentFromStudentPhone = async (_, value) => value !== studentPhone ? Promise.resolve() : Promise.reject(new Error('O responsável e o aluno não podem ter o mesmo telefone. Caso o aluno não tenha celular, volte para a etapa do aluno e deixe o número dele em branco.'))

  const isFileNotEmpty = async () => rgFile ? Promise.resolve() : Promise.reject('O upload do RG é obrigatório')

  return (
    <Form name="basic" layout="vertical" onFinish={onFinish}>
      <Flex vertical gap={spaces.space3}>
        <Flex vertical gap={spaces.space2}>
          <h3 style={{ marginBottom: spaces.space1 }}>Responsável: dados pessoais</h3>
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

          <Form.Item label="Celular" name="phone" rules={[{ required: true, message: "Celular é obrigatório" }, { validator: isPhoneDifferentFromStudentPhone }]} style={{ marginBottom: 0 }}>
            <MaskedInput mask={masks.phone} />
          </Form.Item>

          <Form.Item label="Celular alternativo" name="alternativePhone" style={{ marginBottom: 0 }} rules={[{ validator: isPhoneDifferentFromStudentPhone }]}>
            <MaskedInput mask={masks.phone} />
          </Form.Item>

          <Form.Item label="Número do RG" name="rg" rules={[{ required: true, message: "Número do RG é obrigatório" }]} style={{ marginBottom: 0 }}>
            <Input />
          </Form.Item>

          <Form.Item name="rgFile" rules={[{ validator: isFileNotEmpty }]}>
            <Upload
              beforeUpload={(file) => {
                setRgFile(file)
                return false
              }}
              onRemove={() => setRgFile(null)}
              accept={["image/*", "pdf"]}
              maxCount={1}
            >
              <Button icon={<UploadOutlined />} type="primary">
                Anexar
              </Button>
            </Upload>
          </Form.Item>
        </Flex>

        <Flex vertical gap={spaces.space2}>
          <h3>Termos de responsabilidade e autorização</h3>
          <Form.Item
            name="acceptSafetyTerms"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) => (value ? Promise.resolve() : Promise.reject("Você precisa aceitar os termos de responsabilidade")),
              },
            ]}
            style={{ marginBottom: 0 }}
          >
            <Checkbox>Eu me responsabilizo pela segurança do menor no trajeto de ida e vinda ao Raízes.</Checkbox>
          </Form.Item>

          <Form.Item
            name="acceptFoodTerms"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) => (value ? Promise.resolve() : Promise.reject("Você precisa aceitar os termos de responsabilidade")),
              },
            ]}
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
            rules={[
              {
                validator: (_, value) => (value ? Promise.resolve() : Promise.reject("Você precisa aceitar os termos de responsabilidade")),
              },
            ]}
            style={{ marginBottom: 0 }}
          >
            <Checkbox>
              Eu autorizo o uso da minha imagem e do menor sob minha responsabilidade em fotos e vídeos, sem finalidade comercial, para ser utilizada
              pelo Raízes e instituições parceiras. A presente autorização é concedida a título gratuito, abrangendo o uso das imagens
              supramencionadas em todo território nacional e no exterior, em todas as suas modalidades.
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
