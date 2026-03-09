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
const AdvantagesSlide = lazy(() => import("@/components/presentation/slides/AdvantagesSlide"));
const FinancialPlanSlide = lazy(() => import("@/components/presentation/slides/FinancialPlanSlide"));
const DetailedFinancialProjectionsSlide = lazy(() => import("@/components/presentation/slides/DetailedFinancialProjectionsSlide"));
const SWOTAnalysisSlide = lazy(() => import("@/components/presentation/slides/SWOTAnalysisSlide"));
const CompetitiveAnalysisSlide = lazy(() => import("@/components/presentation/slides/CompetitiveAnalysisSlide"));
const RiskAnalysisSlide = lazy(() => import("@/components/presentation/slides/RiskAnalysisSlide"));
const ImplementationTimelineSlide = lazy(() => import("@/components/presentation/slides/ImplementationTimelineSlide"));
const TeamAdvisorsSlide = lazy(() => import("@/components/presentation/slides/TeamAdvisorsSlide"));
const MarketingSalesStrategySlide = lazy(() => import("@/components/presentation/slides/MarketingSalesStrategySlide"));
const ExitStrategySlide = lazy(() => import("@/components/presentation/slides/ExitStrategySlide"));
const ExitStrategyMilestonesSlide = lazy(() => import("@/components/presentation/slides/ExitStrategyMilestonesSlide"));
const ExitStrategyReturnsSlide = lazy(() => import("@/components/presentation/slides/ExitStrategyReturnsSlide"));
const ExitStrategyReadinessSlide = lazy(() => import("@/components/presentation/slides/ExitStrategyReadinessSlide"));
const BusinessProfitSlide = lazy(() => import("@/components/presentation/slides/BusinessProfitSlide"));
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
  "5-Year Projections",
  "SWOT Analysis",
  "Competitive Landscape",
  "Risk Analysis",
  "Implementation Timeline",
  "Leadership Team",
  "Marketing Strategy",
  "Exit Strategy: Options",
  "Exit Strategy: Milestones",
  "Exit Strategy: Returns",
  "Exit Strategy: Readiness",
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
    DetailedFinancialProjectionsSlide,
    SWOTAnalysisSlide,
    CompetitiveAnalysisSlide,
    RiskAnalysisSlide,
    ImplementationTimelineSlide,
    TeamAdvisorsSlide,
    MarketingSalesStrategySlide,
    ExitStrategySlide,
    ExitStrategyMilestonesSlide,
    ExitStrategyReturnsSlide,
    ExitStrategyReadinessSlide,
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

      {/* Global Logo - Avon Angels Home Care */}
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ scale: 1.05, rotate: -1 }}
        className="fixed top-4 left-4 z-[120]"
      >
        <div className="relative flex items-center gap-3 bg-white/85 backdrop-blur-md px-4 py-2 rounded-full border border-white/70 shadow-glow overflow-hidden">
          {/* Soft pulsing halo */}
          <motion.div
            aria-hidden="true"
            className="absolute inset-0 rounded-full bg-primary/10"
            initial={{ opacity: 0.3, scale: 0.9 }}
            animate={{ opacity: [0.25, 0.5, 0.25], scale: [0.9, 1.05, 0.9] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.img
            src="/avon angels.png"
            alt="Avon Angels Home Care logo"
            className="relative h-8 w-auto object-contain drop-shadow-sm"
            initial={{ rotate: 0 }}
            whileHover={{ rotate: 3 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          />

          <span className="relative hidden sm:inline font-display text-sm font-bold text-navy tracking-wide">
            Avon Angels Home Care
          </span>
        </div>
      </motion.div>

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