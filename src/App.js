import { Route, Routes } from "react-router-dom"
import { Coordinator } from "./components/pages/Coordinator"
import { Home } from "./components/pages/Home"
import { Login } from "./components/pages/Login"
import { Register } from "./components/pages/Register"
import { Student } from "./components/pages/Student"
import { Teacher } from "./components/pages/Teacher"
import { GlobalProvider } from "./contexts/GlobalContext"

function App() {
  return (
    <GlobalProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/matricula" element={<Register />} />
        <Route path="/aluno" element={<Student />} />
        <Route path="/professor" element={<Teacher />} />
        <Route path="/coordenador" element={<Coordinator />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </GlobalProvider>
  )
}

export default App
