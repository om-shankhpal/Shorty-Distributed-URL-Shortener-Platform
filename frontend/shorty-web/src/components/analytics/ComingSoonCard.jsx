import {
  FiGlobe,
  FiMonitor,
  FiPieChart,
  FiClock,
  FiTrendingUp,
  FiArrowRight,
} from "react-icons/fi";

const FEATURES = [
  "Country Analytics",
  "Browser Analytics",
  "Device Analytics",
  "Daily Click Graph",
  "Recent Click History",
  "Traffic Sources",
];

export default function ComingSoonCard() {
  return (
    <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
          <FiTrendingUp className="text-blue-400" size={22} />
        </div>

        <div>
          <h2 className="text-xl font-bold text-white">
            More Analytics Coming Soon
          </h2>

          <p className="text-slate-400 text-sm">
            These insights will become available as your analytics service grows.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {FEATURES.map((feature, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950 px-4 py-3"
          >
            <div className="flex items-center gap-3">
              {index === 0 && <FiGlobe />}
              {index === 1 && <FiMonitor />}
              {index === 2 && <FiPieChart />}
              {index === 3 && <FiTrendingUp />}
              {index === 4 && <FiClock />}
              {index === 5 && <FiArrowRight />}

              <span>{feature}</span>
            </div>

            <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-400">
              Soon
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}