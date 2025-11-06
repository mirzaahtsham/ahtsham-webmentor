"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "./ui/select";
import { Star } from "lucide-react";

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage?: string; // ✅ add this line
}

// Floating Label Input Component
const FloatingInput = ({
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false
}: {
  id: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) => {
  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder=" "
        className="peer w-full px-4 pt-6 pb-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent transition-all text-foreground dark:text-white"
      />
      <label
        htmlFor={id}
        className="absolute left-4 top-4 text-gray-500 dark:text-gray-400 transition-all duration-200 pointer-events-none
        peer-focus:top-2 peer-focus:text-xs peer-focus:text-purple-600 dark:peer-focus:text-purple-400
        peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-purple-600 dark:peer-[:not(:placeholder-shown)]:text-purple-400"
      >
        {placeholder}
      </label>
    </div>
  );
};

// Floating Label Textarea Component
const FloatingTextarea = ({
  id,
  placeholder,
  value,
  onChange,
  required = false,
  rows = 4
}: {
  id: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  rows?: number;
}) => {
  return (
    <div className="relative">
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        required={required}
        placeholder=" "
        rows={rows}
        className="peer w-full px-4 pt-6 pb-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent transition-all resize-none text-foreground dark:text-white"
      />
      <label
        htmlFor={id}
        className="absolute left-4 top-4 text-gray-500 dark:text-gray-400 transition-all duration-200 pointer-events-none
        peer-focus:top-2 peer-focus:text-xs peer-focus:text-purple-600 dark:peer-focus:text-purple-400
        peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-purple-600 dark:peer-[:not(:placeholder-shown)]:text-purple-400"
      >
        {placeholder}
      </label>
    </div>
  );
};

// Floating Label Select Component
const FloatingSelect = ({
  id,
  placeholder,
  value,
  onChange,
  options
}: {
  id: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
}) => {
  return (
    <div className="relative">
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className={`w-full px-4 pt-6 pb-2 bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700 ${value ? 'text-foreground dark:text-white' : 'text-transparent'}`}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <label
        htmlFor={id}
        className={`absolute left-4 transition-all duration-200 pointer-events-none ${value
            ? 'top-2 text-xs text-purple-600 dark:text-purple-400'
            : 'top-4 text-gray-500 dark:text-gray-400'
          }`}
      >
        {placeholder}
      </label>
    </div>
  );
};

export function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    webDevType: "",
    budget: "",
    timeline: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    onClose();
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Review data for marquee with platform icons
  const reviews = [
    { project: "E-Commerce Platform", rating: 5, client: "TechStore Inc", feedback: "Exceeded expectations! Revenue increased by 200%.", platform: "linkedin" },
    { project: "Mobile Banking App", rating: 5, client: "FinanceHub", feedback: "Flawless execution. Users love the interface!", platform: "google" },
    { project: "Real Estate Portal", rating: 5, client: "PropertyPro", feedback: "Best developer we've worked with. Highly recommended!", platform: "fiverr" },
    { project: "SaaS Dashboard", rating: 5, client: "CloudTech", feedback: "Delivered on time with exceptional quality.", platform: "upwork" },
    { project: "Healthcare System", rating: 5, client: "MediCare Plus", feedback: "Professional, efficient, and reliable developer.", platform: "linkedin" },
  ];

  const reviews2 = [
    { project: "Restaurant Website", rating: 5, client: "FoodieDelight", feedback: "Amazing work! Online orders tripled!", platform: "google" },
    { project: "Fitness App", rating: 5, client: "FitLife", feedback: "User engagement increased by 300%. Perfect!", platform: "fiverr" },
    { project: "Education Platform", rating: 5, client: "LearnHub", feedback: "Students and teachers absolutely love it!", platform: "upwork" },
    { project: "Travel Booking Site", rating: 5, client: "WanderWays", feedback: "Stunning design and smooth functionality.", platform: "linkedin" },
    { project: "CRM System", rating: 5, client: "SalesPro", feedback: "Streamlined our entire workflow. Excellent!", platform: "google" },
  ];

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "linkedin":
        return (
          <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded border border-blue-200 dark:border-blue-800">
            <svg className="w-3 h-3 fill-blue-600 dark:fill-blue-400" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <span className="text-xs text-blue-700 dark:text-blue-300">LinkedIn</span>
          </div>
        );
      case "google":
        return (
          <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-red-100 dark:bg-red-900/30 rounded border border-red-200 dark:border-red-800">
            <svg className="w-3 h-3" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            <span className="text-xs text-red-700 dark:text-red-300">Google</span>
          </div>
        );
      case "fiverr":
        return (
          <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-100 dark:bg-green-900/30 rounded border border-green-200 dark:border-green-800">
            <svg className="w-3 h-3 fill-green-600 dark:fill-green-400" viewBox="0 0 24 24">
              <circle cx="4" cy="4" r="2" />
              <path d="M8 1h2v8H8zm4 0h2v3h-2zm4 0h2v5h-2zM0 9h24v2H0zm8 3h2v11H8zm4 0h2v8h-2zm4 0h2v6h-2z" />
            </svg>
            <span className="text-xs text-green-700 dark:text-green-300">Fiverr</span>
          </div>
        );
      case "upwork":
        return (
          <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-100 dark:bg-emerald-900/30 rounded border border-emerald-200 dark:border-emerald-800">
            <svg className="w-3 h-3 fill-emerald-600 dark:fill-emerald-400" viewBox="0 0 24 24">
              <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
            </svg>
            <span className="text-xs text-emerald-700 dark:text-emerald-300">Upwork</span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900">
        <DialogHeader>
          <DialogTitle className="text-3xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Let's Start Your Project
          </DialogTitle>
          <DialogDescription className="text-muted-foreground dark:text-gray-400">
            Fill out the form below and I'll get back to you within 24 hours.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-foreground dark:text-white flex items-center gap-2">
              <span className="text-purple-600">01.</span> Personal Information
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <FloatingInput
                id="name"
                placeholder="Full Name *"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                required
              />

              <FloatingInput
                id="email"
                type="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <FloatingInput
                id="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={(e) => handleChange("company", e.target.value)}
              />

              <FloatingInput
                id="phone"
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
              />
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-4">
            <h3 className="text-foreground dark:text-white flex items-center gap-2">
              <span className="text-purple-600">02.</span> Project Details
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <FloatingSelect
                id="projectType"
                placeholder="Project Type *"
                value={formData.projectType}
                onChange={(value) => handleChange("projectType", value)}
                options={[
                  { value: "web-development", label: "Web Development" },
                  { value: "mobile-app", label: "Mobile App" },
                  { value: "ui-ux-design", label: "UI/UX Design" },
                  { value: "content-creation", label: "Content Creation" },
                  { value: "consulting", label: "Consulting" },
                  { value: "other", label: "Other" },
                ]}
              />

              {/* Conditional Web Development Type Field */}
              {formData.projectType === "web-development" && (
                <FloatingSelect
                  id="webDevType"
                  placeholder="Web Development Type *"
                  value={formData.webDevType}
                  onChange={(value) => handleChange("webDevType", value)}
                  options={[
                    { value: "wordpress", label: "WordPress" },
                    { value: "shopify", label: "Shopify" },
                    { value: "other-cms", label: "Other CMS" },
                    { value: "custom-development", label: "Custom Development" },
                  ]}
                />
              )}

              {formData.projectType !== "web-development" && (
                <FloatingSelect
                  id="budget"
                  placeholder="Budget Range *"
                  value={formData.budget}
                  onChange={(value) => handleChange("budget", value)}
                  options={[
                    { value: "under-5k", label: "Under $5,000" },
                    { value: "5k-10k", label: "$5,000 - $10,000" },
                    { value: "10k-25k", label: "$10,000 - $25,000" },
                    { value: "25k-50k", label: "$25,000 - $50,000" },
                    { value: "50k-plus", label: "$50,000+" },
                  ]}
                />
              )}
            </div>

            {/* Second Row for Web Development */}
            {formData.projectType === "web-development" && (
              <div className="grid md:grid-cols-2 gap-4">
                <FloatingSelect
                  id="budget"
                  placeholder="Budget Range *"
                  value={formData.budget}
                  onChange={(value) => handleChange("budget", value)}
                  options={[
                    { value: "under-5k", label: "Under $5,000" },
                    { value: "5k-10k", label: "$5,000 - $10,000" },
                    { value: "10k-25k", label: "$10,000 - $25,000" },
                    { value: "25k-50k", label: "$25,000 - $50,000" },
                    { value: "50k-plus", label: "$50,000+" },
                  ]}
                />

                <FloatingSelect
                  id="timeline"
                  placeholder="Expected Timeline *"
                  value={formData.timeline}
                  onChange={(value) => handleChange("timeline", value)}
                  options={[
                    { value: "asap", label: "ASAP (1-2 weeks)" },
                    { value: "1-month", label: "1 Month" },
                    { value: "2-3-months", label: "2-3 Months" },
                    { value: "3-6-months", label: "3-6 Months" },
                    { value: "flexible", label: "Flexible" },
                  ]}
                />
              </div>
            )}

            {/* Timeline for non-web-development */}
            {formData.projectType !== "web-development" && (
              <FloatingSelect
                id="timeline"
                placeholder="Expected Timeline *"
                value={formData.timeline}
                onChange={(value) => handleChange("timeline", value)}
                options={[
                  { value: "asap", label: "ASAP (1-2 weeks)" },
                  { value: "1-month", label: "1 Month" },
                  { value: "2-3-months", label: "2-3 Months" },
                  { value: "3-6-months", label: "3-6 Months" },
                  { value: "flexible", label: "Flexible" },
                ]}
              />
            )}

            <FloatingTextarea
              id="description"
              placeholder="Project Description *"
              value={formData.description}
              onChange={(e) => handleChange("description", e.target.value)}
              required
              rows={5}
            />
          </div>

          {/* Submit Button */}
          <div className="flex gap-3 pt-4">
            <Button
              type="submit"
              className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
            >
              Submit Project Request
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="px-8 border-gray-300 dark:border-gray-700"
            >
              Cancel
            </Button>
          </div>
        </form>

        {/* Reviews Marquee - Moved to Bottom */}
        <div className="space-y-3 mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 overflow-hidden">
          <h4 className="text-sm text-purple-600 dark:text-purple-400 text-center mb-4">Recent Project Reviews</h4>

          {/* Row 1 - RTL */}
          <div className="relative">
            <div className="flex gap-4 animate-marquee-reviews-rtl">
              {[...reviews, ...reviews, ...reviews].map((review, index) => (
                <div key={`review1-${index}`} className="flex-shrink-0 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-3 border border-purple-200 dark:border-purple-800 w-72">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-purple-700 dark:text-purple-300">{review.project}</span>
                    <div className="flex gap-0.5">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 dark:text-gray-300 mb-2">"{review.feedback}"</p>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-500 dark:text-gray-500">- {review.client}</p>
                    {getPlatformIcon(review.platform)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - LTR */}
          <div className="relative">
            <div className="flex gap-4 animate-marquee-reviews-ltr">
              {[...reviews2, ...reviews2, ...reviews2].map((review, index) => (
                <div key={`review2-${index}`} className="flex-shrink-0 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-3 border border-blue-200 dark:border-blue-800 w-72">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-blue-700 dark:text-blue-300">{review.project}</span>
                    <div className="flex gap-0.5">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 dark:text-gray-300 mb-2">"{review.feedback}"</p>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-500 dark:text-gray-500">- {review.client}</p>
                    {getPlatformIcon(review.platform)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes marquee-reviews-rtl {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.33%);
            }
          }

          @keyframes marquee-reviews-ltr {
            0% {
              transform: translateX(-33.33%);
            }
            100% {
              transform: translateX(0);
            }
          }

          .animate-marquee-reviews-rtl {
            animation: marquee-reviews-rtl 30s linear infinite;
          }

          .animate-marquee-reviews-ltr {
            animation: marquee-reviews-ltr 30s linear infinite;
          }
        `}</style>
      </DialogContent>
    </Dialog>
  );
}
