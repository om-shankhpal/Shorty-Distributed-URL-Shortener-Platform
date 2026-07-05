export default function UrlSkeleton() {
  return (
    <div className="animate-pulse rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="h-5 w-48 rounded bg-slate-700"></div>

      <div className="mt-4 h-4 w-full rounded bg-slate-800"></div>

      <div className="mt-2 h-4 w-3/4 rounded bg-slate-800"></div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="h-10 w-full rounded-lg bg-slate-700"></div>

        <div className="h-10 w-full rounded-lg bg-slate-700"></div>

        <div className="h-10 w-full rounded-lg bg-slate-700"></div>

        <div className="h-10 w-full rounded-lg bg-slate-700"></div>
      </div>
    </div>
  );
}