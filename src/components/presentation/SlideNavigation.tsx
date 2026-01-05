import { motion } from "framer-motion";
import { ChevronUp, ChevronDown } from "lucide-react";

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onNavigate: (index: number) => void;
  slideNames: string[];
}

const SlideNavigation = ({ currentSlide, totalSlides, onNavigate, slideNames }: SlideNavigationProps) => {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-3 animate-fade-in">
      <button
        onClick={() => onNavigate(Math.max(0, currentSlide - 1))}
        disabled={currentSlide === 0}
        className="p-2 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <ChevronUp className="w-4 h-4" />
      </button>

      <div className="flex flex-col gap-2 py-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => onNavigate(index)}
            className="group relative flex items-center"
          >
            <div
              className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-125 ${
                currentSlide === index
                  ? "bg-primary scale-150"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
            />
            <span className="absolute right-6 bg-card/90 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-body text-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-border/50">
              {slideNames[index]}
            </span>
          </button>
        ))}
      </div>

      <button
        onClick={() => onNavigate(Math.min(totalSlides - 1, currentSlide + 1))}
        disabled={currentSlide === totalSlides - 1}
        className="p-2 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <ChevronDown className="w-4 h-4" />
      </button>

      <div className="mt-4 text-xs font-body text-muted-foreground">
        {currentSlide + 1}/{totalSlides}
      </div>
    </div>
  );
};

export default SlideNavigation;