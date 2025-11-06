"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function AdminFAQs() {
  const [faqs, setFaqs] = useState<any[]>([]);
  const [services, setServices] = useState<any[]>([]);
  const [form, setForm] = useState({
    service_id: "",
    category: "",
    question: "",
    answer: "",
  });

  // Fetch data
  useEffect(() => {
    fetchFaqs();
    fetchServices();
  }, []);

  const fetchFaqs = async () => {
    const { data, error } = await supabase.from("faqs").select("*").order("category", { ascending: true });
    if (error) console.error("Error fetching FAQs:", error);
    else setFaqs(data || []);
  };

  const fetchServices = async () => {
    const { data, error } = await supabase.from("services").select("id, title");
    if (error) console.error("Error fetching services:", error);
    else setServices(data || []);
  };

  // Handle input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Add FAQ
  const handleAdd = async () => {
    if (!form.category || !form.question || !form.answer) {
      alert("Please fill all required fields (Category, Question, Answer).");
      return;
    }

    const { error } = await supabase.from("faqs").insert([
      {
        service_id: form.service_id || null,
        category: form.category,
        question: form.question,
        answer: form.answer,
      },
    ]);

    if (error) alert("Error adding FAQ: " + error.message);
    else {
      alert("FAQ added successfully!");
      setForm({ service_id: "", category: "", question: "", answer: "" });
      fetchFaqs();
    }
  };

  // Delete FAQ
  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this FAQ?")) return;
    const { error } = await supabase.from("faqs").delete().eq("id", id);
    if (error) alert("Error deleting FAQ: " + error.message);
    else fetchFaqs();
  };

  return (
    <div className="p-8 text-white">
      <h1 className="text-3xl font-bold mb-6">Manage FAQs</h1>

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
          name="category"
          value={form.category}
          placeholder="Category (e.g., Payments, Support)"
          onChange={handleChange}
          className="bg-gray-800 p-3 rounded"
        />

        <input
          name="question"
          value={form.question}
          placeholder="Question"
          onChange={handleChange}
          className="bg-gray-800 p-3 rounded col-span-2"
        />

        <textarea
          name="answer"
          value={form.answer}
          placeholder="Answer"
          onChange={handleChange}
          className="bg-gray-800 p-3 rounded col-span-2"
        />

        <button
          onClick={handleAdd}
          className="bg-purple-600 py-2 px-4 rounded hover:bg-purple-700 col-span-2"
        >
          Add FAQ
        </button>
      </div>

      {/* List FAQs */}
      <div className="space-y-4">
        {faqs.map((faq) => (
          <div key={faq.id} className="bg-gray-800 p-4 rounded-xl">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="font-semibold text-lg">{faq.category}</h2>
                <p className="text-purple-400 text-sm">
                  {faq.question}
                </p>
                <p className="text-gray-400 text-sm mt-1">{faq.answer}</p>
                {faq.service_id && (
                  <p className="text-xs text-gray-500 mt-1">
                    Linked to Service ID: {faq.service_id}
                  </p>
                )}
              </div>
              <button
                onClick={() => handleDelete(faq.id)}
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
