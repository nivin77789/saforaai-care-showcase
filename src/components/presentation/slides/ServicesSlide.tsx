import { HandHeart, MessageCircleHeart, Pill, ShieldCheck, Zap } from "lucide-react";
import AnimatedText from "../AnimatedText";

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
    "Trained carers",
    "Ethical practices",
    "Digital care tools",
  ];

  return (
    <section className="slide bg-coral-light relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-coral/10 -translate-y-1/2 translate-x-1/2 animate-scale-in" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <AnimatedText className="mb-4">
          <span className="font-body text-sm uppercase tracking-[0.2em] text-coral">
            Section 05
          </span>
        </AnimatedText>

        <AnimatedText delay={0.1}>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-4">
            Services <span className="text-gradient-warm">Offered</span>
          </h2>
        </AnimatedText>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <div className="space-y-4">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-card rounded-2xl p-5 flex items-start gap-4 shadow-soft hover:shadow-card transition-shadow animate-slide-in-left"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-coral/20 flex items-center justify-center shrink-0">
                  <service.icon className="w-6 h-6 text-coral" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-card rounded-3xl p-8 shadow-card animate-scale-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground">
                What Sets Us Apart
              </h3>
            </div>

            <div className="space-y-4">
              {differentiators.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-3 animate-slide-in-right"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="font-body text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSlide;