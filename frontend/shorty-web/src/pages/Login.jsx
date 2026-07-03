import { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../components/layout/AuthLayout";
import { login } from "../services/authService";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await login({
        email,
        password,
      });

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Login to continue managing your short URLs."
      footer={
        <>
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-400 hover:text-blue-300">
            Register
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm text-slate-300 mb-2">Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm text-slate-300 mb-2">Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white outline-none focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-500 transition-colors text-white font-semibold py-3 rounded-lg"
        >
          Login
        </button>
      </form>
    </AuthLayout>
  );
}
