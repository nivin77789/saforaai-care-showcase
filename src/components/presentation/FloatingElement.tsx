import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FloatingElementProps {
    icon: LucideIcon;
    className?: string;
    delay?: number;
    duration?: number;
}

const FloatingElement = ({ icon: Icon, className = "", delay = 0, duration = 4 }: FloatingElementProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 0.15, scale: 1 }}
            animate={{
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0],
            }}
            transition={{
                y: {
                    duration: duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: delay,
                },
                rotate: {
                    duration: duration * 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: delay,
                },
                opacity: { duration: 1 },
                scale: { duration: 1 },
            }}
            className={`absolute pointer-events-none ${className}`}
        >
            <Icon className="w-full h-full" />
        </motion.div>
    );
};

export default FloatingElement;
