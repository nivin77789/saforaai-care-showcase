import { CheckCircle2, Target, TrendingUp, ShieldCheck, Heart, Zap, Award } from "lucide-react";
import AnimatedText from "../AnimatedText";
import { motion } from "framer-motion";
import MeshBackground from "../MeshBackground";

const GoalsSlide = () => {
  const goals = [
    {
      text: "Register Saforaai with all required UK regulatory bodies (CQC)",
      icon: ShieldCheck,
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      text: "Commence operations within Q1 of funding approval",
      icon: Zap,
      color: "text-coral",
      bg: "bg-coral/10"
    },
    {
      text: "Recruit, train, and retain a high-quality care workforce",
      icon: Heart,
      color: "text-gold",
      bg: "bg-gold/10"
    },
    {
      text: "Achieve strong client satisfaction and referral growth",
      icon: Award,
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      text: "Reach operational break-even through controlled scaling",
      icon: TrendingUp,
      color: "text-coral",
      bg: "bg-coral/10"
    },
    {
      text: "Establish as a trusted local care brand in Stratford-upon-Avon",
      icon: Target,
      color: "text-gold",
      bg: "bg-gold/10"
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item: any = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } }
  };

  return (
    <section className="slide bg-white relative overflow-hidden flex items-center">
      {/* Decorative Background */}
      <MeshBackground colors={["#FDF4FF", "#F0FDFA", "#FFF7ED"]} />

      <div className="max-w-7xl mx-auto w-full relative z-10 px-4">
        <div className="text-center mb-16">
          <AnimatedText className="mb-4">
            <span className="font-body text-sm uppercase tracking-[0.4em] text-primary font-bold">
              Section 10
            </span>
          </AnimatedText>

          <AnimatedText delay={0.1}>
            <h2 className="font-display text-5xl md:text-8xl font-bold text-navy mb-8 tracking-tight">
              Goals & <span className="text-gradient">Objectives</span>
            </h2>
          </AnimatedText>

          <AnimatedText delay={0.2}>
            <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-glow border border-primary/10">
              <span className="font-display text-2xl font-bold text-primary">2026</span>
              <div className="w-px h-6 bg-primary/20" />
              <span className="font-body text-xs text-navy font-bold uppercase tracking-[0.2em]">Strategic Roadmap</span>
            </div>
          </AnimatedText>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {goals.map((goal, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="card-glass rounded-[2rem] p-8 lg:p-10 flex flex-col items-center text-center group"
            >
              <div className={`w-16 h-16 lg:w-20 lg:h-20 rounded-[1.5rem] ${goal.bg} flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                <goal.icon className={`w-8 h-8 lg:w-10 lg:h-10 ${goal.color}`} />
              </div>

              <p className="font-body text-base lg:text-xl text-navy font-bold leading-relaxed mb-8">
                {goal.text}
              </p>

              <div className="mt-auto w-full flex justify-center pt-8 border-t border-black/5">
                <div className={`flex items-center gap-2 ${goal.color} opacity-40 group-hover:opacity-100 transition-all duration-500`}>
                  <CheckCircle2 className="w-5 h-5 lg:w-6 lg:h-6" />
                  <span className="font-body text-xs uppercase tracking-widest font-bold">Priority Objective</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GoalsSlide;