import { ReactNode } from "react";

interface AnimatedTextProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "fade";
}

const AnimatedText = ({ children, delay = 0, className = "", direction = "up" }: AnimatedTextProps) => {
  const animationClasses = {
    up: "animate-fade-up",
    left: "animate-slide-in-left",
    right: "animate-slide-in-right",
    fade: "animate-fade-in",
  };

  return (
    <div
      className={`${animationClasses[direction]} ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

export default AnimatedText;