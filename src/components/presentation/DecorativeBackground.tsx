import { motion } from "framer-motion";
import { memo } from "react";

const DecorativeBackground = memo(() => {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Floating Blob 1 */}
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
                className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[80px] will-change-transform"
            />

            {/* Floating Blob 2 */}
            <motion.div
                animate={{
                    x: [0, -40, 0],
                    y: [0, 60, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute bottom-[-10%] right-[-10%] w-[35vw] h-[35vw] bg-coral/5 rounded-full blur-[80px] will-change-transform"
            />

            {/* Floating Blob 3 */}
            <motion.div
                animate={{
                    x: [0, 30, 0],
                    y: [0, -30, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-[30%] right-[20%] w-[20vw] h-[20vw] bg-gold/5 rounded-full blur-[60px] will-change-transform"
            />
        </div>
    );
});

DecorativeBackground.displayName = "DecorativeBackground";

export default DecorativeBackground;
