import { Link } from "react-router-dom";
import { FiLink2 } from "react-icons/fi";

export default function EmptyState() {
  return (
    <div className="rounded-2xl border border-dashed border-slate-700 py-12 sm:py-20 text-center">
      <div className="flex justify-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-500/10">
          <FiLink2 size={36} className="text-blue-400" />
        </div>
      </div>

      <h2 className="mt-6 text-xl sm:text-2xl font-bold">
        No URLs Yet
      </h2>

      <p className="mx-auto mt-2 max-w-sm px-4 text-sm sm:text-base text-slate-400">
        Create your first short URL to start managing your links.
      </p>

      <Link
        to="/dashboard/create"
        className="mt-8 inline-flex rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500"
      >
        Create URL
      </Link>
    </div>
  );
}