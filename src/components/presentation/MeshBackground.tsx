import { motion } from "framer-motion";
import { memo } from "react";

interface MeshBackgroundProps {
    colors?: string[];
    className?: string;
}

const MeshBackground = memo(({ colors = ["#14B8A6", "#F97316", "#0D9488"], className = "" }: MeshBackgroundProps) => {
    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
            <motion.div
                animate={{
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] blur-[80px] rounded-full opacity-20 will-change-transform"
                style={{ backgroundColor: colors[0] }}
            />
            <motion.div
                animate={{
                    x: [0, -70, 0],
                    y: [0, 50, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute top-[20%] -right-[10%] w-[50%] h-[50%] blur-[70px] rounded-full opacity-15 will-change-transform"
                style={{ backgroundColor: colors[1] }}
            />
            <motion.div
                animate={{
                    x: [0, 30, 0],
                    y: [0, -50, 0],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute -bottom-[10%] left-[20%] w-[55%] h-[55%] blur-[90px] rounded-full opacity-20 will-change-transform"
                style={{ backgroundColor: colors[2] }}
            />
            {/* Dot Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        </div>
    );
});

MeshBackground.displayName = "MeshBackground";

export default MeshBackground;
