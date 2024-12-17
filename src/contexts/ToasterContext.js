import { message } from "antd"
import { createContext } from "react"

export const ToasterContext = createContext({
  messageApi: {},
})

export const ToasterProvider = ({ children }) => {
  const [messageApi, contextHolder] = message.useMessage()

  return (
    <ToasterContext.Provider value={{ messageApi }}>
      {contextHolder}
      {children}
    </ToasterContext.Provider>
  )
}
