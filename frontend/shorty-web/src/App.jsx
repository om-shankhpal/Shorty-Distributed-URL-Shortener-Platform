import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";

import ProtectedRoute from "./components/auth/ProtectedRoute";
import PublicRoute from "./components/auth/PublicRoute";

import DashboardLayout from "./components/layout/DashboardLayout";

import Dashboard from "./pages/dashboard/Dashboard";
import CreateUrl from "./pages/dashboard/CreateUrl";
import MyUrls from "./pages/dashboard/MyUrls";
import Analytics from "./pages/dashboard/Analytics";
// import Profile from "./pages/dashboard/Profile";

export default function App() {
  return (
    <Routes>
      {/* Public Landing */}
      <Route path="/" element={<Landing />} />

      {/* Login / Register */}
      <Route element={<PublicRoute />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* Protected Dashboard */}
      <Route element={<ProtectedRoute />}>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/create" element={<CreateUrl />} />
          <Route path="/dashboard/urls" element={<MyUrls />} />
          <Route
            path="/dashboard/analytics/:shortCode"
            element={<Analytics />}
          />
          {/* <Route path="/dashboard/profile" element={<Profile />} /> */}
        </Route>
      </Route>
    </Routes>
  );
}