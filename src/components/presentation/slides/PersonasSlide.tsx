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
    <section className="slide bg-white relative overflow-hidden flex items-center">
      {/* Mesh Background */}
      <MeshBackground colors={["#ECFEFF", "#FFF7ED", "#F0F9FF"]} />

      <div className="max-w-7xl mx-auto w-full relative z-10 px-4">
        <div className="text-center mb-12 lg:mb-20">
          <AnimatedText className="mb-4">
            <span className="font-body text-sm uppercase tracking-[0.4em] text-primary font-bold">
              Section 05
            </span>
          </AnimatedText>

          <AnimatedText delay={0.1}>
            <h2 className="font-display text-5xl md:text-8xl font-bold text-navy mb-6 lg:mb-8 tracking-tight">
              Who <span className="text-gradient">Benefits</span>
            </h2>
          </AnimatedText>

          <AnimatedText delay={0.2}>
            <p className="font-body text-lg lg:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed italic">
              Empowering individuals and families through modern care values.
            </p>
          </AnimatedText>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-16 lg:mb-24"
        >
          {personas.map((persona, index) => (
            <motion.div
              key={persona.title}
              variants={item}
              className="card-glass rounded-[2.5rem] p-8 lg:p-10 flex flex-col items-center text-center transition-all duration-500 overflow-hidden group cursor-default"
            >
              <div className={`absolute top-0 inset-x-0 h-2 bg-gradient-to-r ${persona.grad} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className={`w-20 h-20 lg:w-24 lg:h-24 rounded-[2rem] ${persona.bg} flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-sm shadow-black/5`}>
                <persona.icon className={`w-10 h-10 lg:w-12 lg:h-12 ${persona.color}`} />
              </div>

              <span className="font-body text-[10px] lg:text-xs uppercase tracking-[0.3em] text-primary font-bold mb-3">
                {persona.role}
              </span>
              <h3 className="font-display text-2xl lg:text-3xl font-bold text-navy mb-10">
                {persona.title}
              </h3>

              <div className="w-full space-y-6 text-left">
                <div className="p-5 rounded-2xl bg-white/5 border border-black/5 group-hover:bg-white/10 transition-colors">
                  <span className="font-body text-[10px] uppercase tracking-widest text-muted-foreground font-bold block mb-2">Pain Point</span>
                  <p className="font-body text-sm lg:text-base text-navy font-medium leading-relaxed">{persona.pain}</p>
                </div>
                <div className="p-5 rounded-2xl bg-primary/5 border border-primary/10 group-hover:bg-primary/10 transition-colors">
                  <span className="font-body text-[10px] uppercase tracking-widest text-primary font-bold block mb-2">Our Transformation</span>
                  <p className="font-body text-sm lg:text-base text-navy font-bold leading-relaxed">{persona.solution}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="p-6 lg:p-12 card-glass rounded-[2rem] lg:rounded-[3rem] text-center border-primary/10 shadow-glow relative overflow-hidden group"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <div className="flex items-center justify-center gap-6 mb-8">
            <Quote className="w-10 h-10 text-primary opacity-20" />
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-gold fill-gold" />)}
            </div>
            <Quote className="w-10 h-10 text-primary opacity-20 rotate-180" />
          </div>
          <p className="font-display text-2xl lg:text-3xl font-bold text-navy max-w-4xl mx-auto leading-relaxed italic">
            "We serve the entire ecosystem of care—ensuring those who give care are as <span className="text-primary italic">valued</span> as those who receive it."
          </p>
        </motion.div>
      </div>
    </section>
  );
});

PersonasSlide.displayName = "PersonasSlide";

export default PersonasSlide;