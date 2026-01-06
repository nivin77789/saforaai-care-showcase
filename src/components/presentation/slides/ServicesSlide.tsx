import { HandHeart, MessageCircleHeart, Pill, ShieldCheck, Zap, ArrowRight } from "lucide-react";
import AnimatedText from "../AnimatedText";
import { motion } from "framer-motion";
import MeshBackground from "../MeshBackground";
import { memo } from "react";

const ServicesSlide = memo(() => {
  const services = [
    {
      icon: HandHeart,
      title: "Personal Care",
      desc: "Daily living assistance including washing, dressing, and mobility support",
      gradient: "from-coral/20 to-coral/5",
      iconColor: "text-coral",
      bg: "bg-coral/5"
    },
    {
      icon: MessageCircleHeart,
      title: "Companionship",
      desc: "Emotional support and meaningful social engagement for well-being",
      gradient: "from-primary/20 to-primary/5",
      iconColor: "text-primary",
      bg: "bg-primary/5"
    },
    {
      icon: Pill,
      title: "Medication Support",
      desc: "Safe reminders and assistance with daily medication routines",
      gradient: "from-gold/20 to-gold/5",
      iconColor: "text-gold",
      bg: "bg-gold/5"
    },
    {
      icon: ShieldCheck,
      title: "Home Safety",
      desc: "Ensuring a secure and safe living environment through monitoring",
      gradient: "from-navy/20 to-navy/5",
      iconColor: "text-navy",
      bg: "bg-navy/5"
    },
  ];

  const differentiators = [
    "Faster response times",
    "Professional training",
    "Ethical transparency",
    "Digital care tools",
    "Tailored care plans",
  ];

  return (
    <section className="slide bg-white relative overflow-hidden flex items-center">
      <MeshBackground colors={["#FFF1F2", "#F0FDFA", "#FFFBEB"]} />

      <div className="max-w-7xl mx-auto w-full relative z-10 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <AnimatedText className="mb-4">
              <span className="font-body text-sm uppercase tracking-[0.4em] text-coral font-bold">
                Section 06
              </span>
            </AnimatedText>

            <AnimatedText delay={0.1}>
              <h2 className="font-display text-5xl md:text-8xl font-bold text-navy mb-8 tracking-tight">
                Our Core <br />
                <span className="text-gradient-warm">Services</span>
              </h2>
            </AnimatedText>

            <AnimatedText delay={0.2}>
              <p className="font-body text-xl lg:text-2xl text-muted-foreground mb-8 lg:mb-12 leading-relaxed max-w-lg">
                Comprehensive, person-centered care designed to maintain independence and enhance quality of life at home.
              </p>
            </AnimatedText>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-navy rounded-[2.5rem] p-6 lg:p-12 text-white shadow-glow relative overflow-hidden group mb-12 lg:mb-0 border border-white/10"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-coral/10 blur-3xl group-hover:bg-coral/20 transition-colors duration-700" />

              <div className="flex items-center gap-6 mb-8 lg:mb-10">
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br from-primary to-teal-deep flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
                  <Zap className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-2xl lg:text-3xl font-bold">
                    The Saforaai Edge
                  </h3>
                  <div className="h-1 w-20 bg-primary mt-2 rounded-full" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 lg:gap-6">
                {differentiators.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3 group/item cursor-default"
                  >
                    <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-primary" />
                    <span className="font-body text-sm lg:text-base text-cream/90 font-bold group-hover/item:text-white transition-colors">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative card-glass rounded-[2.5rem] p-8 lg:p-10 transition-all duration-500 flex flex-col items-start overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2.5rem]`} />

                <div className="relative z-10 w-full flex flex-col h-full">
                  <div className={`w-16 h-16 lg:w-20 lg:h-20 rounded-3xl ${service.bg} shadow-soft flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <service.icon className={`w-8 h-8 lg:w-10 lg:h-10 ${service.iconColor}`} />
                  </div>

                  <h3 className="font-display text-xl lg:text-2xl font-bold text-navy mb-4 group-hover:text-primary transition-colors leading-tight">
                    {service.title}
                  </h3>

                  <p className="font-body text-sm lg:text-base text-muted-foreground leading-relaxed mb-8 flex-grow">
                    {service.desc}
                  </p>

                  <div className="flex items-center gap-3 text-primary font-bold text-xs uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0 duration-500">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Decorative circle */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

ServicesSlide.displayName = "ServicesSlide";

export default ServicesSlide;