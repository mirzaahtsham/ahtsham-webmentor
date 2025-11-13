"use client";

import { useState } from "react";
import { Check, Star, Clock, RotateCcw } from "lucide-react";
import { ContactFormModal } from "./ContactFormModal";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { HeaderWithMegaMenu } from "./HeaderWithMegaMenu";
import { Footer } from "./Footer";
import Link from "next/link";

export interface Package {
  name: string;
  price: number;
  description: string;
  deliveryTime: string;
  revisions: string;
  features: string[];
}

export interface Service {
  title: string;
  category: string;
  rating: number;
  reviews: number;
  description: string;
  tags: string[];
  images: string[];
  included: { name: string }[];
  notIncluded: { name: string }[];
  packages: Package[];
  faqs: { question: string; answer: string }[];
  testimonials: { name: string; role: string; avatar: string; rating: number; review: string; date: string }[];
}

export function ServiceDetailClient({ service }: { service: Service }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);

  const handleContactClick = (pkg: Package) => {
    setSelectedPackage(pkg);
    setContactModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 pt-45">
        <HeaderWithMegaMenu />
        {/* Back Button */}
        <Link href="/services" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors">
          ← Back to Services
        </Link>

        {/* Main Content */}
        <h1 className="text-3xl md:text-4xl mb-4">{service.title}</h1>
        <p className="text-gray-400 mb-4">{service.description}</p>

        {/* Image Gallery */}
        <div className="space-y-3">
          <ImageWithFallback src={service.images[selectedImage]} alt={service.title} className="w-full rounded-xl" />
          <div className="grid grid-cols-3 gap-3">
            {service.images.map((img, idx) => (
              <button key={idx} onClick={() => setSelectedImage(idx)}>
                <ImageWithFallback src={img} alt={`Thumbnail ${idx}`} className="w-full rounded-lg" />
              </button>
            ))}
          </div>
        </div>

        {/* Packages & Contact */}
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          {service.packages.map((pkg) => (
            <div key={pkg.name} className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-xl mb-2">{pkg.name}</h3>
              <div className="text-3xl mb-2">${pkg.price}</div>
              <p className="text-gray-400 mb-4">{pkg.description}</p>
              <button onClick={() => handleContactClick(pkg)} className="w-full bg-yellow-500 hover:bg-yellow-600 text-black py-3 rounded-lg transition-colors">
                Choose {pkg.name}
              </button>
            </div>
          ))}
        </div>
        <Footer />

      </div>

      <ContactFormModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        selectedPackage={selectedPackage?.name}
      />
    </div>
  );
}
