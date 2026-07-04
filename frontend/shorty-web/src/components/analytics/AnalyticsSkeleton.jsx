export default function AnalyticsSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="h-32 rounded-2xl bg-slate-900" />

      <div className="grid gap-5 md:grid-cols-3">
        <div className="h-32 rounded-2xl bg-slate-900" />
        <div className="h-32 rounded-2xl bg-slate-900" />
        <div className="h-32 rounded-2xl bg-slate-900" />
      </div>
    </div>
  );
}