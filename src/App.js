import { Navigate, Route, Routes } from "react-router-dom";
import { GlobalProvider } from "./contexts/GlobalContext";
import { RegisterProvider } from "./contexts/RegisterContext";
import { PrivateRoute } from "./components/PrivateRoute";
import { Coordinator } from './components/pages/Coordinator'
import { Secretary } from './components/pages/Secretary'
import { Login } from './components/pages/Login'
import { Register } from './components/pages/Register'
import { Student } from './components/pages/Student'
import { Teacher } from './components/pages/Teacher'

function App() {
  const privateRoutes = [
    { path: "/aluno", element: <Student /> },
    { path: "/professor", element: <Teacher /> },
    { path: "/coordenador", element: <Coordinator /> },
    { path: "/secretaria-virtual", element: <Secretary /> },
  ];

  return (
    <GlobalProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/matricula"
          element={
            <RegisterProvider>
              <Register />
            </RegisterProvider>
          }
        />

        {privateRoutes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<PrivateRoute>{element}</PrivateRoute>}
          />
        ))}

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </GlobalProvider>
  );
}

export default App;
