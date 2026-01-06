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
    <section className="slide bg-white relative overflow-hidden flex items-center justify-center">
      {/* Mesh Background */}
      <MeshBackground colors={["#0D9488", "#1E293B", "#115E59"]} className="opacity-40" />

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

      <div className="max-w-5xl mx-auto w-full relative z-10 text-center px-4">
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="w-20 h-20 lg:w-24 lg:h-24 rounded-[2rem] bg-white/10 backdrop-blur-xl flex items-center justify-center mx-auto mb-10 border border-white/20 shadow-2xl group transition-all"
        >
          <Rocket className="w-10 h-10 lg:w-12 lg:h-12 text-white group-hover:scale-110 group-hover:-translate-y-1 transition-transform" />
        </motion.div>

        <AnimatedText delay={0.1}>
          <h2 className="font-display text-5xl md:text-8xl lg:text-9xl font-bold text-white mb-8 tracking-tight text-glow">
            Ready to <span className="text-gradient">Launch</span>
          </h2>
        </AnimatedText>

        <AnimatedText delay={0.2}>
          <p className="font-body text-lg lg:text-3xl text-white/80 max-w-3xl mx-auto mb-16 leading-relaxed font-medium">
            Saforaai is a <span className="text-white font-bold decoration-primary/50 underline underline-offset-8">low-risk, high-impact investment opportunity</span> in a sector of critical national importance.
          </p>
        </AnimatedText>

        <div className="flex flex-wrap justify-center gap-4 lg:gap-6 mb-16 lg:mb-24">
          {commitments.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-white/5 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <Star className="w-4 h-4 text-primary group-hover:rotate-45 transition-transform" />
                <span className="font-body text-sm lg:text-base text-white/90 font-bold uppercase tracking-[0.2em]">{item}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="bg-white rounded-[4rem] p-10 lg:p-16 text-left max-w-4xl mx-auto shadow-2xl relative overflow-hidden group border border-white/20"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl rounded-full -z-10 group-hover:bg-primary/10 transition-colors" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-display text-4xl lg:text-5xl font-bold text-navy mb-8 leading-tight">
                Let's Make an <br /><span className="text-gradient">Impact Together</span>
              </h3>

              <div className="space-y-6">
                <div className="flex items-center gap-6 group/item">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 text-primary group-hover/item:scale-110 group-hover/item:bg-primary group-hover/item:text-white transition-all duration-500">
                    <Mail className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="font-body text-[10px] lg:text-xs uppercase tracking-[0.2em] text-muted-foreground font-bold block mb-1">Partnerships & Inquiries</span>
                    <span className="font-display text-xl lg:text-2xl font-bold text-navy">Contact us today</span>
                  </div>
                </div>

                <div className="flex items-center gap-6 group/item">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 text-primary group-hover/item:scale-110 group-hover/item:bg-primary group-hover/item:text-white transition-all duration-500">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="font-body text-[10px] lg:text-xs uppercase tracking-[0.2em] text-muted-foreground font-bold block mb-1">Our Base</span>
                    <span className="font-display text-xl lg:text-2xl font-bold text-navy whitespace-nowrap">Stratford-upon-Avon, UK</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:pl-12 lg:border-l border-black/5 flex flex-col items-center lg:items-end justify-center">
              <div className="text-center lg:text-right">
                <span className="font-display text-6xl lg:text-8xl font-bold bg-primary bg-clip-text text-transparent italic tracking-tighter">Saforaai</span>
                <p className="font-body text-xs lg:text-sm text-muted-foreground mt-4 font-bold uppercase tracking-[0.4em]">
                  Compassionate <br className="hidden lg:block" /> Elderly Care
                </p>
                <div className="mt-8 flex gap-2 justify-center lg:justify-end">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConclusionSlide;