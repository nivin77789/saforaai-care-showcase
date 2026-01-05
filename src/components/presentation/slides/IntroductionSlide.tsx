import { Heart, Users, Briefcase, Globe } from "lucide-react";
import AnimatedText from "../AnimatedText";

const IntroductionSlide = () => {
  const benefits = [
    { icon: Heart, title: "Elderly Individuals", desc: "Reliable care with dignity" },
    { icon: Users, title: "Families", desc: "Trustworthy care solutions" },
    { icon: Briefcase, title: "Care Professionals", desc: "Supportive workplaces" },
    { icon: Globe, title: "Society", desc: "Reduced healthcare strain" },
  ];

  return (
    <section className="slide slide-light relative">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <AnimatedText className="mb-4">
              <span className="font-body text-sm uppercase tracking-[0.2em] text-primary">
                Section 03
              </span>
            </AnimatedText>

            <AnimatedText delay={0.1}>
              <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
                Introduction to
                <br />
                <span className="text-gradient">the Business</span>
              </h2>
            </AnimatedText>

            <AnimatedText delay={0.2}>
              <p className="font-body text-lg text-muted-foreground mb-6">
                Saforaai was founded based on real-world experience and observed
                limitations within existing care home services.
              </p>
            </AnimatedText>

            <AnimatedText delay={0.3}>
              <div className="highlight-box">
                <p className="font-body text-foreground">
                  <strong>Core Purpose:</strong> To serve elderly people with dignity,
                  respect, and consistency.
                </p>
              </div>
            </AnimatedText>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="card-glass p-6 text-center group cursor-pointer hover:scale-105 transition-transform animate-scale-in"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-accent mx-auto mb-4 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <benefit.icon className="w-7 h-7 text-accent-foreground group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  {benefit.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSlide;