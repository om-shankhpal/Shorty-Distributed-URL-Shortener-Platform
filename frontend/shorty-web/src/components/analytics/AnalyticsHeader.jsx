import { FiBarChart2 } from "react-icons/fi";

export default function AnalyticsHeader({ shortCode }) {
  return (
    <div className="mb-8 rounded-2xl border border-blue-500/20 bg-gradient-to-r from-blue-600/10 to-transparent p-6">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/20">
          <FiBarChart2 className="text-blue-400" size={28} />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-white">
            URL Analytics
          </h1>

          <p className="mt-1 text-slate-400">
            http://localhost:8080/{shortCode}
          </p>
        </div>
      </div>
    </div>
  );
}