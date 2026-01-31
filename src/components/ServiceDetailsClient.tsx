"use client";

import { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  Clock,
  RotateCcw,
  Check,
  Star,
  X,
  AlertCircle,
  ChevronRight as ChevronRightIcon,
  Pause,
  Play,
  HelpCircle,
  Lightbulb,
  Shield,
  Zap,
  Globe,
  Smartphone,
  Calendar,
  CreditCard,
} from "lucide-react";
import Link from "next/link";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { RelatedServices } from './RelatedServices';
import type { Service, Package } from "@/data/services";
import { SiWhatsapp, SiGoogle, SiFiverr, SiLinkedin, SiFacebook, SiUpwork } from "react-icons/si";

interface ServiceDetailClientProps {
  service: Service;
  services: Service[]; // All services for related services section
}

// Configuration
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "923464784039";
const PAYMENT_GATEWAY_ENABLED = false; // Set to true when payment gateway is integrated

// Platform icon mapping
const platformIcons = {
  google: SiGoogle,
  fiverr: SiFiverr,
  linkedin: SiLinkedin,
  facebook: SiFacebook,
  upwork: SiUpwork,
};

const platformColors = {
  google: "text-blue-500",
  fiverr: "text-green-500",
  linkedin: "text-blue-600",
  facebook: "text-blue-700",
  upwork: "text-green-600",
};

// Country flag mapping
const countryFlags: Record<string, string> = {
  USA: "🇺🇸",
  Pakistan: "🇵🇰",
  UK: "🇬🇧",
  Canada: "🇨🇦",
  Australia: "🇦🇺",
  Germany: "🇩🇪",
  France: "🇫🇷",
  India: "🇮🇳",
  UAE: "🇦🇪",
  Spain: "🇪🇸",
};

// Helper function to get flag emoji
const getCountryFlag = (country: string): string => {
  return countryFlags[country] || "🌍";
};

export function ServiceDetailClient({ service, services }: ServiceDetailClientProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showConsultationModal, setShowConsultationModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [reviewRating, setReviewRating] = useState(5);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState<"success" | "error">("success");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalImages = service.images.length;
  const slideDuration = 5000;
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Toast notification helper
  const showToastNotification = (message: string, type: "success" | "error" = "success") => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  // IMPROVED: Better WhatsApp opening with popup blocker detection
  const openWhatsAppLink = (url: string, successMessage: string) => {
    const whatsappWindow = window.open(url, '_blank', 'noopener,noreferrer');
    
    if (!whatsappWindow || whatsappWindow.closed || typeof whatsappWindow.closed === 'undefined') {
      // Popup was blocked
      showToastNotification(
        '⚠️ Popup blocked! Please allow popups and try again.',
        'error'
      );
      
      // Create fallback link button
      const fallbackButton = document.createElement('a');
      fallbackButton.href = url;
      fallbackButton.target = '_blank';
      fallbackButton.rel = 'noopener noreferrer';
      fallbackButton.className = 'fixed bottom-4 right-4 z-[101] px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold shadow-2xl flex items-center gap-2 animate-bounce';
      fallbackButton.innerHTML = `
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        Open WhatsApp
      `;
      document.body.appendChild(fallbackButton);
      
      // Remove button after 10 seconds
      setTimeout(() => fallbackButton.remove(), 10000);
    } else {
      showToastNotification(successMessage, 'success');
    }
  };

  // Image slider with proper cleanup
  useEffect(() => {
    if (!isPlaying || isHovered || totalImages <= 1) {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
        progressIntervalRef.current = null;
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      return;
    }

    // Clear any existing intervals
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
    }

    // Reset progress
    setProgress(0);

    // Update progress bar
    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 100;
        }
        return prev + (100 / (slideDuration / 50));
      });
    }, 50);

    // Change slide after duration
    timeoutRef.current = setTimeout(() => {
      setSelectedImage((prev) => (prev + 1) % totalImages);
      setProgress(0);
    }, slideDuration);

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
        progressIntervalRef.current = null;
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [selectedImage, isPlaying, isHovered, totalImages]);

  const nextImage = () => {
    setProgress(0);
    setIsPlaying(false);
    setSelectedImage((prev) => (prev + 1) % totalImages);
    setTimeout(() => setIsPlaying(true), 100);
  };

  const prevImage = () => {
    setProgress(0);
    setIsPlaying(false);
    setSelectedImage((prev) => (prev - 1 + totalImages) % totalImages);
    setTimeout(() => setIsPlaying(true), 100);
  };

  const goToSlide = (index: number) => {
    setProgress(0);
    setIsPlaying(false);
    setSelectedImage(index);
    setTimeout(() => setIsPlaying(true), 100);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      setProgress(0);
    }
  };

  // FIXED: Enhanced WhatsApp contact with proper message formatting
  const handleWhatsAppContact = (pkg: Package) => {
    const message = encodeURIComponent(
      `👋 Hi! I'm interested in your services!\n\n` +
      `📋 *Service:* ${service.title}\n` +
      `📦 *Package:* ${pkg.name}\n` +
      `💰 *Price:* $${pkg.price}\n` +
      `⏱️ *Delivery Time:* ${pkg.deliveryTime}\n` +
      `🔄 *Revisions:* ${pkg.revisions}\n\n` +
      `✨ *Package Features:*\n${pkg.features.map((f, i) => `${i + 1}. ${f}`).join('\n')}\n\n` +
      `I'd like to know more about:\n` +
      `- Detailed process and timeline\n` +
      `- Any additional costs\n` +
      `- Portfolio/previous work examples\n` +
      `- How we can get started\n\n` +
      `Please provide more details. Thank you!`
    );
    
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    
    openWhatsAppLink(
      url,
      '💬 WhatsApp opened! The message is pre-filled. Please click "Send" in WhatsApp.'
    );
  };

  const handleOrderNow = (pkg: Package) => {
    setSelectedPackage(pkg);
    setShowPaymentModal(true);
  };

  const handleScheduleConsultation = () => {
    setShowConsultationModal(true);
  };

  const handleSubmitReview = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      setIsSubmitting(true);
      
      // Send to your API endpoint
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          serviceId: service.id,
          serviceName: service.title,
          name: formData.get('reviewName'),
          email: formData.get('reviewEmail'),
          rating: reviewRating,
          review: formData.get('reviewText'),
          country: formData.get('reviewCountry'),
          platform: 'google',
          date: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        showToastNotification('✅ Thank you for your review! It will appear after approval.', 'success');
        setShowReviewModal(false);
      } else {
        showToastNotification('❌ Something went wrong. Please try again.', 'error');
      }
    } catch (error) {
      console.error('Review submission error:', error);
      showToastNotification('❌ Failed to submit review. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // COMPLETE FIXED: Enhanced consultation submission with Google Calendar + WhatsApp
  const handleConsultationSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (isSubmitting) return; // Prevent double submission
    
    const formData = new FormData(e.currentTarget);
    
    const consultationData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: (formData.get('phone') as string) || 'Not provided',
      date: formData.get('date') as string,
      time: formData.get('time') as string,
      message: (formData.get('message') as string) || 'No additional message',
    };

    try {
      setIsSubmitting(true);
      
      // Show loading state
      showToastNotification('📅 Scheduling your consultation...', 'success');

      // Step 1: Send to your API to create Google Calendar event
      const response = await fetch('/api/schedule-consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          serviceId: service.id,
          serviceName: service.title,
          ...consultationData,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Close modal first
        setShowConsultationModal(false);
        
        // Show success notification
        showToastNotification(
          `✅ Consultation scheduled! Calendar invite sent to ${consultationData.email}`,
          'success'
        );

        // Step 2: Prepare WhatsApp message with calendar details
        const whatsappMessage = encodeURIComponent(
          `🗓️ *CONSULTATION SCHEDULED*\n\n` +
          `I've just scheduled a consultation and received the calendar invite!\n\n` +
          `📋 *Service:* ${service.title}\n` +
          `👤 *Name:* ${consultationData.name}\n` +
          `📧 *Email:* ${consultationData.email}\n` +
          `📱 *Phone:* ${consultationData.phone}\n` +
          `📅 *Date:* ${consultationData.date}\n` +
          `⏰ *Time:* ${consultationData.time}\n` +
          `💬 *Message:* ${consultationData.message}\n\n` +
          `${data.meetLink ? `🔗 *Google Meet Link:* ${data.meetLink}\n\n` : ''}` +
          `The calendar invite has been sent to my email (${consultationData.email}).\n\n` +
          `Looking forward to our consultation! Please confirm.`
        );
        
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

        // Open WhatsApp after a short delay
        setTimeout(() => {
          openWhatsAppLink(
            whatsappUrl,
            '💬 WhatsApp opened! Please send the pre-filled message to confirm your consultation.'
          );
        }, 1500);
        
      } else {
        throw new Error(data.error || 'Failed to schedule consultation');
      }
    } catch (error) {
      console.error('Consultation scheduling error:', error);
      
      // Close modal
      setShowConsultationModal(false);
      
      // Show error notification
      showToastNotification(
        '❌ Calendar booking failed. Opening WhatsApp for manual scheduling...',
        'error'
      );
      
      // Fallback to WhatsApp only (original behavior)
      const fallbackMessage = encodeURIComponent(
        `Hi! I'd like to schedule a consultation for *${service.title}*\n\n` +
        `👤 *Name:* ${consultationData.name}\n` +
        `📧 *Email:* ${consultationData.email}\n` +
        `📱 *Phone:* ${consultationData.phone}\n` +
        `📅 *Preferred Date:* ${consultationData.date}\n` +
        `⏰ *Preferred Time:* ${consultationData.time}\n` +
        `💬 *Message:* ${consultationData.message}\n\n` +
        `Please help me schedule this consultation. Thank you!`
      );
      
      const fallbackUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${fallbackMessage}`;
      
      setTimeout(() => {
        openWhatsAppLink(
          fallbackUrl,
          '💬 WhatsApp opened! Please send the message to schedule your consultation.'
        );
      }, 1000);
      
    } finally {
      setIsSubmitting(false);
    }
  };

  const getFaqIcon = (question: string) => {
    const lowerQuestion = question.toLowerCase();
    if (lowerQuestion.includes('technology') || lowerQuestion.includes('platform')) {
      return <Zap className="w-5 h-5 text-purple-400" />;
    } else if (lowerQuestion.includes('time') || lowerQuestion.includes('long')) {
      return <Clock className="w-5 h-5 text-blue-400" />;
    } else if (lowerQuestion.includes('mobile') || lowerQuestion.includes('responsive')) {
      return <Smartphone className="w-5 h-5 text-green-400" />;
    } else if (lowerQuestion.includes('hosting') || lowerQuestion.includes('domain')) {
      return <Globe className="w-5 h-5 text-orange-400" />;
    } else if (lowerQuestion.includes('after') || lowerQuestion.includes('support')) {
      return <Shield className="w-5 h-5 text-yellow-400" />;
    } else if (lowerQuestion.includes('integrate') || lowerQuestion.includes('third-party')) {
      return <Lightbulb className="w-5 h-5 text-pink-400" />;
    }
    return <HelpCircle className="w-5 h-5 text-gray-400" />;
  };

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
              <path d='M16.25 16.25v-10h-10v-.625c0-1.034.841-1.875 1.875-1.875H10V0H8.125A5.632 5.632 0 0 0 2.5 5.625v.625H0V10h2.5v6.25H0V20h8.75v-3.75h-2.5V10h6.285v6.25H10V20h8.75v-3.75h-2.5z' />
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
      case "facebook":
        return (
          <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded border border-blue-200 dark:border-blue-800">
            <svg className="w-3 h-3 fill-blue-600 dark:fill-blue-400" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <span className="text-xs text-blue-700 dark:text-blue-300">Facebook</span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:to-black text-gray-900 dark:text-white transition-colors duration-300">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-24 right-4 z-[100] animate-slide-in-right">
          <div className={`${
            toastType === 'success' 
              ? 'bg-green-500 border-green-600' 
              : 'bg-red-500 border-red-600'
          } border-2 text-white px-6 py-4 rounded-lg shadow-2xl max-w-md flex items-start gap-3`}>
            {toastType === 'success' ? (
              <Check className="w-6 h-6 shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-6 h-6 shrink-0 mt-0.5" />
            )}
            <div className="flex-1">
              <p className="font-semibold text-sm leading-relaxed">{toastMessage}</p>
            </div>
            <button
              onClick={() => setShowToast(false)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Google Structured Data (Rich Snippets) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": service.title,
            "description": service.description,
            "provider": {
              "@type": "Organization",
              "name": "Your Company Name",
              "url": typeof window !== 'undefined' ? window.location.origin : ''
            },
            "aggregateRating": service.testimonials && service.testimonials.length > 0 ? {
              "@type": "AggregateRating",
              "ratingValue": service.rating,
              "reviewCount": service.reviews,
              "bestRating": "5",
              "worstRating": "1"
            } : undefined,
            "review": service.testimonials?.map(testimonial => ({
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": testimonial.name
              },
              "datePublished": testimonial.date,
              "reviewBody": testimonial.review,
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": testimonial.rating,
                "bestRating": "5",
                "worstRating": "1"
              }
            })),
            "offers": service.packages.map(pkg => ({
              "@type": "Offer",
              "name": pkg.name,
              "price": pkg.price,
              "priceCurrency": "USD",
              "description": pkg.description,
              "availability": "https://schema.org/InStock"
            }))
          })
        }}
      />

      <div className="max-w-7xl mx-auto px-4 py-8 pt-32">
        {/* Back Button */}
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-6"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to Services
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
                <span>{service.category}</span>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>{service.rating}</span>
                  <span>({service.reviews} reviews)</span>
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl mb-5 leading-tight bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold">
                {service.title}
              </h1>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm border border-gray-300 dark:border-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              {PAYMENT_GATEWAY_ENABLED && (
                <button
                  onClick={() => handleOrderNow(service.packages[0])}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
                >
                  <CreditCard className="w-5 h-5" />
                  Order Now
                </button>
              )}

              <button
                onClick={handleScheduleConsultation}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
              >
                <Calendar className="w-5 h-5" />
                Schedule Consultation
              </button>

              <button
                onClick={() => handleWhatsAppContact(service.packages[0])}
                className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
              >
                <SiWhatsapp className="w-5 h-5" />
                WhatsApp
              </button>
            </div>

            {/* Image Slider */}
            <div
              className="relative overflow-hidden rounded-xl border border-gray-300 dark:border-gray-800 group shadow-xl"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-900">
                {service.images.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ${index === selectedImage ? 'opacity-100' : 'opacity-0'
                      }`}
                  >
                    <ImageWithFallback
                      src={image}
                      alt={`${service.title} preview ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}

                {totalImages > 1 && (
                  <>
                    {/* Navigation */}
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 md:left-4 z-10 h-10 w-10 rounded-full bg-black/50 text-white transition-all duration-300 hover:bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>

                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 md:right-4 z-10 h-10 w-10 rounded-full bg-black/50 text-white transition-all duration-300 hover:bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100"
                      aria-label="Next image"
                    >
                      <ChevronRightIcon className="h-5 w-5" />
                    </button>

                    <button
                      onClick={togglePlayPause}
                      className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-black/50 text-white transition-all duration-300 hover:bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100"
                      aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
                    >
                      {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
                    </button>

                    {/* Slide Counter */}
                    <div className="absolute bottom-20 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-lg text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {selectedImage + 1} / {totalImages}
                    </div>

                    {/* Thumbnail Navigation */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {service.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToSlide(index)}
                          className={`w-2 h-2 rounded-full transition-all ${index === selectedImage
                            ? 'bg-white w-8'
                            : 'bg-white/50 hover:bg-white/75'
                            }`}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>

                    {/* Progress Bar */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-700/50">
                      <div
                        className="h-full bg-gradient-to-r from-purple-600 to-pink-600 transition-all"
                        style={{
                          width: `${progress}%`,
                          transition: progress === 0 ? 'none' : 'width 50ms linear'
                        }}
                      />
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Custom Work Warning */}
            {service.customWorkNote && (
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-300 dark:border-yellow-600/50 rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-yellow-600 dark:text-yellow-400 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-yellow-800 dark:text-yellow-400 font-semibold mb-2">Important Note</h3>
                    <p className="text-yellow-700 dark:text-yellow-300 text-sm leading-relaxed">
                      {service.customWorkNote}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* What's Included */}
            <div className="bg-gray-50 dark:bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-gray-200 dark:border-gray-700/50 shadow-lg">
              <h2 className="text-2xl mb-4 font-bold">What's Included</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  {service.included.map((item) => (
                    <div key={item.name} className="flex items-center gap-2 mb-2">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700 dark:text-gray-300">{item.name}</span>
                    </div>
                  ))}
                </div>
                {service.notIncluded && service.notIncluded.length > 0 && (
                  <div>
                    <h3 className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-semibold">Not Included:</h3>
                    {service.notIncluded.map((item) => (
                      <div key={item.name} className="flex items-center gap-2 mb-2">
                        <X className="w-5 h-5 text-red-400" />
                        <span className="text-gray-500 dark:text-gray-400">{item.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Packages */}
            <div>
              <h2 className="text-2xl mb-6 font-bold">Choose Your Package</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {service.packages.map((pkg) => (
                  <div
                    key={pkg.name}
                    className={`bg-white dark:bg-white/5 backdrop-blur-md rounded-2xl p-6 border transition-all hover:border-purple-500/50 hover:shadow-xl relative ${pkg.isRecommended
                      ? "border-yellow-500 shadow-lg"
                      : "border-gray-200 dark:border-gray-700/50"
                      }`}
                  >
                    {pkg.badge && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
                        {pkg.badge}
                      </div>
                    )}
                    <h3 className="text-xl mb-2 font-bold">{pkg.name}</h3>
                    <div className="text-3xl mb-2 font-bold">${pkg.price}</div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{pkg.description}</p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span>{pkg.deliveryTime}</span>
                      </div>
                      {pkg.revisions !== "N/A" && (
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <RotateCcw className="w-4 h-4" />
                          <span>{pkg.revisions}</span>
                        </div>
                      )}
                    </div>

                    <ul className="space-y-2 mb-4 min-h-[200px]">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm">
                          <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {pkg.notIncluded && pkg.notIncluded.length > 0 && (
                      <div className="mb-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <p className="text-xs text-gray-500 mb-2">Not Included:</p>
                        <ul className="space-y-1">
                          {pkg.notIncluded.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-xs text-gray-500">
                              <X className="w-3 h-3 mt-0.5 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="space-y-2">
                      {PAYMENT_GATEWAY_ENABLED && (
                        <button
                          onClick={() => handleOrderNow(pkg)}
                          className={`w-full py-3 rounded-lg transition-colors flex items-center justify-center gap-2 font-semibold ${pkg.isRecommended
                            ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                            : "bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
                            }`}
                        >
                          <CreditCard className="w-4 h-4" />
                          Order Now
                        </button>
                      )}

                      <button
                        onClick={() => handleWhatsAppContact(pkg)}
                        className="w-full py-3 rounded-lg bg-green-600 hover:bg-green-700 text-white transition-colors flex items-center justify-center gap-2 font-semibold"
                      >
                        <SiWhatsapp className="w-4 h-4" />
                        WhatsApp
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div className="bg-gray-50 dark:bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-gray-200 dark:border-gray-700/50 shadow-lg">
              <h2 className="text-2xl mb-6 font-bold">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="space-y-2">
                {service.faqs.map((faq, idx) => (
                  <AccordionItem
                    key={idx}
                    value={`item-${idx}`}
                    className="border border-gray-200 dark:border-gray-800 rounded-lg px-4 bg-white dark:bg-gray-900/50"
                  >
                    <AccordionTrigger className="text-left hover:no-underline">
                      <div className="flex items-center gap-3">
                        {getFaqIcon(faq.question)}
                        <span className="font-semibold">{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-400">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Testimonials Section */}
            {service.testimonials && service.testimonials.length > 0 && (
              <div className="space-y-3 pt-6 border-t border-gray-200 dark:border-gray-700 overflow-hidden">
                <h2 className="text-2xl mb-6 font-bold text-center">What Clients Say</h2>
                <h4 className="text-sm text-purple-600 dark:text-purple-400 text-center mb-4">Recent Project Reviews</h4>

                {/* Row 1 - RTL */}
                <div className="relative">
                  <div className="flex gap-4 animate-marquee-reviews-rtl">
                    {[...service.testimonials, ...service.testimonials, ...service.testimonials].map((review, index) => {
                      const platform = (review as any).platform || 'google';

                      return (
                        <div key={`review1-${index}`} className="shrink-0 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-3 border border-purple-200 dark:border-purple-800 w-72">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs text-purple-700 dark:text-purple-300 font-semibold">{review.role}</span>
                            <div className="flex gap-0.5">
                              {Array.from({ length: review.rating }).map((_, i) => (
                                <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                          </div>
                          <p className="text-xs text-gray-700 dark:text-gray-300 mb-2 line-clamp-3">"{review.review}"</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">- {review.name}</p>
                              {review.country && (
                                <div className="group/flag relative inline-block">
                                  <span className="text-base cursor-pointer">{getCountryFlag(review.country)}</span>
                                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-0.5 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded opacity-0 group-hover/flag:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                                    {review.country}
                                  </div>
                                </div>
                              )}
                            </div>
                            {getPlatformIcon(platform)}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Row 2 - LTR */}
                <div className="relative">
                  <div className="flex gap-4 animate-marquee-reviews-ltr">
                    {[...service.testimonials, ...service.testimonials, ...service.testimonials].map((review, index) => {
                      const platform = (review as any).platform || 'linkedin';

                      return (
                        <div key={`review2-${index}`} className="shrink-0 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-3 border border-blue-200 dark:border-blue-800 w-72">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs text-blue-700 dark:text-blue-300 font-semibold">{review.role}</span>
                            <div className="flex gap-0.5">
                              {Array.from({ length: review.rating }).map((_, i) => (
                                <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                          </div>
                          <p className="text-xs text-gray-700 dark:text-gray-300 mb-2 line-clamp-3">"{review.review}"</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">- {review.name}</p>
                              {review.country && (
                                <div className="group/flag relative inline-block">
                                  <span className="text-base cursor-pointer">{getCountryFlag(review.country)}</span>
                                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-0.5 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded opacity-0 group-hover/flag:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                                    {review.country}
                                  </div>
                                </div>
                              )}
                            </div>
                            {getPlatformIcon(platform)}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* Leave a Review Section */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6 border border-purple-200 dark:border-purple-800 text-center">
              <h3 className="text-xl font-bold mb-2">Used Our Service?</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Share your experience and help others make informed decisions
              </p>
              <button
                onClick={() => setShowReviewModal(true)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
              >
                <Star className="w-5 h-5" />
                Leave a Review
              </button>
            </div>

            {/* Related Services Section */}
            <RelatedServices
              currentServiceId={service.id}
              services={services}
              maxServices={3}
            />
          </div>

          {/* Right Sidebar - Sticky */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <div className="bg-white dark:bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-gray-200 dark:border-gray-700/50 shadow-xl">
                <h3 className="text-xl mb-2 font-bold">{service.packages[0].name}</h3>
                <div className="text-4xl mb-4 font-bold">${service.packages[0].price}</div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Delivery Time</span>
                    <span className="font-semibold">{service.packages[0].deliveryTime}</span>
                  </div>
                  {service.packages[0].revisions !== "N/A" && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Revisions</span>
                      <span className="font-semibold">{service.packages[0].revisions}</span>
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  {PAYMENT_GATEWAY_ENABLED && (
                    <button
                      onClick={() => handleOrderNow(service.packages[0])}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-lg transition-colors font-semibold flex items-center justify-center gap-2 shadow-lg"
                    >
                      <CreditCard className="w-5 h-5" />
                      Order Now
                    </button>
                  )}

                  <button
                    onClick={() => handleWhatsAppContact(service.packages[0])}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition-colors font-semibold flex items-center justify-center gap-2 shadow-lg"
                  >
                    <SiWhatsapp className="w-5 h-5" />
                    WhatsApp
                  </button>
                </div>

                <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-4">
                  Payment via WhatsApp • Crypto accepted
                </p>
              </div>

              <div className="bg-white dark:bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-gray-200 dark:border-gray-700/50 shadow-xl">
                <h3 className="text-lg mb-4 font-bold">What you get</h3>
                <ul className="space-y-3">
                  {service.packages[0].features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Consultation Modal - FIXED */}
        {showConsultationModal && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-md w-full p-6 border border-gray-200 dark:border-gray-800 shadow-2xl">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold">Schedule Consultation</h3>
                <button
                  onClick={() => setShowConsultationModal(false)}
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  type="button"
                  disabled={isSubmitting}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleConsultationSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Preferred Date *</label>
                    <input
                      type="date"
                      name="date"
                      required
                      disabled={isSubmitting}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Time *</label>
                    <input
                      type="time"
                      name="time"
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={3}
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none disabled:opacity-50"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                  <p className="text-xs text-blue-700 dark:text-blue-300">
                    📅 You'll receive a Google Calendar invite with a Meet link at your email address
                  </p>
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setShowConsultationModal(false)}
                    disabled={isSubmitting}
                    className="flex-1 py-3 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-semibold disabled:opacity-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Calendar className="w-4 h-4" />
                    {isSubmitting ? 'Scheduling...' : 'Schedule'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Payment Modal */}
        {showPaymentModal && selectedPackage && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-md w-full p-6 border border-gray-200 dark:border-gray-800 shadow-2xl">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold">Complete Your Order</h3>
                <button
                  onClick={() => setShowPaymentModal(false)}
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  type="button"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="mb-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <h4 className="font-semibold mb-2">{selectedPackage.name}</h4>
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                  <span>Price:</span>
                  <span className="font-bold text-xl text-gray-900 dark:text-white">${selectedPackage.price}</span>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-center text-gray-600 dark:text-gray-400">
                  Payment gateway integration coming soon!
                </p>
                <button
                  onClick={() => {
                    handleWhatsAppContact(selectedPackage);
                    setShowPaymentModal(false);
                  }}
                  className="w-full py-3 rounded-lg bg-green-600 hover:bg-green-700 text-white transition-colors font-semibold flex items-center justify-center gap-2"
                >
                  <SiWhatsapp className="w-5 h-5" />
                  Continue with WhatsApp
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Review Submission Modal */}
        {showReviewModal && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-md w-full p-6 border border-gray-200 dark:border-gray-800 shadow-2xl max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold">Leave a Review</h3>
                <button
                  onClick={() => setShowReviewModal(false)}
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  type="button"
                  disabled={isSubmitting}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Your Name *</label>
                  <input
                    type="text"
                    name="reviewName"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    name="reviewEmail"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Country *</label>
                  <select
                    name="reviewCountry"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50"
                  >
                    <option value="">Select your country</option>
                    <option value="USA">🇺🇸 United States</option>
                    <option value="Pakistan">🇵🇰 Pakistan</option>
                    <option value="UK">🇬🇧 United Kingdom</option>
                    <option value="Canada">🇨🇦 Canada</option>
                    <option value="Australia">🇦🇺 Australia</option>
                    <option value="Germany">🇩🇪 Germany</option>
                    <option value="France">🇫🇷 France</option>
                    <option value="India">🇮🇳 India</option>
                    <option value="UAE">🇦🇪 UAE</option>
                    <option value="Spain">🇪🇸 Spain</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Rating *</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        type="button"
                        onClick={() => setReviewRating(rating)}
                        disabled={isSubmitting}
                        className="transition-transform hover:scale-110 disabled:opacity-50"
                      >
                        <Star
                          className={`w-8 h-8 ${rating <= reviewRating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300 dark:text-gray-600'
                            }`}
                        />
                      </button>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {reviewRating === 5 ? 'Excellent!' : reviewRating === 4 ? 'Good' : reviewRating === 3 ? 'Average' : reviewRating === 2 ? 'Poor' : 'Very Poor'}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Your Review *</label>
                  <textarea
                    name="reviewText"
                    required
                    rows={4}
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none disabled:opacity-50"
                    placeholder="Share your experience with this service..."
                  />
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                  <p className="text-xs text-blue-700 dark:text-blue-300">
                    ℹ️ Your review will be published on Google and displayed here after approval.
                  </p>
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setShowReviewModal(false)}
                    disabled={isSubmitting}
                    className="flex-1 py-3 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-semibold disabled:opacity-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transition-colors font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Star className="w-4 h-4" />
                    {isSubmitting ? 'Submitting...' : 'Submit Review'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

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

        @keyframes slide-in-right {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-marquee-reviews-rtl {
          animation: marquee-reviews-rtl 30s linear infinite;
        }

        .animate-marquee-reviews-ltr {
          animation: marquee-reviews-ltr 30s linear infinite;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.3s ease-out;
        }
      `}</style>
      </div>
    </div>
  );
}

export type { Service, Package };