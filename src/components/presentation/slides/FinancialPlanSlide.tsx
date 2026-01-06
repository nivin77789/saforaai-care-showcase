import { PoundSterling, CheckCircle2, TrendingUp } from "lucide-react";
import AnimatedText from "../AnimatedText";
import { motion } from "framer-motion";

const FinancialPlanSlide = () => {
  const fundingUse = [
    "Regulatory setup and compliance costs",
    "Initial staff recruitment and mandatory training",
    "Insurance, safeguarding, and operational readiness",
    "Essential systems and tools for safe service delivery",
  ];

  const highlights = [
    { label: "Revenue Sources", value: "Hourly domiciliary care, bundled packages" },
    { label: "Pricing Model", value: "Competitive, transparent hourly rates" },
    { label: "Profit Strategy", value: "Quality focus, then controlled growth" },
    { label: "Sustainability", value: "Lean structure, scalable workforce" },
  ];

  return (
    <section className="slide slide-light relative flex items-center">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="max-w-6xl mx-auto w-full relative z-10 px-4">
        <AnimatedText className="mb-4">
          <span className="font-body text-xs md:text-sm uppercase tracking-[0.3em] text-primary font-semibold">
            Section 11
          </span>
        </AnimatedText>

        <AnimatedText delay={0.1}>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-4">
            Financial <span className="text-gradient">Plan</span>
          </h2>
        </AnimatedText>

        <AnimatedText delay={0.2}>
          <p className="font-body text-lg text-muted-foreground max-w-xl mb-12">
            Funding-ready overview with financial discipline and sustainability as core principles.
          </p>
        </AnimatedText>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Funding Use */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-primary rounded-[2rem] p-8 md:p-10 text-primary-foreground shadow-glow relative overflow-hidden"
          >
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />

            <div className="flex items-center gap-6 mb-10">
              <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                <PoundSterling className="w-10 h-10" />
              </div>
              <div>
                <span className="font-body text-sm md:text-base opacity-80 block font-medium">Startup Grant</span>
                <span className="font-display text-5xl md:text-6xl font-bold">£6,000</span>
              </div>
            </div>

            <h3 className="font-display text-2xl font-bold mb-6">Funding Allocation</h3>
            <div className="space-y-4">
              {fundingUse.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="font-body text-sm md:text-base opacity-95">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Financial Highlights */}
          <div className="grid grid-cols-1 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ x: 10, backgroundColor: 'rgba(var(--accent), 0.5)' }}
                className="card-glass p-6 flex items-center gap-6 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <TrendingUp className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
                </div>
                <div>
                  <span className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground block mb-1 font-semibold">
                    {item.label}
                  </span>
                  <span className="font-display text-xl font-bold text-foreground">
                    {item.value}
                  </span>
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