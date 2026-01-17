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
  "Strategic Advantages",
  "Financial Plan",
  "Economic Potential",
  "Conclusion",
];

const SlideNavigation = memo(({ currentSlide, totalSlides, onNavigate }: SlideNavigationProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] flex flex-row items-center gap-4 bg-white/10 backdrop-blur-xl p-4 rounded-full border border-white/20 shadow-2xl max-w-[95vw] overflow-x-auto no-scrollbar">
      <motion.button
        whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--primary))", color: "white" }}
        whileTap={{ scale: 0.9 }}
        onClick={() => onNavigate(Math.max(0, currentSlide - 1))}
        disabled={currentSlide === 0}
        className="p-3 rounded-full bg-white/80 border border-white/20 text-navy shadow-soft disabled:opacity-20 disabled:cursor-not-allowed transition-colors shrink-0"
      >
        <ChevronLeft className="w-5 h-5" />
      </motion.button>

      <div className="flex flex-row gap-4 px-4 items-center shrink-0">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => onNavigate(index)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="group relative flex items-center justify-center"
          >
            {/* Label Tooltip (Show on hover) */}
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.8 }}
                  animate={{ opacity: 1, y: -45, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.8 }}
                  className="absolute bottom-0 whitespace-nowrap bg-navy text-white text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-lg border border-white/10 shadow-xl pointer-events-none z-[110]"
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
              className="w-2.5 h-2.5 rounded-full transition-shadow group-hover:shadow-glow group-hover:bg-primary/60"
            />
          </button>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--primary))", color: "white" }}
        whileTap={{ scale: 0.9 }}
        onClick={() => onNavigate(Math.min(totalSlides - 1, currentSlide + 1))}
        disabled={currentSlide === totalSlides - 1}
        className="p-3 rounded-full bg-white/80 border border-white/20 text-navy shadow-soft disabled:opacity-20 disabled:cursor-not-allowed transition-colors shrink-0"
      >
        <ChevronRight className="w-5 h-5" />
      </motion.button>
    </div>
  );
});

SlideNavigation.displayName = "SlideNavigation";

export default SlideNavigation;