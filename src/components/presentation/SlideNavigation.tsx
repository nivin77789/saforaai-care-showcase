import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { memo, useState } from "react";

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onNavigate: (index: number) => void;
}

const slideLabels = [
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
  "Financial Plan",
  "Conclusion",
];

const SlideNavigation = memo(({ currentSlide, totalSlides, onNavigate }: SlideNavigationProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 lg:bottom-auto lg:left-auto lg:right-8 lg:top-1/2 lg:-translate-y-1/2 z-[100] flex flex-row lg:flex-col items-center gap-3 lg:gap-6 bg-white/10 backdrop-blur-xl p-3 rounded-full border border-white/20 shadow-2xl max-w-[90vw] lg:max-w-none overflow-x-auto lg:overflow-visible no-scrollbar">
      <motion.button
        whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--primary))", color: "white" }}
        whileTap={{ scale: 0.9 }}
        onClick={() => onNavigate(Math.max(0, currentSlide - 1))}
        disabled={currentSlide === 0}
        className="p-2 lg:p-3 rounded-full bg-white/80 border border-white/20 text-navy shadow-soft disabled:opacity-20 disabled:cursor-not-allowed transition-colors shrink-0"
      >
        <div className="hidden lg:block"><ChevronUp className="w-4 h-4" /></div>
        <div className="block lg:hidden"><ChevronLeft className="w-4 h-4" /></div>
      </motion.button>

      <div className="flex flex-row lg:flex-col gap-3 lg:gap-4 lg:py-4 items-center shrink-0">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => onNavigate(index)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="group relative flex items-center justify-center lg:justify-end"
          >
            {/* Label Tooltip */}
            <AnimatePresence>
              {(hoveredIndex === index || currentSlide === index) && (
                <motion.div
                  initial={{ opacity: 0, x: 10, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 10, scale: 0.8 }}
                  className="absolute right-8 hidden lg:block whitespace-nowrap bg-navy text-white text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-lg border border-white/10 shadow-xl pointer-events-none"
                >
                  {slideLabels[index]}
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div
              animate={{
                scale: currentSlide === index ? 1.5 : 1,
                backgroundColor: currentSlide === index ? "hsl(var(--primary))" : "rgba(15, 23, 42, 0.2)",
              }}
              className="w-2 h-2 rounded-full transition-shadow group-hover:shadow-glow group-hover:bg-primary/60"
            />
          </button>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--primary))", color: "white" }}
        whileTap={{ scale: 0.9 }}
        onClick={() => onNavigate(Math.min(totalSlides - 1, currentSlide + 1))}
        disabled={currentSlide === totalSlides - 1}
        className="p-2 lg:p-3 rounded-full bg-white/80 border border-white/20 text-navy shadow-soft disabled:opacity-20 disabled:cursor-not-allowed transition-colors shrink-0"
      >
        <div className="hidden lg:block"><ChevronDown className="w-4 h-4" /></div>
        <div className="block lg:hidden"><ChevronRight className="w-4 h-4" /></div>
      </motion.button>
    </div>
  );
});

SlideNavigation.displayName = "SlideNavigation";

export default SlideNavigation;