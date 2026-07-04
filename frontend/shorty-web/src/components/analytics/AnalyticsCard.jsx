export default function AnalyticsCard({
  title,
  value,
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <p className="text-sm text-slate-400">
        {title}
      </p>

      <h2 className="mt-3 text-2xl font-bold text-white">
        {value}
      </h2>
    </div>
  );
}