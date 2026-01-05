import { Home, Users, GraduationCap, Heart } from "lucide-react";
import AnimatedText from "../AnimatedText";

const OperationsWorkforceSlide = () => {
  const operationsPoints = [
    "Services delivered at clients' homes",
    "Structured daily care schedules",
    "Small, accountable care teams",
    "CEO-led decision-making with compliance checks",
    "Regular quality audits",
  ];

  const workforceInfo = [
    { icon: Users, label: "Initial Team", value: "CEO + 2–4 care workers" },
    { icon: GraduationCap, label: "Training", value: "Mandatory care & safeguarding" },
    { icon: Heart, label: "Culture", value: "Respect, wellbeing, growth" },
  ];

  return (
    <section className="slide bg-accent relative">
      <div className="max-w-6xl mx-auto w-full">
        <AnimatedText className="mb-4">
          <span className="font-body text-sm uppercase tracking-[0.2em] text-primary">
            Section 09
          </span>
        </AnimatedText>

        <AnimatedText delay={0.1}>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-12">
            Operations & <span className="text-gradient">Workforce</span>
          </h2>
        </AnimatedText>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Operations */}
          <div className="bg-card rounded-3xl p-8 shadow-card animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                <Home className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">
                Operations Plan
              </h3>
            </div>

            <div className="space-y-4">
              {operationsPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 animate-slide-in-left"
                  style={{ animationDelay: `${0.3 + index * 0.08}s` }}
                >
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span className="font-body text-foreground">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Workforce */}
          <div className="bg-card rounded-3xl p-8 shadow-card animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-coral flex items-center justify-center">
                <Users className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">
                Workforce Plan
              </h3>
            </div>

            <div className="space-y-4">
              {workforceInfo.map((item, index) => (
                <div
                  key={item.label}
                  className="bg-muted rounded-xl p-4 flex items-center gap-4 animate-scale-in"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-coral/20 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-coral" />
                  </div>
                  <div>
                    <span className="font-body text-xs uppercase tracking-wider text-muted-foreground block">
                      {item.label}
                    </span>
                    <span className="font-display text-lg font-semibold text-foreground">
                      {item.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperationsWorkforceSlide;