"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function AdminServicePackages() {
  const [packages, setPackages] = useState<any[]>([]);
  const [services, setServices] = useState<any[]>([]);
  const [form, setForm] = useState({
    service_id: "",
    title: "",
    description: "",
    price: "",
    features: "",
    delivery_days: "",
    revision_count: "",
  });

  // Fetch all packages + services
  useEffect(() => {
    fetchPackages();
    fetchServices();
  }, []);

  const fetchPackages = async () => {
    const { data, error } = await supabase
      .from("service_packages")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) console.error("Error fetching packages:", error);
    else setPackages(data || []);
  };

  const fetchServices = async () => {
    const { data, error } = await supabase.from("services").select("id, title");
    if (error) console.error("Error fetching services:", error);
    else setServices(data || []);
  };

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Add package
  const handleAdd = async () => {
    if (!form.title || !form.price) {
      alert("Please fill at least the Title and Price fields.");
      return;
    }

    let featuresData: any = null;
    try {
      featuresData = form.features ? JSON.parse(form.features) : null;
    } catch (err) {
      alert("Invalid JSON format in Features. Please enter a valid JSON array like [\"Feature 1\", \"Feature 2\"]");
      return;
    }

    const { error } = await supabase.from("service_packages").insert([
      {
        service_id: form.service_id || null,
        title: form.title,
        description: form.description,
        price: Number(form.price) || 0,
        features: featuresData,
        delivery_days: Number(form.delivery_days) || 0,
        revision_count: Number(form.revision_count) || 0,
      },
    ]);

    if (error) alert("Error adding package: " + error.message);
    else {
      alert("Package added successfully!");
      setForm({
        service_id: "",
        title: "",
        description: "",
        price: "",
        features: "",
        delivery_days: "",
        revision_count: "",
      });
      fetchPackages();
    }
  };

  // Delete package
  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this package?")) return;
    const { error } = await supabase.from("service_packages").delete().eq("id", id);
    if (error) alert("Error deleting package: " + error.message);
    else fetchPackages();
  };

  return (
    <div className="p-8 text-white">
      <h1 className="text-3xl font-bold mb-6">Manage Service Packages</h1>

      {/* Add Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 bg-gray-900 p-6 rounded-xl">
        <select
          name="service_id"
          value={form.service_id}
          onChange={handleChange}
          className="bg-gray-800 p-3 rounded"
        >
          <option value="">Select Service (optional)</option>
          {services.map((s) => (
            <option key={s.id} value={s.id}>
              {s.title}
            </option>
          ))}
        </select>

        <input
          name="title"
          value={form.title}
          placeholder="Package Title"
          onChange={handleChange}
          className="bg-gray-800 p-3 rounded"
        />

        <textarea
          name="description"
          value={form.description}
          placeholder="Package Description"
          onChange={handleChange}
          className="bg-gray-800 p-3 rounded col-span-2"
        />

        <input
          name="price"
          value={form.price}
          placeholder="Price"
          type="number"
          onChange={handleChange}
          className="bg-gray-800 p-3 rounded"
        />

        <input
          name="delivery_days"
          value={form.delivery_days}
          placeholder="Delivery Days"
          type="number"
          onChange={handleChange}
          className="bg-gray-800 p-3 rounded"
        />

        <input
          name="revision_count"
          value={form.revision_count}
          placeholder="Revision Count"
          type="number"
          onChange={handleChange}
          className="bg-gray-800 p-3 rounded"
        />

        <textarea
          name="features"
          value={form.features}
          placeholder='Features (JSON array: ["Feature 1", "Feature 2"])'
          onChange={handleChange}
          className="bg-gray-800 p-3 rounded col-span-2"
        />

        <button
          onClick={handleAdd}
          className="bg-purple-600 py-2 px-4 rounded hover:bg-purple-700 col-span-2"
        >
          Add Package
        </button>
      </div>

      {/* Packages List */}
      <div className="space-y-4">
        {packages.map((pkg) => (
          <div key={pkg.id} className="bg-gray-800 p-4 rounded-xl">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="font-semibold text-lg text-purple-400">{pkg.title}</h2>
                <p className="text-gray-300">{pkg.description}</p>
                <p className="text-sm text-gray-500 mt-1">
                  Price: ${pkg.price} | Delivery: {pkg.delivery_days} days | Revisions: {pkg.revision_count}
                </p>
                {pkg.features && Array.isArray(pkg.features) && (
                  <ul className="mt-2 list-disc ml-6 text-gray-400 text-sm">
                    {pkg.features.map((f: string, i: number) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                )}
                {pkg.service_id && (
                  <p className="text-xs text-gray-500 mt-2">Linked to Service ID: {pkg.service_id}</p>
                )}
              </div>
              <button
                onClick={() => handleDelete(pkg.id)}
                className="bg-red-600 px-3 py-1 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
