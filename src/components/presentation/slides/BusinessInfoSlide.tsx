import { Building2, Globe, FileText, Landmark, Clock, User, ArrowUpRight } from "lucide-react";
import AnimatedText from "../AnimatedText";
import { motion, type Variants } from "framer-motion";
import MeshBackground from "../MeshBackground";
import { memo } from "react";

const BusinessInfoSlide = memo(() => {
  const infoItems = [
    { icon: Building2, label: "Business Name", value: "Avon Angels Home Care", color: "text-primary", bg: "bg-primary/10" },
    { icon: FileText, label: "Organisation Type", value: "Private Limited Company", color: "text-coral", bg: "bg-coral/10" },
    { icon: Landmark, label: "Company Number", value: "Registered in UK", color: "text-gold", bg: "bg-gold/10" },
    { icon: Globe, label: "Region", value: "Stratford-upon-Avon", color: "text-navy", bg: "bg-navy/10" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } }
  };

  return (
    <section className="slide bg-white relative overflow-hidden flex">
      {/* Mesh Background */}
      <MeshBackground colors={["#ECFEFF", "#FFF7ED", "#F8FAFC"]} />

      <div className="max-w-7xl mx-auto w-full relative z-10 px-4 py-4 lg:py-6">
        <div className="text-center mb-4 lg:mb-5">
          <AnimatedText className="mb-2">
            <span className="font-body text-sm uppercase tracking-[0.4em] text-primary font-bold">
              Section 03
            </span>
          </AnimatedText>

          <AnimatedText delay={0.1}>
            <h2 className="font-display text-xl lg:text-3xl font-bold text-navy mb-2 leading-[1.1] tracking-tight">
              Business <span className="text-gradient">Information</span>
            </h2>
          </AnimatedText>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5 items-stretch">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="card-glass rounded-[2rem] p-3.5 lg:p-5 group relative overflow-hidden h-full flex flex-col justify-start border-primary/10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl group-hover:bg-primary/10 transition-colors duration-700" />

              {/* Left illustrative image */}
              <div className="mb-3 lg:mb-4">
                <div className="relative rounded-[1.5rem] overflow-hidden border border-white/60 shadow-lg">
                  <img
                    src="/care_team_professional_1767709379318.png"
                    alt="Professional care team at Avon Angels Home Care"
                    className="w-full h-80 md:h-96 lg:h-[26rem] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent opacity-60" />
                </div>
              </div>

              <div className="flex items-center gap-3 mb-3.5 lg:mb-4">
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-navy flex items-center justify-center shadow-glow group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Clock className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-base lg:text-lg font-bold text-navy leading-tight">
                    Founded on <span className="text-primary italic">Excellence</span>
                  </h3>
                  <p className="font-body text-xs lg:text-sm text-navy/60 mt-1 font-medium">Established in 2024</p>
                </div>
              </div>

              <p className="font-body text-[11px] lg:text-xs text-navy/80 leading-relaxed font-medium mb-4 lg:mb-5">
                "Combining <span className="text-primary font-bold">bespoke care</span> with operational sustainability to address the UK's overstretched healthcare systems."
              </p>

              <div className="flex flex-wrap gap-2">
                <div className="flex items-center gap-1.5 px-3 py-1 bg-navy/5 rounded-full border border-navy/10">
                  <User className="w-4 h-4 text-navy" />
                  <span className="font-body text-[11px] lg:text-xs font-bold text-navy">CEO-Led Compliance</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-primary/5 rounded-full border border-primary/10">
                  <ArrowUpRight className="w-4 h-4 text-primary" />
                  <span className="font-body text-[11px] lg:text-xs font-bold text-primary">Scalable Model</span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-1">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-2.5 lg:gap-3.5"
            >
              {infoItems.map((infoItem, index) => (
                <motion.div
                  key={infoItem.label}
                  variants={item}
                  className="card-glass rounded-[1.3rem] p-3.5 lg:p-4 flex flex-col items-start group hover:-translate-y-1 transition-all duration-500 border-black/5"
                >
                  <div className={`w-8 h-8 lg:w-10 lg:h-10 rounded-2xl ${infoItem.bg} flex items-center justify-center mb-3 lg:mb-3.5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-sm shadow-black/5`}>
                    <infoItem.icon className={`w-5 h-5 lg:w-6 lg:h-6 ${infoItem.color}`} />
                  </div>
                  <span className="font-body text-[9px] lg:text-[10px] uppercase tracking-[0.18em] text-muted-foreground font-bold block mb-1.5 group-hover:text-primary transition-colors">
                    {infoItem.label}
                  </span>
                  <span className="font-display text-base lg:text-lg font-bold text-navy leading-tight">
                    {infoItem.value}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
});

BusinessInfoSlide.displayName = "BusinessInfoSlide";

export default BusinessInfoSlide;