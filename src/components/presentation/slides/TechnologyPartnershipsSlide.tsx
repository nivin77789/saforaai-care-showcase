import { Laptop, Brain, Building2, GraduationCap, Cpu, CheckCircle2, Smartphone } from "lucide-react";
import AnimatedText from "../AnimatedText";
import { motion } from "framer-motion";
import MeshBackground from "../MeshBackground";
import { memo } from "react";

const TechnologyPartnershipsSlide = memo(() => {
  const techStack = [
    { name: "Digital Care Planning", icon: Laptop, desc: "Real-time updates and digital records", color: "text-primary", bg: "bg-primary/10" },
    { name: "Family Portal", icon: Smartphone, desc: "Keep loved ones informed and connected", color: "text-coral", bg: "bg-coral/10" },
    { name: "Secure Data", icon: Brain, desc: "GDPR compliant cloud storage", color: "text-gold", bg: "bg-gold/10" },
  ];

  return (
    <section className="slide bg-white relative overflow-hidden flex items-center py-20 lg:py-0">
      {/* Mesh Background */}
      <MeshBackground colors={["#F0F9FF", "#FDF2F8", "#ECFEFF"]} />

      <div className="max-w-7xl mx-auto w-full relative z-10 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          <div>
            <AnimatedText className="mb-4">
              <span className="font-body text-xs lg:text-sm uppercase tracking-[0.4em] text-primary font-bold">
                Section 13
              </span>
            </AnimatedText>

            <AnimatedText delay={0.1}>
              <h2 className="font-display text-4xl md:text-8xl font-bold text-navy mb-10 leading-[1.1] tracking-tight">
                Tech & <br />
                <span className="text-gradient">Innovation</span>
              </h2>
            </AnimatedText>

            <div className="space-y-4 lg:space-y-8">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  className="flex items-center gap-6 lg:gap-8 p-6 lg:p-8 card-glass rounded-[2rem] lg:rounded-[2.5rem] group hover:translate-x-4 transition-all duration-500"
                >
                  <div className={`w-12 h-12 lg:w-20 lg:h-20 rounded-2xl ${tech.bg} shadow-soft flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <tech.icon className={`w-6 h-6 lg:w-10 lg:h-10 ${tech.color}`} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl lg:text-3xl font-bold text-navy mb-1 lg:mb-2 group-hover:text-primary transition-colors">{tech.name}</h3>
                    <p className="font-body text-sm lg:text-lg text-navy/70 leading-relaxed font-medium">{tech.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative mt-12 lg:mt-0"
          >
            <div className="relative rounded-[2.5rem] lg:rounded-[5rem] overflow-hidden shadow-2xl border-[8px] lg:border-[12px] border-white group transition-all duration-700 hover:-rotate-1">
              <img
                src="/digital_care_tech_1767709400304.png"
                alt="Technology in Care"
                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-70 group-hover:opacity-60 transition-opacity duration-700" />
              <div className="absolute bottom-6 left-6 right-6 lg:bottom-12 lg:left-12 lg:right-12 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                <div className="bg-white/10 backdrop-blur-xl p-6 lg:p-8 rounded-[1.5rem] lg:rounded-[3rem] border border-white/20 shadow-2xl">
                  <div className="flex items-center gap-3 lg:gap-4 mb-3 lg:mb-4">
                    <div className="w-8 h-8 lg:w-12 lg:h-12 rounded-2xl bg-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-5 h-5 lg:w-7 lg:h-7 text-white" />
                    </div>
                    <span className="font-display text-xl lg:text-3xl font-bold text-white uppercase tracking-widest">Future Ready</span>
                  </div>
                  <p className="font-body text-sm lg:text-lg text-white/90 leading-relaxed font-bold italic">Leveraging modern cloud systems and analytics for <span className="text-primary italic">superior patient outcomes</span>.</p>
                </div>
              </div>
            </div>

            {/* Decorative blurs */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/20 blur-[100px] rounded-full -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
});

TechnologyPartnershipsSlide.displayName = "TechnologyPartnershipsSlide";

export default TechnologyPartnershipsSlide;