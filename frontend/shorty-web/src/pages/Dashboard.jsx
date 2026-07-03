import { useState } from "react";
import { FiLink2, FiMousePointer, FiTrendingUp, FiZap } from "react-icons/fi";
import Navbar from "../components/dashboard/Navbar";
import Sidebar from "../components/dashboard/Sidebar";
import StatsCard from "../components/dashboard/StatsCard";
import RecentUrlsTable from "../components/dashboard/RecentUrlsTable";

const STATS = [
  {
    icon: FiLink2,
    label: "Total URLs",
    value: "24",
    trend: "+3 from last week",
    trendUp: true,
  },
  {
    icon: FiMousePointer,
    label: "Total Clicks",
    value: "1,482",
    trend: "+128 today",
    trendUp: true,
  },
  {
    icon: FiTrendingUp,
    label: "Today's Clicks",
    value: "128",
    trend: "+36% vs yesterday",
    trendUp: true,
  },
  {
    icon: FiZap,
    label: "Active URLs",
    value: "21",
    trend: "3 inactive",
    trendUp: false,
  },
];

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const fullName = localStorage.getItem("fullName") || "User";
  const firstName = fullName.split(" ")[0];
  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 17) {
    greeting = "Good Afternoon";
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar onMenuToggle={() => setSidebarOpen((v) => !v)} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main content — offset for fixed navbar + sidebar */}
      <main className="pt-14 lg:pl-56 min-h-screen">
        <div className="p-5 sm:p-7 max-w-6xl mx-auto">
          {/* Welcome banner */}
          <div className="mb-7 rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-600/10 via-blue-600/5 to-transparent px-6 py-5">
            <h1 className="text-xl font-bold text-white mb-1">
              {greeting}, {firstName}
            </h1>
            <p className="text-sm text-slate-400">
              Here is a summary of your short URLs and click analytics.
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
            {STATS.map((stat) => (
              <StatsCard key={stat.label} {...stat} />
            ))}
          </div>

          {/* Recent URLs */}
          <RecentUrlsTable />
        </div>
      </main>
    </div>
  );
}
