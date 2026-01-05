import { Eye, Target, Heart, Shield, Lightbulb, Sparkles, UserCheck, HeartHandshake } from "lucide-react";
import AnimatedText from "../AnimatedText";

const VisionMissionSlide = () => {
  const values = [
    { icon: Heart, label: "Compassion" },
    { icon: Shield, label: "Integrity" },
    { icon: Lightbulb, label: "Innovation" },
    { icon: Sparkles, label: "Transparency" },
    { icon: UserCheck, label: "Respect" },
    { icon: HeartHandshake, label: "Customer-first" },
  ];

  return (
    <section className="slide slide-accent relative overflow-hidden">
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <AnimatedText className="mb-4">
          <span className="font-body text-sm uppercase tracking-[0.2em] text-primary-foreground/80">
            Section 06
          </span>
        </AnimatedText>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <AnimatedText delay={0.1}>
              <h2 className="font-display text-5xl md:text-6xl font-bold text-primary-foreground mb-12">
                Vision, Mission
                <br />
                & Values
              </h2>
            </AnimatedText>

            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-primary-foreground/20 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-primary-foreground" />
                <span className="font-body text-sm uppercase tracking-wider text-primary-foreground/80">
                  Our Vision
                </span>
              </div>
              <p className="font-display text-xl text-primary-foreground leading-relaxed">
                To become a leading, technology-enabled elderly care provider in the UK over the next 5–10 years.
              </p>
            </div>

            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-primary-foreground" />
                <span className="font-body text-sm uppercase tracking-wider text-primary-foreground/80">
                  Our Mission
                </span>
              </div>
              <p className="font-display text-xl text-primary-foreground leading-relaxed">
                To deliver safe, respectful, and responsive care services that enhance independence and quality of life for elderly individuals.
              </p>
            </div>
          </div>

          <div className="bg-primary-foreground rounded-3xl p-8 shadow-card animate-scale-in" style={{ animationDelay: "0.4s" }}>
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              Core Values
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div
                  key={value.label}
                  className="flex items-center gap-3 bg-accent/50 rounded-xl p-4 cursor-pointer hover:bg-accent hover:scale-105 transition-all animate-fade-up"
                  style={{ animationDelay: `${0.5 + index * 0.08}s` }}
                >
                  <value.icon className="w-5 h-5 text-primary" />
                  <span className="font-body font-medium text-foreground">
                    {value.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSlide;