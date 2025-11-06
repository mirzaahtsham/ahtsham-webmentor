"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function AdminTestimonials() {
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [form, setForm] = useState({
    client_name: "",
    platform: "",
    review: "",
    rating: "",
    profile_image: "",
    project_type: "",
  });

  // Fetch testimonials on mount
  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    const { data, error } = await supabase
      .from("testimonials")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) console.error("Error fetching testimonials:", error);
    else setTestimonials(data || []);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleAdd = async () => {
    if (!form.client_name || !form.review) {
      alert("Client name and review are required.");
      return;
    }

    const { error } = await supabase.from("testimonials").insert([
      {
        client_name: form.client_name,
        platform: form.platform,
        review: form.review,
        rating: Number(form.rating) || 0,
        profile_image: form.profile_image,
        project_type: form.project_type,
      },
    ]);

    if (error) alert("Error adding testimonial: " + error.message);
    else {
      alert("Testimonial added successfully!");
      setForm({
        client_name: "",
        platform: "",
        review: "",
        rating: "",
        profile_image: "",
        project_type: "",
      });
      fetchTestimonials();
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this testimonial?")) return;
    const { error } = await supabase.from("testimonials").delete().eq("id", id);
    if (error) alert("Error deleting testimonial: " + error.message);
    else fetchTestimonials();
  };

  return (
    <div className="p-8 text-white">
      <h1 className="text-3xl font-bold mb-6">Manage Testimonials</h1>

      {/* Add Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 bg-gray-900 p-6 rounded-xl">
        <input
          name="client_name"
          value={form.client_name}
          placeholder="Client Name"
          onChange={handleChange}
          className="bg-gray-800 p-3 rounded"
        />
        <input
          name="platform"
          value={form.platform}
          placeholder="Platform (e.g., Upwork, Fiverr, LinkedIn)"
          onChange={handleChange}
          className="bg-gray-800 p-3 rounded"
        />
        <input
          name="rating"
          value={form.rating}
          placeholder="Rating (e.g., 5)"
          type="number"
          min="0"
          max="5"
          onChange={handleChange}
          className="bg-gray-800 p-3 rounded"
        />
        <input
          name="project_type"
          value={form.project_type}
          placeholder="Project Type (e.g., Web Development)"
          onChange={handleChange}
          className="bg-gray-800 p-3 rounded"
        />
        <input
          name="profile_image"
          value={form.profile_image}
          placeholder="Profile Image URL"
          onChange={handleChange}
          className="bg-gray-800 p-3 rounded col-span-2"
        />
        <textarea
          name="review"
          value={form.review}
          placeholder="Client Review"
          onChange={handleChange}
          className="bg-gray-800 p-3 rounded col-span-2"
        />

        <button
          onClick={handleAdd}
          className="bg-purple-600 py-2 px-4 rounded hover:bg-purple-700 col-span-2"
        >
          Add Testimonial
        </button>
      </div>

      {/* Testimonials List */}
      <div className="space-y-4">
        {testimonials.map((t) => (
          <div key={t.id} className="bg-gray-800 p-4 rounded-xl flex justify-between items-start">
            <div className="flex items-start gap-4">
              {t.profile_image && (
                <img
                  src={t.profile_image}
                  alt={t.client_name}
                  className="w-14 h-14 rounded-full object-cover"
                />
              )}
              <div>
                <h2 className="font-semibold text-lg">{t.client_name}</h2>
                <p className="text-sm text-gray-400">{t.platform}</p>
                <p className="text-gray-300 mt-2">{t.review}</p>
                <p className="text-xs text-gray-500 mt-2">
                  ⭐ {t.rating}/5 — {t.project_type}
                </p>
              </div>
            </div>
            <button
              onClick={() => handleDelete(t.id)}
              className="bg-red-600 px-3 py-1 rounded hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
