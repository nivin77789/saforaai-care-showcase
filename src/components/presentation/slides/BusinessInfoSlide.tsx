import { Building2, Globe, FileText, Landmark, Clock, User, ArrowUpRight } from "lucide-react";
import AnimatedText from "../AnimatedText";
import { motion } from "framer-motion";
import MeshBackground from "../MeshBackground";
import { memo } from "react";

const BusinessInfoSlide = memo(() => {
  const infoItems = [
    { icon: Building2, label: "Business Name", value: "Saforaai", color: "text-primary", bg: "bg-primary/10" },
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

  const item: any = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } }
  };

  return (
    <section className="slide bg-white relative overflow-hidden flex items-center">
      {/* Mesh Background */}
      <MeshBackground colors={["#ECFEFF", "#FFF7ED", "#F8FAFC"]} />

      <div className="max-w-7xl mx-auto w-full relative z-10 px-4">
        <div className="text-center mb-16 lg:mb-24">
          <AnimatedText className="mb-4">
            <span className="font-body text-sm uppercase tracking-[0.4em] text-primary font-bold">
              Section 03
            </span>
          </AnimatedText>

          <AnimatedText delay={0.1}>
            <h2 className="font-display text-5xl md:text-8xl font-bold text-navy mb-10 leading-[1.1] tracking-tight">
              Business <span className="text-gradient">Information</span>
            </h2>
          </AnimatedText>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-12 xl:col-span-7"
          >
            <div className="card-glass rounded-[2.5rem] p-10 lg:p-14 group relative overflow-hidden h-full flex flex-col justify-center border-primary/10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl group-hover:bg-primary/10 transition-colors duration-700" />

              <div className="flex items-center gap-8 mb-12">
                <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-3xl bg-navy flex items-center justify-center shadow-glow group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Clock className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-3xl lg:text-4xl font-bold text-navy leading-tight">
                    Founded on <span className="text-primary italic">Excellence</span>
                  </h3>
                  <p className="font-body text-lg text-navy/60 mt-2 font-medium">Established in 2024</p>
                </div>
              </div>

              <p className="font-body text-xl lg:text-2xl text-navy/80 leading-relaxed font-medium mb-12">
                "Combining <span className="text-primary font-bold">bespoke care</span> with operational sustainability to address the UK's overstretched healthcare systems."
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-3 px-6 py-3 bg-navy/5 rounded-full border border-navy/10">
                  <User className="w-5 h-5 text-navy" />
                  <span className="font-body text-sm font-bold text-navy">CEO-Led Compliance</span>
                </div>
                <div className="flex items-center gap-3 px-6 py-3 bg-primary/5 rounded-full border border-primary/10">
                  <ArrowUpRight className="w-5 h-5 text-primary" />
                  <span className="font-body text-sm font-bold text-primary">Scalable Model</span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-12 xl:col-span-5">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-6 lg:gap-8"
            >
              {infoItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  variants={item}
                  className="card-glass rounded-[2.5rem] p-8 lg:p-10 flex flex-col items-start group hover:-translate-y-2 transition-all duration-500 border-black/5"
                >
                  <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-2xl ${item.bg} flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-sm shadow-black/5`}>
                    <item.icon className={`w-7 h-7 lg:w-8 lg:h-8 ${item.color}`} />
                  </div>
                  <span className="font-body text-[10px] lg:text-xs uppercase tracking-[0.2em] text-muted-foreground font-bold block mb-3 group-hover:text-primary transition-colors">
                    {item.label}
                  </span>
                  <span className="font-display text-xl lg:text-2xl font-bold text-navy leading-tight">
                    {item.value}
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