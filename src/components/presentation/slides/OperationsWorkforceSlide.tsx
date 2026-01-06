import { Home, Users, GraduationCap, Heart, CheckCircle2 } from "lucide-react";
import AnimatedText from "../AnimatedText";
import { motion } from "framer-motion";
import MeshBackground from "../MeshBackground";
import { memo } from "react";

const OperationsWorkforceSlide = memo(() => {
  const workforceInfo = [
    { icon: Users, label: "Initial Team", value: "CEO + 2–4 professional carers", color: "text-primary", bg: "bg-primary/10" },
    { icon: GraduationCap, label: "Advanced Training", value: "Mandatory care & safeguarding standards", color: "text-coral", bg: "bg-coral/10" },
    { icon: Heart, label: "Empathetic Culture", value: "Care for the carers, so they care for you", color: "text-gold", bg: "bg-gold/10" },
  ];

  return (
    <section className="slide bg-white relative overflow-hidden flex items-center py-20 lg:py-0">
      {/* Mesh Background */}
      <MeshBackground colors={["#ECFEFF", "#F0FDFA", "#FFFBEB"]} />

      <div className="max-w-7xl mx-auto w-full relative z-10 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="order-2 lg:order-1 mt-12 lg:mt-0"
          >
            <div className="relative rounded-[2.5rem] lg:rounded-[5rem] overflow-hidden shadow-2xl border-[8px] lg:border-[12px] border-white group transition-all duration-700 hover:rotate-1">
              <img
                src="/care_team_professional_1767709379318.png"
                alt="Professional Care Team"
                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
              <div className="absolute bottom-6 left-6 right-6 lg:bottom-12 lg:left-12 lg:right-12 flex justify-between items-end translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                <div className="bg-white/10 backdrop-blur-xl p-4 lg:p-8 rounded-[1.5rem] lg:rounded-[3rem] border border-white/20 shadow-2xl">
                  <span className="font-display text-4xl lg:text-7xl font-bold text-white block mb-1 lg:mb-2">100%</span>
                  <span className="font-body text-[10px] lg:text-base text-white/90 uppercase tracking-[0.3em] font-bold">Certified Staff</span>
                </div>
              </div>
            </div>

            {/* Decorative float tool */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-coral/20 blur-[80px] rounded-full -z-10 group-hover:bg-coral/30 transition-colors" />
          </motion.div>

          <div className="order-1 lg:order-2">
            <AnimatedText className="mb-4">
              <span className="font-body text-xs lg:text-sm uppercase tracking-[0.4em] text-primary font-bold">
                Section 12
              </span>
            </AnimatedText>

            <AnimatedText delay={0.1}>
              <h2 className="font-display text-4xl md:text-8xl font-bold text-navy mb-8 lg:mb-10 leading-[1.1] tracking-tight">
                Operations & <br />
                <span className="text-gradient">Workforce</span>
              </h2>
            </AnimatedText>

            <div className="space-y-4 lg:space-y-8">
              {workforceInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  className="card-glass p-5 lg:p-8 rounded-[2rem] lg:rounded-[2.5rem] flex items-center gap-6 lg:gap-8 group hover:translate-x-4 transition-all duration-500"
                >
                  <div className={`w-12 h-12 lg:w-20 lg:h-20 rounded-2xl ${item.bg} flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-sm shadow-black/5`}>
                    <item.icon className={`w-6 h-6 lg:w-10 lg:h-10 ${item.color}`} />
                  </div>
                  <div>
                    <span className="font-body text-[9px] lg:text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-bold block mb-1 lg:mb-2">
                      {item.label}
                    </span>
                    <span className="font-display text-lg lg:text-2xl font-bold text-navy leading-snug group-hover:text-primary transition-colors">
                      {item.value}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-10 lg:mt-16 p-6 lg:p-10 bg-navy rounded-[2rem] lg:rounded-[3rem] text-white flex items-center gap-6 lg:gap-8 relative overflow-hidden group shadow-glow shadow-navy/20"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl group-hover:bg-primary/20 transition-colors duration-700" />
              <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-[1.2rem] lg:rounded-[1.5rem] bg-primary flex items-center justify-center shrink-0 shadow-lg group-hover:rotate-3 transition-transform">
                <CheckCircle2 className="w-5 h-5 lg:w-8 lg:h-8 text-white" />
              </div>
              <p className="font-body text-sm lg:text-xl font-bold italic leading-relaxed text-white/90">"Regular quality audits and CEO-led compliance checks ensure <span className="text-primary italic">unwavering 5-star service delivery</span>."</p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
});

OperationsWorkforceSlide.displayName = "OperationsWorkforceSlide";

export default OperationsWorkforceSlide;