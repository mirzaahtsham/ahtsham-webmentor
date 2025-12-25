"use client";
import {
  SiGithub,
  SiLinkedin,
  SiFiverr,
  SiUpwork,
  SiX,
  SiYoutube,
  SiFacebook,
  SiInstagram,
  SiMedium,
  SiTiktok,
  SiWhatsapp,
  SiQuora,
  SiUdemy,
  SiDiscord,
  SiBuymeacoffee,
  SiPayoneer,
  SiNamecheap,
  SiEnvato,
  SiPinterest,
  SiCodechef,
  SiReddit,


} from "react-icons/si";
import {
  MessageCircle,
  Share2,
} from "lucide-react";

interface ShareButtonsProps {
  url: string;
  title: string;
}

export default function ShareButtons({ url, title }: ShareButtonsProps) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = [
    {
      name: "Facebook",
      icon: <SiFacebook className="w-5 h-5" />,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: "hover:bg-blue-600",
    },
    {
      name: "X (Twitter)",
      icon: <SiX className="w-5 h-5" />,
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      color: "hover:bg-sky-500",
    },
    {
      name: "LinkedIn",
      icon: <SiLinkedin className="w-5 h-5" />,
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
      color: "hover:bg-blue-700",
    },
    {
      name: "Pinterest",
      icon: <SiPinterest className="w-5 h-5" />,
      href: `https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedTitle}`,
      color: "hover:bg-red-600",
    },
    {
      name: "WhatsApp",
      icon: <SiWhatsapp className="w-5 h-5" />,
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      color: "hover:bg-green-500",
    },
    // {
    //   name: "Instagram",
    //   icon: <SiInstagram className="w-5 h-5" />,
    //   href: "https://www.instagram.com/", // IG doesn’t support direct web sharing
    //   color: "hover:bg-pink-600",
    // },
  ];

  return (
    <section className="w-full bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100 dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:text-gray-100 py-10 px-4 mt-24">
      <div className="max-w-7xl mx-auto text-center space-y-6">
        <div className="flex justify-center items-center gap-2">
          <Share2 className="w-6 h-6 text-purple-400 dark:text-yellow-400" />
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Share This Policy</h2>
        </div>

        <p className="text-gray-700 dark:text-gray-400 text-sm">
          Help others understand our {title} by sharing it across platforms
        </p>

        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {shareLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-5 py-3 bg-purple-600 dark:bg-gray-700 rounded-full transition-all ${link.color} hover:scale-105`}
            >
              {link.icon}
              <span className="text-sm font-medium">{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}