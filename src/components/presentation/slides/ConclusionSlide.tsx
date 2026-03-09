import { Rocket, Mail, MapPin, Star } from "lucide-react";
import AnimatedText from "../AnimatedText";
import { motion } from "framer-motion";
import MeshBackground from "../MeshBackground";

const ConclusionSlide = () => {
  const commitments = [
    "Responsible growth",
    "Regulatory excellence",
    "Measurable social value",
  ];

  return (
    <section className="slide bg-white relative overflow-hidden flex">
      {/* Mesh Background */}
      <MeshBackground colors={["#0D9488", "#1E293B", "#115E59"]} className="opacity-40" />

      {/* Dark overlay to improve text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/85 to-navy/90 opacity-90 pointer-events-none" />

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.2, 0.1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 15 + i * 5, repeat: Infinity, ease: "linear" }}
            className="absolute border border-white/10 rounded-full"
            style={{
              width: `${400 + i * 300}px`,
              height: `${400 + i * 300}px`,
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto w-full relative z-10 text-center px-4 py-6 lg:py-10">
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="w-16 h-16 lg:w-20 lg:h-20 rounded-[1.5rem] bg-white/10 backdrop-blur-xl flex items-center justify-center mx-auto mb-6 border border-white/20 shadow-2xl group transition-all"
        >
          <Rocket className="w-8 h-8 lg:w-10 lg:h-10 text-white group-hover:scale-110 group-hover:-translate-y-1 transition-transform" />
        </motion.div>

        <AnimatedText delay={0.1}>
          <h2 className="font-display text-4xl lg:text-7xl font-bold text-white mb-4 tracking-tight text-glow">
            Ready to <span className="text-gradient">Launch</span>
          </h2>
        </AnimatedText>

        <AnimatedText delay={0.2}>
          <p className="font-body text-base lg:text-xl text-white max-w-3xl mx-auto mb-6 leading-relaxed font-medium">
            Avon Angels Home Care is a <span className="text-white font-bold decoration-primary/50 underline underline-offset-8">low-risk, high-impact investment opportunity</span> in a sector of critical national importance.
          </p>
        </AnimatedText>

        <div className="flex flex-wrap justify-center gap-4 lg:gap-6 mb-8 lg:mb-10">
          {commitments.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-white/5 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20 hover:bg-white/15 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <Star className="w-4 h-4 text-primary group-hover:rotate-45 transition-transform" />
                <span className="font-body text-sm lg:text-base text-white font-bold uppercase tracking-[0.2em]">
                  {item}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="bg-white rounded-[3rem] p-5 lg:p-8 text-left max-w-4xl mx-auto shadow-2xl relative overflow-hidden group border border-white/20"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl rounded-full -z-10 group-hover:bg-primary/10 transition-colors" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <div className="space-y-6">
              <h3 className="font-display text-3xl lg:text-4xl font-bold text-navy mb-4 leading-tight">
                Let's Make an <br /><span className="text-gradient">Impact Together</span>
              </h3>
              <p className="font-body text-sm lg:text-base text-muted-foreground leading-relaxed">
                We are ready to partner with investors and stakeholders who share our vision for safe, dignified, and
                truly person-centred home care in Stratford-upon-Avon and beyond.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 group/item">
                  <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 text-primary group-hover/item:scale-110 group-hover/item:bg-primary group-hover/item:text-white transition-all duration-500">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-body text-[10px] lg:text-xs uppercase tracking-[0.2em] text-muted-foreground font-bold block mb-1">
                      Email
                    </span>
                    <span className="font-body text-sm lg:text-base font-semibold text-navy">
                      contact@avonangelshomecare.com
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 group/item">
                  <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 text-primary group-hover/item:scale-110 group-hover/item:bg-primary group-hover/item:text-white transition-all duration-500">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-body text-[10px] lg:text-xs uppercase tracking-[0.2em] text-muted-foreground font-bold block mb-1">
                      Phone
                    </span>
                    <span className="font-body text-sm lg:text-base font-semibold text-navy">
                      +44 (0) 1789 123 456
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 group/item">
                  <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 text-primary group-hover/item:scale-110 group-hover/item:bg-primary group-hover/item:text-white transition-all duration-500">
                    <Star className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-body text-[10px] lg:text-xs uppercase tracking-[0.2em] text-muted-foreground font-bold block mb-1">
                      Website
                    </span>
                    <span className="font-body text-sm lg:text-base font-semibold text-navy">
                      avonangelshomecare.com
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:pl-10 lg:border-l border-black/5 flex flex-col items-center lg:items-end justify-between gap-6">
              <div className="text-center lg:text-right">
                <span className="font-display text-4xl lg:text-5xl font-bold bg-primary bg-clip-text text-transparent italic tracking-tight">
                  Avon Angels
                </span>
                <p className="font-body text-[11px] lg:text-xs text-muted-foreground mt-3 font-bold uppercase tracking-[0.35em]">
                  Home Care · Compassionate Elderly Care
                </p>
                <div className="mt-6 flex gap-2 justify-center lg:justify-end">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 lg:w-4 lg:h-4 text-gold fill-gold" />
                  ))}
                </div>
              </div>

              <div className="inline-flex items-center gap-3 rounded-full bg-primary/5 px-4 py-2 border border-primary/20">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="font-body text-[10px] lg:text-xs font-semibold text-navy tracking-[0.2em] uppercase">
                  Now Accepting Partnership Discussions
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConclusionSlide;