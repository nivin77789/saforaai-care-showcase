import { useEffect, useRef, useState, useCallback, Suspense, lazy, useMemo } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import SlideNavigation from "@/components/presentation/SlideNavigation";
import DecorativeBackground from "@/components/presentation/DecorativeBackground";

// Lazy load slides for performance
const HeroSlide = lazy(() => import("@/components/presentation/slides/HeroSlide"));
const BusinessInfoSlide = lazy(() => import("@/components/presentation/slides/BusinessInfoSlide"));
const ExecutiveSummarySlide = lazy(() => import("@/components/presentation/slides/ExecutiveSummarySlide"));
const MarketAnalysisSlide = lazy(() => import("@/components/presentation/slides/MarketAnalysisSlide"));
const IntroductionSlide = lazy(() => import("@/components/presentation/slides/IntroductionSlide"));
const PersonasSlide = lazy(() => import("@/components/presentation/slides/PersonasSlide"));
const ServicesSlide = lazy(() => import("@/components/presentation/slides/ServicesSlide"));
const LifestyleMobilitySlide = lazy(() => import("@/components/presentation/slides/LifestyleMobilitySlide"));
const ValuesSlide = lazy(() => import("@/components/presentation/slides/ValuesSlide"));
const VisionMissionSlide = lazy(() => import("@/components/presentation/slides/VisionMissionSlide"));
const GoalsSlide = lazy(() => import("@/components/presentation/slides/GoalsSlide"));
const StrategicPrioritiesSlide = lazy(() => import("@/components/presentation/slides/StrategicPrioritiesSlide"));
const OperationsWorkforceSlide = lazy(() => import("@/components/presentation/slides/OperationsWorkforceSlide"));
const TechnologyPartnershipsSlide = lazy(() => import("@/components/presentation/slides/TechnologyPartnershipsSlide"));
const FinancialPlanSlide = lazy(() => import("@/components/presentation/slides/FinancialPlanSlide"));
const BusinessProfitSlide = lazy(() => import("@/components/presentation/slides/BusinessProfitSlide"));
const AdvantagesSlide = lazy(() => import("@/components/presentation/slides/AdvantagesSlide"));
const ConclusionSlide = lazy(() => import("@/components/presentation/slides/ConclusionSlide"));

const slideNames = [
  "Welcome",
  "Business Info",
  "Executive Summary",
  "Market Analysis",
  "Introduction",
  "Who Benefits",
  "Services",
  "Lifestyle & Mobility",
  "Core Values",
  "Vision & Mission",
  "Goals 2026",
  "Strategic Priorities",
  "Operations",
  "Technology",
  "Strategic Advantages",
  "Financial Plan",
  "Economic Potential",
  "Conclusion",
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLElement | null)[]>([]);
  const isScrolling = useRef(false);

  const { scrollXProgress } = useScroll({
    container: containerRef
  });
  const scaleX = useSpring(scrollXProgress, {
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

      // Reset isScrolling after animation completes
      setTimeout(() => {
        isScrolling.current = false;
      }, 1000);
    }
  }, []);

  const slides = useMemo(() => [
    HeroSlide,
    BusinessInfoSlide,
    ExecutiveSummarySlide,
    MarketAnalysisSlide,
    IntroductionSlide,
    PersonasSlide,
    ServicesSlide,
    LifestyleMobilitySlide,
    ValuesSlide,
    VisionMissionSlide,
    GoalsSlide,
    StrategicPrioritiesSlide,
    OperationsWorkforceSlide,
    TechnologyPartnershipsSlide,
    AdvantagesSlide,
    FinancialPlanSlide,
    BusinessProfitSlide,
    ConclusionSlide,
  ], []);

  useEffect(() => {
    const options = {
      root: null, // observation is relative to the viewport
      rootMargin: "0px",
      threshold: 0.5, // Slide is considered active when 50% visible
    };

    const observer = new IntersectionObserver((entries) => {
      if (isScrolling.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = slideRefs.current.findIndex((ref) => ref === entry.target);
          if (index !== -1) {
            setCurrentSlide(index);
          }
        }
      });
    }, options);

    slideRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        scrollToSlide(Math.min(totalSlides - 1, currentSlide + 1));
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        scrollToSlide(Math.max(0, currentSlide - 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      observer.disconnect();
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentSlide, scrollToSlide, totalSlides]);

  const setSlideRef = (index: number) => (el: HTMLElement | null) => {
    slideRefs.current[index] = el;
  };

  return (
    <main
      ref={containerRef}
      className="relative bg-background h-screen overflow-x-auto overflow-y-hidden flex flex-row snap-x snap-mandatory scroll-smooth"
    >
      <DecorativeBackground />

      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-primary z-[100] origin-left"
        style={{ scaleX }}
      />

      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onNavigate={scrollToSlide}
      />

      <div className="flex flex-row relative z-10 w-max">
        {slides.map((Slide, index) => (
          <section
            key={index}
            ref={setSlideRef(index)}
            className="w-screen h-screen relative snap-start flex-shrink-0 overflow-hidden"
          >
            <Suspense fallback={
              <div className="flex items-center justify-center w-full h-full bg-background/50 backdrop-blur-sm">
                <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
              </div>
            }>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5 }}
                className="h-full w-full overflow-y-auto overflow-x-hidden"
              >
                <Slide />
              </motion.div>
            </Suspense>
          </section>
        ))}
      </div>
    </main>
  );
};

export default Index;