import { Flex, Input } from "antd"
import spaces from "../../utils/spaces"

export const InputWithLabel = ({ label, ...props }) => {
  return (
    <Flex vertical style={{ alignItems: "flex-start", gap: spaces.space1 }}>
      <span>{label}</span>
      <Input width={200} {...props} />
    </Flex>
  )
}
