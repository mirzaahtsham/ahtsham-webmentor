"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, SlidersHorizontal, Star, Monitor, Smartphone, Palette, Users, Wrench, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { services } from "@/data/services"; // Import from central data file

export function Services() {
  const [activeCategory, setActiveCategory] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { name: "All Categories", icon: null, color: "yellow" },
    { name: "Web Development", icon: <Monitor className="w-3 h-3" />, color: "blue" },
    { name: "Maintenance & Support", icon: <Wrench className="w-3 h-3" />, color: "green" },
    { name: "Integrations", icon: <Smartphone className="w-3 h-3" />, color: "purple" },
    { name: "UI/UX Design", icon: <Palette className="w-3 h-3" />, color: "pink" },
    { name: "Tech Consulting", icon: <Users className="w-3 h-3" />, color: "orange" },
  ];

  const filteredServices = services.filter(service => {
    const matchesCategory = activeCategory === "All Categories" || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryColor = (categoryName: string) => {
    const category = categories.find(cat => cat.name === categoryName);
    switch (category?.color) {
      case "blue": return "bg-blue-600";
      case "purple": return "bg-purple-600";
      case "pink": return "bg-pink-600";
      case "orange": return "bg-orange-600";
      case "green": return "bg-green-600";
      case "yellow": return "bg-yellow-600";
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <section className="py-16 px-4 pt-44">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl text-gray-900 dark:text-gray-100 mb-4 font-medium">
            Professional Services
          </h1>
          <p className="text-gray-900 dark:text-gray-100 text-lg max-w-2xl mx-auto mb-8">
            From maintenance to custom development, I offer comprehensive digital solutions to help your business thrive online.
          </p>

          {/* Search Bar */}
          <div className="max-w-7xl mx-auto mb-6">
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-900 dark:text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-gray-300/50 border border-gray-700 rounded-lg pl-12 pr-4 py-3 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
              <button className="bg-gray-100/80 border border-gray-700 rounded-lg px-4 py-3 text-gray-900 dark:text-gray-900 hover:text-gray-200 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors flex items-center gap-2">
                <SlidersHorizontal className="w-5 h-5" />
                <span className="hidden sm:inline">Filters</span>
              </button>
            </div>
          </div>

          {/* Category Tabs Slider */}
        <div className="mb-10 md:mb-16 px-2">
          <div 
            className="tabs-slider flex gap-2 overflow-x-auto scrollbar-hide pb-2"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category.name
                    ? `${getCategoryColor(category.name)} text-white shadow-lg`
                    : "bg-gray-100/80 text-gray-900 dark:text-gray-900 hover:text-gray-200 hover:bg-gray-800 dark:hover:bg-gray-100 border border-gray-700"
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
          </div>

          {/* Results Count */}
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} found
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-gray-300/30 dark:bg-gray-900 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-xl hover:shadow-purple-900/20 group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={service.images[0]}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`${getCategoryColor(service.category)} text-gray-100 px-3 py-1 rounded-lg text-xs flex items-center gap-1.5 backdrop-blur-sm`}>
                      {getCategoryIcon(service.category)}
                      {service.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 bg-gray-100/70 dark:bg-gray-900/70 backdrop-blur-sm text-gray-900 dark:text-gray-100 px-2 py-1 rounded-lg text-xs flex items-center gap-1">
                    <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                    {service.rating} ({service.reviews})
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-gray-900 dark:text-gray-100 font-medium text-lg mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                    {service.shortDescription}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 4).map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-300/50 dark:bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs border border-gray-600 hover:bg-gray-800 dark:hover:bg-gray-900 hover:text-gray-50 dark:hover:text-gray-100 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-200 mb-1">Starting at</p>
                      <p className="text-gray-800 dark:text-gray-100 text-xl">${service.packages[0].price}</p>
                    </div>
                    <Link
                      href={`/services/${service.slug}`}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-lg text-sm transition-all flex items-center gap-2"
                    >
                      View Details
                      <ExternalLink className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <Search className="w-16 h-16 mx-auto mb-4 text-gray-600" />
              <p className="text-gray-400">No services found matching your criteria</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}