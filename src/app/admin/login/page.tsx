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
        router.push("/admin/dashboard");
      }
    });

    // Listen for login/logout events
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        router.push("/admin/dashboard");
      }
    });

    return () => subscription.unsubscribe();
  }, [router]);

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        // ✅ Redirects dynamically based on your domain (from env)
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/admin/login`,
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
