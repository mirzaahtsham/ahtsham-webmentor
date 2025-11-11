"use client";
import { useState, useRef } from "react";
import { motion, useScroll, useInView } from "framer-motion";
import {
  Briefcase,
  ExternalLink,
  Building2,
  GraduationCap,
  Rocket,
  Code,
  UserCircle,
  School,
  Laptop,
  X,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import type { LucideIcon } from "lucide-react";
import { Dialog, DialogContent } from "./ui/dialog";

interface Experience {
  id: string;
  company: string;
  logo: string; // either URL or single-letter fallback
  logoIcon?: LucideIcon;
  logoColor?: string;
  position: string;
  period?: string; // human text fallback
  startDate?: string; // ISO: "YYYY-MM-DD"
  endDate?: string; // ISO or undefined for Present
  duration: string; // location / region (kept as your "duration" field)
  location?: string;
  description: string;
  skills: string[];
  category: string[];
  screenshots?: Array<{
    url: string;
    caption: string;
  }>;
  website?: string;
}

export function WorkExperience() {
  const [activeTab, setActiveTab] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{
    url: string;
    caption: string;
    allImages: Array<{ url: string; caption: string }>;
    index: number;
  } | null>(null);

  const tabs = ["All", "Wordpress", "Shopify", "Custom Web App", "Integrations", "Trainings", "Consultations"];

  // Helper: returns string like "2 years 3 months" (or "" if startDate invalid)
  function calculateDuration(startDate: string, endDate?: string) {
    try {
      const start = new Date(startDate);
      if (isNaN(start.getTime())) return "";
      const end = endDate ? new Date(endDate) : new Date();
      if (isNaN(end.getTime())) return "";

      // Normalize to first of month to avoid day-of-month edge cases
      const sy = start.getFullYear();
      const sm = start.getMonth();
      const ey = end.getFullYear();
      const em = end.getMonth();

      let diffMonths = (ey - sy) * 12 + (em - sm);
      if (diffMonths < 0) diffMonths = 0;

      const years = Math.floor(diffMonths / 12);
      const months = diffMonths % 12;
      const yearText = years > 0 ? `${years} year${years > 1 ? "s" : ""}` : "";
      const monthText = months > 0 ? `${months} month${months > 1 ? "s" : ""}` : "";
      return [yearText, monthText].filter(Boolean).join(" ") || "0 months";
    } catch {
      return "";
    }
  }

  const experiences: Experience[] = [
    {
      id: "1",
      company: "Medmax Technologies LLC",
      logo: "http://localhost:3000/Company Icon/Medmax-Icon.webp",
      logoIcon: Rocket,
      startDate: "2023-01-01",
      duration: "Lahore Pakistan",
      position: "Sr. Web Developer & Web Designer",
      description:
        "Developed from scratch a high-performance medical billing website focused on client acquisition and brand authority. Handled full web development, design, SEO, hosting migration to VPS, and performance tuning using WordPress and Elementor Pro. Achieved exceptional speed—1.0s on mobile and 1.2s on desktop—delivering a fast, optimized user experience.",
      skills: [
        "Wordpress",
        "elementor Pro",
        "VPS Mnagement",
        "Namecheap",
        "Hostinger",
        "SiteGround",
        "Shipify",
        "Payment Gateways",
        "Tawkto",
        "Contact Form 7",
        "All-in-One-SEO",
      ],
      category: ["Wordpress", "Elementor Pro", "ChatBots"],
      screenshots: [
        {
          url: "/Projects/Medmax-Technologies-llc.webp",
          caption: "Medmax Technologies LLC - Medical Billing Company"
        },
        {
          url: "/Projects/MedmaxTech/Services-Landing-Page.webp",
          caption: "Services Landing Page - Medmax Technologies LLC"
        },
        {
          url: "/Projects/MedmaxTech/Single-Service-Page.webp",
          caption: "Single Service Page - Medmax Technologies LLC"
        },
        {
          url: "/Projects/MedmaxTech/Specialities-Landing-Page.webp",
          caption: "Specialities Landing Page - Medmax Technologies LLC"
        },
        {
          url: "/Projects/MedmaxTech/Single-Specialities-Design-1.webp",
          caption: "Single Speciality Design 1 - Medmax Technologies LLC"
        },
        {
          url: "/Projects/MedmaxTech/Single-Specialities-Design-2.webp",
          caption: "Single Speciality Design 2 - Medmax Technologies LLC"
        },
        {
          url: "/Projects/MedmaxTech/Near-me-page.webp",
          caption: "Near Me Page - Medmax Technologies LLC"
        },
        {
          url: "/Projects/MedmaxTech/Single-Near-me-page.webp",
          caption: "Single Near Me Page - Medmax Technologies LLC"
        },
        {
          url: "/Projects/MedmaxTech/Contact-us-Page.webp",
          caption: "Contact Us Page - Medmax Technologies LLC"
        },
      ],
      website: "https://medmaxtechnologiesllc.com"
    },
    {
      id: "2",
      company: "Ahtsham.me",
      logo: "http://localhost:3000/Company Icon/ahtsham-logo.webp",
      logoIcon: GraduationCap,
      startDate: "2018-01-01",
      duration: "Full time Remote",
      position: "Founder & CEO",
      description:
        "As the founder of Ahtsham.me, my mission is to empower freelancers and aspiring developers to achieve financial freedom through skill-based learning. I teach high-demand skills like WordPress, Shopify, and custom web development, helping students start earning $1,000-$5,000/month from home. Through my content and mentorship, I focus on practical learning, client communication, and real-world project execution to help learners build successful online careers.",
      skills: ["Online Education", "Course Development", "Freelancing Skills"],
      category: ["Wordpress", "Shopify", "Custom Development", "Trainings", "Consultations"],
      website: "https://ahtsham.me"
    },
    {
      id: "3",
      company: "Learn With Ahtsham",
      logo: "http://localhost:3000/Company Icon/Learn-with-Ahtsham-Icon.webp",
      logoIcon: UserCircle,
      startDate: "2023-01-01",
      duration: "Pakistan",
      position: "Content Creator",
      description:
        "I create educational content focused on freelancing, web development, and digital growth. Through YouTube and social platforms, I simplify complex technical topics into step-by-step tutorials for freelancers and developers. My goal is to inspire, educate, and guide individuals to become self-reliant through practical digital skills and continuous learning.",
      skills: ["YouTube", "Video Production", "Technical Writing"],
      category: ["Trainings", "Consultations"],
      website: "https://learnwith.ahtsham.me"
    },
    // {
    //   id: "4",
    //   company: "Punjab Information Technology Board",
    //   logo: "https://ahtshamportfolio.netlify.app/ahtsham-logo.webp",
    //   logoIcon: Building2,
    //   startDate: "2017-09-01",
    //   duration: "Lahore, Pakistan",
    //   position: "Technical Trainer",
    //   description:
    //     "Empowered youth by training in technical and freelancing skills through Chief Minister's Haqooq Program. Helping students earn online and build sustainable careers.",
    //   skills: ["Web Development", "Video Production", "Freelancing"],
    //   category: ["Trainings"]
    // },
    // {
    //   id: "5",
    //   company: "Appsel360",
    //   logo: "https://ahtshamportfolio.netlify.app/ahtsham-logo.webp",
    //   logoIcon: Laptop,
    //   startDate: "2019-09-01",
    //   duration: "Lahore",
    //   position: "Founder",
    //   description:
    //     "Making it happen year over mobile app solutions for clients all over the world. Delivering innovative software solutions across diverse industries.",
    //   skills: ["React", "Next.js", "React Native", "Flutter", "Gatsby", "AI", "Full-Stack"],
    //   category: ["Mobile Apps", "AI", "Websites"]
    // },
    // {
    //   id: "6",
    //   company: "Smants Technologies",
    //   logo: "https://ahtshamportfolio.netlify.app/ahtsham-logo.webp",
    //   logoIcon: Code,
    //   startDate: "2018-01-01",
    //   endDate: "2019-08-01",
    //   duration: "Lahore",
    //   position: "Software Engineer",
    //   description:
    //     "Gained valuable experience working on software development projects. Collaborated with experienced team members in delivering high-quality solutions.",
    //   skills: ["Software Development", "Team Collaboration"],
    //   category: ["Websites"]
    // },
    // {
    //   id: "7",
    //   company: "Reliance College",
    //   logo: "https://ahtshamportfolio.netlify.app/ahtsham-logo.webp",
    //   logoIcon: School,
    //   startDate: "2012-10-01",
    //   endDate: "2013-12-01",
    //   duration: "Faisalabad",
    //   position: "Android Trainer",
    //   description:
    //     "Provided Android Application Development Training to a class of 50 students. Taught mobile app development fundamentals and best practices.",
    //   skills: ["Android", "Java", "Mobile Development"],
    //   category: ["Trainings"]
    // },
    // {
    //   id: "8",
    //   company: "Beacon Impex (Pvt) Ltd",
    //   logo: "B",
    //   logoIcon: Building2,
    //   startDate: "2012-11-01",
    //   endDate: "2013-01-01",
    //   duration: "Faisalabad",
    //   position: "Intern Android Developer",
    //   description:
    //     "Android Software Development using XML with Java (UI Design, Social Networking Integration with Android apps).",
    //   skills: ["Android", "XML.js", "Java", "Social Media Integration"],
    //   category: ["Mobile Apps"]
    // }
  ];

  const filteredExperiences =
    activeTab === "All" ? experiences : experiences.filter((exp) => exp.category.includes(activeTab));

  const handleImageClick = (
    screenshot: { url: string; caption: string },
    allImages: Array<{ url: string; caption: string }>,
    index: number
  ) => {
    setSelectedImage({ url: screenshot.url, caption: screenshot.caption, allImages, index });
    setLightboxOpen(true);
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (!selectedImage) return;
    const newIndex =
      direction === "next"
        ? (selectedImage.index + 1) % selectedImage.allImages.length
        : (selectedImage.index - 1 + selectedImage.allImages.length) % selectedImage.allImages.length;
    const newImage = selectedImage.allImages[newIndex];
    setSelectedImage({ ...newImage, allImages: selectedImage.allImages, index: newIndex });
  };

  return (
    <section id="experience" className="py-12 md:py-20 bg-linear-to-b from-gray-50 to-white text-black">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-3 md:mb-4 bg-linear-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-gray-900 max-w-2xl mx-auto text-sm md:text-base px-2">
            My professional journey and the roles I've held throughout my career
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 md:mb-16 px-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 md:px-5 py-2 rounded-full text-xs md:text-sm transition-all duration-300 ${
                activeTab === tab ? "bg-yellow-500 text-white" : "bg-gray-900/80 text-gray-200 hover:bg-gray-700/80"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative ml-4 md:ml-8">
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-pink-600"></div>

          <div className="space-y-8 md:space-y-12">
            {filteredExperiences.map((exp) => {
              const LogoIcon = exp.logoIcon || Briefcase;
              return (
                <div key={exp.id} className="relative">
                  <div className="absolute -left-[7px] md:-left-2 top-4 md:top-6 w-3 h-3 md:w-4 md:h-4 bg-yellow-400 rounded-full border-2 md:border-4 border-gray-900 z-20"></div>

                  <div className="ml-4 md:ml-8 bg-white/5 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-700/80 hover:border-gray-600/80 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-3 md:gap-4">
                      <div className="flex items-start gap-2 md:gap-3 w-full sm:w-auto">
                        {/* Logo area: image URL -> show image, else icon or letter */}
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg overflow-hidden shrink-0 border border-gray-700/40 bg-gray-800/50">
                          {exp.logo && exp.logo.startsWith("http") ? (
                            <ImageWithFallback src={exp.logo} alt={exp.company} className="w-full h-full object-cover" />
                          ) : exp.logoIcon ? (
                            <exp.logoIcon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                          ) : (
                            <span className="text-white text-lg font-semibold">{exp.logo}</span>
                          )}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-1">
                            <h3 className="text-lg md:text-xl text-gray-900 font-medium wrap-break-word">{exp.company}</h3>
                            <span className="text-gray-700 text-xs md:text-sm">• {exp.duration}</span>
                          </div>
                          <h4 className="text-gray-700 mb-1 text-sm md:text-base">{exp.position}</h4>

                          {/* Period: dynamic if startDate present */}
                          <p className="text-xs md:text-sm text-gray-700">
                            {exp.startDate
                              ? `${new Date(exp.startDate).toLocaleString("default", { month: "long", year: "numeric" })} - ${exp.endDate ? new Date(exp.endDate).toLocaleString("default", { month: "long", year: "numeric" }) : "Present"} (${calculateDuration(exp.startDate, exp.endDate)})`
                              : exp.period}
                          </p>
                        </div>
                      </div>

                      {exp.website && (
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1 px-3 md:px-4 py-2 bg-black/50 text-yellow-400 border border-yellow-500/30 rounded-lg hover:bg-black/80 transition-colors text-xs md:text-sm whitespace-nowrap shrink-0 w-full sm:w-auto"
                        >
                          Visit Website
                          <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                        </a>
                      )}
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed text-xs md:text-sm">{exp.description}</p>

                    {/* Screenshots Marquee */}
                    {exp.screenshots && exp.screenshots.length > 0 && (
                      <div className="relative overflow-hidden rounded-lg md:rounded-xl mb-4 md:mb-5 border border-gray-700/50">
                        <div className="marquee-container group">
                          <div className="marquee-content">
                            {exp.screenshots.map((screenshot, idx) => (
                              <div
                                key={`first-${idx}`}
                                className="marquee-item group/item cursor-pointer relative"
                                onClick={() => handleImageClick(screenshot, exp.screenshots!, idx)}
                              >
                                <div className="relative rounded-lg overflow-hidden border-2 border-transparent hover:border-yellow-500 transition-all duration-300">
                                  <ImageWithFallback
                                    src={screenshot.url}
                                    alt={`${exp.company} screenshot ${idx + 1}`}
                                    className="w-48 sm:w-60 md:w-80 h-32 sm:h-40 md:h-48 object-cover"
                                  />
                                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/70 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-0 left-0 right-0 p-2 md:p-3">
                                      <p className="text-white text-xs md:text-sm">{screenshot.caption}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}

                            {/* duplicate set for seamless loop */}
                            {exp.screenshots.map((screenshot, idx) => (
                              <div
                                key={`second-${idx}`}
                                className="marquee-item group/item cursor-pointer relative"
                                onClick={() => handleImageClick(screenshot, exp.screenshots!, idx)}
                              >
                                <div className="relative rounded-lg overflow-hidden border-2 border-transparent hover:border-yellow-500 transition-all duration-300">
                                  <ImageWithFallback
                                    src={screenshot.url}
                                    alt={`${exp.company} screenshot ${idx + 1}`}
                                    className="w-48 sm:w-60 md:w-80 h-32 sm:h-40 md:h-48 object-cover"
                                  />
                                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/70 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-0 left-0 right-0 p-2 md:p-3">
                                      <p className="text-white text-xs md:text-sm">{screenshot.caption}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Skills */}
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {exp.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 md:px-3 py-1 bg-black/80 text-yellow-400 rounded-md text-[10px] md:text-xs border border-black/50"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Empty State */}
        {filteredExperiences.length === 0 && (
          <div className="text-center py-12">
            <Briefcase className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 text-gray-600" />
            <p className="text-gray-400 text-sm md:text-base">No experiences found in this category</p>
          </div>
        )}
      </div>

      {/* Lightbox/Spotlight Modal */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-[95vw] w-auto bg-black/95 border-gray-800 p-2 md:p-0 max-h-[95vh]">
          <div className="relative w-full h-full">
            {/* Close Button */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute -top-10 md:-top-12 right-0 z-50 p-1.5 md:p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <X className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </button>

            {/* Image */}
            {selectedImage && (
              <div className="relative flex items-center justify-center min-h-[50vh] md:min-h-[70vh]">
                <ImageWithFallback
                  src={selectedImage.url}
                  alt={selectedImage.caption}
                  className="max-w-full max-h-[75vh] md:max-h-[85vh] w-auto h-auto object-contain rounded-lg"
                />

                {/* Navigation Arrows */}
                <button
                  onClick={() => navigateImage("prev")}
                  className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-1.5 md:p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors backdrop-blur-sm"
                >
                  <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </button>
                <button
                  onClick={() => navigateImage("next")}
                  className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-1.5 md:p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors backdrop-blur-sm"
                >
                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </button>

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black via-black/80 to-transparent p-3 md:p-6">
                  <p className="text-white text-sm md:text-lg text-center">{selectedImage.caption}</p>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <style jsx>{`
        .marquee-container {
          padding: 0.75rem 0;
        }

        @media (min-width: 768px) {
          .marquee-container {
            padding: 1rem 0;
          }
        }

        .marquee-content {
          display: flex;
          gap: 0.75rem;
          animation: marquee 30s linear infinite;
        }

        @media (min-width: 768px) {
          .marquee-content {
            gap: 1rem;
          }
        }

        .marquee-container:hover .marquee-content {
          animation-play-state: paused;
        }

        .marquee-item {
          flex-shrink: 0;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}


