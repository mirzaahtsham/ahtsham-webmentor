"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function AdminExperiences() {
  const [experiences, setExperiences] = useState<any[]>([]);
  const [form, setForm] = useState({
    title: "",
    company: "",
    description: "",
    start_year: "",
    end_year: "",
    logo: "",
  });

  // Fetch all experiences
  useEffect(() => {
    fetchExperiences();
  }, []);

  const fetchExperiences = async () => {
    const { data, error } = await supabase
      .from("experiences")
      .select("*")
      .order("start_year", { ascending: false });

    if (error) console.error("Error fetching experiences:", error);
    else setExperiences(data || []);
  };

  // Handle input fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Add experience
  const handleAdd = async () => {
    if (!form.title || !form.company) {
      alert("Please fill title and company fields.");
      return;
    }

    const { error } = await supabase.from("experiences").insert([{
      title: form.title,
      company: form.company,
      description: form.description,
      start_year: form.start_year ? parseInt(form.start_year) : null,
      end_year: form.end_year ? parseInt(form.end_year) : null,
      logo: form.logo
    }]);

    if (error) alert("Error adding experience: " + error.message);
    else {
      alert("Experience added successfully!");
      setForm({
        title: "",
        company: "",
        description: "",
        start_year: "",
        end_year: "",
        logo: "",
      });
      fetchExperiences();
    }
  };

  // Delete experience
  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this experience?")) return;
    const { error } = await supabase.from("experiences").delete().eq("id", id);
    if (error) alert("Error deleting experience: " + error.message);
    else fetchExperiences();
  };

  return (
    <div className="p-8 text-white">
      <h1 className="text-3xl font-bold mb-6">Manage Experiences</h1>

      {/* Add Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 bg-gray-900 p-6 rounded-xl">
        <input name="title" value={form.title} placeholder="Title" onChange={handleChange} className="bg-gray-800 p-3 rounded" />
        <input name="company" value={form.company} placeholder="Company" onChange={handleChange} className="bg-gray-800 p-3 rounded" />
        <input name="start_year" value={form.start_year} type="number" placeholder="Start Year" onChange={handleChange} className="bg-gray-800 p-3 rounded" />
        <input name="end_year" value={form.end_year} type="number" placeholder="End Year" onChange={handleChange} className="bg-gray-800 p-3 rounded" />
        <input name="logo" value={form.logo} placeholder="Logo URL" onChange={handleChange} className="bg-gray-800 p-3 rounded" />
        <textarea name="description" value={form.description} placeholder="Description" onChange={handleChange} className="bg-gray-800 p-3 rounded col-span-2" />
        <button onClick={handleAdd} className="bg-purple-600 py-2 px-4 rounded hover:bg-purple-700 col-span-2">
          Add Experience
        </button>
      </div>

      {/* List */}
      <div className="space-y-4">
        {experiences.map((exp) => (
          <div key={exp.id} className="bg-gray-800 p-4 rounded-xl flex justify-between items-center">
            <div className="flex items-center gap-4">
              {exp.logo && <img src={exp.logo} alt="logo" className="w-12 h-12 rounded object-cover" />}
              <div>
                <h2 className="font-semibold text-lg">{exp.title}</h2>
                <p className="text-gray-400 text-sm">{exp.company}</p>
                <p className="text-xs text-gray-500">
                  {exp.start_year} - {exp.end_year || "Present"}
                </p>
              </div>
            </div>
            <button
              onClick={() => handleDelete(exp.id)}
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
