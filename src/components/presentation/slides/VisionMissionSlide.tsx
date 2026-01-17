import { Eye, Target, Heart, Shield, Lightbulb, Sparkles, UserCheck, HeartHandshake } from "lucide-react";
import AnimatedText from "../AnimatedText";
import MeshBackground from "../MeshBackground";
import { motion } from "framer-motion";

const VisionMissionSlide = () => {
  const values = [
    { icon: Heart, label: "Compassion" },
    { icon: Shield, label: "Integrity" },
    { icon: Lightbulb, label: "Innovation" },
    { icon: Sparkles, label: "Transparency" },
    { icon: UserCheck, label: "Respect" },
    { icon: HeartHandshake, label: "Customer-first" },
  ];

  return (
    <section className="slide bg-navy relative overflow-hidden">
      <MeshBackground colors={["#0D9488", "#1E293B", "#115E59"]} className="opacity-40" />

      <div className="max-w-6xl mx-auto w-full relative z-10 py-8 lg:py-12">
        <AnimatedText className="mb-2">
          <span className="font-body text-sm uppercase tracking-[0.2em] text-primary-foreground/60 font-bold">
            Section 09
          </span>
        </AnimatedText>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div>
            <AnimatedText delay={0.1}>
              <h2 className="font-display text-4xl lg:text-7xl font-bold text-white mb-8 tracking-tight">
                Vision, Mission
                <br />
                <span className="text-gradient">& Values</span>
              </h2>
            </AnimatedText>

            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 mb-4 border border-white/10 shadow-2xl group hover:bg-white/10 transition-all duration-500 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/30 group-hover:scale-110 transition-transform">
                  <Eye className="w-5 h-5 text-primary" />
                </div>
                <span className="font-body text-xs uppercase tracking-[0.3em] text-primary-foreground/60 font-bold">
                  Our Vision
                </span>
              </div>
              <p className="font-display text-xl text-white leading-relaxed">
                To become a <span className="text-primary font-bold">leading, technology-enabled</span> elderly care provider in the UK over the next 5–10 years.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 shadow-2xl group hover:bg-white/10 transition-all duration-500 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-xl bg-coral/20 flex items-center justify-center border border-coral/30 group-hover:scale-110 transition-transform">
                  <Target className="w-5 h-5 text-coral" />
                </div>
                <span className="font-body text-xs uppercase tracking-[0.3em] text-primary-foreground/60 font-bold">
                  Our Mission
                </span>
              </div>
              <p className="font-display text-xl text-white leading-relaxed">
                To deliver <span className="text-coral font-bold">safe, respectful, and responsive</span> care services that enhance independence and quality of life.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-[2rem] p-6 lg:p-10 shadow-2xl animate-scale-in relative overflow-hidden" style={{ animationDelay: "0.4s" }}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-coral/5 blur-3xl rounded-full" />

            <h3 className="font-display text-3xl font-bold text-navy mb-8">
              Core Values
            </h3>
            <div className="grid grid-cols-2 gap-4 relative z-10">
              {values.map((value, index) => (
                <motion.div
                  key={value.label}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(20, 184, 166, 0.05)" }}
                  className="flex items-center gap-4 bg-accent/30 rounded-2xl p-5 border border-primary/5 cursor-pointer transition-all animate-fade-up shadow-sm hover:shadow-md"
                  style={{ animationDelay: `${0.5 + index * 0.08}s` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-white shadow-soft flex items-center justify-center shrink-0">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-body font-bold text-navy text-sm lg:text-base">
                    {value.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSlide;