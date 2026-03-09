import { Calendar, CheckCircle2, Clock, Rocket, Target, Users, Building2, Zap } from "lucide-react";
import AnimatedText from "../AnimatedText";
import { motion } from "framer-motion";
import MeshBackground from "../MeshBackground";
import { memo } from "react";

const ImplementationTimelineSlide = memo(() => {
  const phases = [
    {
      phase: "Phase 1: Foundation",
      duration: "Months 1-3",
      title: "Regulatory & Operational Setup",
      status: "Pre-Launch",
      color: "from-blue-500 to-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-200",
      activities: [
        "Complete CQC registration and licensing",
        "Secure office space in Stratford-upon-Avon",
        "Recruit core management team",
        "Establish banking and insurance arrangements",
        "Develop operational policies and procedures",
        "Set up HR and payroll systems"
      ],
      milestones: [
        "CQC registration approved",
        "Office lease signed",
        "Management team in place",
        "Insurance policies active"
      ]
    },
    {
      phase: "Phase 2: Launch",
      duration: "Months 4-6",
      title: "Market Entry & Initial Operations",
      status: "Q1 2026",
      color: "from-green-500 to-green-600",
      bg: "bg-green-50",
      border: "border-green-200",
      activities: [
        "Launch marketing and community outreach",
        "Begin caregiver recruitment and training",
        "Deploy technology platform",
        "Secure first client contracts",
        "Establish service delivery protocols",
        "Begin revenue-generating operations"
      ],
      milestones: [
        "First 50 clients secured",
        "Caregiver team trained",
        "Technology platform live",
        "Positive cash flow achieved"
      ]
    },
    {
      phase: "Phase 3: Growth",
      duration: "Months 7-18",
      title: "Expansion & Optimization",
      status: "2026",
      color: "from-orange-500 to-orange-600",
      bg: "bg-orange-50",
      border: "border-orange-200",
      activities: [
        "Scale client base to 200+",
        "Expand service geography",
        "Optimize operational efficiency",
        "Enhance technology capabilities",
        "Build strategic partnerships",
        "Achieve operational break-even"
      ],
      milestones: [
        "200 active clients",
        "Regional expansion initiated",
        "Break-even achieved",
        "Partnerships established"
      ]
    },
    {
      phase: "Phase 4: Scale",
      duration: "Months 19-36",
      title: "Market Leadership",
      status: "2027-2028",
      color: "from-purple-500 to-purple-600",
      bg: "bg-purple-50",
      border: "border-purple-200",
      activities: [
        "Scale to 500+ clients",
        "Expand to additional locations",
        "Launch advanced care programs",
        "Develop franchise model",
        "Achieve £2M+ annual revenue",
        "Establish industry leadership position"
      ],
      milestones: [
        "500+ active clients",
        "Multi-location operations",
        "£2M annual revenue",
        "Industry recognition achieved"
      ]
    }
  ];

  const criticalPath = [
    { item: "CQC Registration", duration: "45 days", dependency: "Legal setup" },
    { item: "Office Acquisition", duration: "30 days", dependency: "Funding secured" },
    { item: "Technology Platform", duration: "60 days", dependency: "Requirements finalized" },
    { item: "Team Recruitment", duration: "90 days", dependency: "Office ready" },
    { item: "Client Acquisition", duration: "120 days", dependency: "Operations ready" }
  ];

  return (
    <section className="slide bg-white relative overflow-hidden flex">
      <MeshBackground colors={["#EEF2FF", "#F0FDFA", "#FEF3C7"]} />

      <div className="max-w-7xl mx-auto w-full relative z-10 px-4 py-8 lg:py-12">
        <div className="text-center mb-8 lg:mb-12">
          <AnimatedText className="mb-2">
            <span className="font-body text-sm uppercase tracking-[0.4em] text-primary font-bold">
              Section 21
            </span>
          </AnimatedText>

          <AnimatedText delay={0.1}>
            <h2 className="font-display text-4xl lg:text-7xl font-bold text-navy mb-4 tracking-tight">
              Implementation <span className="text-gradient">Timeline</span>
            </h2>
          </AnimatedText>

          <AnimatedText delay={0.2}>
            <p className="font-body text-base lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Detailed 3-year roadmap with clear milestones, dependencies, and critical path items for successful execution.
            </p>
          </AnimatedText>
        </div>

        {/* Timeline Overview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-navy rounded-[3rem] p-8 lg:p-12 text-white mb-12 lg:mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <Calendar className="w-8 h-8 text-primary" />
            <h3 className="font-display text-3xl lg:text-4xl font-bold">36-Month Implementation Plan</h3>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {phases.map((phase, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br ${phase.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  {index === 0 && <Building2 className="w-8 h-8 lg:w-10 lg:h-10 text-white" />}
                  {index === 1 && <Rocket className="w-8 h-8 lg:w-10 lg:h-10 text-white" />}
                  {index === 2 && <Target className="w-8 h-8 lg:w-10 lg:h-10 text-white" />}
                  {index === 3 && <Zap className="w-8 h-8 lg:w-10 lg:h-10 text-white" />}
                </div>
                <h4 className="font-display text-lg lg:text-xl font-bold mb-2">{phase.phase}</h4>
                <p className="font-body text-sm text-white/80 mb-1">{phase.duration}</p>
                <p className="font-body text-xs text-primary font-bold">{phase.status}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Detailed Phase Breakdown */}
        <div className="space-y-8 lg:space-y-12">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className={`${phase.bg} rounded-[3rem] p-8 lg:p-12 border ${phase.border}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${phase.color} flex items-center justify-center shadow-lg`}>
                      {index === 0 && <Building2 className="w-6 h-6 text-white" />}
                      {index === 1 && <Rocket className="w-6 h-6 text-white" />}
                      {index === 2 && <Target className="w-6 h-6 text-white" />}
                      {index === 3 && <Zap className="w-6 h-6 text-white" />}
                    </div>
                    <div>
                      <h3 className="font-display text-2xl lg:text-3xl font-bold text-navy">{phase.title}</h3>
                      <p className="font-body text-sm text-muted-foreground font-medium">{phase.duration}</p>
                    </div>
                  </div>

                  <div className="bg-white/50 rounded-2xl p-4">
                    <h4 className="font-body text-sm font-bold text-navy uppercase tracking-[0.1em] mb-3">Key Milestones</h4>
                    <ul className="space-y-2">
                      {phase.milestones.map((milestone, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                          <span className="font-body text-sm text-muted-foreground">{milestone}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="lg:col-span-8">
                  <h4 className="font-body text-lg font-bold text-navy uppercase tracking-[0.1em] mb-6">Activities & Deliverables</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {phase.activities.map((activity, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 bg-white/50 rounded-2xl">
                        <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                        <span className="font-body text-sm text-muted-foreground leading-relaxed">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Critical Path */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 lg:mt-16 bg-white rounded-[3rem] p-8 lg:p-12 shadow-xl border border-black/5"
        >
          <div className="text-center mb-8 lg:mb-12">
            <h3 className="font-display text-3xl lg:text-4xl font-bold text-navy mb-4">
              Critical Path <span className="text-primary italic">Dependencies</span>
            </h3>
            <p className="font-body text-lg text-muted-foreground">
              Sequential dependencies that must be completed for successful launch
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {criticalPath.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gradient-to-br from-primary/5 to-coral/5 rounded-2xl p-6 border border-primary/10"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="font-body text-sm font-bold text-primary uppercase tracking-[0.1em]">{item.duration}</span>
                  </div>
                </div>
                <h4 className="font-display text-lg font-bold text-navy mb-2">{item.item}</h4>
                <p className="font-body text-sm text-muted-foreground">
                  <span className="font-medium">Depends on:</span> {item.dependency}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12 lg:mt-16 bg-navy rounded-[3rem] p-8 lg:p-12 text-white"
        >
          <div className="text-center mb-8 lg:mb-12">
            <h3 className="font-display text-3xl lg:text-4xl font-bold mb-4">
              Success <span className="text-primary italic">Metrics</span>
            </h3>
            <p className="font-body text-lg text-white/80">
              Key performance indicators tracked throughout implementation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <span className="font-display text-3xl font-bold text-primary block mb-2">120</span>
              <span className="font-body text-sm text-white/80">Clients by Month 6</span>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-coral/20 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-coral" />
              </div>
              <span className="font-display text-3xl font-bold text-coral block mb-2">95%</span>
              <span className="font-body text-sm text-white/80">Client Satisfaction</span>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gold/20 flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-gold" />
              </div>
              <span className="font-display text-3xl font-bold text-gold block mb-2">£450K</span>
              <span className="font-body text-sm text-white/80">Revenue by Year 1</span>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-green-400" />
              </div>
              <span className="font-display text-3xl font-bold text-green-400 block mb-2">15</span>
              <span className="font-body text-sm text-white/80">Team Members by Month 6</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

ImplementationTimelineSlide.displayName = "ImplementationTimelineSlide";

export default ImplementationTimelineSlide;