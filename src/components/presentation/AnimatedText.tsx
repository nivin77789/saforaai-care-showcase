import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

interface AnimatedTextProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "fade";
}

const AnimatedText = ({ children, delay = 0, className = "", direction = "up" }: AnimatedTextProps) => {
  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 20 : direction === "down" ? -20 : 0,
      x: direction === "left" ? 20 : direction === "right" ? -20 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.8,
        delay: delay,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedText;