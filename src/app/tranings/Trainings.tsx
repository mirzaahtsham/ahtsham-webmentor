import { Star } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const trainings = [
  {
    id: 1,
    slug: "freelancing-mastery",
    title: "Freelancing Mastery",
    description: "Master the art of freelancing on platforms like Upwork and Fiverr. Learn how to write winning proposals, set competitive rates, and build long-term client relationships.",
    category: "Freelancing",
    level: "Beginner",
    rating: 4.8,
    price: 49.99,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    slug: "upwork-success-strategy",
    title: "Upwork Success Strategy",
    description: "A deep dive into Upwork. Learn how to get your first job, maintain a 100% JSS, and scale your agency on the world's largest freelancing platform.",
    category: "Upwork",
    level: "Intermediate",
    rating: 4.9,
    price: 59.99,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    slug: "vibe-coding-developers",
    title: "Vibe Coding for Developers",
    description: "Learn the new wave of 'Vibe Coding'. Focus on flow state, intuitive problem solving, and leveraging AI tools to write better code faster.",
    category: "Coding",
    level: "Advanced",
    rating: 4.7,
    price: 79.99,
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    slug: "fiverr-gig-optimization",
    title: "Fiverr Gig Optimization",
    description: "Crack the Fiverr algorithm. Learn how to create high-converting gigs, rank on the first page, and build a sustainable Fiverr business.",
    category: "Fiverr",
    level: "Beginner",
    rating: 4.6,
    price: 39.99,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
  },
  {
    id: 5,
    slug: "full-stack-web-development",
    title: "Full Stack Web Development",
    description: "Become a full stack developer with React, Next.js, and Node.js. Build real-world projects and launch your career in web development.",
    category: "Development",
    level: "Intermediate",
    rating: 4.8,
    price: 99.99,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
  },
  {
    id: 6,
    slug: "digital-marketing-essentials",
    title: "Digital Marketing Essentials",
    description: "Understand the core pillars of digital marketing: SEO, SEM, Social Media, and Content Marketing. Grow your business or career with proven strategies.",
    category: "Marketing",
    level: "Beginner",
    rating: 4.5,
    price: 44.99,
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&h=600&fit=crop",
  },
];

const categories = ["All", "Freelancing", "Upwork", "Coding", "Fiverr", "Development", "Marketing"];
const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];

export default function TrainingsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");

  const filteredTrainings = trainings.filter((training) => {
    const matchesCategory = selectedCategory === "All" || training.category === selectedCategory;
    const matchesLevel = selectedLevel === "All Levels" || training.level === selectedLevel;
    return matchesCategory && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6">
            Professional <span className="text-yellow-400">Trainings</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Level up your skills with our expertly curated courses. From freelancing
            strategies to advanced coding techniques, we have something for everyone.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    selectedCategory === category
                      ? "bg-yellow-400 text-black"
                      : "bg-gray-900 text-gray-400 hover:bg-gray-800"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Level Filter */}
            <div className="flex gap-3">
              {levels.map((level) => (
                <button
                  key={level}
                  onClick={() => setSelectedLevel(level)}
                  className={`px-4 py-2 rounded-lg transition-all text-sm ${
                    selectedLevel === level
                      ? "bg-yellow-400 text-black"
                      : "bg-gray-900 text-gray-400 hover:bg-gray-800"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trainings Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTrainings.map((training) => (
              <div
                key={training.id}
                className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-yellow-400 transition-all duration-300 group"
              >
                {/* Course Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={training.image}
                    alt={training.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-black/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                      {training.category}
                    </span>
                  </div>
                </div>

                {/* Course Info */}
                <div className="p-6">
                  {/* Level and Rating */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-yellow-400 text-sm">● {training.level}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">{training.rating}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl mb-3">{training.title}</h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                    {training.description}
                  </p>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">${training.price}</span>
                    <Link
                      href={`/training/${training.slug}`}
                      className="text-yellow-400 hover:text-yellow-300 transition-colors flex items-center gap-2 group/link"
                    >
                      View Details
                      <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
