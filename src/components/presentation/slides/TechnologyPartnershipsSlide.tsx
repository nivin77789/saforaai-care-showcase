import { Laptop, Brain, Building2, GraduationCap, Cpu } from "lucide-react";
import AnimatedText from "../AnimatedText";

const TechnologyPartnershipsSlide = () => {
  const techItems = [
    { icon: Laptop, label: "Care scheduling software" },
    { icon: Brain, label: "Digital client records" },
    { icon: Cpu, label: "Future AI monitoring tools" },
  ];

  const partners = [
    { icon: Building2, label: "Local NHS services" },
    { icon: Building2, label: "Community organisations" },
    { icon: GraduationCap, label: "Training providers" },
    { icon: Cpu, label: "Care technology partners" },
  ];

  return (
    <section className="slide slide-dark relative overflow-hidden">
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <AnimatedText className="mb-4">
          <span className="font-body text-sm uppercase tracking-[0.2em] text-teal-light">
            Section 10
          </span>
        </AnimatedText>

        <AnimatedText delay={0.1}>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-cream mb-12">
            Technology &<br />Partnerships
          </h2>
        </AnimatedText>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Technology */}
          <div className="animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
            <h3 className="font-display text-2xl font-semibold text-cream mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Laptop className="w-5 h-5 text-primary-foreground" />
              </div>
              Digital Plan
            </h3>
            <div className="space-y-4">
              {techItems.map((item, index) => (
                <div
                  key={item.label}
                  className="bg-cream/5 backdrop-blur-sm border border-cream/10 rounded-xl p-4 flex items-center gap-4 hover:border-primary/50 transition-colors animate-fade-up"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <item.icon className="w-6 h-6 text-primary" />
                  <span className="font-body text-cream">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Partnerships */}
          <div className="animate-slide-in-right" style={{ animationDelay: "0.3s" }}>
            <h3 className="font-display text-2xl font-semibold text-cream mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-coral flex items-center justify-center">
                <Building2 className="w-5 h-5 text-primary-foreground" />
              </div>
              Collaboration
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {partners.map((partner, index) => (
                <div
                  key={partner.label}
                  className="bg-cream/5 backdrop-blur-sm border border-cream/10 rounded-xl p-4 text-center hover:border-coral/50 hover:scale-105 transition-all cursor-pointer animate-scale-in"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <partner.icon className="w-6 h-6 text-coral mx-auto mb-2" />
                  <span className="font-body text-sm text-cream/90">{partner.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyPartnershipsSlide;