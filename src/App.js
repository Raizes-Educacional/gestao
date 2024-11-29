import { Navigate, Route, Routes } from "react-router-dom";
import { GlobalProvider } from "./contexts/GlobalContext";
import { RegisterProvider } from "./contexts/RegisterContext";
import { PrivateRoute } from "./components/PrivateRoute";

import {
  Coordinator,
  Secretary,
  Login,
  Register,
  Student,
  Teacher,
} from "./components/pages";

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
