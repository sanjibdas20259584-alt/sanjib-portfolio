import React, { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { AdminLogin } from "../components/admin/AdminLogin";
import { AdminDashboard } from "../components/admin/AdminDashboard";

export const AdminPage = () => {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-muted font-sans text-sm">Checking authentication...</div>
      </div>
    );
  }

  if (!session) {
    return <AdminLogin onLoginSuccess={() => {}} />;
  }

  return <AdminDashboard onLogout={() => setSession(null)} />;
};
