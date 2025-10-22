// import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { CheckCircle2 } from "lucide-react";

export function About() {
  const skills = [
    "User experience design",
    "Web Application",
    "UI/UX Design",
    "Mobile Application",
    "Design System",
    "Wireframing",
    "Visual Design",
    "Prototyping",
  ];

  const experience = [
    { role: "Senior Product Designer", company: "Tech Corp", period: "2020-Present" },
    { role: "UI/UX Designer", company: "Design Studio", period: "2018-2020" },
    { role: "Junior Designer", company: "Creative Agency", period: "2016-2018" },
  ];

  return (
    <section className="py-20 bg-background dark:bg-gray-900 text-foreground dark:text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative h-full">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur-lg opacity-30"></div>
            <div className="relative h-full">
              <img
                src="https://webdesigngenius.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMirza-Ahtsham-Profile-Image.e354692b.png&w=640&q=75"
                alt="Mirza Ahtsham"
                className="w-full rounded-lg object-cover h-full min-h-[600px]"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="mb-6">
              <p className="text-yellow-400 mb-2">Hi, I&#39;m Ahtsham — Developer & Creator</p>
              <h3 className="text-3xl mb-4">
                Passionate about creating 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> exceptional digital experiences</span>
              </h3>
              <p className="text-muted-foreground dark:text-gray-400">
                With over a decade of experience in full-stack development and content creation, 
                I specialize in building scalable web applications and crafting engaging digital content 
                that resonates with audiences worldwide.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="mb-8">
              <h4 className="text-xl mb-4 text-purple-400">Core Competencies</h4>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-foreground dark:text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="mb-8">
              <h4 className="text-xl mb-4 text-pink-400">Experience</h4>
              <div className="space-y-3">
                {experience.map((exp, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-foreground dark:text-white">{exp.role}</div>
                      <div className="text-muted-foreground dark:text-gray-400 text-sm">{exp.company} • {exp.period}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900">
                Download CV
              </Button>
              <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10">
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
