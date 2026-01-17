import { Heart, Users, Briefcase, Globe, CheckCircle2, ShieldCheck } from "lucide-react";
import AnimatedText from "../AnimatedText";
import { motion } from "framer-motion";
import FloatingElement from "../FloatingElement";
import MeshBackground from "../MeshBackground";
import { memo } from "react";

const IntroductionSlide = memo(() => {
  const points = [
    { icon: Heart, text: "Compassionate approach rooted in dignity", color: "text-primary" },
    { icon: Users, text: "Community-focused service delivery", color: "text-navy" },
    { icon: Briefcase, text: "Professional standards with a personal touch", color: "text-gold" },
    { icon: Globe, text: "Supporting the wider healthcare ecosystem", color: "text-coral" },
  ];

  return (
    <section className="slide bg-white relative overflow-hidden flex items-center">
      {/* Decorative elements */}
      <MeshBackground colors={["#F0FDFA", "#FFF7ED", "#F8FAFC"]} />

      <FloatingElement icon={Users} className="top-[10%] right-[10%] w-24 h-24 text-primary/20" delay={0.2} />
      <FloatingElement icon={ShieldCheck} className="bottom-[15%] left-[5%] w-16 h-16 text-coral/20" delay={0.5} />

      <div className="max-w-6xl mx-auto w-full relative z-10 px-4 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          <div>
            <AnimatedText className="mb-2">
              <span className="font-body text-xs lg:text-sm uppercase tracking-[0.3em] text-primary font-bold">
                Section 04
              </span>
            </AnimatedText>

            <AnimatedText delay={0.1}>
              <h2 className="font-display text-4xl lg:text-7xl font-bold text-navy mb-4 lg:mb-6 tracking-tight">
                Introduction to the <br />
                <span className="text-gradient">Company</span>
              </h2>
            </AnimatedText>

            <AnimatedText delay={0.2}>
              <p className="font-body text-base lg:text-xl text-muted-foreground mb-6 lg:mb-8 leading-relaxed max-w-lg">
                Saforaai was founded to redefine <span className="text-navy font-bold italic">Homecare</span>, moving away from the institutional limitations of traditional facilities.
              </p>
            </AnimatedText>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-navy rounded-[1.5rem] p-6 lg:p-8 text-white shadow-glow relative overflow-hidden border border-white/10 group"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 blur-3xl group-hover:bg-primary/20 transition-colors" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-[1px] bg-primary" />
                  <h4 className="font-body text-[10px] lg:text-xs uppercase tracking-[0.3em] text-primary font-bold">Our Core Purpose</h4>
                </div>
                <p className="font-display text-xl lg:text-2xl font-bold italic leading-tight">
                  "To serve elderly people with <span className="text-primary">unwavering dignity</span>, respect, and consistency."
                </p>
              </div>
            </motion.div>
          </div>

          <div className="space-y-4">
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-glass p-5 lg:p-6 rounded-2xl flex items-center gap-5 group hover:translate-x-3 transition-all cursor-default"
              >
                <div className={`w-12 h-12 lg:w-16 lg:h-16 rounded-2xl bg-white shadow-soft flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform ${point.color}`}>
                  <point.icon className="w-6 h-6 lg:w-8 lg:h-8" />
                </div>
                <span className="font-body text-sm lg:text-lg font-bold text-navy leading-tight">
                  {point.text}
                </span>
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                  <CheckCircle2 className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="pt-8 flex items-center gap-4 text-primary font-bold hidden md:flex"
            >
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-primary/20" />
              <span className="font-body text-[10px] lg:text-xs uppercase tracking-[0.4em] text-primary/60 whitespace-nowrap">Founded on Excellence</span>
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-primary/20" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
});

IntroductionSlide.displayName = "IntroductionSlide";

export default IntroductionSlide;