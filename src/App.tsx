import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import AdminPage from "./pages/AdminPage";
import Layout from "./components/Layout";
import OwnerPage from "./pages/OwnerPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage />} />
        <Route path="admin" element={<AdminPage />} caseSensitive/>
        <Route path="user" element={<UserPage />} caseSensitive/>
        <Route path="owner" element={<OwnerPage />} caseSensitive/>
      </Route>
    </Routes>
  );
}

export default App;
