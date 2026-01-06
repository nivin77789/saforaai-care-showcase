import { Rocket, Mail, MapPin } from "lucide-react";
import AnimatedText from "../AnimatedText";
import { motion } from "framer-motion";

const ConclusionSlide = () => {
  const commitments = [
    "Responsible growth",
    "Regulatory excellence",
    "Measurable social value",
  ];

  return (
    <section className="slide slide-accent relative overflow-hidden flex items-center justify-center">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.05, 0.15, 0.05],
              rotate: [0, 90, 0]
            }}
            transition={{ duration: 15 + i * 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute border-2 border-primary-foreground/20 rounded-full"
            style={{
              width: `${400 + i * 300}px`,
              height: `${400 + i * 300}px`,
              right: "-5%",
              bottom: "-10%",
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto w-full relative z-10 text-center px-4">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mx-auto mb-10 shadow-glow border border-white/30"
        >
          <Rocket className="w-12 h-12 text-primary-foreground" />
        </motion.div>

        <AnimatedText delay={0.1}>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-8 text-glow">
            Ready to Launch
          </h2>
        </AnimatedText>

        <AnimatedText delay={0.2}>
          <p className="font-body text-lg md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
            Saforaai represents a <span className="text-white font-bold underline decoration-white/30 underline-offset-4">low-risk, high-impact investment opportunity</span> in a sector of critical national importance.
          </p>
        </AnimatedText>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {commitments.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.2)' }}
              className="bg-white/10 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/20 shadow-soft cursor-default"
            >
              <span className="font-body text-primary-foreground font-semibold">{item}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="bg-white/95 backdrop-blur-lg rounded-[2.5rem] p-10 md:p-14 text-left max-w-2xl mx-auto shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-primary" />

          <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
            Let's Make an Impact
          </h3>

          <div className="space-y-6">
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center gap-6"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                <Mail className="w-7 h-7" />
              </div>
              <span className="font-body text-lg md:text-xl font-medium text-foreground">Contact us for partnerships</span>
            </motion.div>

            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center gap-6"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                <MapPin className="w-7 h-7" />
              </div>
              <span className="font-body text-lg md:text-xl font-medium text-foreground text-glow-none">Stratford-upon-Avon, UK</span>
            </motion.div>
          </div>

          <div className="mt-12 pt-8 border-t border-border flex flex-col items-center">
            <span className="font-display text-4xl font-bold bg-primary bg-clip-text text-transparent italic">Saforaai</span>
            <p className="font-body text-sm text-muted-foreground mt-3 font-medium uppercase tracking-[0.2em]">
              Compassionate Elderly Care
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConclusionSlide;