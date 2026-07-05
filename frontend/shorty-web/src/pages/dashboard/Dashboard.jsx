import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiLink2, FiPlusCircle, FiExternalLink } from "react-icons/fi";

import { getMyUrls } from "../../services/urlService";
import { shortenUrl } from "../../utils/shortenUrl";

export default function Dashboard() {
  const fullName = localStorage.getItem("fullName") || "User";
  const firstName = fullName.split(" ")[0];

  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboard();
  }, []);

  async function fetchDashboard() {
    try {
      setLoading(true);

      const response = await getMyUrls();

      const sortedUrls = [...response].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
      );

      setUrls(sortedUrls);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  const totalUrls = urls.length;
  const latestUrl = urls[0] ?? null;
  const recentUrls = urls.slice(0, 5);

  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 17) greeting = "Good Afternoon";

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Welcome */}

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-8">
        <h1 className="text-2xl font-bold text-white sm:text-3xl">
          {greeting}, {firstName} 👋
        </h1>

        <p className="mt-3 max-w-2xl text-slate-400">
          Welcome to your dashboard. Manage your short URLs, create new ones,
          and keep everything organized from one place.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/dashboard/create"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold transition hover:bg-blue-500 sm:w-auto"
          >
            <FiPlusCircle />
            Create URL
          </Link>

          <Link
            to="/dashboard/urls"
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700 px-5 py-3 font-semibold transition hover:bg-slate-800 sm:w-auto"
          >
            <FiLink2 />
            My URLs
          </Link>
        </div>
      </div>

      {/* Stats */}

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {/* Total URLs */}

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <p className="text-sm text-slate-400">Total URLs</p>

          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-white">
            {loading ? "--" : totalUrls}
          </h2>

          <p className="mt-2 text-slate-500">Short links you've created.</p>
        </div>

        {/* Latest Activity */}

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <p className="text-sm text-slate-400">Latest Activity</p>

          {latestUrl ? (
            <>
              <h2 className="mt-4 truncate text-xl font-semibold text-white">
                {latestUrl.shortUrl}
              </h2>

              <p
                className="mt-2 truncate text-slate-400"
                title={latestUrl.originalUrl}
              >
                {shortenUrl(latestUrl.originalUrl)}
              </p>

              <p className="mt-4 text-sm text-slate-500">Latest URL created</p>
            </>
          ) : (
            <>
              <h2 className="mt-4 text-xl font-semibold text-white">
                No URLs Yet
              </h2>

              <p className="mt-2 text-slate-400">
                Create your first short URL to get started.
              </p>
            </>
          )}
        </div>
      </div>

      {/* Recent URLs */}

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-2xl font-bold text-white">Recent URLs</h2>

          <Link
            to="/dashboard/urls"
            className="text-sm text-blue-400 hover:text-blue-300"
          >
            View All
          </Link>
        </div>

        {loading ? (
          <p className="text-slate-400">Loading...</p>
        ) : recentUrls.length === 0 ? (
          <p className="text-slate-400">No URLs created yet.</p>
        ) : (
          <div className="space-y-4">
            {recentUrls.map((url) => (
              <div
                key={url.id}
                className="flex flex-col gap-4 rounded-xl border border-slate-800 bg-slate-950 p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="min-w-0">
                  <h3 className="font-semibold text-white break-all">
                    {url.shortUrl}
                  </h3>

                  <p
                    className="truncate text-sm text-slate-400"
                    title={url.originalUrl}
                  >
                    {shortenUrl(url.originalUrl)}
                  </p>
                </div>

                <a
                  href={url.shortUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-700 px-4 py-2 transition hover:bg-slate-800 sm:w-auto"
                >
                  <FiExternalLink />
                  Open
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
