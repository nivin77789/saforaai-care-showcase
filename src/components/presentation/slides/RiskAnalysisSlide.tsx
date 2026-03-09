import { AlertTriangle, Shield, TrendingDown, Users, FileText, DollarSign, Activity, CheckCircle2 } from "lucide-react";
import AnimatedText from "../AnimatedText";
import { motion } from "framer-motion";
import MeshBackground from "../MeshBackground";
import { memo } from "react";

const RiskAnalysisSlide = memo(() => {
  const risks = [
    {
      category: "Regulatory & Compliance",
      level: "High",
      impact: "Critical",
      probability: "Medium",
      risks: [
        "Changes in CQC regulations",
        "Delays in registration process",
        "Compliance audit failures"
      ],
      mitigation: [
        "CEO-led compliance team",
        "Automated compliance systems",
        "Legal partnership with healthcare specialists"
      ]
    },
    {
      category: "Market & Competition",
      level: "Medium",
      impact: "High",
      probability: "High",
      risks: [
        "Aggressive competitor response",
        "Economic downturn affecting demand",
        "Changes in local demographics"
      ],
      mitigation: [
        "First-mover technology advantage",
        "Diverse revenue streams",
        "Local market partnerships"
      ]
    },
    {
      category: "Operational",
      level: "Medium",
      impact: "High",
      probability: "Medium",
      risks: [
        "Staff recruitment and retention",
        "Service delivery consistency",
        "Technology system failures"
      ],
      mitigation: [
        "Competitive compensation packages",
        "Comprehensive training programs",
        "Redundant system architecture"
      ]
    },
    {
      category: "Financial",
      level: "Low",
      impact: "High",
      probability: "Low",
      risks: [
        "Funding delays",
        "Cost overruns in setup",
        "Revenue collection issues"
      ],
      mitigation: [
        "Conservative financial planning",
        "Multiple funding sources",
        "Cash flow monitoring systems"
      ]
    }
  ];

  const riskLevels = {
    High: { color: "text-red-600", bg: "bg-red-100", border: "border-red-200" },
    Medium: { color: "text-orange-600", bg: "bg-orange-100", border: "border-orange-200" },
    Low: { color: "text-green-600", bg: "bg-green-100", border: "border-green-200" }
  };

  return (
    <section className="slide bg-white relative overflow-hidden flex">
      <MeshBackground colors={["#FEF2F2", "#FFF7ED", "#F0FDFA"]} />

      <div className="max-w-7xl mx-auto w-full relative z-10 px-4 py-8 lg:py-12">
        <div className="text-center mb-8 lg:mb-12">
          <AnimatedText className="mb-2">
            <span className="font-body text-sm uppercase tracking-[0.4em] text-primary font-bold">
              Section 20
            </span>
          </AnimatedText>

          <AnimatedText delay={0.1}>
            <h2 className="font-display text-4xl lg:text-7xl font-bold text-navy mb-4 tracking-tight">
              Risk <span className="text-gradient">Analysis</span>
            </h2>
          </AnimatedText>

          <AnimatedText delay={0.2}>
            <p className="font-body text-base lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive risk assessment with proactive mitigation strategies to ensure business resilience and sustainable growth.
            </p>
          </AnimatedText>
        </div>

        <div className="space-y-8 lg:space-y-12">
          {risks.map((riskCategory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="bg-white rounded-[3rem] p-8 lg:p-12 shadow-xl border border-black/5 overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-2xl ${riskLevels[riskCategory.level as keyof typeof riskLevels].bg} flex items-center justify-center`}>
                      <AlertTriangle className={`w-6 h-6 ${riskLevels[riskCategory.level as keyof typeof riskLevels].color}`} />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl lg:text-3xl font-bold text-navy">{riskCategory.category}</h3>
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-[0.1em] ${riskLevels[riskCategory.level as keyof typeof riskLevels].bg} ${riskLevels[riskCategory.level as keyof typeof riskLevels].color} mt-2`}>
                        {riskCategory.level} Risk
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-2xl p-4 text-center">
                      <span className="font-body text-xs uppercase tracking-[0.1em] text-muted-foreground font-bold block mb-1">Impact</span>
                      <span className="font-display text-lg font-bold text-navy">{riskCategory.impact}</span>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-4 text-center">
                      <span className="font-body text-xs uppercase tracking-[0.1em] text-muted-foreground font-bold block mb-1">Probability</span>
                      <span className="font-display text-lg font-bold text-navy">{riskCategory.probability}</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center">
                          <AlertTriangle className="w-4 h-4 text-red-600" />
                        </div>
                        <span className="font-body text-sm font-bold text-red-700 uppercase tracking-[0.1em]">Key Risks</span>
                      </div>
                      <ul className="space-y-3">
                        {riskCategory.risks.map((risk, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-red-400 mt-2 shrink-0" />
                            <span className="font-body text-sm text-muted-foreground leading-relaxed">{risk}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                          <Shield className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="font-body text-sm font-bold text-green-700 uppercase tracking-[0.1em]">Mitigation Strategies</span>
                      </div>
                      <ul className="space-y-3">
                        {riskCategory.mitigation.map((strategy, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-green-400 mt-2 shrink-0" />
                            <span className="font-body text-sm text-muted-foreground leading-relaxed">{strategy}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Risk Management Framework */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 lg:mt-16 bg-navy rounded-[3rem] p-8 lg:p-12 text-white"
        >
          <div className="text-center mb-8 lg:mb-12">
            <h3 className="font-display text-3xl lg:text-5xl font-bold mb-4">
              Risk Management <span className="text-primary italic">Framework</span>
            </h3>
            <p className="font-body text-lg text-white/80 max-w-3xl mx-auto">
              Proactive risk management integrated into our operational DNA
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-display text-xl font-bold mb-2">Identify</h4>
              <p className="font-body text-sm text-white/80">Continuous risk assessment and monitoring</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-coral/20 flex items-center justify-center mx-auto mb-4">
                <Activity className="w-8 h-8 text-coral" />
              </div>
              <h4 className="font-display text-xl font-bold mb-2">Assess</h4>
              <p className="font-body text-sm text-white/80">Quantitative impact and probability analysis</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gold/20 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-gold" />
              </div>
              <h4 className="font-display text-xl font-bold mb-2">Mitigate</h4>
              <p className="font-body text-sm text-white/80">Strategic controls and contingency planning</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-green-400" />
              </div>
              <h4 className="font-display text-xl font-bold mb-2">Monitor</h4>
              <p className="font-body text-sm text-white/80">Regular review and adaptive management</p>
            </div>
          </div>
        </motion.div>

        {/* Risk Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12 lg:mt-16 bg-gradient-to-r from-primary/5 to-coral/5 rounded-[3rem] p-8 lg:p-12 border border-primary/10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-3xl lg:text-4xl font-bold text-navy mb-6">
                Risk <span className="text-primary italic">Summary</span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white/50 rounded-2xl">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <span className="font-body text-sm font-bold text-green-700 uppercase tracking-[0.1em] block">Overall Risk Level</span>
                    <span className="font-display text-xl font-bold text-navy">Low to Medium</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/50 rounded-2xl">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <span className="font-body text-sm font-bold text-blue-700 uppercase tracking-[0.1em] block">Contingency Budget</span>
                    <span className="font-display text-xl font-bold text-navy">15% of Total Budget</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[2rem] p-8 shadow-lg">
              <h4 className="font-display text-2xl font-bold text-navy mb-6 text-center">Risk Mitigation Investment</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-body text-sm">Compliance Systems</span>
                  <span className="font-body text-sm font-bold text-primary">£50K</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-body text-sm">Insurance Coverage</span>
                  <span className="font-body text-sm font-bold text-primary">£30K</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-body text-sm">Technology Redundancy</span>
                  <span className="font-body text-sm font-bold text-primary">£25K</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-body text-sm">Legal & Advisory</span>
                  <span className="font-body text-sm font-bold text-primary">£20K</span>
                </div>
                <div className="w-full h-px bg-gray-200 my-4" />
                <div className="flex justify-between items-center">
                  <span className="font-body text-sm font-bold">Total Investment</span>
                  <span className="font-display text-lg font-bold text-primary">£125K</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

RiskAnalysisSlide.displayName = "RiskAnalysisSlide";

export default RiskAnalysisSlide;