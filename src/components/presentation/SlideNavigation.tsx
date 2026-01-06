import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronDown } from "lucide-react";

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onNavigate: (index: number) => void;
  slideNames: string[];
}

const SlideNavigation = ({ currentSlide, totalSlides, onNavigate, slideNames }: SlideNavigationProps) => {
  return (
    <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-6">
      <motion.button
        whileHover={{ scale: 1.1, backgroundColor: "var(--primary)", color: "white" }}
        whileTap={{ scale: 0.9 }}
        onClick={() => onNavigate(Math.max(0, currentSlide - 1))}
        disabled={currentSlide === 0}
        className="p-3 rounded-full bg-white/80 backdrop-blur-md border border-white/40 text-foreground shadow-soft disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronUp className="w-5 h-5" />
      </motion.button>

      <div className="flex flex-col gap-4 py-4 relative">
        {/* Active Indicator Background */}
        <motion.div
          layoutId="active-bg"
          className="absolute w-1 h-3 bg-primary rounded-full right-[-8px]"
          animate={{ y: currentSlide * 24 + currentSlide * 4 }} // Rough estimate, but we'll use a better approach
          style={{ display: 'none' }} // Actually better to just style the dots
        />

        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => onNavigate(index)}
            className="group relative flex items-center justify-end"
          >
            <AnimatePresence>
              {currentSlide === index && (
                <motion.span
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="mr-4 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-glow"
                >
                  {slideNames[index]}
                </motion.span>
              )}
            </AnimatePresence>

            <motion.div
              animate={{
                scale: currentSlide === index ? 1.5 : 1,
                backgroundColor: currentSlide === index ? "hsl(var(--primary))" : "rgba(0,0,0,0.2)",
              }}
              className="w-2 h-2 rounded-full transition-shadow group-hover:shadow-glow"
            />

            <span className="absolute right-8 bg-black/80 text-white px-3 py-1.5 rounded-lg text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none backdrop-blur-md border border-white/10">
              {slideNames[index]}
            </span>
          </button>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.1, backgroundColor: "var(--primary)", color: "white" }}
        whileTap={{ scale: 0.9 }}
        onClick={() => onNavigate(Math.min(totalSlides - 1, currentSlide + 1))}
        disabled={currentSlide === totalSlides - 1}
        className="p-3 rounded-full bg-white/80 backdrop-blur-md border border-white/40 text-foreground shadow-soft disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronDown className="w-5 h-5" />
      </motion.button>
    </div>
  );
};

export default SlideNavigation;