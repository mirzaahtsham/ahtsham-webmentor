"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function AdminDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  // ✅ Check if user is authenticated
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        router.push("/admin/login");
      } else {
        setLoading(false);
      }
    });
  }, [router]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-black text-white">
        Checking authentication...
      </div>
    );
  }

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-10">Admin Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        <button
          onClick={() => router.push("/admin/services")}
          className="bg-purple-600 hover:bg-purple-700 py-6 rounded-2xl text-lg font-semibold shadow-lg"
        >
          ⚙️ Manage Services
        </button>

        <button
          onClick={() => router.push("/admin/experiences")}
          className="bg-blue-600 hover:bg-blue-700 py-6 rounded-2xl text-lg font-semibold shadow-lg"
        >
          🧠 Manage Experiences
        </button>

        <button
          onClick={() => router.push("/admin/testimonials")}
          className="bg-green-600 hover:bg-green-700 py-6 rounded-2xl text-lg font-semibold shadow-lg"
        >
          💬 Manage Testimonials
        </button>

        <button
          onClick={() => router.push("/admin/packages")}
          className="bg-yellow-600 hover:bg-yellow-700 py-6 rounded-2xl text-lg font-semibold shadow-lg"
        >
          💼 Manage Packages
        </button>
      </div>

      <button
        onClick={handleLogout}
        className="mt-10 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg"
      >
        Logout
      </button>
    </div>
  );
}
