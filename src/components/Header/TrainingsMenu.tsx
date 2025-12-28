"use client";

import { MegaMenuLayout } from "./MegaMenuLayout";
import { TRAININGS_MENU } from "./menuData";

export type TrainingsMenuProps = {
  isScrolled: boolean;
  onKeepOpen: () => void;
  onClose: () => void;
};

export function TrainingsMenu({
  isScrolled,
  onKeepOpen,
  onClose,
}: TrainingsMenuProps) {
  return (
    <MegaMenuLayout
      isScrolled={isScrolled}
      onKeepOpen={onKeepOpen}
      onClose={onClose}
      title="Trainings"
      href="/trainings"
      sections={TRAININGS_MENU}
      cta={{
        enabled: true,
        title: "Start Learning",
        description: "Professional training with real projects",
        buttonText: "View Trainings",
        href: "/trainings",
      }}
    />
  );
}
