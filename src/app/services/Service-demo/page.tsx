"use client";

import { useState } from "react";
import { HeaderWithMegaMenu } from "@/components/Header/HeaderWithMegaMenu";
import { Footer } from "@/components/Footer";
import { Service } from "@/data/services"; // if you created that file earlier

interface ServiceDetailProps {
  serviceId?: string;
  serviceData?: Service; // ✅ add this line
}

import {
  ChevronLeft,
  Clock,
  RotateCcw,
  Check,
  Heart,
  Star,
} from "lucide-react";
import Link from "next/link";
import { ImageWithFallback } from "../../../components/figma/ImageWithFallback";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";
import { ContactFormModal } from "../../../components/ContactFormModal";
import { useRouter } from "next/navigation";
import { Header } from "@radix-ui/react-accordion";

interface Package {
  name: string;
  price: number;
  description: string;
  deliveryTime: string;
  revisions: string;
  features: string[];
}

interface ServiceDetailProps {
  serviceId?: string;
  serviceData?: Service; // ✅ add this line
}

export default function ServiceDetail({
  serviceId,
}: ServiceDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [contactModalOpen, setContactModalOpen] =
    useState(false);
  const [selectedPackage, setSelectedPackage] =
    useState<Package | null>(null);

  // Mock service data - in real app, this would come from props or API
  const service = {
    id: "react-website",
    title: "Modern React Website Development",
    category: "Web Development",
    rating: 4.9,
    reviews: 142,
    description:
      "I will design professional modern react website development, next js, node js, firebase, supabase. Teaching high demanding skills online and offline.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Responsive",
    ],
    images: [
      "https://images.unsplash.com/photo-1565229284535-2cbbe3049123?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwcHJvZ3JhbW1pbmd8ZW58MXx8fHwxNzYyMjI0NjM4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjIxODkzODZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjIyNjk5NTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    included: [
      { name: "Modern React/Next.js", icon: Check },
      { name: "Responsive Design", icon: Check },
      { name: "Performance Optimized", icon: Check },
    ],
    notIncluded: [
      { name: "TypeScript", icon: Check },
      { name: "SEO Optimized", icon: Check },
    ],
    packages: [
      {
        name: "Basic Website",
        price: 500,
        description:
          "Perfect for small projects and personal websites",
        deliveryTime: "7 days",
        revisions: "3 Revisions",
        features: [
          "5 Page website",
          "3 pages Features",
          "Responsive design",
          "Basic SEO setup",
          "Contact form",
        ],
      },
      {
        name: "Professional",
        price: 1200,
        description: "Best for growing businesses",
        deliveryTime: "14 days",
        revisions: "5 Revisions",
        features: [
          "15 Page website",
          "10 pages Features",
          "Advanced animations",
          "CMS Integration",
          "API Integration",
          "Advanced SEO",
          "6 Months support",
        ],
      },
      {
        name: "Enterprise Solution",
        price: 2500,
        description: "Complete solution for large projects",
        deliveryTime: "30 days",
        revisions: "Unlimited",
        features: [
          "30 Pages website",
          "20 pages Features",
          "Custom functionality",
          "Database Integration",
          "Admin Dashboard",
          "User Authentication",
          "Payment Integration",
          "1 Year support",
        ],
      },
    ],
    faqs: [
      {
        question:
          "What technologies do you use for web development?",
        answer:
          "I primarily use modern technologies like React, Next.js, TypeScript, and Tailwind CSS. For backend, I work with Node.js, Firebase, and Supabase.",
      },
      {
        question:
          "How long does it take to complete a website?",
        answer:
          "It depends on the package you choose. Basic websites take 7 days, Professional packages take 14 days, and Enterprise solutions take 30 days.",
      },
      {
        question: "Will my website be mobile-friendly?",
        answer:
          "Absolutely! All websites I develop are fully responsive and optimized for all devices including mobile, tablet, and desktop.",
      },
      {
        question: "Do you provide hosting and domain setup?",
        answer:
          "Yes, I can help you with hosting setup and domain configuration. I work with platforms like Vercel, Netlify, and traditional hosting providers.",
      },
      {
        question: "What happens after my website is completed?",
        answer:
          "You'll receive full source code, documentation, and support based on your package. I also offer maintenance packages if needed.",
      },
      {
        question: "Can you integrate third-party services?",
        answer:
          "Yes, I can integrate various third-party services like payment gateways, analytics, CRM systems, and more.",
      },
    ],
    testimonials: [
      {
        name: "Sarah Johnson",
        role: "Founder, TechStart",
        avatar: "SJ",
        rating: 5,
        review:
          "Created excellent on-time delivery, professional work, and was very responsive. Great experience working together.",
        date: "January 15, 2024",
      },
      {
        name: "Michael Chen",
        role: "CEO, Digital Agency",
        avatar: "MC",
        rating: 5,
        review:
          "I'm impressed, timely, and quality work makes your site responsive. The attention to detail was amazing.",
        date: "January 8, 2024",
      },
      {
        name: "Emily Martinez",
        role: "Product Manager",
        avatar: "EM",
        rating: 5,
        review:
          "The website looks incredibly stunning and works perfectly. Highly recommend for any web project!",
        date: "December 28, 2023",
      },
    ],
  };

  const handleContactClick = (pkg: Package) => {
    setSelectedPackage(pkg);
    setContactModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-900 to-black text-white">
      <HeaderWithMegaMenu />
      <div className="max-w-7xl mx-auto px-4 py-8 pt-45">
        {/* Back Button */}
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to Services
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Content - Scrollable */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                <span>{service.category}</span>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>{service.rating}</span>
                  <span>({service.reviews} reviews)</span>
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl mb-4 bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {service.title}
              </h1>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Image Gallery */}
            <div className="space-y-3">
              <div className="relative rounded-xl overflow-hidden border border-gray-800 aspect-video">
                <ImageWithFallback
                  src={service.images[selectedImage]}
                  alt={`${service.title} preview ${selectedImage + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-lg text-sm">
                  {selectedImage + 1} / {service.images.length}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {service.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === idx
                        ? "border-purple-500"
                        : "border-gray-800 hover:border-gray-700"
                    }`}
                  >
                    <ImageWithFallback
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full aspect-video object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* What's Included */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50">
              <h2 className="text-2xl mb-4">What's Included</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  {service.included.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center gap-2 mb-2"
                    >
                      <Check className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
                <div>
                  {service.notIncluded.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center gap-2 mb-2"
                    >
                      <Check className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Choose Your Package */}
            <div>
              <h2 className="text-2xl mb-6">
                Choose Your Package
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {service.packages.map((pkg, idx) => (
                  <div
                    key={pkg.name}
                    className={`bg-white/5 backdrop-blur-md rounded-2xl p-6 border transition-all hover:border-purple-500/50 ${
                      idx === 1
                        ? "border-yellow-500/50 relative"
                        : "border-gray-700/50"
                    }`}
                  >
                    {idx === 1 && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-500 text-black px-4 py-1 rounded-full text-sm">
                        Best Value
                      </div>
                    )}
                    <h3 className="text-xl mb-2">{pkg.name}</h3>
                    <div className="text-3xl mb-2">
                      ${pkg.price}
                    </div>
                    <p className="text-gray-400 text-sm mb-4">
                      {pkg.description}
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span>{pkg.deliveryTime} delivery</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <RotateCcw className="w-4 h-4" />
                        <span>{pkg.revisions}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {pkg.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm"
                        >
                          <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                          <span className="text-gray-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => handleContactClick(pkg)}
                      className={`w-full py-3 rounded-lg transition-colors ${
                        idx === 1
                          ? "bg-yellow-500 hover:bg-yellow-600 text-black"
                          : "bg-gray-800 hover:bg-gray-700 text-white border border-gray-700"
                      }`}
                    >
                      Choose {pkg.name}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50">
              <h2 className="text-2xl mb-6">
                Frequently Asked Questions
              </h2>
              <Accordion
                type="single"
                collapsible
                className="space-y-2"
              >
                {service.faqs.map((faq, idx) => (
                  <AccordionItem
                    key={idx}
                    value={`item-${idx}`}
                    className="border border-gray-800 rounded-lg px-4 bg-gray-900/50"
                  >
                    <AccordionTrigger className="text-left hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-400">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Testimonials */}
            <div>
              <h2 className="text-2xl mb-6">
                What Clients Say
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {service.testimonials.map((testimonial) => (
                  <div
                    key={testimonial.name}
                    className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-12 h-12 rounded-full bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center shrink-0">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h4 className="text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-400">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-1 mb-3">
                      {[...Array(testimonial.rating)].map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        ),
                      )}
                    </div>
                    <p className="text-gray-300 text-sm mb-3">
                      {testimonial.review}
                    </p>
                    <p className="text-xs text-gray-500">
                      {testimonial.date}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional components can be added here */}
          </div>

          {/* Right Sidebar - Sticky */}
          <div className="lg:col-span-1">
            <div className="sticky top-25 space-y-4">
              {/* Pricing Card */}
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50">
                <h3 className="text-xl mb-2">
                  {service.packages[0].name}
                </h3>
                <div className="text-4xl mb-4">
                  ${service.packages[0].price}
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">
                      Delivery Time
                    </span>
                    <span className="text-white">
                      {service.packages[0].deliveryTime}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">
                      Revisions
                    </span>
                    <span className="text-white">
                      {service.packages[0].revisions}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() =>
                    handleContactClick(service.packages[0])
                  }
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-black py-3 rounded-lg transition-colors mb-3"
                >
                  Contact for Project
                </button>
                <button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-lg transition-colors border border-gray-700">
                  Schedule a Meeting
                </button>
              </div>

              {/* What You Get */}
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50">
                <h3 className="text-lg mb-4">What you get</h3>
                <ul className="space-y-3">
                  {service.packages[0].features.map(
                    (feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm"
                      >
                        <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                        <span className="text-gray-300">
                          {feature}
                        </span>
                      </li>
                    ),
                  )}
                </ul>
              </div>

              {/* Additional components can be added here */}
            </div>
          </div>
        </div>
      </div>
<Footer />
      {/* Contact Modal */}
      <ContactFormModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        selectedPackage={selectedPackage?.name}
      />
    </div>
  );
}