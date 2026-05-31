import React, { useState } from "react";
import { supabase } from "../../lib/supabase";

interface AdminLoginProps {
  onLoginSuccess: () => void;
}

export const AdminLogin: React.FC<AdminLoginProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (authError) {
      setError(authError.message);
    } else {
      onLoginSuccess();
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <h1 className="font-serif text-3xl text-foreground mb-2">Sanjib Admin</h1>
          <p className="text-muted text-sm font-sans">Sign in to access your dashboard</p>
        </div>

        <form onSubmit={handleLogin} className="glass-card rounded-2xl p-8 space-y-5">
          {error && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3 text-red-400 text-sm font-sans">
              {error}
            </div>
          )}

          <div className="space-y-2">
            <label className="font-cabin text-xs uppercase tracking-wider text-muted font-bold block">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@example.com"
              className="w-full bg-[rgba(30,22,54,0.4)] border border-[rgba(164,132,215,0.2)] rounded-lg px-4 py-3 text-foreground placeholder-muted/50 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
            />
          </div>

          <div className="space-y-2">
            <label className="font-cabin text-xs uppercase tracking-wider text-muted font-bold block">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-[rgba(30,22,54,0.4)] border border-[rgba(164,132,215,0.2)] rounded-lg px-4 py-3 text-foreground placeholder-muted/50 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full py-3 text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="text-center text-muted/50 text-xs mt-6 font-sans">
          Admin access only. Not a public page.
        </p>
      </div>
    </div>
  );
};
