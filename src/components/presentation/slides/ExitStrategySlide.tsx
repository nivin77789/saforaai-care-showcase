import { TrendingUp, DollarSign, Users, Building2 } from "lucide-react";
import AnimatedText from "../AnimatedText";
import { motion } from "framer-motion";
import MeshBackground from "../MeshBackground";
import { memo } from "react";

const ExitStrategySlide = memo(() => {
  const exitOptions = [
    {
      type: "Strategic Acquisition",
      timeline: "Year 5-7",
      valuation: "£15M - £25M",
      rationale: "Larger healthcare groups seeking technology-enabled care solutions",
      advantages: ["Immediate liquidity", "Strategic synergies", "Continued growth"],
      icon: Building2,
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      type: "IPO/Public Listing",
      timeline: "Year 7-10",
      valuation: "£30M - £50M+",
      rationale: "Growing demand for healthcare technology investments",
      advantages: ["Maximum valuation potential", "Liquidity for investors", "Platform for further growth"],
      icon: TrendingUp,
      color: "text-coral",
      bg: "bg-coral/10"
    },
    {
      type: "Management Buyout",
      timeline: "Year 8-10",
      valuation: "£20M - £35M",
      rationale: "Proven business model with strong cash flows",
      advantages: ["Team continuity", "Operational control", "Long-term vision alignment"],
      icon: Users,
      color: "text-gold",
      bg: "bg-gold/10"
    }
  ];

  return (
    <section className="slide bg-white relative overflow-hidden flex">
      <MeshBackground colors={["#F0FDFA", "#ECFDF5", "#FEF3C7"]} />

      <div className="max-w-7xl mx-auto w-full relative z-10 px-4 py-6 lg:py-8">
        <div className="text-center mb-6 lg:mb-8">
          <AnimatedText className="mb-2">
            <span className="font-body text-sm uppercase tracking-[0.4em] text-primary font-bold">
              Section 24
            </span>
          </AnimatedText>

          <AnimatedText delay={0.1}>
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-navy mb-3 tracking-tight">
              Exit <span className="text-gradient">Strategy</span>
            </h2>
          </AnimatedText>

          <AnimatedText delay={0.2}>
            <p className="font-body text-sm lg:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Clear, de-risked exit pathways that protect investor value and support long-term growth.
            </p>
          </AnimatedText>
        </div>

        {/* Exit Options */}
        <div>
          <div className="text-center mb-6 lg:mb-8">
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-navy mb-3">
              Exit <span className="text-primary italic">Options</span>
            </h3>
            <p className="font-body text-sm lg:text-base text-muted-foreground">
              Multiple pathways to liquidity based on market conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {exitOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-[2rem] p-6 lg:p-7 shadow-md border border-black/5 group hover:shadow-xl hover:border-primary/20 transition-all duration-500 flex flex-col"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-2xl ${option.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <option.icon className={`w-6 h-6 ${option.color}`} />
                  </div>
                  <div>
                    <h4 className="font-display text-lg lg:text-xl font-bold text-navy group-hover:text-primary transition-colors">
                      {option.type}
                    </h4>
                    <p className="font-body text-xs text-muted-foreground font-medium">{option.timeline}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <DollarSign className="w-3 h-3 text-primary" />
                    <span className="font-body text-[11px] font-bold text-primary uppercase tracking-[0.15em]">
                      Valuation Range
                    </span>
                  </div>
                  <span className="font-display text-xl font-bold text-navy">
                    {option.valuation}
                  </span>
                </div>

                <div className="space-y-3 mt-auto">
                  <div>
                    <span className="font-body text-[11px] uppercase tracking-[0.15em] text-muted-foreground font-bold block mb-1">
                      Rationale
                    </span>
                    <p className="font-body text-xs text-muted-foreground leading-relaxed">
                      {option.rationale}
                    </p>
                  </div>

                  <div>
                    <span className="font-body text-[11px] uppercase tracking-[0.15em] text-muted-foreground font-bold block mb-1">
                      Key Advantages
                    </span>
                    <ul className="space-y-1">
                      {option.advantages.map((advantage, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span className="font-body text-xs text-muted-foreground">
                            {advantage}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

ExitStrategySlide.displayName = "ExitStrategySlide";

export default ExitStrategySlide;