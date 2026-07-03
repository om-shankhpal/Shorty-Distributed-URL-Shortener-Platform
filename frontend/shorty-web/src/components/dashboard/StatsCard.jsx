export default function StatsCard({ icon: Icon, label, value, trend, trendUp }) {
  return (
    <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5 hover:border-slate-600/60 transition-colors">
      <div className="flex items-center justify-between mb-4">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
          {label}
        </p>
        <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
          <Icon size={14} className="text-blue-400" />
        </div>
      </div>

      <p className="text-2xl font-bold text-white mb-1">{value}</p>

      {trend && (
        <p className={`text-xs font-medium ${trendUp ? "text-emerald-400" : "text-slate-500"}`}>
          {trend}
        </p>
      )}
    </div>
  );
}