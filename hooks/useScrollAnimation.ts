import { useEffect, useState } from "react";

export const useScrollAnimation = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [targetSection, setTargetSection] = useState<string | null>(null);

  const scrollToSection = (elementId: string) => {
    setIsScrolling(true);
    setTargetSection(elementId);

    // Add fade out effect
    document.body.style.opacity = "0.3";
    document.body.style.transition = "opacity 0.3s ease-out";

    setTimeout(() => {
      const element = document.getElementById(elementId);
      if (element) {
        const offset = 80; // Height of fixed header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }

      // Fade back in
      setTimeout(() => {
        document.body.style.opacity = "1";
        document.body.style.transition = "opacity 0.5s ease-in";
        setIsScrolling(false);
        setTargetSection(null);
      }, 300);
    }, 300);
  };

  return { scrollToSection, isScrolling, targetSection };
};
