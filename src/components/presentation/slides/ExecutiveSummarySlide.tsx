import { Quote, User, Target, Rocket, Star } from "lucide-react";
import AnimatedText from "../AnimatedText";
import { motion } from "framer-motion";
import MeshBackground from "../MeshBackground";
import { memo } from "react";

const ExecutiveSummarySlide = memo(() => {
  const keyPoints = [
    {
      icon: Target,
      title: "Our Primary Focus",
      text: "Correct systemic limitations in care—slow response times, overstretched staff, and inconsistent standards.",
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      icon: Rocket,
      title: "2026 Core Objective",
      text: "Launch operations in Stratford-upon-Avon, secure full compliance, and begin revenue-generating services.",
      color: "text-coral",
      bg: "bg-coral/10"
    },
  ];

  return (
    <section className="slide bg-navy relative overflow-hidden min-h-screen flex items-center">
      {/* Mesh Background */}
      <MeshBackground colors={["#0D9488", "#1E293B", "#115E59"]} className="opacity-40" />

      <div className="absolute top-20 right-20 opacity-[0.03] scale-150 pointer-events-none">
        <Quote className="w-96 h-96 text-white" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Column: Quote and Profile */}
          <div className="lg:col-span-12 xl:col-span-7">
            <AnimatedText className="mb-4">
              <span className="font-body text-sm uppercase tracking-[0.4em] text-primary font-bold">
                Section 02
              </span>
            </AnimatedText>

            <AnimatedText delay={0.1}>
              <h2 className="font-display text-5xl lg:text-8xl font-bold text-white mb-8 lg:mb-16 tracking-tight">
                Executive <span className="text-gradient">Summary</span>
              </h2>
            </AnimatedText>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative p-10 md:p-16 bg-white/5 backdrop-blur-xl rounded-[4rem] border border-white/10 shadow-2xl overflow-hidden group"
            >
              <Quote className="absolute top-10 left-10 w-16 h-16 text-primary opacity-20 group-hover:scale-110 transition-transform duration-700" />

              <blockquote className="relative z-10 mb-16">
                <p className="font-body text-2xl md:text-3xl text-white/90 leading-relaxed italic font-medium">
                  "Saforaai is a <span className="text-primary font-bold">purpose-driven</span> organisation founded to respond to one of the UK's fastest-growing needs: high-quality care delivered with dignity."
                </p>
              </blockquote>

              <div className="flex items-center gap-8">
                <div className="relative">
                  <div className="w-24 h-24 rounded-[2rem] bg-gradient-to-br from-primary to-teal-deep flex items-center justify-center shadow-glow group-hover:rotate-6 transition-transform duration-500">
                    <User className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-gold flex items-center justify-center border-4 border-navy shadow-lg">
                    <Star className="w-5 h-5 text-white fill-current" />
                  </div>
                </div>
                <div>
                  <span className="font-display text-3xl text-white font-bold block mb-1">
                    Nithin Mathew S
                  </span>
                  <span className="font-body text-sm text-primary font-bold uppercase tracking-[0.3em]">
                    CEO & Founder
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Key Points */}
          <div className="lg:col-span-12 xl:col-span-5 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-8">
            {keyPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                whileHover={{ x: -15, transition: { duration: 0.3 } }}
                className="bg-white rounded-[3rem] p-8 lg:p-10 shadow-2xl flex flex-col items-start group transition-all duration-500 border border-transparent hover:border-primary/20"
              >
                <div className={`w-16 h-16 rounded-2xl ${point.bg} flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-sm shadow-black/5`}>
                  <point.icon className={`w-8 h-8 ${point.color}`} />
                </div>
                <h3 className="font-display text-2xl lg:text-3xl font-bold text-navy mb-4 group-hover:text-primary transition-colors">
                  {point.title}
                </h3>
                <p className="font-body text-sm lg:text-lg text-navy/70 leading-relaxed font-medium">
                  {point.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

ExecutiveSummarySlide.displayName = "ExecutiveSummarySlide";

export default ExecutiveSummarySlide;