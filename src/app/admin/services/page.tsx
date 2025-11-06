"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function AdminServices() {
    const [services, setServices] = useState<any[]>([]);
    const [form, setForm] = useState({
        title: "",
        slug: "",
        category: "",
        description: "",
        thumbnail: "",
        base_price: 0,
        compare_price: 0,
        discount_pct: 0,
        rating: 0,
        reviews: 0,
        is_featured: false,
    });

    
    const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function checkUser() {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        router.replace("/admin/login");
      } else {
        setLoading(false);
      }
    }
    checkUser();
  }, [router]);

  if (loading) return <div className="text-white p-8">Checking session...</div>;

    // Fetch Services
    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        const { data, error } = await supabase
            .from("services")
            .select("*")
            .order("created_at", { ascending: false });
        if (!error) setServices(data || []);
    };

    // ✅ Fixed TypeScript-safe handler
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, type, value } = e.target;

        let fieldValue: string | number | boolean = value;

        if (type === "checkbox" && e.target instanceof HTMLInputElement) {
            fieldValue = e.target.checked;
        } else if (type === "number") {
            fieldValue = Number(value);
        }

        setForm((prev) => ({
            ...prev,
            [name]: fieldValue,
        }));
    };

    // Add Service
    const handleAdd = async () => {
        const { error } = await supabase.from("services").insert([form]);
        if (error) alert(error.message);
        else {
            alert("Service added!");
            fetchServices();
        }
    };

    // Delete Service
    const handleDelete = async (id: string) => {
        const { error } = await supabase.from("services").delete().eq("id", id);
        if (!error) fetchServices();
    };

    // redirect if not logged in
    // const router = useRouter();
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     async function checkAuth() {
    //         const { data } = await supabase.auth.getSession();
    //         if (!data.session) {
    //             router.push("/admin/login"); // redirect if not logged in
    //         } else {
    //             setLoading(false);
    //         }
    //     }
    //     checkAuth();
    // }, [router]);

    // if (loading) return <p>Loading...</p>;
    return (
        <div className="p-8 text-white">
            <h1 className="text-3xl font-bold mb-6">Manage Services</h1>

            {/* Add New */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 bg-gray-900 p-6 rounded-xl">
                <input name="title" placeholder="Title" onChange={handleChange} className="bg-gray-800 p-3 rounded" />
                <input name="slug" placeholder="Slug" onChange={handleChange} className="bg-gray-800 p-3 rounded" />
                <input name="category" placeholder="Category" onChange={handleChange} className="bg-gray-800 p-3 rounded" />
                <input name="thumbnail" placeholder="Thumbnail URL" onChange={handleChange} className="bg-gray-800 p-3 rounded" />
                <input name="base_price" type="number" placeholder="Base Price" onChange={handleChange} className="bg-gray-800 p-3 rounded" />
                <input name="compare_price" type="number" placeholder="Compare Price" onChange={handleChange} className="bg-gray-800 p-3 rounded" />
                <textarea name="description" placeholder="Description" onChange={handleChange} className="bg-gray-800 p-3 rounded col-span-2" />
                <label className="flex items-center space-x-2">
                    <input type="checkbox" name="is_featured" onChange={handleChange} /> <span>Featured</span>
                </label>
                <button onClick={handleAdd} className="bg-purple-600 py-2 px-4 rounded hover:bg-purple-700">Add Service</button>
            </div>

            {/* List */}
            <div className="space-y-4">
                {services.map((s) => (
                    <div key={s.id} className="bg-gray-800 p-4 rounded-xl flex justify-between items-center">
                        <div>
                            <h2 className="font-semibold text-lg">{s.title}</h2>
                            <p className="text-sm text-gray-400">{s.category}</p>
                        </div>
                        <button onClick={() => handleDelete(s.id)} className="bg-red-600 px-3 py-1 rounded">Delete</button>
                    </div>
                ))}
            </div>
            <button
                onClick={async () => {
                    await supabase.auth.signOut();
                    router.push("/admin/login");
                }}
                className="bg-red-600 px-3 py-2 rounded"
            >
                Logout
            </button>

        </div>
    );
}
