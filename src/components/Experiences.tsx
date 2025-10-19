"use client";

import { useState } from "react";
import { Briefcase } from "lucide-react";

interface Experience {
  id: string;
  company: string;
  logo: string;
  position: string;
  period: string;
  duration: string;
  location?: string;
  description: string;
  skills: string[];
  category: string[];
}

export function WorkExperience() {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "AI", "Mobile App", "Websites", "Chatbots", "Trainings", "Consultations"];

  const experiences: Experience[] = [
    {
      id: "1",
      company: "UpAlerts",
      logo: "U",
      position: "Founder",
      period: "January 2022 - Present (3 years 10 months)",
      duration: "• Full-time",
      description: "Developed and launched UpAlerts, a SaaS platform engineered to alert users about website uptime in real-time. The platform integrates an advanced AI chatbot to provide tailored recommendations for troubleshooting, addressing website issues rapidly. It features notification options through various channels like emails, Slack, Discord, SMS, etc., enabling instantaneous communication.",
      skills: ["React", "React Native", "Next.js", "AI", "Cloud AI", "Website Apps", "Chrome Extension"],
      category: ["AI", "Mobile App", "Websites"]
    },
    {
      id: "2",
      company: "LWS Academy",
      logo: "L",
      position: "Founder",
      period: "February 2020 - Present (5 years 9 months)",
      duration: "• Remote",
      description: "Providing online education and high-paying skill courses. We aim to train 300,000 students, start serving $10,000.00/month while working from home.",
      skills: ["Online Education", "Course Development", "Freelancing Skills"],
      category: ["Trainings"]
    },
    {
      id: "3",
      company: "Self-employed",
      logo: "S",
      position: "Content Creator",
      period: "January 2021 - Present (4 years 10 months)",
      duration: "• US-San Francisco",
      description: "Creating educational content for developers and instructors. Building community and sharing knowledge through various platforms.",
      skills: ["YouTube", "Video Production", "Technical Writing"],
      category: ["Websites"]
    },
    {
      id: "4",
      company: "Punjab Information Technology Board",
      logo: "P",
      position: "Technical Trainer",
      period: "September 2012 - Present (9 years)",
      duration: "• 13 hours, Pakistan",
      description: "Empowering youth by teaching technical and freelancing skills through Chief Minister's Haqooq Program. Helping students earn income while pursuing education.",
      skills: ["Web Development", "Freelancing"],
      category: ["Trainings"]
    },
    {
      id: "5",
      company: "Appsel360",
      logo: "A",
      position: "Founder",
      period: "September 2024 - Present (10 years 2 months)",
      duration: "• Lahore",
      description: "Making it happen year over mobile app solutions for clients all over the world. Delivering innovative software solutions across diverse industries.",
      skills: ["React", "Next.js", "React Native", "Flutter", "Node.js", "AI", "Full-Stack"],
      category: ["Mobile App", "AI", "Websites"]
    },
    {
      id: "6",
      company: "Smants Technologies",
      logo: "S",
      position: "Jr Software Engineer",
      period: "January 2019 - August 2019 (8 months)",
      duration: "• Lahore",
      description: "Gained valuable experience working on software development projects. Collaborated with experienced team members in delivering high-quality solutions.",
      skills: ["Software Development", "Team Collaboration"],
      category: ["Websites"]
    },
    {
      id: "7",
      company: "Reliance College",
      logo: "R",
      position: "Android Trainer",
      period: "October 2013 - December 2013 (3 months)",
      duration: "• Faisalabad",
      description: "Provided Android Application Development Training to a class of 50 students. Taught mobile development fundamentals and best practices.",
      skills: ["Android", "Java", "Mobile Development"],
      category: ["Trainings"]
    },
    {
      id: "8",
      company: "Beacon Impact (Pvt) Ltd",
      logo: "B",
      position: "Intern Android Developer",
      period: "July 2013 - October 2013 (4 months)",
      duration: "• Faisalabad",
      description: "Android Software Development using XML with Java (UI Design, Social Networking Integration with Android apps.",
      skills: ["Android", "XML.js", "Java", "Social Media Integration"],
      category: ["Mobile App"]
    }
  ];

  const filteredExperiences = activeTab === "All" 
    ? experiences 
    : experiences.filter(exp => exp.category.includes(activeTab));

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey and the roles I've held throughout my career
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                activeTab === tab
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 via-pink-600 to-purple-600 hidden md:block"></div>

          {/* Experience Cards */}
          <div className="space-y-8">
            {filteredExperiences.map((exp, index) => (
              <div key={exp.id} className="relative pl-0 md:pl-20">
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-[1.15rem] top-6 w-5 h-5 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full border-4 border-gray-900 z-10 hidden md:block"></div>
                
                {/* Company Logo */}
                <div className="absolute left-0 md:left-12 top-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center text-black text-xl shadow-lg">
                  {exp.logo}
                </div>

                {/* Content Card */}
                <div className="ml-16 md:ml-0 bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                  <div className="mb-3">
                    <h3 className="text-xl text-white mb-1">{exp.company}</h3>
                    <h4 className="text-lg text-gray-300 mb-2">{exp.position}</h4>
                    <div className="text-sm text-gray-400">
                      <p>{exp.period}</p>
                      {exp.duration && <p>{exp.duration}</p>}
                      {exp.location && <p>{exp.location}</p>}
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs border border-yellow-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
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
    </section>
  );
}
