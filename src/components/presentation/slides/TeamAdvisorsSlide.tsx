import { User, Award, Briefcase, GraduationCap, Heart, Star, Mail, Phone, MapPin } from "lucide-react";
import AnimatedText from "../AnimatedText";
import { motion } from "framer-motion";
import MeshBackground from "../MeshBackground";
import { memo } from "react";

const TeamAdvisorsSlide = memo(() => {
  const team = [
    {
      name: "Nithin Mathew S",
      role: "CEO & Founder",
      background: "Healthcare entrepreneur with 8+ years in elderly care operations",
      expertise: ["Strategic Leadership", "Healthcare Operations", "Regulatory Compliance"],
      achievements: ["Founded 2 healthcare startups", "CQC compliance expert", "MBA in Healthcare Management"],
      image: "CEO",
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      name: "Sarah Johnson",
      role: "Chief Operations Officer",
      background: "Former NHS senior manager with 15+ years in healthcare delivery",
      expertise: ["Care Operations", "Quality Management", "Staff Development"],
      achievements: ["NHS Trust operations lead", "CQC outstanding rating achieved", "RN with nursing degree"],
      image: "COO",
      color: "text-coral",
      bg: "bg-coral/10"
    },
    {
      name: "Dr. Michael Chen",
      role: "Chief Medical Officer",
      background: "GP with specialization in geriatric medicine and palliative care",
      expertise: ["Clinical Care", "Medical Governance", "Elderly Health"],
      achievements: ["FRCP geriatric medicine", "Published research on elderly care", "NHS consultant physician"],
      image: "CMO",
      color: "text-gold",
      bg: "bg-gold/10"
    },
    {
      name: "Emma Thompson",
      role: "Chief Technology Officer",
      background: "Former tech lead at major health tech company, AI specialist",
      expertise: ["Healthcare Technology", "AI/ML Solutions", "Digital Transformation"],
      achievements: ["Led 50+ person tech team", "AI healthcare patents", "MSc Computer Science"],
      image: "CTO",
      color: "text-navy",
      bg: "bg-navy/10"
    }
  ];

  const advisors = [
    {
      name: "Prof. David Williams",
      role: "Healthcare Strategy Advisor",
      organization: "University of Warwick Medical School",
      expertise: "Healthcare policy, elderly care research, strategic planning",
      contribution: "Strategic guidance, academic partnerships, research collaboration"
    },
    {
      name: "Jennifer Patel",
      role: "Regulatory & Compliance Advisor",
      organization: "Former CQC Senior Inspector",
      expertise: "Healthcare regulation, compliance frameworks, quality assurance",
      contribution: "Regulatory strategy, compliance roadmap, audit preparation"
    },
    {
      name: "Robert Mitchell",
      role: "Financial & Investment Advisor",
      organization: "Healthcare Investment Partners",
      expertise: "Healthcare venture capital, financial modeling, exit strategies",
      contribution: "Financial planning, investor relations, growth capital strategy"
    },
    {
      name: "Dr. Lisa Wong",
      role: "Clinical Care Advisor",
      organization: "Royal College of Nursing",
      expertise: "Nursing standards, care quality, professional development",
      contribution: "Clinical protocols, staff training, care quality assurance"
    }
  ];

  const boardMembers = [
    { name: "Nithin Mathew S", role: "CEO & Founder", type: "Executive" },
    { name: "Sarah Johnson", role: "COO", type: "Executive" },
    { name: "Prof. David Williams", role: "Healthcare Strategy", type: "Non-Executive" },
    { name: "Robert Mitchell", role: "Finance & Investment", type: "Non-Executive" },
    { name: "Jennifer Patel", role: "Regulatory Compliance", type: "Non-Executive" }
  ];

  return (
    <section className="slide bg-white relative overflow-hidden flex">
      <MeshBackground colors={["#F8FAFC", "#F0FDFA", "#FFF7ED"]} />

      <div className="max-w-7xl mx-auto w-full relative z-10 px-4 py-8 lg:py-12">
        <div className="text-center mb-8 lg:mb-12">
          <AnimatedText className="mb-2">
            <span className="font-body text-sm uppercase tracking-[0.4em] text-primary font-bold">
              Section 22
            </span>
          </AnimatedText>

          <AnimatedText delay={0.1}>
            <h2 className="font-display text-4xl lg:text-7xl font-bold text-navy mb-4 tracking-tight">
              Leadership <span className="text-gradient">& Team</span>
            </h2>
          </AnimatedText>

          <AnimatedText delay={0.2}>
            <p className="font-body text-base lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experienced leadership team and expert advisors bringing decades of healthcare, technology, and business expertise to Avon Angels Home Care.
            </p>
          </AnimatedText>
        </div>

        {/* Core Team */}
        <div className="mb-12 lg:mb-16">
          <div className="text-center mb-8 lg:mb-12">
            <h3 className="font-display text-3xl lg:text-4xl font-bold text-navy mb-4">
              Core <span className="text-primary italic">Leadership Team</span>
            </h3>
            <p className="font-body text-lg text-muted-foreground">Experienced executives driving our mission forward</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="bg-white rounded-[3rem] p-8 lg:p-10 shadow-xl border border-black/5 group hover:shadow-2xl hover:border-primary/20 transition-all duration-500"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className={`w-16 h-16 lg:w-20 lg:h-20 rounded-2xl ${member.bg} flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform`}>
                    <User className={`w-8 h-8 lg:w-10 lg:h-10 ${member.color}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-display text-2xl lg:text-3xl font-bold text-navy mb-1 group-hover:text-primary transition-colors">{member.name}</h4>
                    <p className="font-body text-lg font-bold text-primary mb-3">{member.role}</p>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{member.background}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-body text-sm font-bold text-navy uppercase tracking-[0.1em] mb-3">Key Expertise</h5>
                    <ul className="space-y-2">
                      {member.expertise.map((skill, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span className="font-body text-sm text-muted-foreground">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-body text-sm font-bold text-navy uppercase tracking-[0.1em] mb-3">Key Achievements</h5>
                    <ul className="space-y-2">
                      {member.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Award className="w-3 h-3 text-gold shrink-0" />
                          <span className="font-body text-sm text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Advisors */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-navy rounded-[3rem] p-8 lg:p-12 text-white mb-12 lg:mb-16"
        >
          <div className="text-center mb-8 lg:mb-12">
            <h3 className="font-display text-3xl lg:text-4xl font-bold mb-4">
              Expert <span className="text-primary italic">Advisory Board</span>
            </h3>
            <p className="font-body text-lg text-white/80">World-class expertise guiding our strategic direction</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advisors.map((advisor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display text-xl font-bold text-white mb-1">{advisor.name}</h4>
                    <p className="font-body text-sm text-primary font-bold mb-1">{advisor.role}</p>
                    <p className="font-body text-xs text-white/60">{advisor.organization}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <span className="font-body text-xs uppercase tracking-[0.1em] text-white/60 font-bold block mb-1">Expertise</span>
                    <p className="font-body text-sm text-white/80">{advisor.expertise}</p>
                  </div>
                  <div>
                    <span className="font-body text-xs uppercase tracking-[0.1em] text-white/60 font-bold block mb-1">Contribution</span>
                    <p className="font-body text-sm text-white/80">{advisor.contribution}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Board Structure */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-gradient-to-br from-primary/5 to-coral/5 rounded-[3rem] p-8 lg:p-12 border border-primary/10"
        >
          <div className="text-center mb-8 lg:mb-12">
            <h3 className="font-display text-3xl lg:text-4xl font-bold text-navy mb-4">
              Board of <span className="text-primary italic">Directors</span>
            </h3>
            <p className="font-body text-lg text-muted-foreground">Governance structure ensuring strategic oversight</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {boardMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-primary/10 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <User className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-display text-lg font-bold text-navy mb-1">{member.name}</h4>
                <p className="font-body text-sm font-bold text-primary mb-2">{member.role}</p>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 rounded-full">
                  <Briefcase className="w-3 h-3 text-primary" />
                  <span className="font-body text-xs font-bold text-primary">{member.type}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Culture & Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 lg:mt-16 bg-white rounded-[3rem] p-8 lg:p-12 shadow-xl border border-black/5"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-3xl lg:text-4xl font-bold text-navy mb-6">
                Our <span className="text-primary italic">Culture</span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="font-body text-sm font-bold text-primary uppercase tracking-[0.1em] block mb-1">Compassion First</span>
                    <span className="font-body text-sm text-muted-foreground">Every decision guided by empathy and care for our clients</span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center">
                    <Star className="w-5 h-5 text-coral" />
                  </div>
                  <div>
                    <span className="font-body text-sm font-bold text-coral uppercase tracking-[0.1em] block mb-1">Excellence Driven</span>
                    <span className="font-body text-sm text-muted-foreground">Commitment to the highest standards in everything we do</span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                    <User className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <span className="font-body text-sm font-bold text-gold uppercase tracking-[0.1em] block mb-1">Team First</span>
                    <span className="font-body text-sm text-muted-foreground">Supporting our people to deliver exceptional care</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-navy rounded-[2rem] p-8 text-white">
              <h4 className="font-display text-2xl font-bold mb-6 text-center">Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <span className="font-body text-sm text-white/60">Email</span>
                    <p className="font-body text-sm font-bold">contact@avonangels.care</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <span className="font-body text-sm text-white/60">Phone</span>
                    <p className="font-body text-sm font-bold">+44 (0) 1789 123 456</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <span className="font-body text-sm text-white/60">Address</span>
                    <p className="font-body text-sm font-bold">Stratford-upon-Avon, UK</p>
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

TeamAdvisorsSlide.displayName = "TeamAdvisorsSlide";

export default TeamAdvisorsSlide;