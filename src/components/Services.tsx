"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, SlidersHorizontal, Star, Monitor, Smartphone, Palette, Users, Wrench, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  price: number;
  tags: string[];
  categoryIcon: React.ReactNode;
}

export function Services() {
  const [activeCategory, setActiveCategory] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { name: "All Categories", icon: null, color: "yellow" },
    { name: "Web Development", icon: <Monitor className="w-3 h-3" />, color: "blue" },
    { name: "Mobile Development", icon: <Smartphone className="w-3 h-3" />, color: "purple" },
    { name: "UI/UX Design", icon: <Palette className="w-3 h-3" />, color: "pink" },
    { name: "Tech Consulting", icon: <Users className="w-3 h-3" />, color: "orange" },
    { name: "Maintenance & Support", icon: <Wrench className="w-3 h-3" />, color: "green" },
  ];

  const services: Service[] = [
    {
      id: "1",
      title: "Modern React Website Development",
      description: "I will create a modern, responsive website using React and Next.js with all modern features including animations, SEO optimization, and performance...",
      image: "https://images.unsplash.com/photo-1569693799105-4eb645d89aea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBwcm9ncmFtbWluZyUyMGxhcHRvcHxlbnwxfHx8fDE3NjA4NjQ5MzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Web Development",
      rating: 4.8,
      reviews: 54,
      price: 500,
      tags: ["React", "Next.js", "TypeScript", "+2 more"],
      categoryIcon: <Monitor className="w-3 h-3" />
    },
    {
      id: "2",
      title: "Mobile App Development (React Native)",
      description: "Cross-platform mobile application development using React Native for both iOS and Android platforms. Full-featured apps with native performance...",
      image: "https://images.unsplash.com/photo-1730818028738-21c19c7103fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwaG9uZSUyMGFwcCUyMHNjcmVlbnxlbnwxfHx8fDE3NjA4ODQ3ODh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Mobile Development",
      rating: 4.9,
      reviews: 18,
      price: 1500,
      tags: ["React Native", "iOS", "Android", "+2 more"],
      categoryIcon: <Smartphone className="w-3 h-3" />
    },
    {
      id: "3",
      title: "UI/UX Design for Web & Mobile",
      description: "Complete UI/UX design service including wireframes, prototypes, and design systems for web and mobile applications. User-centered design approach...",
      image: "https://images.unsplash.com/photo-1568219557405-376e23e4f7cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB1aSUyMHV4JTIwY29sb3JmdWx8ZW58MXx8fHwxNzYwODg0Nzg4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "UI/UX Design",
      rating: 5.0,
      reviews: 28,
      price: 800,
      tags: ["UI Design", "UX Design", "Figma", "+2 more"],
      categoryIcon: <Palette className="w-3 h-3" />
    },
    {
      id: "4",
      title: "Technical Consulting & Architecture",
      description: "Technology consulting services including system architecture, code reviews, and strategic technical planning. Expert guidance for your project...",
      image: "https://images.unsplash.com/photo-1758519289152-d64650d13c7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRpbmclMjBtZWV0aW5nfGVufDF8fHx8MTc2MDc5ODYzMnww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Tech Consulting",
      rating: 4.9,
      reviews: 31,
      price: 200,
      tags: ["Consulting", "Architecture", "Code Review", "+2 more"],
      categoryIcon: <Users className="w-3 h-3" />
    },
    {
      id: "5",
      title: "Website Maintenance & Support",
      description: "Ongoing website maintenance, updates, and technical support to keep your site running smoothly. Quick response time and reliable service...",
      image: "https://images.unsplash.com/photo-1642132652860-471b4228023e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwbWFpbnRlbmFuY2UlMjBzdXBwb3J0fGVufDF8fHx8MTc2MDc5NDI2OXww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Maintenance & Support",
      rating: 4.7,
      reviews: 42,
      price: 150,
      tags: ["Maintenance", "Support", "Updates", "+2 more"],
      categoryIcon: <Wrench className="w-3 h-3" />
    }
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-900">
      {/* Header */}
      {/* <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm">S</span>
            </div>
            <span className="text-white">shajeel</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">About</a>
            <a href="#" className="text-white">Services</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">AI Chat</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Links</a>
          </nav>

          <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg text-sm transition-colors flex items-center gap-2">
            <span>📅</span>
            Schedule A Call
          </button>
        </div>
      </header> */}

      {/* Hero Section */}
      <section className="py-16 px-4 pt-44">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl text-gray-900 dark:text-gray-100 mb-4 font-medium">
            Professional Services
          </h1>
          <p className="text-gray-900 dark:text-gray-100 text-lg max-w-2xl mx-auto mb-8">
            From concept to deployment, I offer comprehensive digital solutions to help bring your ideas to life. Browse my services and find the perfect fit for your project.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-6">
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

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 flex items-center gap-2 ${activeCategory === category.name
                    ? `${getCategoryColor(category.name)} text-white shadow-lg`
                    : "bg-gray-100/80 text-gray-900 dark:text-gray-900 hover:text-gray-200 hover:bg-gray-800 dark:hover:bg-gray-100 border border-gray-700"
                  }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Results Count */}
          <p className="text-sm text-gray-500">
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
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`${getCategoryColor(service.category)} text-gray-100 px-3 py-1 rounded-lg text-xs flex items-center gap-1.5 backdrop-blur-sm`}>
                      {service.categoryIcon}
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
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.map((tag, index) => (
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
                      <p className="text-gray-800 dark:text-gray-100 text-xl">${service.price}</p>
                    </div>
                    <Link
                      href={`/services/${service.id}`} // use id or a slugified title
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

      {/* Footer */}
      {/* <footer className="border-t border-gray-800 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-gradient-to-br from-purple-600 to-pink-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs">S</span>
                </div>
                <span className="text-white text-sm">Shajeel Afzal</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed mb-2">
                Developer & Trainer - Freelancing, Programming & AI. Top rated pro on Upwork with 10+ years experience.
              </p>
            </div>

            <div>
              <h3 className="text-white text-sm mb-3">Main Platforms</h3>
              <ul className="space-y-2 text-xs text-gray-500">
                <li><a href="#" className="hover:text-white transition-colors">YouTube Channel</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Official Website</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Schedule Meeting</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white text-sm mb-3">Freelance</h3>
              <ul className="space-y-2 text-xs text-gray-500">
                <li><a href="#" className="hover:text-white transition-colors">Upwork</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Fiverr</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white text-sm mb-3">Contact</h3>
              <ul className="space-y-2 text-xs text-gray-500">
                <li><a href="#" className="hover:text-white transition-colors">WhatsApp</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Email</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800">
            <p className="text-xs text-gray-500 text-center">© 2025 Shajeel Afzal. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
