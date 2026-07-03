import { FiLink2, FiPlusCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const fullName = localStorage.getItem("fullName") || "User";
  const firstName = fullName.split(" ")[0];

  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 17) greeting = "Good Afternoon";

  return (
    <div className="max-w-7xl mx-auto">

      {/* Welcome */}

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

        <h1 className="text-3xl font-bold">
          {greeting}, {firstName} 👋
        </h1>

        <p className="text-slate-400 mt-3 max-w-2xl">
          Welcome to your dashboard. Manage your short URLs,
          create new ones and keep everything organized from one place.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">

          <Link
            to="/dashboard/create"
            className="flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 px-5 py-3 font-semibold transition"
          >
            <FiPlusCircle />
            Create URL
          </Link>

          <Link
            to="/dashboard/urls"
            className="flex items-center gap-2 rounded-xl border border-slate-700 hover:bg-slate-800 px-5 py-3 font-semibold transition"
          >
            <FiLink2 />
            My URLs
          </Link>

        </div>

      </div>

      {/* Quick Stats */}

      <div className="grid gap-6 mt-8 md:grid-cols-2">

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

          <p className="text-slate-400 text-sm">
            Total URLs
          </p>

          <h2 className="text-5xl font-bold mt-3">
            --
          </h2>

          <p className="text-slate-500 mt-2">
            Connected to backend soon.
          </p>

        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

          <p className="text-slate-400 text-sm">
            Recent Activity
          </p>

          <h2 className="text-xl font-semibold mt-4">
            No recent activity
          </h2>

          <p className="text-slate-500 mt-2">
            Create your first short URL to get started.
          </p>

        </div>

      </div>

    </div>
  );
}