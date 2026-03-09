import { Target, Users, TrendingUp, Megaphone, Heart, Star, Award, ChartColumn, Shield } from "lucide-react";
import AnimatedText from "../AnimatedText";
import { motion } from "framer-motion";
import MeshBackground from "../MeshBackground";
import { memo } from "react";

const MarketingSalesStrategySlide = memo(() => {
  const channels = [
    {
      name: "Digital Marketing",
      tactics: ["SEO-optimized website", "Google Ads campaigns", "Social media presence", "Content marketing"],
      budget: "25%",
      target: "50% of leads",
      icon: TrendingUp,
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      name: "Community Partnerships",
      tactics: ["Local GP practices", "Age UK partnerships", "Council relationships", "Charity collaborations"],
      budget: "20%",
      target: "30% of leads",
      icon: Users,
      color: "text-coral",
      bg: "bg-coral/10"
    },
    {
      name: "Referral Programs",
      tactics: ["Client referral incentives", "Healthcare professional partnerships", "Family member rewards", "Satisfaction guarantees"],
      budget: "15%",
      target: "15% of leads",
      icon: Heart,
      color: "text-gold",
      bg: "bg-gold/10"
    },
    {
      name: "Direct Sales",
      tactics: ["Personal consultations", "Home visits", "Care assessments", "Relationship building"],
      budget: "40%",
      target: "5% of leads",
      icon: Target,
      color: "text-navy",
      bg: "bg-navy/10"
    }
  ];

  const brandPillars = [
    { pillar: "Trust", message: "Reliable, professional, and dependable care" },
    { pillar: "Compassion", message: "Person-centered care with genuine empathy" },
    { pillar: "Innovation", message: "Technology-enhanced care delivery" },
    { pillar: "Excellence", message: "Highest standards in everything we do" }
  ];

  const salesFunnel = [
    { stage: "Awareness", percentage: "100%", activities: "Digital ads, community events, website traffic" },
    { stage: "Interest", percentage: "25%", activities: "Content downloads, consultation requests, social engagement" },
    { stage: "Consideration", percentage: "10%", activities: "Free assessments, testimonials, case studies" },
    { stage: "Purchase", percentage: "3%", activities: "Contract signing, care plan development, onboarding" },
    { stage: "Retention", percentage: "95%", activities: "Ongoing support, feedback collection, relationship building" }
  ];

  const kpis = [
    { metric: "Customer Acquisition Cost", target: "< £500", current: "£450" },
    { metric: "Customer Lifetime Value", target: "£45,000", current: "£42,000" },
    { metric: "Monthly Recurring Revenue", target: "£37,500", current: "£15,000" },
    { metric: "Client Satisfaction Score", target: "95%", current: "97%" },
    { metric: "Referral Rate", target: "25%", current: "18%" },
    { metric: "Churn Rate", target: "< 5%", current: "3%" }
  ];

  return (
    <section className="slide bg-white relative overflow-hidden flex">
      <MeshBackground colors={["#FEF3C7", "#F0FDFA", "#FDE2E2"]} />

      <div className="max-w-7xl mx-auto w-full relative z-10 px-4 py-8 lg:py-12">
        <div className="text-center mb-8 lg:mb-12">
          <AnimatedText className="mb-2">
            <span className="font-body text-sm uppercase tracking-[0.4em] text-primary font-bold">
              Section 23
            </span>
          </AnimatedText>

          <AnimatedText delay={0.1}>
            <h2 className="font-display text-4xl lg:text-7xl font-bold text-navy mb-4 tracking-tight">
              Marketing & <span className="text-gradient">Sales Strategy</span>
            </h2>
          </AnimatedText>

          <AnimatedText delay={0.2}>
            <p className="font-body text-base lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Multi-channel approach combining digital marketing, community partnerships, and personal relationships to build trust and drive growth.
            </p>
          </AnimatedText>
        </div>

        {/* Brand Strategy */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-navy rounded-[3rem] p-8 lg:p-12 text-white mb-12 lg:mb-16"
        >
          <div className="text-center mb-8 lg:mb-12">
            <h3 className="font-display text-3xl lg:text-4xl font-bold mb-4">
              Brand <span className="text-primary italic">Pillars</span>
            </h3>
            <p className="font-body text-lg text-white/80">Foundation of our marketing messaging and customer experience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {brandPillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  {index === 0 && <Shield className="w-8 h-8 text-primary" />}
                  {index === 1 && <Heart className="w-8 h-8 text-primary" />}
                  {index === 2 && <TrendingUp className="w-8 h-8 text-primary" />}
                  {index === 3 && <Award className="w-8 h-8 text-primary" />}
                </div>
                <h4 className="font-display text-xl font-bold mb-2">{pillar.pillar}</h4>
                <p className="font-body text-sm text-white/80 leading-relaxed">{pillar.message}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Marketing Channels */}
        <div className="mb-12 lg:mb-16">
          <div className="text-center mb-8 lg:mb-12">
            <h3 className="font-display text-3xl lg:text-4xl font-bold text-navy mb-4">
              Multi-Channel <span className="text-primary italic">Marketing Mix</span>
            </h3>
            <p className="font-body text-lg text-muted-foreground">Integrated approach to reach and convert target customers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {channels.map((channel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="bg-white rounded-[3rem] p-8 lg:p-10 shadow-xl border border-black/5"
              >
                <div className="flex items-center gap-6 mb-6">
                  <div className={`w-16 h-16 rounded-2xl ${channel.bg} flex items-center justify-center`}>
                    <channel.icon className={`w-8 h-8 ${channel.color}`} />
                  </div>
                  <div>
                    <h4 className="font-display text-2xl lg:text-3xl font-bold text-navy">{channel.name}</h4>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="font-body text-sm text-muted-foreground">Budget: <span className="font-bold text-primary">{channel.budget}</span></span>
                      <span className="font-body text-sm text-muted-foreground">Target: <span className="font-bold text-primary">{channel.target}</span></span>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="font-body text-sm font-bold text-navy uppercase tracking-[0.1em] mb-4">Key Tactics</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {channel.tactics.map((tactic, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="font-body text-sm text-muted-foreground">{tactic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sales Funnel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-primary/5 to-coral/5 rounded-[3rem] p-8 lg:p-12 border border-primary/10 mb-12 lg:mb-16"
        >
          <div className="text-center mb-8 lg:mb-12">
            <h3 className="font-display text-3xl lg:text-4xl font-bold text-navy mb-4">
              Sales <span className="text-primary italic">Funnel</span>
            </h3>
            <p className="font-body text-lg text-muted-foreground">Conversion optimization from awareness to loyal customers</p>
          </div>

          <div className="space-y-6">
            {salesFunnel.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex items-center gap-6 p-6 bg-white/50 rounded-2xl border border-primary/10"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <ChartColumn className={`w-8 h-8 ${index === 0 ? 'text-primary' : index === 1 ? 'text-coral' : index === 2 ? 'text-gold' : index === 3 ? 'text-navy' : 'text-green-600'}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h4 className="font-display text-xl font-bold text-navy">{stage.stage}</h4>
                    <span className="px-3 py-1 bg-primary/10 rounded-full text-sm font-bold text-primary">{stage.percentage}</span>
                  </div>
                  <p className="font-body text-sm text-muted-foreground">{stage.activities}</p>
                </div>
                <div className="w-20 h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-1000"
                    style={{ width: stage.percentage }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Performance Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-white rounded-[3rem] p-8 lg:p-12 shadow-xl border border-black/5"
        >
          <div className="text-center mb-8 lg:mb-12">
            <h3 className="font-display text-3xl lg:text-4xl font-bold text-navy mb-4">
              Key Performance <span className="text-primary italic">Indicators</span>
            </h3>
            <p className="font-body text-lg text-muted-foreground">Measurable metrics driving marketing and sales success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kpis.map((kpi, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-body text-xs uppercase tracking-[0.1em] text-muted-foreground font-bold">Target</span>
                  <span className="font-body text-sm font-bold text-primary">{kpi.target}</span>
                </div>
                <h4 className="font-display text-lg font-bold text-navy mb-2">{kpi.metric}</h4>
                <div className="flex items-center justify-between">
                  <span className="font-body text-xs uppercase tracking-[0.1em] text-muted-foreground font-bold">Current</span>
                  <span className={`font-body text-sm font-bold ${kpi.current.includes('97%') || kpi.current.includes('18%') || kpi.current.includes('3%') ? 'text-green-600' : 'text-primary'}`}>
                    {kpi.current}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Marketing Budget Allocation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 lg:mt-16 bg-navy rounded-[3rem] p-8 lg:p-12 text-white"
        >
          <div className="text-center mb-8 lg:mb-12">
            <h3 className="font-display text-3xl lg:text-4xl font-bold mb-4">
              Marketing Budget <span className="text-primary italic">Allocation</span>
            </h3>
            <p className="font-body text-lg text-white/80">Strategic investment in customer acquisition and brand building</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl">
                  <span className="font-body text-lg">Digital Marketing</span>
                  <span className="font-display text-xl font-bold text-primary">25%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl">
                  <span className="font-body text-lg">Direct Sales</span>
                  <span className="font-display text-xl font-bold text-coral">40%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl">
                  <span className="font-body text-lg">Community Partnerships</span>
                  <span className="font-display text-xl font-bold text-gold">20%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl">
                  <span className="font-body text-lg">Referral Programs</span>
                  <span className="font-display text-xl font-bold text-navy">15%</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-2xl p-8">
              <h4 className="font-display text-2xl font-bold text-center mb-6">Year 1 Marketing Investment</h4>
              <div className="text-center">
                <span className="font-display text-5xl lg:text-6xl font-bold text-primary block mb-2">£125K</span>
                <p className="font-body text-sm text-white/80">Total marketing budget for customer acquisition and brand awareness</p>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <span className="font-body text-sm text-white/60">Expected ROI</span>
                    <p className="font-display text-2xl font-bold text-green-400">3.2x</p>
                  </div>
                  <div>
                    <span className="font-body text-sm text-white/60">Customer Acquisition</span>
                    <p className="font-display text-2xl font-bold text-primary">120</p>
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

MarketingSalesStrategySlide.displayName = "MarketingSalesStrategySlide";

export default MarketingSalesStrategySlide;