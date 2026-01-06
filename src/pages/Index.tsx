import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import SlideNavigation from "@/components/presentation/SlideNavigation";
import HeroSlide from "@/components/presentation/slides/HeroSlide";
import BusinessInfoSlide from "@/components/presentation/slides/BusinessInfoSlide";
import ExecutiveSummarySlide from "@/components/presentation/slides/ExecutiveSummarySlide";
import IntroductionSlide from "@/components/presentation/slides/IntroductionSlide";
import PersonasSlide from "@/components/presentation/slides/PersonasSlide";
import ServicesSlide from "@/components/presentation/slides/ServicesSlide";
import VisionMissionSlide from "@/components/presentation/slides/VisionMissionSlide";
import GoalsSlide from "@/components/presentation/slides/GoalsSlide";
import StrategicPrioritiesSlide from "@/components/presentation/slides/StrategicPrioritiesSlide";
import OperationsWorkforceSlide from "@/components/presentation/slides/OperationsWorkforceSlide";
import TechnologyPartnershipsSlide from "@/components/presentation/slides/TechnologyPartnershipsSlide";
import FinancialPlanSlide from "@/components/presentation/slides/FinancialPlanSlide";
import ConclusionSlide from "@/components/presentation/slides/ConclusionSlide";

const slideNames = [
  "Welcome",
  "Business Info",
  "Executive Summary",
  "Introduction",
  "Who Benefits",
  "Services",
  "Vision & Mission",
  "Goals 2026",
  "Strategic Priorities",
  "Operations",
  "Technology",
  "Financial Plan",
  "Conclusion",
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLElement | null)[]>([]);
  const isScrolling = useRef(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const totalSlides = slideNames.length;

  const scrollToSlide = useCallback((index: number) => {
    if (slideRefs.current[index]) {
      isScrolling.current = true;
      slideRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
      setCurrentSlide(index);
      setTimeout(() => {
        isScrolling.current = false;
      }, 800);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling.current) return;

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      slideRefs.current.forEach((ref, index) => {
        if (ref) {
          const { offsetTop, offsetHeight } = ref;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSlide(index);
          }
        }
      });
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        scrollToSlide(Math.min(totalSlides - 1, currentSlide + 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        scrollToSlide(Math.max(0, currentSlide - 1));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentSlide, scrollToSlide, totalSlides]);

  const setSlideRef = (index: number) => (el: HTMLElement | null) => {
    slideRefs.current[index] = el;
  };

  return (
    <main ref={containerRef} className="relative bg-background">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-primary z-[100] origin-left"
        style={{ scaleX }}
      />

      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onNavigate={scrollToSlide}
        slideNames={slideNames}
      />

      <div className="flex flex-col">
        {[
          HeroSlide,
          BusinessInfoSlide,
          ExecutiveSummarySlide,
          IntroductionSlide,
          PersonasSlide,
          ServicesSlide,
          VisionMissionSlide,
          GoalsSlide,
          StrategicPrioritiesSlide,
          OperationsWorkforceSlide,
          TechnologyPartnershipsSlide,
          FinancialPlanSlide,
          ConclusionSlide,
        ].map((Slide, index) => (
          <section
            key={index}
            ref={setSlideRef(index)}
            className="min-h-screen w-full relative"
          >
            <Slide />
          </section>
        ))}
      </div>
    </main>
  );
};

export default Index;