import { DollarSign, Star } from "lucide-react";
import AnimatedText from "../AnimatedText";
import { motion } from "framer-motion";
import MeshBackground from "../MeshBackground";
import { memo } from "react";

const ExitStrategyReturnsSlide = memo(() => {
  const investorReturns = [
    { investment: "£500K", ownership: "25%", exitValue: "£8.75M - £12.5M", multiple: "17.5x - 25x" },
    { investment: "£750K", ownership: "30%", exitValue: "£10.5M - £15M", multiple: "14x - 20x" },
    { investment: "£1M", ownership: "33%", exitValue: "£11.55M - £16.5M", multiple: "11.5x - 16.5x" },
  ];

  return (
    <section className="slide bg-white relative overflow-hidden flex">
      <MeshBackground colors={["#F0FDFA", "#ECFDF5", "#FEF3C7"]} />

      <div className="max-w-6xl mx-auto w-full relative z-10 px-4 py-6 lg:py-8">
        <div className="text-center mb-6 lg:mb-8">
          <AnimatedText className="mb-2">
            <span className="font-body text-sm uppercase tracking-[0.4em] text-primary font-bold">
              Section 24
            </span>
          </AnimatedText>

          <AnimatedText delay={0.1}>
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-navy mb-3 tracking-tight">
              Exit Strategy
            </h2>
          </AnimatedText>

          <AnimatedText delay={0.2}>
            <p className="font-body text-sm lg:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Projected investor returns across different cheque sizes.
            </p>
          </AnimatedText>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-primary/5 to-coral/5 rounded-[2.5rem] p-6 lg:p-8 border border-primary/10"
        >
          <div className="text-center mb-5 lg:mb-6">
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-navy mb-2">
              Investor <span className="text-primary italic">Returns</span>
            </h3>
            <p className="font-body text-xs lg:text-sm text-muted-foreground">
              Illustrative outcomes based on targeted exit valuations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            {investorReturns.map((returns, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="bg-white rounded-2xl p-5 lg:p-6 shadow-md border border-primary/10 text-center flex flex-col justify-between"
              >
                <div className="mb-4">
                  <span className="font-body text-[11px] text-muted-foreground uppercase tracking-[0.15em] font-bold block mb-1">
                    Investment
                  </span>
                  <span className="font-display text-2xl lg:text-3xl font-bold text-primary flex items-center justify-center gap-1">
                    <DollarSign className="w-4 h-4 text-primary" />
                    {returns.investment.replace("£", "")}
                  </span>
                </div>

                <div className="space-y-3">
                  <div>
                    <span className="font-body text-[11px] text-muted-foreground uppercase tracking-[0.15em] font-bold block mb-1">
                      Ownership
                    </span>
                    <span className="font-display text-lg font-bold text-navy">{returns.ownership}</span>
                  </div>

                  <div>
                    <span className="font-body text-[11px] text-muted-foreground uppercase tracking-[0.15em] font-bold block mb-1">
                      Exit Value
                    </span>
                    <span className="font-display text-sm lg:text-base font-bold text-coral">
                      {returns.exitValue}
                    </span>
                  </div>

                  <div>
                    <span className="font-body text-[11px] text-muted-foreground uppercase tracking-[0.15em] font-bold block mb-1">
                      Return Multiple
                    </span>
                    <span className="font-display text-lg font-bold text-gold flex items-center justify-center gap-1">
                      <Star className="w-4 h-4 text-gold fill-gold" />
                      {returns.multiple}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
});

ExitStrategyReturnsSlide.displayName = "ExitStrategyReturnsSlide";

export default ExitStrategyReturnsSlide;


