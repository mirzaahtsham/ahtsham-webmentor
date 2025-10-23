"use client";

import { 
  Youtube, 
  Globe, 
  Calendar, 
  FileText, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Music2, 
  Mail, 
  Users, 
  MessageCircle, 
  // GraduationCap,
  ExternalLink,
  MapPin,
  Star,
  Send,
  // Github,
  // Dribbble,
  // Music
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface LinkItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  url: string;
  iconBg: string;
}

export function Linktree() {
  const mainPlatforms: LinkItem[] = [
    {
      icon: <Youtube className="w-5 h-5" />,
      title: "YouTube Channel",
      description: "Learn from Ahtsham Web Mentor - 6+ Experience",
      url: "https://www.youtube.com/channel/UCECmARzL9NsJiDpe01t6PWw??sub_confirmation=1",
      iconBg: "bg-red-600"
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Official Website",
      description: "ahtsham.me",
      url: "https://ahtsham.me",
      iconBg: "bg-blue-600"
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      title: "Schedule a Meeting",
      description: "Book 1-on-1 session for consultancy & mentorship",
      url: "#",
      iconBg: "bg-green-600"
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Blog",
      description: "Read my latest articles and insights",
      url: "#",
      iconBg: "bg-purple-600"
    }
  ];

  const socialMedia: LinkItem[] = [
    {
      icon: <Facebook className="w-4 h-4" />,
      title: "Facebook",
      description: "1K+ Followers",
      url: "https://www.facebook.com/ahtshamwebdesigngenius/",
      iconBg: "bg-blue-600"
    },
    {
      icon: <Linkedin className="w-4 h-4" />,
      title: "LinkedIn",
      description: "1K+ Followers",
      url: "https://www.linkedin.com/in/mirzaahtsham/",
      iconBg: "bg-blue-700"
    },
    {
      icon: <Instagram className="w-4 h-4" />,
      title: "Instagram",
      description: "500 Followers",
      url: "https://www.instagram.com/WebsiteDesignGenius/",
      iconBg: "bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500"
    },
    {
      icon: <Music2 className="w-4 h-4" />,
      title: "TikTok",
      description: "1K+ Followers",
      url: "#",
      iconBg: "bg-black"
    },
    {
      icon: <Twitter className="w-4 h-4" />,
      title: "X (Twitter)",
      description: "Follow for tech updates",
      url: "https://twitter.com/websdesignwala/",
      iconBg: "bg-black"
    },
    // {
    //   icon: <Mail className="w-4 h-4" />,
    //   title: "Join Newsletter",
    //   description: "10K+ Subscribers",
    //   url: "#",
    //   iconBg: "bg-yellow-600"
    // }
  ];

  const community: LinkItem[] = [
    {
      icon: <Facebook className="w-4 h-4" />,
      title: "Facebook Group",
      description: "Learn with Ahtsham Web Mentor - Join our Learning Community",
      url: "#",
      iconBg: "bg-blue-600"
    },
    {
      icon: <MessageCircle className="w-4 h-4" />,
      title: "WhatsApp Group",
      description: "Learn with Ahtsham Web Mentor - Get Updates & Announcements",
      url: "#",
      iconBg: "bg-green-600"
    },
    // {
    //   icon: <GraduationCap className="w-4 h-4" />,
    //   title: "Skool Community",
    //   description: "UWS Academy - Exclusive Learning Hub",
    //   url: "#",
    //   iconBg: "bg-purple-600"
    // }
  ];

  const contact: LinkItem[] = [
    {
      icon: <MessageCircle className="w-4 h-4" />,
      title: "WhatsApp",
      description: "Direct Message",
      url: "#",
      iconBg: "bg-green-600"
    },
    {
      icon: <Mail className="w-4 h-4" />,
      title: "Email",
      description: "hello@ahtsham.me",
      url: "mailto:hello@ahtsham.me",
      iconBg: "bg-red-600"
    }
  ];

  const freelancePlatforms: LinkItem[] = [
    {
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
        </svg>
      ),
      title: "Upwork",
      description: "Top Rated Plus - 90+ years experience",
      url: "#",
      iconBg: "bg-green-600"
    },
    {
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="4" cy="4" r="2"/>
          <path d="M8 1h2v8H8zm4 0h2v3h-2zm4 0h2v5h-2zM0 9h24v2H0zm8 3h2v11H8zm4 0h2v8h-2zm4 0h2v6h-2z"/>
        </svg>
      ),
      title: "Fiverr",
      description: "Professional development Services",
      url: "#",
      iconBg: "bg-green-600"
    }
  ];

  const LinkCard = ({ item, size = "large" }: { item: LinkItem; size?: "large" | "small" }) => (
    <a
      href={item.url}
      className={`flex items-center gap-4 bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700 hover:border-gray-600 hover:bg-gray-800/70 transition-all duration-300 group ${
        size === "small" ? 'min-h-[70px]' : 'min-h-[80px]'
      }`}
    >
      <div className={`${item.iconBg} ${size === 'large' ? 'w-12 h-12' : 'w-10 h-10'} rounded-lg flex items-center justify-center text-white flex-shrink-0`}>
        {item.icon}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className={`text-white ${size === 'large' ? 'text-base' : 'text-sm'} mb-0.5`}>{item.title}</h3>
        <p className={`text-gray-400 ${size === 'large' ? 'text-sm' : 'text-xs'} truncate`}>{item.description}</p>
      </div>
      <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors flex-shrink-0" />
    </a>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      {/* Header */}
      {/* <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm">S</span>
            </div>
            <span className="text-white">shajeel</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">About</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Services</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">AI Chat</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a>
            <a href="#" className="text-white">Links</a>
          </nav>

          <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg text-sm transition-colors flex items-center gap-2">
            <span>⭐</span>
            Schedule A Call
          </button>
        </div>
      </header> */}

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 py-12 pt-44">
        {/* Profile Section */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-800">
            <ImageWithFallback
              src="https://webdesigngenius.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMirza-Ahtsham-Profile-Image.e354692b.png&w=640&q=75"
              alt="Mirza Ahtsham Profile Image"
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="text-2xl text-white mb-2">Mirza Ahtsham</h1>
          <p className="text-gray-400 text-sm mb-3">
            Designer, Developer & Trainer - Ahtsham Web Mentor
          </p>
          
          <div className="flex items-center justify-center gap-4 text-xs text-gray-500 mb-3">
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              <span>Lahore, Dubai & Toronto</span>
            </div>
            <div className="flex items-center gap-1">
              <Globe className="w-3 h-3" />
              <span>https://ahtsham.me</span>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-4 py-1.5 text-xs">
            <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
            <span className="text-yellow-500">Complete 1K+ projects - 6+ years experience</span>
          </div>
        </div>

        {/* Main Platforms */}
        <section className="mb-8">
          <h2 className="text-white text-sm mb-4 flex items-center gap-2">
            <Users className="w-4 h-4" />
            Main Platforms
          </h2>
          <div className="space-y-3">
            {mainPlatforms.map((item, index) => (
              <LinkCard key={index} item={item} />
            ))}
          </div>
        </section>

        {/* Social Media */}
        <section className="mb-8">
          <h2 className="text-white text-sm mb-4 flex items-center gap-2">
            <Send className="w-4 h-4" />
            Social Media
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {socialMedia.map((item, index) => (
              <LinkCard key={index} item={item} size="small" />
            ))}
          </div>
        </section>

        {/* Community */}
        <section className="mb-8">
          <h2 className="text-white text-sm mb-4 flex items-center gap-2">
            <Users className="w-4 h-4" />
            Community
          </h2>
          <div className="space-y-3">
            {community.map((item, index) => (
              <LinkCard key={index} item={item} size="small" />
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="mb-8">
          <h2 className="text-white text-sm mb-4 flex items-center gap-2">
            <MessageCircle className="w-4 h-4" />
            Contact
          </h2>
          <div className="space-y-3">
            {contact.map((item, index) => (
              <LinkCard key={index} item={item} size="small" />
            ))}
          </div>
        </section>

        {/* Freelance Platforms */}
        {/* <section className="mb-8">
          <h2 className="text-white text-sm mb-4 flex items-center gap-2">
            <Star className="w-4 h-4" />
            Freelance Platforms
          </h2>
          <div className="space-y-3">
            {freelancePlatforms.map((item, index) => (
              <LinkCard key={index} item={item} size="small" />
            ))}
          </div>
        </section> */}

        {/* Footer Note */}
        <p className="text-center text-xs text-gray-500 mt-12 mb-8">
          Follow me across all platforms to stay updated with the latest in tech, freelancing, and AI 🚀
        </p>
      </main>

      {/* Footer */}
      {/* <footer className="border-t border-gray-800 bg-gray-900/50 backdrop-blur-sm mt-20">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-gradient-to-br from-purple-600 to-pink-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs">S</span>
                </div>
                <span className="text-white text-sm">Mirza Ahtsham</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                Learn with AI & Trainer - Freelancing, Programming & AI. Top rated pro on Upwork with 10+ years experience.
              </p>
              <div className="flex items-center gap-1 text-xs text-gray-500 mt-2">
                <MapPin className="w-3 h-3" />
                <span>Lahore, Dubai & Toronto</span>
              </div>
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
              <h3 className="text-white text-sm mb-3">Community</h3>
              <ul className="space-y-2 text-xs text-gray-500">
                <li><a href="#" className="hover:text-white transition-colors">Facebook Group</a></li>
                <li><a href="#" className="hover:text-white transition-colors">WhatsApp Channel</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Skool Community</a></li>
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

          <div className="flex items-center justify-between pt-8 border-t border-gray-800">
            <p className="text-xs text-gray-500">© 2025 Shajeel Afzal. All rights reserved.</p>
            
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                <Dribbble className="w-4 h-4" />
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                <Music className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
