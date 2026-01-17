import { User, Heart, ShieldCheck, Zap, Quote, Star, Activity, UserCheck } from "lucide-react";
import AnimatedText from "../AnimatedText";
import { motion } from "framer-motion";
import MeshBackground from "../MeshBackground";
import { memo } from "react";

const PersonasSlide = memo(() => {
  const personas = [
    {
      role: "The Senior",
      title: "Active Independent",
      icon: Activity,
      color: "text-primary",
      bg: "bg-primary/10",
      grad: "from-primary/20",
      pain: "Fear of losing control/dignity",
      solution: "Bespoke, non-intrusive support"
    },
    {
      role: "The Family",
      title: "Concerned Relatives",
      icon: Heart,
      color: "text-coral",
      bg: "bg-coral/10",
      grad: "from-coral/20",
      pain: "Guilt & lack of reliable options",
      solution: "Transparent, consistent updates"
    },
    {
      role: "The Caregiver",
      title: "Career-First Staff",
      icon: UserCheck,
      color: "text-gold",
      bg: "bg-gold/10",
      grad: "from-gold/20",
      pain: "Burnout & zero-hour insecurity",
      solution: "Proper pay, schedules & growth"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item: any = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } }
  };

  return (
    <section className="slide bg-white relative overflow-hidden flex">
      {/* Mesh Background */}
      <MeshBackground colors={["#ECFEFF", "#FFF7ED", "#F0F9FF"]} />

      <div className="max-w-7xl mx-auto w-full relative z-10 px-4 py-8 lg:py-12">
        <div className="text-center mb-8 lg:mb-12">
          <AnimatedText className="mb-2">
            <span className="font-body text-sm uppercase tracking-[0.4em] text-primary font-bold">
              Section 05
            </span>
          </AnimatedText>

          <AnimatedText delay={0.1}>
            <h2 className="font-display text-4xl lg:text-7xl font-bold text-navy mb-4 tracking-tight">
              Who <span className="text-gradient">Benefits</span>
            </h2>
          </AnimatedText>

          <AnimatedText delay={0.2}>
            <p className="font-body text-base lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed italic">
              Empowering individuals and families through modern care values.
            </p>
          </AnimatedText>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-8 lg:mb-12"
        >
          {personas.map((persona, index) => (
            <motion.div
              key={persona.title}
              variants={item}
              className="card-glass rounded-[2rem] p-6 lg:p-8 flex flex-col items-center text-center transition-all duration-500 overflow-hidden group cursor-default"
            >
              <div className={`w-16 h-16 lg:w-20 lg:h-20 rounded-[1.5rem] ${persona.bg} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-sm shadow-black/5`}>
                <persona.icon className={`w-8 h-8 lg:w-10 lg:h-10 ${persona.color}`} />
              </div>

              <span className="font-body text-[10px] uppercase tracking-[0.3em] text-primary font-bold mb-2">
                {persona.role}
              </span>
              <h3 className="font-display text-xl lg:text-2xl font-bold text-navy mb-6">
                {persona.title}
              </h3>

              <div className="w-full space-y-4 text-left">
                <div className="p-4 rounded-xl bg-white/5 border border-black/5 group-hover:bg-white/10 transition-colors">
                  <span className="font-body text-[10px] uppercase tracking-widest text-muted-foreground font-bold block mb-1">Pain Point</span>
                  <p className="font-body text-xs lg:text-sm text-navy font-medium leading-relaxed">{persona.pain}</p>
                </div>
                <div className="p-4 rounded-xl bg-primary/5 border border-primary/10 group-hover:bg-primary/10 transition-colors">
                  <span className="font-body text-[10px] uppercase tracking-widest text-primary font-bold block mb-1">Our Transformation</span>
                  <p className="font-body text-xs lg:text-sm text-navy font-bold leading-relaxed">{persona.solution}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="p-6 lg:p-8 card-glass rounded-[2rem] text-center border-primary/10 shadow-glow relative overflow-hidden group"
        >
          <p className="font-display text-xl lg:text-2xl font-bold text-navy max-w-4xl mx-auto leading-relaxed italic">
            "We serve the entire ecosystem of care—ensuring those who give care are as <span className="text-primary italic">valued</span> as those who receive it."
          </p>
        </motion.div>
      </div>
    </section>
  );
});

PersonasSlide.displayName = "PersonasSlide";

export default PersonasSlide;