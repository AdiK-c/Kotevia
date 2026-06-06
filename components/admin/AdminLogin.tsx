"use client";
import { useState } from "react";
import { login } from "@/app/admin/actions";
import { FiLock } from "react-icons/fi";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await login(password);
      if (res.success) {
        // Refresh the page to load the admin dashboard
        window.location.reload();
      } else {
        setError(res.error || "Login failed");
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col justify-center items-center p-6 relative overflow-hidden">
      {/* Aesthetic Background Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-[100px] opacity-60 translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-200 rounded-full blur-[100px] opacity-60 -translate-x-1/3 translate-y-1/3"></div>

      <div className="w-full max-w-md bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-white p-10 relative z-10">
        <div className="w-16 h-16 bg-blue-50/50 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-sm border border-blue-100/50">
          <FiLock className="text-blue-600 text-2xl" />
        </div>
        
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-2 tracking-tight">Admin Portal</h2>
        <p className="text-center text-gray-500 mb-8 font-medium">Enter your password to continue</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-4 rounded-xl bg-gray-50/50 border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none font-medium"
              placeholder="••••••••"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm font-semibold ml-1">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white font-bold py-4 px-4 rounded-xl shadow-lg shadow-black/10 hover:shadow-xl hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:hover:translate-y-0"
          >
            {loading ? "Authenticating..." : "Secure Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
