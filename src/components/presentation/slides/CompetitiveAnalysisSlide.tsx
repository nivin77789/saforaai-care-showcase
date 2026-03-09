import { Users, Star, Clock, Shield, Zap, Award, Target, TrendingUp } from "lucide-react";
import AnimatedText from "../AnimatedText";
import { motion } from "framer-motion";
import MeshBackground from "../MeshBackground";
import { memo } from "react";

const CompetitiveAnalysisSlide = memo(() => {
  const competitors = [
    {
      name: "Traditional Care Agencies",
      strengths: ["Established client base", "Local market knowledge"],
      weaknesses: ["Slow response times", "Limited technology", "Higher costs"],
      marketShare: "60%",
      positioning: "Legacy providers with outdated methods"
    },
    {
      name: "NHS & Council Services",
      strengths: ["Regulatory compliance", "Comprehensive coverage", "Government funding"],
      weaknesses: ["Bureaucratic processes", "Limited personalization", "Resource constraints"],
      marketShare: "25%",
      positioning: "Public sector with capacity limitations"
    },
    {
      name: "Tech-Enabled Startups",
      strengths: ["Modern technology", "Scalable platforms", "Innovation focus"],
      weaknesses: ["Limited regulatory experience", "Small client base", "Funding challenges"],
      marketShare: "10%",
      positioning: "Emerging players with growth potential"
    },
    {
      name: "Avon Angels Home Care (Ours)",
      strengths: ["Technology integration", "Regulatory expertise", "Personalized care", "Competitive pricing"],
      weaknesses: ["New market entrant", "Building brand awareness"],
      marketShare: "5%",
      positioning: "Innovative leader in compassionate tech-enabled care"
    }
  ];

  const differentiators = [
    {
      icon: Zap,
      title: "AI-Powered Care Coordination",
      description: "Real-time care optimization and predictive health monitoring"
    },
    {
      icon: Clock,
      title: "15-Minute Response Guarantee",
      description: "Industry-leading response times with GPS-tracked caregivers"
    },
    {
      icon: Shield,
      title: "End-to-End Compliance",
      description: "CEO-led regulatory excellence with automated compliance systems"
    },
    {
      icon: Users,
      title: "Holistic Care Ecosystem",
      description: "Integrated services from personal care to wellness programs"
    }
  ];

  return (
    <section className="slide bg-white relative overflow-hidden flex">
      <MeshBackground colors={["#F8FAFC", "#F1F5F9", "#E2E8F0"]} />

      <div className="max-w-7xl mx-auto w-full relative z-10 px-4 py-8 lg:py-12">
        <div className="text-center mb-8 lg:mb-12">
          <AnimatedText className="mb-2">
            <span className="font-body text-sm uppercase tracking-[0.4em] text-primary font-bold">
              Section 19
            </span>
          </AnimatedText>

          <AnimatedText delay={0.1}>
            <h2 className="font-display text-4xl lg:text-7xl font-bold text-navy mb-4 tracking-tight">
              Competitive <span className="text-gradient">Landscape</span>
            </h2>
          </AnimatedText>

          <AnimatedText delay={0.2}>
            <p className="font-body text-base lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Strategic positioning in a fragmented market with clear opportunities for differentiation and market share capture.
            </p>
          </AnimatedText>
        </div>

        {/* Market Share Overview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-navy rounded-[3rem] p-8 lg:p-12 text-white mb-12 lg:mb-16"
        >
          <h3 className="font-display text-3xl lg:text-5xl font-bold text-center mb-8">
            Market Share <span className="text-primary italic">Distribution</span>
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {competitors.map((competitor, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                  <span className="font-display text-2xl lg:text-3xl font-bold text-primary">{competitor.marketShare}</span>
                </div>
                <h4 className="font-body text-sm lg:text-base font-bold text-white/90 mb-2">{competitor.name}</h4>
                <p className="font-body text-xs text-white/60 leading-relaxed">{competitor.positioning}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Detailed Competitor Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
          {competitors.slice(0, 3).map((competitor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="bg-white rounded-[2.5rem] p-8 lg:p-10 shadow-xl border border-black/5"
            >
              <h4 className="font-display text-2xl lg:text-3xl font-bold text-navy mb-6">{competitor.name}</h4>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                      <Star className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="font-body text-sm font-bold text-green-700 uppercase tracking-[0.1em]">Strengths</span>
                  </div>
                  <ul className="space-y-2 ml-11">
                    {competitor.strengths.map((strength, i) => (
                      <li key={i} className="font-body text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-red-600" />
                    </div>
                    <span className="font-body text-sm font-bold text-red-700 uppercase tracking-[0.1em]">Weaknesses</span>
                  </div>
                  <ul className="space-y-2 ml-11">
                    {competitor.weaknesses.map((weakness, i) => (
                      <li key={i} className="font-body text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                        {weakness}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Avon Angels Home Care Competitive Advantages */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-primary/5 to-coral/5 rounded-[3rem] p-8 lg:p-12 border border-primary/10"
        >
          <div className="text-center mb-8 lg:mb-12">
            <h3 className="font-display text-3xl lg:text-5xl font-bold text-navy mb-4">
              Avon Angels Home Care <span className="text-gradient">Competitive Advantages</span>
            </h3>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Technology-driven differentiation in a traditionally analog industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentiators.map((diff, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center group"
              >
                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-white shadow-soft flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <diff.icon className="w-8 h-8 lg:w-10 lg:h-10 text-primary" />
                </div>
                <h4 className="font-display text-xl lg:text-2xl font-bold text-navy mb-4 group-hover:text-primary transition-colors">
                  {diff.title}
                </h4>
                <p className="font-body text-sm lg:text-base text-muted-foreground leading-relaxed">
                  {diff.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Market Entry Strategy */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12 lg:mt-16 bg-white rounded-[3rem] p-8 lg:p-12 shadow-xl border border-black/5"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-3xl lg:text-4xl font-bold text-navy mb-6">
                Market Entry <span className="text-primary italic">Strategy</span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <Target className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <span className="font-body text-sm font-bold text-primary uppercase tracking-[0.1em] block mb-1">Phase 1: Beachhead</span>
                    <span className="font-body text-base text-muted-foreground">Secure 100 clients in Stratford-upon-Avon within 12 months</span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-coral/10 flex items-center justify-center shrink-0 mt-1">
                    <TrendingUp className="w-4 h-4 text-coral" />
                  </div>
                  <div>
                    <span className="font-body text-sm font-bold text-coral uppercase tracking-[0.1em] block mb-1">Phase 2: Expansion</span>
                    <span className="font-body text-base text-muted-foreground">Scale to 500 clients across Warwickshire by year 3</span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center shrink-0 mt-1">
                    <Award className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <span className="font-body text-sm font-bold text-gold uppercase tracking-[0.1em] block mb-1">Phase 3: Leadership</span>
                    <span className="font-body text-base text-muted-foreground">Become regional market leader with 2,000+ clients by year 5</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-navy rounded-[2rem] p-8 text-white">
              <h4 className="font-display text-2xl font-bold mb-6 text-center">Projected Market Share Growth</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-body text-sm">Year 1</span>
                  <div className="flex items-center gap-3">
                    <div className="w-32 h-3 bg-white/20 rounded-full overflow-hidden">
                      <div className="w-1/4 h-full bg-primary rounded-full" />
                    </div>
                    <span className="font-body text-sm font-bold">5%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-body text-sm">Year 3</span>
                  <div className="flex items-center gap-3">
                    <div className="w-32 h-3 bg-white/20 rounded-full overflow-hidden">
                      <div className="w-1/2 h-full bg-coral rounded-full" />
                    </div>
                    <span className="font-body text-sm font-bold">15%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-body text-sm">Year 5</span>
                  <div className="flex items-center gap-3">
                    <div className="w-32 h-3 bg-white/20 rounded-full overflow-hidden">
                      <div className="w-3/4 h-full bg-gold rounded-full" />
                    </div>
                    <span className="font-body text-sm font-bold">25%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

CompetitiveAnalysisSlide.displayName = "CompetitiveAnalysisSlide";

export default CompetitiveAnalysisSlide;