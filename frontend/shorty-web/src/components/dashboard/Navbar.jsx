import { useNavigate } from "react-router-dom";
import { FiLogOut, FiMenu } from "react-icons/fi";

export default function Navbar({ onMenuToggle }) {
  const navigate  = useNavigate();
  const fullName  = localStorage.getItem("fullName") || "User";
  const initial   = fullName.charAt(0).toUpperCase();

  function handleLogout() {
    localStorage.clear();
    navigate("/login");
  }

  return (
    <header className="fixed top-0 left-0 right-0 h-14 z-50 flex items-center justify-between px-4 sm:px-6 bg-slate-900 border-b border-slate-800">

      <div className="flex items-center gap-3">
        {/* Hamburger — mobile only */}
        <button
          onClick={onMenuToggle}
          className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Toggle menu"
        >
          <FiMenu size={18} />
        </button>

        <span className="font-mono text-lg font-bold text-white tracking-tight select-none">
          <span className="text-blue-400">/</span>shorty
        </span>
      </div>

      <div className="flex items-center gap-3">
        {/* User */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-xs font-bold text-blue-400 select-none">
            {initial}
          </div>
          <span className="hidden sm:block text-sm font-medium text-slate-300 max-w-[160px] truncate">
            {fullName}
          </span>
        </div>

        <div className="h-4 w-px bg-slate-700" />

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-slate-400 hover:text-white border border-slate-700 hover:border-slate-600 hover:bg-slate-800 rounded-lg transition-all"
        >
          <FiLogOut size={14} />
          <span className="hidden sm:inline">Logout</span>
        </button>
      </div>
    </header>
  );
}