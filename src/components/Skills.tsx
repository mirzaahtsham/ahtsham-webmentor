"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { 
  Code2, Database, Palette, Smartphone, Cloud, Shield, 
  Zap, Globe, Server, GitBranch, Terminal, Layers
} from "lucide-react";

export function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("skills-section");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const skills = [
    { icon: Code2, name: "React", color: "bg-blue-500" },
    { icon: Database, name: "Node.js", color: "bg-green-500" },
    { icon: Palette, name: "Tailwind", color: "bg-cyan-500" },
    { icon: Smartphone, name: "React Native", color: "bg-purple-500" },
    { icon: Cloud, name: "AWS", color: "bg-orange-500" },
    { icon: Shield, name: "Security", color: "bg-red-500" },
    { icon: Zap, name: "Next.js", color: "bg-gray-800" },
    { icon: Globe, name: "TypeScript", color: "bg-blue-600" },
    { icon: Server, name: "MongoDB", color: "bg-green-600" },
    { icon: GitBranch, name: "Git", color: "bg-orange-600" },
    { icon: Terminal, name: "Docker", color: "bg-blue-400" },
    { icon: Layers, name: "GraphQL", color: "bg-pink-500" },
  ];

  return (
    <section id="skills-section" className="py-20 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-foreground dark:text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl mb-4">
              Expertise Across
            </h2>
            <h3 className="text-3xl md:text-4xl mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400">
                Multiple Technologies
              </span>
            </h3>
            <h3 className="text-3xl md:text-4xl mb-6">
              & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Frameworks</span>
            </h3>
            <p className="text-muted-foreground dark:text-gray-400 max-w-2xl mx-auto">
              Proficient in modern technologies and frameworks to build scalable, 
              performant, and beautiful applications
            </p>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                className="flex flex-col items-center justify-center p-4 rounded-lg hover:scale-110 transition-transform duration-300"
              >
                <div className={`${skill.color} p-4 rounded-lg mb-3 shadow-lg`}>
                  <skill.icon className="w-8 h-8 text-white" />
                </div>
                <span className="text-sm text-foreground dark:text-gray-300 text-center">{skill.name}</span>
              </motion.div>
            ))}
          </div>

          {/* Additional colorful tech icons */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {["Python", "Java", "PHP", "Vue", "Angular", "Firebase", "Redis", "PostgreSQL"].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.8 + index * 0.1,
                }}
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-sm hover:shadow-lg hover:shadow-purple-500/50 transition-shadow"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
