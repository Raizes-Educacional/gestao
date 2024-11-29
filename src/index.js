import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import colors from "./utils/colors"
import { BrowserRouter } from "react-router-dom"
import { ConfigProvider } from "antd"

const theme = {
  primaryColor: colors.primary,
  secondaryColor: colors.secondary,
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <ConfigProvider theme={{ token: theme }}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ConfigProvider>
)
