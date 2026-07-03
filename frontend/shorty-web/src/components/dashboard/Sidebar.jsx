import { NavLink } from "react-router-dom";
import {
  FiGrid, FiPlus, FiLink2, FiBarChart2, FiUser, FiX,
} from "react-icons/fi";

const NAV_ITEMS = [
  { label: "Dashboard",  icon: FiGrid,     to: "/dashboard"           },
  { label: "Create URL", icon: FiPlus,     to: "/dashboard/create"    },
  { label: "My URLs",    icon: FiLink2,    to: "/dashboard/urls"      },
  { label: "Analytics",  icon: FiBarChart2,to: "/dashboard/analytics" },
  { label: "Profile",    icon: FiUser,     to: "/dashboard/profile"   },
];

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar panel */}
      <aside
        className={`
          fixed top-14 left-0 bottom-0 w-56 z-50 flex flex-col
          bg-slate-900 border-r border-slate-800
          transition-transform duration-200 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        {/* Mobile header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 lg:hidden">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Navigation
          </span>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <FiX size={16} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 flex flex-col gap-0.5 px-3 py-3 overflow-y-auto">
          {NAV_ITEMS.map(({ label, icon: Icon, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/dashboard"}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-slate-800 text-white"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon
                    size={16}
                    className={isActive ? "text-blue-400" : ""}
                  />
                  {label}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Footer tag */}
        <div className="px-4 py-4 border-t border-slate-800">
          <span className="text-xs font-mono text-slate-700">v1.0.0 · Shorty</span>
        </div>
      </aside>
    </>
  );
}