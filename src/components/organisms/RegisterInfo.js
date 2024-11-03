import { Button, Flex } from "antd"
import spaces from "../../utils/spaces"

export const RegisterInfo = ({ submitText, cancelText, onSubmit, onCancel }) => {
  return (
    <Flex vertical style={{ maxWidth: 600, gap: spaces.space2, paddingTop: spaces.space2 }}>
      <p>
        O <strong>Raízes</strong> é um espaço educativo que tem por objetivo envolver estudantes do ensino fundamental em uma experiência que promova
        a fruição do conhecimento e a compreensão do mundo em toda a sua complexidade.
      </p>
      <strong>Turmas de 9° anos</strong>
      <p>
        Destinada ao preparo para <strong>processos seletivos</strong> de escolas de referência, como ETECs, SENAI, etc;
      </p>
      <p>
        As aulas acontecem aos <strong>sábados</strong> das <strong>8:00 horas às 13:00 horas</strong> na{" "}
        <strong>Escola Estadual Otto Weiszflog</strong>, localizada ao lado da estação de trem de Caieiras.
      </p>
      <Flex style={{ justifyContent: "center", gap: spaces.space2 }}>
        {submitText && (
          <Button type="primary" htmlType="submit" onClick={onSubmit}>
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
  )
}
