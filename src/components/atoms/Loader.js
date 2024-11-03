import { LoadingOutlined } from "@ant-design/icons"
import { Spin } from "antd"

export const Loader = ({ fontSize = 50 } = {}) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
      <Spin indicator={<LoadingOutlined style={{ fontSize }} spin />} />
    </div>
  )
}
