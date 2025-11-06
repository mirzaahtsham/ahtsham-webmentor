import Link from "next/link";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Our Services</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="bg-white/5 border border-gray-700 rounded-2xl p-6 hover:border-purple-500/60 transition-all"
          >
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-400 text-sm mb-4">{service.description}</p>
            <div className="text-sm text-gray-500">{service.category}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
