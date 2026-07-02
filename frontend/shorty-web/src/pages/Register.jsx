import { Link } from "react-router-dom";
import AuthLayout from "../components/layout/AuthLayout";

export default function Register() {
  return (
    <AuthLayout
      title="Create Account"
      subtitle="Start shortening and managing your URLs."
      footer={
        <>
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-400 hover:text-blue-300"
          >
            Login
          </Link>
        </>
      }
    >
      <form className="space-y-5">
        <div>
          <label className="block text-sm text-slate-300 mb-2">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm text-slate-300 mb-2">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm text-slate-300 mb-2">
            Password
          </label>

          <input
            type="password"
            placeholder="Create a password"
            className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white outline-none focus:border-blue-500"
          />
        </div>

        <button
          className="w-full bg-blue-600 hover:bg-blue-500 transition-colors text-white font-semibold py-3 rounded-lg"
        >
          Create Account
        </button>
      </form>
    </AuthLayout>
  );
}