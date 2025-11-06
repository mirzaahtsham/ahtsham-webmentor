"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    // Check for an existing session on mount
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        router.push("/admin/services");
      }
    });

    // Listen for login/logout events
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        router.push("/admin/services");
      }
    });

    return () => subscription.unsubscribe();
  }, [router]);

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${window.location.origin}/admin/login`, // callback URL
      },
    });
    if (error) alert(error.message);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <button
        onClick={handleLogin}
        className="bg-purple-600 px-6 py-3 rounded-lg hover:bg-purple-700"
      >
        Login with GitHub
      </button>
    </div>
  );
}
