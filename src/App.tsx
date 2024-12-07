import "./App.css";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Roles from "./pages/Roles";
import AddRole from "./pages/AddRole";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={homeRoute} element={<h1>Home</h1>} />
          <Route path={rolesRoute} element={<Roles />} />
          <Route path={addRoleRoute} element={<AddRole />} />
          <Route path={editRoleRoute} element={<AddRole />} />
          <Route path="/page2" element={<h1>page 2</h1>} />
          <Route path="/page3" element={<h1>page 3</h1>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

export const homeRoute = "/";
export const rolesRoute = "/roles";
export const addRoleRoute = "/roles/add-role";
export const editRoleNeutralRoute = "/roles/edit-role";
export const editRoleRoute = `${editRoleNeutralRoute}/:id`;
