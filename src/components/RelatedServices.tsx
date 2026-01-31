// components/RelatedServices.tsx
"use client";

import Link from "next/link";
import { Star, ExternalLink, Monitor, Wrench, Smartphone, Palette, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import type { Service } from "@/data/services";

interface RelatedServicesProps {
  currentServiceId: string;
  services: Service[];
  maxServices?: number;
}

export function RelatedServices({ 
  currentServiceId, 
  services, 
  maxServices = 3 
}: RelatedServicesProps) {
  // Filter out current service and get related ones
  const relatedServices = services
    .filter(service => service.id !== currentServiceId)
    .slice(0, maxServices);

  const getCategoryColor = (categoryName: string) => {
    switch (categoryName) {
      case "Web Development": return "bg-blue-600";
      case "Maintenance & Support": return "bg-green-600";
      case "Integrations": return "bg-purple-600";
      case "UI/UX Design": return "bg-pink-600";
      case "Tech Consulting": return "bg-orange-600";
      default: return "bg-blue-600";
    }
  };

  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName) {
      case "Web Development": return <Monitor className="w-3 h-3" />;
      case "Maintenance & Support": return <Wrench className="w-3 h-3" />;
      case "Integrations": return <Smartphone className="w-3 h-3" />;
      case "UI/UX Design": return <Palette className="w-3 h-3" />;
      case "Tech Consulting": return <Users className="w-3 h-3" />;
      default: return <Monitor className="w-3 h-3" />;
    }
  };

  if (relatedServices.length === 0) {
    return null;
  }

  return (
    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
      <h2 className="text-2xl mb-6 font-bold">Related Services</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {relatedServices.map((service) => (
          <Link 
            key={service.id} 
            href={`/services/${service.slug}`}
            className="group"
          >
            <div className="bg-gray-300/30 dark:bg-gray-900 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-xl hover:shadow-purple-900/20">
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <ImageWithFallback
                  src={service.images[0]}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className={`${getCategoryColor(service.category)} text-gray-100 px-2 py-1 rounded-lg text-xs flex items-center gap-1.5 backdrop-blur-sm`}>
                    {getCategoryIcon(service.category)}
                    {service.category}
                  </span>
                </div>
                <div className="absolute top-3 right-3 bg-gray-100/70 dark:bg-gray-900/70 backdrop-blur-sm text-gray-900 dark:text-gray-100 px-2 py-1 rounded-lg text-xs flex items-center gap-1">
                  <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                  {service.rating}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-gray-900 dark:text-gray-100 font-semibold text-sm mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors line-clamp-2">
                  {service.title}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                  {service.shortDescription}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Starting at</p>
                    <p className="text-gray-800 dark:text-gray-100 font-bold">${service.packages[0].price}</p>
                  </div>
                  <div className="flex items-center gap-1 text-purple-600 dark:text-purple-400 text-xs font-medium">
                    View Details
                    <ExternalLink className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}