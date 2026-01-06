import { Heart, Shield, Users } from "lucide-react";
import { motion } from "framer-motion";

const HeroSlide = () => {
  return (
    <section className="slide slide-accent relative overflow-hidden flex items-center justify-center">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -right-1/4 w-[600px] md:w-[800px] h-[600px] md:h-[800px] rounded-full bg-primary-foreground/5 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -45, 0],
            x: [0, -40, 0],
            y: [0, 60, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -left-1/4 w-[400px] md:w-[600px] h-[400px] md:h-[600px] rounded-full bg-primary-foreground/5 blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center md:justify-start gap-2 mb-8"
        >
          <div className="w-12 h-1 bg-primary-foreground/60 rounded-full" />
          <span className="font-body text-xs md:text-sm uppercase tracking-[0.3em] text-primary-foreground/80 font-medium">
            Business Plan 2026
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-primary-foreground mb-8 tracking-tight scale-110"
        >
          Saforaai
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-body text-lg md:text-2xl text-primary-foreground/90 max-w-2xl mb-12 leading-relaxed mx-auto md:mx-0"
        >
          Compassionate Elderly Care, Delivered with Dignity.
          Building a future where every senior lives with purpose and pride.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6"
        >
          {[
            { icon: Heart, label: "Person-Centered" },
            { icon: Shield, label: "Trusted & Secure" },
            { icon: Users, label: "Community First" },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
              className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20 transition-all cursor-default"
            >
              <item.icon className="w-5 h-5 text-primary-foreground" />
              <span className="font-body text-sm font-medium text-primary-foreground">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSlide;