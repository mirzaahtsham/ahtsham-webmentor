import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Youtube, 
  Facebook, 
  MessageCircle,
  MapPin,
  Instagram,
  TrendingUp
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Column 1 - Brand/Profile */}
          <div className="lg:col-span-1">
            <h3 className="text-xl mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Mirza Ahtsham
              </span>
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Developer & Trainer - Freelancing, Programming & AI. Top Rated Plus on Upwork with 10+ years experience.
            </p>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4" />
                <a href="mailto:contact@mirzaahtsham.com" className="hover:text-white transition-colors">
                  contact@mirzaahtsham.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Lahore, Dubai & Remote</span>
              </div>
            </div>
          </div>

          {/* Column 2 - Main Platforms */}
          <div>
            <h4 className="mb-4 text-white">Main Platforms</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-2">
                  <Youtube className="w-4 h-4" />
                  YouTube Channel
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Official Website
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Newsletter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"/>
                  </svg>
                  Schedule Meeting
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Freelance */}
          <div>
            <h4 className="mb-4 text-white">Freelance</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Upwork
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Fiverr
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Freelancer
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Toptal
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Community */}
          <div>
            <h4 className="mb-4 text-white">Community</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-2">
                  <Facebook className="w-4 h-4" />
                  Facebook Group
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Channel
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                  </svg>
                  Skool Community
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                  </svg>
                  Discord Server
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5 - Contact */}
          <div>
            <h4 className="mb-4 text-white">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-2">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-2">
                  <Twitter className="w-4 h-4" />
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom - Social Icons & Copyright */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <span className="text-gray-400 text-sm mr-2">Follow me:</span>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>

            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © {currentYear} Mirza Ahtsham. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
