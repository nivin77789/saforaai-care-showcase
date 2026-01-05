import { User, Users, Briefcase, Building, Landmark } from "lucide-react";
import AnimatedText from "../AnimatedText";

const PersonasSlide = () => {
  const personas = [
    {
      icon: User,
      title: "Elderly Client",
      pain: "Loneliness, delayed assistance",
      solution: "Prompt care, companionship",
      color: "bg-coral",
    },
    {
      icon: Users,
      title: "Family Member",
      pain: "Trust concerns, poor communication",
      solution: "Clear updates, reliable carers",
      color: "bg-primary",
    },
    {
      icon: Briefcase,
      title: "Care Worker",
      pain: "Burnout, lack of growth",
      solution: "Fair pay, training, support",
      color: "bg-gold",
    },
    {
      icon: Building,
      title: "Healthcare Partners",
      pain: "Overloaded systems",
      solution: "Collaborative care support",
      color: "bg-teal-light",
    },
    {
      icon: Landmark,
      title: "Investors",
      pain: "Sustainability, compliance",
      solution: "Clear governance, measurable outcomes",
      color: "bg-navy",
    },
  ];

  return (
    <section className="slide slide-light relative">
      <div className="max-w-6xl mx-auto w-full">
        <AnimatedText className="mb-4">
          <span className="font-body text-sm uppercase tracking-[0.2em] text-primary">
            Section 04
          </span>
        </AnimatedText>

        <AnimatedText delay={0.1}>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-4">
            Who Will <span className="text-gradient">Benefit</span>
          </h2>
        </AnimatedText>

        <AnimatedText delay={0.2}>
          <p className="font-body text-lg text-muted-foreground max-w-xl mb-12">
            Key personas and how Saforaai addresses their unique challenges
          </p>
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {personas.map((persona, index) => (
            <div
              key={persona.title}
              className={`relative overflow-hidden rounded-2xl p-6 hover:-translate-y-2 transition-transform cursor-pointer animate-fade-up ${
                index === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className={`absolute inset-0 ${persona.color} opacity-10`} />
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl ${persona.color} flex items-center justify-center mb-4`}>
                  <persona.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  {persona.title}
                </h3>
                <div className="space-y-3">
                  <div>
                    <span className="font-body text-xs uppercase tracking-wider text-muted-foreground">
                      Pain Points
                    </span>
                    <p className="font-body text-sm text-foreground/80">{persona.pain}</p>
                  </div>
                  <div>
                    <span className="font-body text-xs uppercase tracking-wider text-muted-foreground">
                      How We Help
                    </span>
                    <p className="font-body text-sm text-primary font-medium">{persona.solution}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonasSlide;