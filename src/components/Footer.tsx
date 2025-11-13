import Link from "next/link";
import { 
  MapPin,
  TrendingUp
} from "lucide-react";
import { FaEnvelope } from "react-icons/fa";
import { 
  SiGithub,
  SiLinkedin,
  SiX,
  SiYoutube,
  SiFacebook,
  SiInstagram,
  SiTiktok,
  SiWhatsapp,
  SiUdemy,
  SiDiscord,
  SiBuymeacoffee,
  SiPayoneer,
  SiNamecheap,
  SiEnvato,


} from "react-icons/si";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 mb-12">
          {/* Column 1 - Brand/Profile */}
          <div className="lg:col-span-2">
            <h3 className="text-xl mb-4">
              <span className="text-transparent font-bold bg-clip-text bg-linear-to-r from-purple-400 to-pink-400">
                Mirza Ahtsham
              </span>
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Web Designer, Developer & Trainer. With 10+ years of experience in freelancing, frontend development, and digital solutions, I craft modern, high-performing websites that empower businesses and creators worldwide.
            </p>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <FaEnvelope className="w-4 h-4" />
                <a href="mailto:hello@ahtsham.me" className="text-gray-400 text-sm hover:text-white transition-colors">
                  hello@ahtsham.me
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
                <a href="https://www.youtube.com/channel/UCECmARzL9NsJiDpe01t6PWw??sub_confirmation=1" className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-2">
                  <SiYoutube className="w-4 h-4" />
                  YouTube Channel
                </a>
              </li>
              <li>
                <a href="https://learnwith.ahtsham.me" className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Learn With Ahtsham
                </a>
              </li>
              {/* <li>
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
              </li> */}
            </ul>
          </div>


          {/* Column 3 - Community */}
          <div>
            <h4 className="mb-4 text-white">Community</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://github.com/mirzaahtsham" target="blank" className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-2">
                  <SiGithub className="w-4 h-4" />
                  Github
                </a>
              </li>
              <li>
                <a href="https://www.udemy.com/user/mirza-ahtsham/" target="blank" className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-2">
                  <SiUdemy className="w-4 h-4" />
                  Udemy
                </a>
              </li>
              <li>
                <a href="https://discord.gg/4RnpzDGv" target="blank" className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-2">
                  <SiDiscord className="w-4 h-4" />
                  Discord Server
                </a>
              </li>
              <li>
                <a href="https://buymeacoffee.com/mirzaahtsham/" target="blank" className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-2">
                  <SiBuymeacoffee className="w-4 h-4" />
                  Buy Me a Coffee
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Policies */}
          <div>
            <h4 className="mb-4 text-white">Policies</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/policies/privacy-policy" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/policies/terms-and-conditions" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="/policies/disclaimer" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Disclaimer
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Help?
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5 - Affiliated Links */}
          <div>
            <h4 className="mb-4 text-white">Partner Platforms</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://1.envato.market/R572r2" target="blank" className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-2">
                  <SiEnvato className="w-4 h-4" />
                  Themeforest
                </a>
              </li>
              <li>
                <a href="https://namecheap.pxf.io/EaBbVP" target="blank" className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-2">
                  <SiNamecheap className="w-4 h-4" />
                  Namecheap
                </a>
              </li>
              <li>
                <a href="http://share.payoneer.com/nav/pUOXZUF_URk3k2r_LSC6J4Ov-GZOhCFvmmn56njGAvzRbPVqHuEJtgmOzrcXwWxlRZOi1daUkfq-PgR20d5IyA2" target="blank" className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-2">
                  <SiPayoneer className="w-4 h-4" />
                  Payoneer
                </a>
              </li>
              <li>
                <a href="https://www.buymeacoffee.com/invite/mirzaahtsham" target="blank" className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-2">
                  <SiBuymeacoffee className="w-4 h-4" />
                  BMCA Invite
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
                href="https://www.youtube.com/channel/UCECmARzL9NsJiDpe01t6PWw??sub_confirmation=1" target="blank" 
                className="text-gray-400 hover:text-white transition-colors hover:scale-125"
                aria-label="YouTube"
              >
                <SiYoutube className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/mirzaahtsham/" target="blank" 
                className="text-gray-400 hover:text-white transition-colors hover:scale-125"
                aria-label="LinkedIn"
              >
                <SiLinkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/ahtshamwebdesigngenius/" target="blank" 
                className="text-gray-400 hover:text-white transition-colors hover:scale-125"
                aria-label="Facebook"
              >
                <SiFacebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/WebsiteDesignGenius/" target="blank" 
                className="text-gray-400 hover:text-white transition-colors hover:scale-125"
                aria-label="Instagram"
              >
                <SiInstagram className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com/websdesignwala/" target="blank" 
                className="text-gray-400 hover:text-white transition-colors hover:scale-125"
                aria-label="Twitter"
              >
                <SiX className="w-5 h-5" />
              </a>
              <a 
                href="https://www.tiktok.com/@webdesigngenius/" target="blank" 
                className="text-gray-400 hover:text-white transition-colors hover:scale-125"
                aria-label="TikTok"
              >
                <SiTiktok className="w-5 h-5" />
                {/* <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg> */}
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
