"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Pause, Play } from "lucide-react";

// Project/Experience data structure matching your WorkExperience component
interface Project {
  id: string;
  company: string;
  logo: string;
  position: string;
  description: string;
  skills: string[];
  category: string[];
  screenshots?: Array<{
    url: string;
    caption: string;
  }>;
  website?: string;
  startDate?: string;
  endDate?: string;
  duration: string;
}

export default function PortfolioHeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);

  // Projects data from your WorkExperience component
  const projectsData: Project[] = [
    {
      id: "1",
      company: "Medmax Technologies LLC",
      logo: "/company-icon/Medmax-Icon.webp",
      position: "Sr. Web Developer & Web Designer",
      startDate: "2023-01-01",
      duration: "Lahore Pakistan",
      description:
        "Led end-to-end website design, development, and optimization for a medical billing company, focused on lead generation, brand authority, and long-term scalability.",
      skills: [
        "WordPress Development",
        "Elementor Pro Customization",
        "Website Performance Optimization",
        "VPS Hosting Management",
        "Technical SEO",
      ],
      category: ["Wordpress", "Elementor Pro", "ChatBots"],
      screenshots: [
        {
          url: "/Projects/Medmax-Technologies-llc.webp",
          caption: "Medmax Technologies LLC - Medical Billing Company"
        },
        {
          url: "/Projects/MedmaxTech/Services-Landing-Page.webp",
          caption: "Services Landing Page"
        },
        {
          url: "/Projects/MedmaxTech/Single-Service-Page.webp",
          caption: "Single Service Page"
        },
      ],
      website: "https://medmaxtechnologiesllc.com"
    },
    {
      id: "2",
      company: "Ahtsham.me",
      logo: "/company-icon/ahtsham-logo.webp",
      position: "Founder & CEO",
      startDate: "2018-01-01",
      duration: "Full time Remote",
      description:
        "Founded and built Ahtsham.me as a platform to educate, mentor, and support freelancers, developers, and digital professionals.",
      skills: [
        "Web Platform Architecture",
        "WordPress & Shopify Training",
        "Technical SEO Strategy",
        "Ecommerce Mentorship",
        "Consultation & Coaching",
      ],
      category: ["Wordpress", "Shopify", "Custom Development", "Trainings", "Consultations"],
      screenshots: [
        {
          url: "/Projects/Ahtsham-Web-Developer-Advocate-Connects.webp",
          caption: "Ahtsham.me - Developer Advocate Platform"
        },
      ],
      website: "https://ahtsham.me"
    },
    {
      id: "3",
      company: "Learn With Ahtsham",
      logo: "/company-icon/Learn-with-Ahtsham-Icon.webp",
      position: "Content Creator",
      startDate: "2023-01-01",
      duration: "Pakistan",
      description:
        "Create educational content focused on web development, freelancing, and digital growth through YouTube and social platforms.",
      skills: [
        "Technical Content Creation",
        "Web Development Education",
        "YouTube Growth Strategy",
        "Developer Tutorials",
        "Personal Branding",
      ],
      category: ["Trainings", "Consultations"],
      screenshots: [
        {
          url: "/Projects/Learn-With-Ahtsham-Project.webp",
          caption: "Learn With Ahtsham - Educational Platform"
        },
      ],
      website: "https://learnwith.ahtsham.me"
    },
  ];

  const totalSlides = projectsData.length;
  const slideDuration = 5000; // 5 seconds per slide

  // Progress bar animation - smooth continuous progress that completes before slide change
  useEffect(() => {
    if (!isPlaying || isHovered) {
      return;
    }

    let animationFrameId: number;
    const startTime = Date.now();
    const startProgress = progress;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = startProgress + (elapsed / slideDuration) * 100;

      if (newProgress >= 100) {
        setProgress(100);
        // Wait a brief moment at 100% before changing slide
        setTimeout(() => {
          setProgress(0);
          setCurrentSlide((prev) => (prev + 1) % totalSlides);
        }, 50);
      } else {
        setProgress(newProgress);
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [currentSlide, isPlaying, isHovered, totalSlides, slideDuration, progress]);

  // Reset progress when slide changes manually
  const goToSlide = (index: number) => {
    setProgress(0);
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setProgress(0);
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setProgress(0);
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      setProgress(0);
    }
    setIsPlaying(!isPlaying);
  };

  const currentProject = projectsData[currentSlide];

  // Determine category color
  const getCategoryColor = () => {
    if (currentProject.category.includes("Wordpress")) {
      return "bg-blue-600 text-white";
    } else if (currentProject.category.includes("Shopify")) {
      return "bg-green-600 text-white";
    } else if (currentProject.category.includes("Trainings")) {
      return "bg-yellow-400 text-black";
    } else if (currentProject.category.includes("Consultations")) {
      return "bg-purple-600 text-white";
    }
    return "bg-gradient-to-r from-purple-600 to-pink-600 text-white";
  };

  return (
    <div className="w-full mt-8 sm:mt-12 md:mt-20 px-4 sm:px-6">
      {/* Tablet-like Container with reduced max-width */}
      <div className="relative mx-auto max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl overflow-hidden rounded-xl sm:rounded-2xl border border-gray-200 dark:border-gray-800 p-2 sm:p-3 shadow-lg shadow-zinc-950/15 ring-1 ring-gray-100 dark:ring-gray-900 bg-white dark:bg-gray-950">
        
        {/* Inner Container */}
        <div 
          className="relative group w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Image Container with reduced aspect ratio */}
          <div className="relative overflow-hidden rounded-xl aspect-video">
            {/* Slide Content - Using first screenshot or gradient fallback */}
            <div className="absolute inset-0 transition-opacity duration-700">
              {currentProject.screenshots && currentProject.screenshots.length > 0 ? (
                <img
                  src={currentProject.screenshots[0].url}
                  alt={currentProject.screenshots[0].caption}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 flex items-center justify-center">
                  <div className="text-center text-white p-4 sm:p-6 md:p-8 max-w-xl">
                    <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">💼</div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">{currentProject.company}</h3>
                    <p className="text-sm sm:text-base text-gray-300 px-2">{currentProject.position}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation Button - Left */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-2 md:left-4 md:top-1/2 md:-translate-y-1/2 z-10 h-8 w-8 md:h-10 md:w-10 rounded-full bg-black/50 text-white md:opacity-0 transition-opacity duration-300 hover:bg-black/70 group-hover:opacity-100 inline-flex items-center justify-center"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
            </button>

            {/* Navigation Button - Right */}
            <button
              onClick={nextSlide}
              className="absolute left-12 top-2 md:left-auto md:right-4 md:top-1/2 md:-translate-y-1/2 z-10 h-8 w-8 md:h-10 md:w-10 rounded-full bg-black/50 text-white md:opacity-0 transition-opacity duration-300 hover:bg-black/70 group-hover:opacity-100 inline-flex items-center justify-center"
              aria-label="Next image"
            >
              <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
            </button>

            {/* View Project Link */}
            {currentProject.website && (
              <a
                href={currentProject.website}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex absolute top-2 right-12 md:top-4 md:right-16 z-10 items-center gap-1 md:gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-2 py-1.5 md:px-3 md:py-2 text-xs md:text-sm font-medium hover:opacity-90 transition-all duration-300 rounded-md md:opacity-0 md:group-hover:opacity-100"
              >
                <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                <span className="hidden sm:inline">View Project</span>
              </a>
            )}

            {/* Play/Pause Button */}
            <button
              onClick={togglePlayPause}
              className="absolute top-2 right-2 md:top-4 md:right-4 z-10 h-8 w-8 rounded-full bg-black/50 text-white md:opacity-0 transition-opacity duration-300 hover:bg-black/70 group-hover:opacity-100 inline-flex items-center justify-center"
              aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
            >
              {isPlaying ? (
                <Pause className="h-4 w-4" />
              ) : (
                <Play className="h-4 w-4 ml-0.5" />
              )}
            </button>

            {/* Slide Counter */}
            <div className="absolute bottom-2 left-2 md:top-4 md:left-4 md:bottom-auto z-10 rounded-full bg-black/50 px-2 py-1 md:px-3 text-xs md:text-sm text-white md:opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {currentSlide + 1} / {totalSlides}
            </div>

            {/* Project Info Overlay */}
            <div className="absolute inset-x-2 bottom-12 md:inset-x-4 md:bottom-4 z-10 md:opacity-0 transition-all duration-500 ease-out md:transform md:translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
              <div className="space-y-1 md:space-y-2">
                {/* Category Badge */}
                <div className="flex justify-start">
                  <span className={`inline-block ${getCategoryColor()} px-2 py-0.5 md:px-3 md:py-1 text-[10px] md:text-xs font-bold uppercase tracking-wider rounded`}>
                    {currentProject.category[0]}
                  </span>
                </div>

                {/* Company/Project Title */}
                <div className="flex justify-start">
                  <h3 className="inline-block bg-black text-white px-2 py-1 md:px-3 md:py-2 text-sm md:text-lg font-bold leading-tight max-w-full break-words rounded">
                    {currentProject.company}
                  </h3>
                </div>

                {/* Position/Role */}
                <div className="flex justify-start">
                  <p className="inline-block bg-black/90 text-white px-2 py-1 md:px-3 md:py-2 text-xs md:text-sm leading-relaxed max-w-[95%] sm:max-w-[90%] md:max-w-[80%] break-words rounded">
                    {currentProject.position}
                  </p>
                </div>
              </div>
            </div>

            {/* Smooth Progress Bar at the bottom */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-300 dark:bg-gray-700">
              <div 
                className="h-full bg-gradient-to-r from-purple-600 to-pink-600 dark:from-yellow-400 dark:to-yellow-500 transition-all ease-linear" 
                style={{ 
                  width: `${progress}%`,
                  transition: progress === 0 ? 'none' : 'width 100ms linear'
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}