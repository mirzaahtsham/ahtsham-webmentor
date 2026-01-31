"use client";

import Image from "next/image";
import { MegaMenuLayout } from "./MegaMenuLayout";
import { services } from "./menuData";
import SafeImage from "@/components/ui/SafeImage";

export type ServicesMenuProps = {
  isScrolled: boolean;
  onKeepOpen: () => void;
  onClose: () => void;
  onOpenModal: () => void;
};

export function ServicesMenu({
  isScrolled,
  onKeepOpen,
  onClose,
}: ServicesMenuProps) {
  return (
    <MegaMenuLayout
      isScrolled={isScrolled}
      onKeepOpen={onKeepOpen}
      onClose={onClose}
      title="Services"
      href="/services"
      sections={services}
      cta={{
        enabled: true,
        title: "Start Your Project",
        description: "Free consultation & project planning",
        buttonText: "Get Started",
        href: "/schedule",

        // ✅ CORRECT WAY (image support)
        media: (
          <div className="relative">
            <SafeImage
              src="/cta/services-cta.png"
              alt="Start your project"
              width={400}
              height={250}
              className="mb-4 rounded-lg object-cover"
            />
          </div>
          // ✅ ALTERNATIVE WAY (video support)
          //         <video
          //   autoPlay
          //   loop
          //   muted
          //   playsInline
          //   className="mb-4 rounded-lg"
          // >
          //   <source src="/videos/cta.mp4" type="video/mp4" />
          // </video>

          // ❌ INCORRECT WAY (SVGs don't animate well in this context)
          //         <svg className="mb-4 h-24 w-24 text-white animate-pulse">
          //   ...
          // </svg>

          // ❌ INCORRECT WAY (Lottie can be heavy and impact performance)
          // <Lottie animationData={ctaAnimation} loop />
        )
      }}
    />
  );
}
