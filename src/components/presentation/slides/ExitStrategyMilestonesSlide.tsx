import { ArrowRight, Target } from "lucide-react";
import AnimatedText from "../AnimatedText";
import { motion } from "framer-motion";
import MeshBackground from "../MeshBackground";
import { memo } from "react";

const ExitStrategyMilestonesSlide = memo(() => {
  const milestones = [
    {
      year: "2026",
      milestone: "Operational launch and first revenue",
      valuation: "£2M - £3M",
      metrics: "120 clients, £450K revenue",
    },
    {
      year: "2027",
      milestone: "Break-even and initial scaling",
      valuation: "£5M - £7M",
      metrics: "320 clients, £1.2M revenue",
    },
    {
      year: "2028",
      milestone: "Regional expansion complete",
      valuation: "£10M - £15M",
      metrics: "650 clients, £2.8M revenue",
    },
    {
      year: "2029",
      milestone: "National market presence",
      valuation: "£20M - £30M",
      metrics: "1,200 clients, £5.2M revenue",
    },
    {
      year: "2030",
      milestone: "Market leadership established",
      valuation: "£35M - £50M+",
      metrics: "2,000 clients, £8.5M revenue",
    },
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
              Value-creating growth milestones building towards an attractive exit window.
            </p>
          </AnimatedText>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-navy rounded-[2.5rem] p-6 lg:p-8 text-white"
        >
          <div className="text-center mb-5 lg:mb-6">
            <h3 className="font-display text-2xl lg:text-3xl font-bold mb-2">
              Growth <span className="text-primary italic">Milestones</span>
            </h3>
            <p className="font-body text-xs lg:text-sm text-white/80">
              Key years, valuations, and client metrics.
            </p>
          </div>

          <div className="space-y-4 max-h-[58vh] overflow-y-auto pr-1">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="flex items-center gap-5 p-4 bg-white/5 rounded-2xl border border-white/10"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-display text-xl font-bold">{milestone.year}</span>
                    <ArrowRight className="w-4 h-4 text-primary" />
                    <span className="font-body text-sm text-primary font-bold">
                      {milestone.valuation}
                    </span>
                  </div>
                  <h4 className="font-display text-sm lg:text-base font-bold text-white mb-0.5">
                    {milestone.milestone}
                  </h4>
                  <p className="font-body text-xs lg:text-sm text-white/80">
                    {milestone.metrics}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
});

ExitStrategyMilestonesSlide.displayName = "ExitStrategyMilestonesSlide";

export default ExitStrategyMilestonesSlide;


