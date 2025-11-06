"use client";

import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import type { LucideIcon } from "lucide-react";
import { Dialog, DialogContent } from "./ui/dialog";
import { Briefcase, ExternalLink, Building2, GraduationCap, Rocket, Code, UserCircle, School, Laptop, X, ChevronLeft, ChevronRight } from "lucide-react";

interface Experience {
  id: string;
  company: string;
  logo: string;
  logoIcon?: LucideIcon;
  logoColor?: string;
  position: string;
  period: string;
  duration: string;
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
  const [selectedImage, setSelectedImage] = useState<{ url: string; caption: string; allImages: Array<{ url: string; caption: string }>; index: number } | null>(null);

  const tabs = ["All", "AI", "Mobile Apps", "Websites", "ChatBots", "Trainings", "Consultations"];

  const experiences: Experience[] = [
    {
      id: "1",
      company: "UpAlerts",
      logo: "U",
      logoIcon: Rocket,
      logoColor: "bg-gradient-to-br from-green-500 to-green-700",
      position: "Founder",
      period: "January 2023 - Present (2 years 10 months)",
      duration: "Pakistan",
      description: "Spearheaded the establishment of UpAlerts, a revolutionary platform empowering freelancers and agencies to craft superior proposals with Upwork. Developed integrations from Upwork to mobile apps, websites, and WhatsApp. Successfully garnered over 20,000 active users within 6 months.",
      skills: ["Next.js", "Node.js", "Flutter", "Firebase", "Supabase", "GCP", "RevenueCat", "Stripe", "OpenAI", "LangChain", "Chrome Extension"],
      category: ["AI", "Websites", "ChatBots"],
      screenshots: [
        {
          url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MjI2MDUzMXww&ixlib=rb-4.1.0&q=80&w=1080",
          caption: "Dashboard Analytics"
        },
        {
          url: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYyMjI1NDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
          caption: "Mobile Interface"
        },
        {
          url: "https://images.unsplash.com/photo-1748609664795-11546ad62000?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBwbGF0Zm9ybXxlbnwxfHx8fDE3NjIyNjU3MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
          caption: "Platform Analytics"
        }
      ],
      website: "https://upalerts.com"
    },
    {
      id: "2",
      company: "LWS Academy",
      logo: "L",
      logoIcon: GraduationCap,
      logoColor: "bg-gradient-to-br from-blue-500 to-blue-700",
      position: "Founder",
      period: "January 2022 - Present (3 years 10 months)",
      duration: "Remote",
      description: "Teaching high demanding and high paying skills online. Mission to help 100,000 students start earning $1000-5000/month while working from home.",
      skills: ["Online Education", "Course Development", "Freelancing Skills"],
      category: ["Trainings"],
      website: "https://lwsacademy.com"
    },
    {
      id: "3",
      company: "Self-employed",
      logo: "S",
      logoIcon: UserCircle,
      logoColor: "bg-gradient-to-br from-yellow-600 to-yellow-800",
      position: "Content Creator",
      period: "January 2021 - Present (4 years 10 months)",
      duration: "United Arab Emirates",
      description: "Creating educational content for developers and freelancers. Building community and sharing knowledge through various platforms.",
      skills: ["YouTube", "Video Production", "Technical Writing"],
      category: ["Websites"]
    },
    {
      id: "4",
      company: "Punjab Information Technology Board",
      logo: "P",
      logoIcon: Building2,
      logoColor: "bg-gradient-to-br from-purple-500 to-purple-700",
      position: "Technical Trainer",
      period: "September 2017 - Present (8 years 2 months)",
      duration: "Lahore, Pakistan",
      description: "Empowered youth by training in technical and freelancing skills through Chief Minister's Haqooq Program. Helping students earn online and build sustainable careers.",
      skills: ["Web Development", "Video Production", "Freelancing"],
      category: ["Trainings"]
    },
    {
      id: "5",
      company: "Appsel360",
      logo: "A",
      logoIcon: Laptop,
      logoColor: "bg-gradient-to-br from-orange-500 to-orange-700",
      position: "Founder",
      period: "September 2019 - Present (5 years 2 months)",
      duration: "Lahore",
      description: "Making it happen year over mobile app solutions for clients all over the world. Delivering innovative software solutions across diverse industries.",
      skills: ["React", "Next.js", "React Native", "Flutter", "Gatsby", "AI", "Full-Stack"],
      category: ["Mobile Apps", "AI", "Websites"]
    },
    {
      id: "6",
      company: "Smants Technologies",
      logo: "S",
      logoIcon: Code,
      logoColor: "bg-gradient-to-br from-gray-600 to-gray-800",
      position: "Software Engineer",
      period: "January 2018 - August 2019 (1 year 8 months)",
      duration: "Lahore",
      description: "Gained valuable experience working on software development projects. Collaborated with experienced team members in delivering high-quality solutions.",
      skills: ["Software Development", "Team Collaboration"],
      category: ["Websites"]
    },
    {
      id: "7",
      company: "Reliance College",
      logo: "R",
      logoIcon: School,
      logoColor: "bg-gradient-to-br from-red-500 to-red-700",
      position: "Android Trainer",
      period: "October 2012 - December 2013 (3 months)",
      duration: "Faisalabad",
      description: "Provided Android Application Development Training to a class of 50 students. Taught mobile app development fundamentals and best practices.",
      skills: ["Android", "Java", "Mobile Development"],
      category: ["Trainings"]
    },
    {
      id: "8",
      company: "Beacon Impex (Pvt) Ltd",
      logo: "B",
      logoIcon: Building2,
      logoColor: "bg-gradient-to-br from-pink-500 to-pink-700",
      position: "Intern Android Developer",
      period: "November 2012 - January 2013 (3 months)",
      duration: "Faisalabad",
      description: "Android Software Development using XML with Java (UI Design, Social Networking Integration with Android apps.",
      skills: ["Android", "XML.js", "Java", "Social Media Integration"],
      category: ["Mobile Apps"]
    }
  ];

  const filteredExperiences = activeTab === "All" 
    ? experiences 
    : experiences.filter(exp => exp.category.includes(activeTab));

  const handleImageClick = (screenshot: { url: string; caption: string }, allImages: Array<{ url: string; caption: string }>, index: number) => {
    setSelectedImage({ url: screenshot.url, caption: screenshot.caption, allImages, index });
    setLightboxOpen(true);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    
    const newIndex = direction === 'next' 
      ? (selectedImage.index + 1) % selectedImage.allImages.length
      : (selectedImage.index - 1 + selectedImage.allImages.length) % selectedImage.allImages.length;
    
    const newImage = selectedImage.allImages[newIndex];
    setSelectedImage({ ...newImage, allImages: selectedImage.allImages, index: newIndex });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey and the roles I've held throughout my career
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${
                activeTab === tab
                  ? "bg-yellow-500 text-black"
                  : "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative ml-8">
          {/* Vertical Line */}
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-pink-600"></div>

          {/* Experience Cards */}
          <div className="space-y-12">
            {filteredExperiences.map((exp, index) => {
              const LogoIcon = exp.logoIcon || Briefcase;
              return (
                <div key={exp.id} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute -left-2 top-6 w-4 h-4 bg-yellow-400 rounded-full border-4 border-gray-900 z-20"></div>

                  {/* Content Card with Glass Effect */}
                  <div className="ml-8 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
                    {/* Header with Visit Website */}
                    <div className="flex items-start justify-between mb-4 gap-4">
                      <div className="flex items-start gap-3">
                        {/* Logo Icon next to Company Name */}
                        <div className={`w-12 h-12 ${exp.logoColor || 'bg-gradient-to-br from-gray-600 to-gray-800'} rounded-full flex items-center justify-center text-white shadow-lg shrink-0`}>
                          <LogoIcon className="w-6 h-6" />
                        </div>
                        
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-xl text-white">{exp.company}</h3>
                            <span className="text-gray-500 text-sm">• {exp.duration}</span>
                          </div>
                          <h4 className="text-white mb-1">{exp.position}</h4>
                          <p className="text-sm text-gray-500">{exp.period}</p>
                        </div>
                      </div>
                      
                      {exp.website && (
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-4 py-2 bg-yellow-500/10 text-yellow-400 border border-yellow-500/30 rounded-lg hover:bg-yellow-500/20 transition-colors text-sm whitespace-nowrap shrink-0"
                        >
                          Visit Website
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>

                    <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                      {exp.description}
                    </p>

                    {/* Screenshots Marquee */}
                    {exp.screenshots && exp.screenshots.length > 0 && (
                      <div className="relative overflow-hidden rounded-xl mb-5 border border-gray-700/50">
                        <div className="marquee-container group">
                          <div className="marquee-content">
                            {/* First set of images */}
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
                                    className="w-80 h-48 object-cover"
                                  />
                                  {/* Caption Overlay on Hover */}
                                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-0 left-0 right-0 p-3">
                                      <p className="text-white text-sm">{screenshot.caption}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                            {/* Duplicate set for seamless loop */}
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
                                    className="w-80 h-48 object-cover"
                                  />
                                  {/* Caption Overlay on Hover */}
                                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-0 left-0 right-0 p-3">
                                      <p className="text-white text-sm">{screenshot.caption}</p>
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
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-yellow-900/30 text-yellow-400 rounded-md text-xs border border-yellow-700/40"
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
            <Briefcase className="w-16 h-16 mx-auto mb-4 text-gray-600" />
            <p className="text-gray-400">No experiences found in this category</p>
          </div>
        )}
      </div>

      {/* Lightbox/Spotlight Modal */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-[95vw] w-auto bg-black/95 border-gray-800 p-0 max-h-[95vh]">
          <div className="relative w-full h-full">
            {/* Close Button */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute -top-12 right-0 z-50 p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Image */}
            {selectedImage && (
              <div className="relative flex items-center justify-center min-h-[70vh]">
                <ImageWithFallback
                  src={selectedImage.url}
                  alt={selectedImage.caption}
                  className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg"
                />

                {/* Navigation Arrows - Smaller */}
                <button
                  onClick={() => navigateImage('prev')}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors backdrop-blur-sm"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                <button
                  onClick={() => navigateImage('next')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors backdrop-blur-sm"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6">
                  <p className="text-white text-lg text-center">{selectedImage.caption}</p>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <style jsx>{`
        .marquee-container {
          padding: 1rem 0;
        }

        .marquee-content {
          display: flex;
          gap: 1rem;
          animation: marquee 30s linear infinite;
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