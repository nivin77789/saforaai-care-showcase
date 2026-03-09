import { CheckCircle2, AlertTriangle, TrendingUp, Shield, Users, Zap, Award, Target } from "lucide-react";
import AnimatedText from "../AnimatedText";
import { motion } from "framer-motion";
import MeshBackground from "../MeshBackground";
import { memo } from "react";

const SWOTAnalysisSlide = memo(() => {
  const swotData = {
    strengths: [
      { icon: Shield, text: "Strong regulatory compliance foundation", color: "text-primary", bg: "bg-primary/10" },
      { icon: Users, text: "Experienced leadership team with healthcare expertise", color: "text-coral", bg: "bg-coral/10" },
      { icon: Zap, text: "Technology-first approach to care delivery", color: "text-gold", bg: "bg-gold/10" },
      { icon: Award, text: "First-mover advantage in AI-enabled elderly care", color: "text-navy", bg: "bg-navy/10" }
    ],
    weaknesses: [
      { icon: AlertTriangle, text: "New market entrant with limited brand recognition", color: "text-coral", bg: "bg-coral/10" },
      { icon: Target, text: "Initial capital requirements for regulatory compliance", color: "text-gold", bg: "bg-gold/10" },
      { icon: Users, text: "Competition for skilled healthcare professionals", color: "text-navy", bg: "bg-navy/10" },
      { icon: TrendingUp, text: "Dependency on local market penetration", color: "text-primary", bg: "bg-primary/10" }
    ],
    opportunities: [
      { icon: TrendingUp, text: "Aging population demographic trends", color: "text-primary", bg: "bg-primary/10" },
      { icon: Zap, text: "Digital health technology adoption", color: "text-coral", bg: "bg-coral/10" },
      { icon: Users, text: "Partnerships with NHS and local authorities", color: "text-gold", bg: "bg-gold/10" },
      { icon: Award, text: "Growing demand for premium care services", color: "text-navy", bg: "bg-navy/10" }
    ],
    threats: [
      { icon: AlertTriangle, text: "Regulatory changes in healthcare sector", color: "text-coral", bg: "bg-coral/10" },
      { icon: Target, text: "Economic downturns affecting discretionary spending", color: "text-gold", bg: "bg-gold/10" },
      { icon: Users, text: "Competition from established care providers", color: "text-navy", bg: "bg-navy/10" },
      { icon: TrendingUp, text: "Staff retention challenges in healthcare industry", color: "text-primary", bg: "bg-primary/10" }
    ]
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } }
  };

  return (
    <section className="slide bg-white relative overflow-hidden flex">
      <MeshBackground colors={["#FEF3C7", "#F0FDFA", "#FDE2E2"]} />

      <div className="max-w-7xl mx-auto w-full relative z-10 px-4 py-8 lg:py-12">
        <div className="text-center mb-8 lg:mb-12">
          <AnimatedText className="mb-2">
            <span className="font-body text-sm uppercase tracking-[0.4em] text-primary font-bold">
              Section 18
            </span>
          </AnimatedText>

          <AnimatedText delay={0.1}>
            <h2 className="font-display text-4xl lg:text-7xl font-bold text-navy mb-4 tracking-tight">
              SWOT <span className="text-gradient">Analysis</span>
            </h2>
          </AnimatedText>

          <AnimatedText delay={0.2}>
            <p className="font-body text-base lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive assessment of internal capabilities and external market factors shaping our strategic direction.
            </p>
          </AnimatedText>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Strengths */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-green-50 rounded-[3rem] p-8 lg:p-12 border border-green-100"
          >
            <div className="flex items-center gap-6 mb-8 lg:mb-10">
              <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-green-500 flex items-center justify-center shadow-glow">
                <CheckCircle2 className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <div>
                <h3 className="font-display text-3xl lg:text-4xl font-bold text-green-800">Strengths</h3>
                <p className="font-body text-sm text-green-600 font-medium">Internal capabilities & advantages</p>
              </div>
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {swotData.strengths.map((strength, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="flex items-start gap-6 p-6 bg-white rounded-2xl shadow-sm border border-green-50 group hover:shadow-md transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl ${strength.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                    <strength.icon className={`w-6 h-6 ${strength.color}`} />
                  </div>
                  <span className="font-body text-base lg:text-lg text-navy/80 leading-relaxed font-medium">{strength.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Weaknesses */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-red-50 rounded-[3rem] p-8 lg:p-12 border border-red-100"
          >
            <div className="flex items-center gap-6 mb-8 lg:mb-10">
              <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-red-500 flex items-center justify-center shadow-glow">
                <AlertTriangle className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <div>
                <h3 className="font-display text-3xl lg:text-4xl font-bold text-red-800">Weaknesses</h3>
                <p className="font-body text-sm text-red-600 font-medium">Areas requiring strategic attention</p>
              </div>
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {swotData.weaknesses.map((weakness, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="flex items-start gap-6 p-6 bg-white rounded-2xl shadow-sm border border-red-50 group hover:shadow-md transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl ${weakness.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                    <weakness.icon className={`w-6 h-6 ${weakness.color}`} />
                  </div>
                  <span className="font-body text-base lg:text-lg text-navy/80 leading-relaxed font-medium">{weakness.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Opportunities */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-blue-50 rounded-[3rem] p-8 lg:p-12 border border-blue-100"
          >
            <div className="flex items-center gap-6 mb-8 lg:mb-10">
              <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-blue-500 flex items-center justify-center shadow-glow">
                <TrendingUp className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <div>
                <h3 className="font-display text-3xl lg:text-4xl font-bold text-blue-800">Opportunities</h3>
                <p className="font-body text-sm text-blue-600 font-medium">External market advantages</p>
              </div>
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {swotData.opportunities.map((opportunity, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="flex items-start gap-6 p-6 bg-white rounded-2xl shadow-sm border border-blue-50 group hover:shadow-md transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl ${opportunity.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                    <opportunity.icon className={`w-6 h-6 ${opportunity.color}`} />
                  </div>
                  <span className="font-body text-base lg:text-lg text-navy/80 leading-relaxed font-medium">{opportunity.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Threats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-orange-50 rounded-[3rem] p-8 lg:p-12 border border-orange-100"
          >
            <div className="flex items-center gap-6 mb-8 lg:mb-10">
              <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-orange-500 flex items-center justify-center shadow-glow">
                <AlertTriangle className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <div>
                <h3 className="font-display text-3xl lg:text-4xl font-bold text-orange-800">Threats</h3>
                <p className="font-body text-sm text-orange-600 font-medium">External challenges & risks</p>
              </div>
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {swotData.threats.map((threat, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="flex items-start gap-6 p-6 bg-white rounded-2xl shadow-sm border border-orange-50 group hover:shadow-md transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl ${threat.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                    <threat.icon className={`w-6 h-6 ${threat.color}`} />
                  </div>
                  <span className="font-body text-base lg:text-lg text-navy/80 leading-relaxed font-medium">{threat.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 lg:mt-16 bg-navy rounded-[3rem] p-8 lg:p-12 text-white text-center"
        >
          <h3 className="font-display text-3xl lg:text-5xl font-bold mb-6">
            Strategic <span className="text-primary italic">Response</span>
          </h3>
          <p className="font-body text-lg text-white/80 max-w-4xl mx-auto leading-relaxed">
            Our SWOT analysis reveals a strong foundation for success. We will leverage our technological advantages and regulatory expertise while proactively addressing market entry challenges through strategic partnerships and aggressive brand building.
          </p>
        </motion.div>
      </div>
    </section>
  );
});

SWOTAnalysisSlide.displayName = "SWOTAnalysisSlide";

export default SWOTAnalysisSlide;