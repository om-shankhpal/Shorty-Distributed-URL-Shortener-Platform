import { Outlet } from "react-router-dom";
import { useState } from "react";

import Navbar from "../dashboard/Navbar";
import Sidebar from "../dashboard/Sidebar";

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />

      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="pt-16 lg:pl-64">
        <div className="px-4 py-6 sm:px-6 sm:py-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
