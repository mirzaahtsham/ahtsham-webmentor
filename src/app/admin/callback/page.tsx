"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const handleAuth = async () => {
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        console.error("Error fetching session:", error.message);
        router.replace("/admin/login");
        return;
      }

      if (data.session) {
        router.replace("/admin/dashboard");
      } else {
        // Wait a bit because Supabase might still be parsing hash tokens
        setTimeout(async () => {
          const { data: retry } = await supabase.auth.getSession();
          if (retry.session) router.replace("/admin/dashboard");
          else router.replace("/admin/login");
        }, 1000);
      }
    };

    handleAuth();
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen text-white bg-black">
      <p>Logging you in...</p>
    </div>
  );
}
