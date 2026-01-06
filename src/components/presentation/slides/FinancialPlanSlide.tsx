import { PoundSterling, CheckCircle2, TrendingUp, Wallet, PieChart, Activity, ArrowUpRight } from "lucide-react";
import AnimatedText from "../AnimatedText";
import { motion } from "framer-motion";
import MeshBackground from "../MeshBackground";

const FinancialPlanSlide = () => {
  const highlights = [
    { label: "Funding Strategy", value: "Raise & Bootstrap", icon: Wallet, color: "text-primary", bg: "bg-primary/10" },
    { label: "Pricing Model", value: "Competitive Hourly", icon: Activity, color: "text-coral", bg: "bg-coral/10" },
    { label: "Growth Strategy", value: "Lean & Scalable", icon: TrendingUp, color: "text-gold", bg: "bg-gold/10" },
    { label: "Revenue Goal", value: "Operational Break-even", icon: PieChart, color: "text-navy", bg: "bg-navy/10" },
  ];

  return (
    <section className="slide bg-white relative overflow-hidden flex items-center">
      {/* Mesh Background */}
      <MeshBackground colors={["#F8FAFC", "#F1F5F9", "#F0F9FF"]} />

      <div className="max-w-7xl mx-auto w-full relative z-10 px-4">
        <div className="text-center mb-12 lg:mb-20">
          <AnimatedText className="mb-4">
            <span className="font-body text-sm uppercase tracking-[0.4em] text-primary font-bold">
              Section 14
            </span>
          </AnimatedText>

          <AnimatedText delay={0.1}>
            <h2 className="font-display text-5xl lg:text-8xl font-bold text-navy mb-6 tracking-tight">
              Financial <span className="text-gradient">Sustainability</span>
            </h2>
          </AnimatedText>

          <AnimatedText delay={0.2}>
            <p className="font-body text-lg lg:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A balanced approach to capital growth and operational excellence.
            </p>
          </AnimatedText>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-navy rounded-[3rem] p-10 lg:p-14 text-white shadow-2xl relative overflow-hidden flex flex-col group border border-white/10"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full group-hover:bg-primary/20 transition-colors duration-700" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-coral/5 blur-[100px] rounded-full" />

            <div className="flex items-center gap-8 mb-12 lg:mb-16">
              <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-3xl bg-primary flex items-center justify-center shadow-glow shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <PoundSterling className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
              </div>
              <div>
                <span className="font-body text-xs lg:text-sm text-primary-foreground/60 uppercase tracking-[0.3em] font-bold block mb-2">Capital Strategy</span>
                <span className="font-display text-3xl lg:text-5xl font-bold block leading-tight tracking-tight">RAISE & <span className="text-primary italic">BOOTSTRAP</span></span>
              </div>
            </div>

            <h3 className="font-display text-2xl lg:text-3xl font-bold mb-8 flex items-center gap-3">
              Primary Allocations
              <ArrowUpRight className="w-6 h-6 text-primary" />
            </h3>

            <div className="space-y-4 lg:space-y-6 flex-grow">
              {[
                "Regulatory & CQC Registration",
                "Advanced Care Training Programs",
                "Insurance & Legal Safeguards",
                "Digital Care Infrastructure"
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-6 py-4 lg:py-5 border-b border-white/5 group/list transition-colors hover:border-white/20"
                >
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover/list:bg-primary/20 transition-all">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-body text-base lg:text-xl text-white/80 group-hover/list:text-white transition-colors">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                className="card-glass p-8 lg:p-10 rounded-[2.5rem] flex flex-col items-start group hover:-translate-y-2 transition-all duration-500 cursor-default"
              >
                <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-2xl ${item.bg} flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-sm shadow-black/5`}>
                  <item.icon className={`w-7 h-7 lg:w-8 lg:h-8 ${item.color}`} />
                </div>
                <div className="mt-auto">
                  <span className="font-body text-[10px] lg:text-xs uppercase tracking-[0.2em] text-muted-foreground font-bold block mb-3 group-hover:text-primary transition-colors">{item.label}</span>
                  <span className="font-display text-xl lg:text-2xl font-bold text-navy leading-tight">{item.value}</span>
                </div>

                {/* Decorative arrow */}
                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                  <ArrowUpRight className={`w-5 h-5 ${item.color}`} />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FinancialPlanSlide;