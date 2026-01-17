import { Cog, HeartHandshake, TrendingUp, Cpu, Handshake } from "lucide-react";
import AnimatedText from "../AnimatedText";
import { motion } from "framer-motion";
import MeshBackground from "../MeshBackground";

const StrategicPrioritiesSlide = () => {
  const priorities = [
    {
      icon: Cog,
      title: "Core Operations",
      desc: "Delivering consistent, high-quality care standards every single day.",
      color: "text-primary",
      bg: "bg-primary/10",
      accent: "border-primary/20"
    },
    {
      icon: HeartHandshake,
      title: "Customer Trust",
      desc: "Building lasting relationships through reliable communication.",
      color: "text-coral",
      bg: "bg-coral/10",
      accent: "border-coral/20"
    },
    {
      icon: TrendingUp,
      title: "Local Growth",
      desc: "Methodical expansion across the Stratford-upon-Avon region.",
      color: "text-gold",
      bg: "bg-gold/10",
      accent: "border-gold/20"
    },
    {
      icon: Cpu,
      title: "Tech Innovation",
      desc: "Implementing digital records and smart scheduling systems.",
      color: "text-teal-light",
      bg: "bg-teal-light/10",
      accent: "border-teal-light/20"
    },
    {
      icon: Handshake,
      title: "Partnerships",
      desc: "Seamless collaboration with local healthcare providers.",
      color: "text-navy",
      bg: "bg-navy/10",
      accent: "border-navy/20"
    },
  ];

  return (
    <section className="slide bg-white relative overflow-hidden flex">
      <MeshBackground colors={["#F8FAFC", "#F0F9FF", "#F1F5F9"]} />

      <div className="max-w-7xl mx-auto w-full relative z-10 px-4 py-8 lg:py-12">
        <div className="text-center mb-8 lg:mb-12">
          <AnimatedText className="mb-2">
            <span className="font-body text-sm uppercase tracking-[0.4em] text-primary font-bold">
              Section 11
            </span>
          </AnimatedText>

          <AnimatedText delay={0.1}>
            <h2 className="font-display text-4xl lg:text-7xl font-bold text-navy mb-4 tracking-tight">
              Strategic <span className="text-gradient">Priorities</span>
            </h2>
          </AnimatedText>

          <AnimatedText delay={0.2}>
            <p className="font-body text-base lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our roadmap for 2026 focuses on stability, quality, and community-driven growth.
            </p>
          </AnimatedText>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          {priorities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`card-glass rounded-[2rem] p-6 lg:p-8 flex flex-col items-center text-center group hover:-translate-y-4 border-b-4 ${item.accent.replace('/20', '/40')}`}
            >
              <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-2xl ${item.bg} flex items-center justify-center mb-6 lg:mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-sm shadow-black/5`}>
                <item.icon className={`w-6 h-6 lg:w-8 lg:h-8 ${item.color}`} />
              </div>

              <h3 className="font-display text-lg lg:text-xl font-bold text-navy mb-3 lg:mb-4">
                {item.title}
              </h3>

              <p className="font-body text-xs lg:text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicPrioritiesSlide;