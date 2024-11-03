import { LikeFilled } from "@ant-design/icons"
import { Button, Flex } from "antd"
import { useNavigate } from "react-router-dom"
import colors from "../../utils/colors"
import spaces from "../../utils/spaces"

export const RegisterFinish = () => {
  const navigate = useNavigate()

  return (
    <Flex vertical style={{ gap: spaces.space2, alignItems: "center" }}>
      <LikeFilled style={{ fontSize: 48, color: colors.primary }} />
      <p>Sua matrícula foi finalizada com sucesso.</p>
      <Button type="primary" onClick={() => navigate("")}>
        Realizar outra matrícula
      </Button>
    </Flex>
  )
}
