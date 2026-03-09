import { Award, Users, Building2, Star } from "lucide-react";
import AnimatedText from "../AnimatedText";
import { motion } from "framer-motion";
import MeshBackground from "../MeshBackground";
import { memo } from "react";

const ExitStrategyReadinessSlide = memo(() => {
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
              A readiness framework and timeline that make Avon Angels Home Care an attractive, de-risked acquisition.
            </p>
          </AnimatedText>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[2.5rem] p-6 lg:p-8 shadow-xl border border-black/5"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <div>
              <h3 className="font-display text-2xl lg:text-3xl font-bold text-navy mb-4">
                Exit Readiness <span className="text-primary italic">Framework</span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="font-body text-xs font-bold text-primary uppercase tracking-[0.12em] block mb-1">
                      Financial Performance
                    </span>
                    <span className="font-body text-xs lg:text-sm text-muted-foreground">
                      Strong unit economics, predictable recurring revenue, scalable model.
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-coral/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-coral" />
                  </div>
                  <div>
                    <span className="font-body text-xs font-bold text-coral uppercase tracking-[0.12em] block mb-1">
                      Management Team
                    </span>
                    <span className="font-body text-xs lg:text-sm text-muted-foreground">
                      Experienced leadership capable of running the post-exit business.
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gold/10 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <span className="font-body text-xs font-bold text-gold uppercase tracking-[0.12em] block mb-1">
                      Operational Scalability
                    </span>
                    <span className="font-body text-xs lg:text-sm text-muted-foreground">
                      Systems and processes ready for multi-region expansion.
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-navy/10 flex items-center justify-center">
                    <Star className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <span className="font-body text-xs font-bold text-navy uppercase tracking-[0.12em] block mb-1">
                      Market Position
                    </span>
                    <span className="font-body text-xs lg:text-sm text-muted-foreground">
                      Recognised local brand with strong competitive differentiation.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-navy rounded-[1.75rem] p-6 lg:p-7 text-white flex flex-col justify-between">
              <div>
                <h4 className="font-display text-xl lg:text-2xl font-bold mb-4 text-center">
                  Exit Timeline Summary
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl">
                    <span className="font-body text-xs lg:text-sm">Preferred Exit Window</span>
                    <span className="font-body text-xs lg:text-sm font-bold text-primary">Year 5–7</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl">
                    <span className="font-body text-xs lg:text-sm">Target IRR</span>
                    <span className="font-body text-xs lg:text-sm font-bold text-coral">25–35%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl">
                    <span className="font-body text-xs lg:text-sm">Minimum Return Multiple</span>
                    <span className="font-body text-xs lg:text-sm font-bold text-gold">10x</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl">
                    <span className="font-body text-xs lg:text-sm">Expected Hold Period</span>
                    <span className="font-body text-xs lg:text-sm font-bold text-primary">5–7 years</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 p-4 bg-primary/10 rounded-xl text-center">
                <p className="font-body text-xs lg:text-sm text-white/80 mb-1">
                  Expected Total Return Range
                </p>
                <p className="font-display text-2xl lg:text-3xl font-bold text-primary">
                  £8.75M – £16.5M
                </p>
                <p className="font-body text-[11px] text-white/60 mt-1">
                  Illustrative for £500K – £1M invested.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

ExitStrategyReadinessSlide.displayName = "ExitStrategyReadinessSlide";

export default ExitStrategyReadinessSlide;


