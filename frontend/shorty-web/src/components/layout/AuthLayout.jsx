import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

export default function AuthLayout({
  title,
  subtitle,
  children,
  footer,
}) {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-2xl border border-slate-700 bg-slate-800 p-8 shadow-xl">

        {/* Back Button */}

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate-400 transition hover:text-white"
        >
          <FiArrowLeft size={18} />
          Back
        </Link>

        {/* Heading */}

        <div className="mt-6 mb-8 text-center">
          <h1 className="text-3xl font-bold text-white">
            {title}
          </h1>

          <p className="mt-2 text-slate-400">
            {subtitle}
          </p>
        </div>

        {/* Form */}

        {children}

        {/* Footer */}

        <div className="mt-6 text-center text-slate-400">
          {footer}
        </div>

      </div>
    </div>
  );
}