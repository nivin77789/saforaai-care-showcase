import { HandHeart, MessageCircleHeart, Pill, ShieldCheck, Zap } from "lucide-react";
import AnimatedText from "../AnimatedText";
import { motion } from "framer-motion";

const ServicesSlide = () => {
  const services = [
    {
      icon: HandHeart,
      title: "Personal Care",
      desc: "Daily living assistance including washing, dressing, and mobility support",
    },
    {
      icon: MessageCircleHeart,
      title: "Companionship Care",
      desc: "Emotional support and meaningful social engagement",
    },
    {
      icon: Pill,
      title: "Medication Support",
      desc: "Safe reminders and assistance with medication routines",
    },
    {
      icon: ShieldCheck,
      title: "Home Safety Monitoring",
      desc: "Ensuring a secure and safe living environment",
    },
  ];

  const differentiators = [
    "Faster response times",
    "Trained professional carers",
    "Ethical practices & transparency",
    "Advanced digital care tools",
    "Tailored care plans",
    "24/7 client support line",
  ];

  return (
    <section className="slide bg-coral-light relative overflow-hidden flex items-center">
      {/* Decorative elements */}
      <div className="absolute top-1/2 -right-48 w-[600px] h-[600px] rounded-full bg-coral/10 -translate-y-1/2 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10 px-4">
        <AnimatedText className="mb-4">
          <span className="font-body text-xs md:text-sm uppercase tracking-[0.3em] text-coral font-semibold">
            Section 05
          </span>
        </AnimatedText>

        <AnimatedText delay={0.1}>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-12">
            Services <span className="text-gradient-warm">Offered</span>
          </h2>
        </AnimatedText>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-card/80 backdrop-blur-md rounded-2xl p-6 shadow-soft hover:shadow-card transition-all border border-white/40"
              >
                <div className="w-12 h-12 rounded-2xl bg-coral/20 flex items-center justify-center shrink-0 mb-4 group-hover:bg-coral transition-colors">
                  <service.icon className="w-6 h-6 text-coral group-hover:text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-glass p-8 md:p-10"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-glow">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                What Sets Us Apart
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {differentiators.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                  <span className="font-body text-foreground font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSlide;