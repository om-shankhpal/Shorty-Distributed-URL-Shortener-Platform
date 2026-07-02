export default function AuthLayout({ title, subtitle, children, footer }) {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-slate-800 border border-slate-700 rounded-2xl p-8 shadow-xl">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">
            {title}
          </h1>

          <p className="text-slate-400 mt-2">
            {subtitle}
          </p>
        </div>

        {children}

        <div className="mt-6 text-center text-slate-400">
          {footer}
        </div>

      </div>
    </div>
  );
}