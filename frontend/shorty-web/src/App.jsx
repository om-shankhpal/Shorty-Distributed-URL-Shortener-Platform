import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";

import DashboardLayout from "./components/layout/DashboardLayout";

import Dashboard from "./pages/dashboard/Dashboard";
import CreateUrl from "./pages/dashboard/CreateUrl";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/create" element={<CreateUrl />} />
      </Route>
    </Routes>
  );
}