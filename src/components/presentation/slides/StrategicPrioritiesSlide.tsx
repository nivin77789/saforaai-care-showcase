import { Cog, HeartHandshake, TrendingUp, Cpu, Handshake } from "lucide-react";
import AnimatedText from "../AnimatedText";

const StrategicPrioritiesSlide = () => {
  const priorities = [
    {
      icon: Cog,
      title: "Core Operations",
      desc: "Deliver consistent, high-quality care",
    },
    {
      icon: HeartHandshake,
      title: "Customer Service",
      desc: "Build trust through communication and reliability",
    },
    {
      icon: TrendingUp,
      title: "Growth & Expansion",
      desc: "Increase client base within Stratford-upon-Avon",
    },
    {
      icon: Cpu,
      title: "Technology",
      desc: "Introduce basic digital scheduling and care records",
    },
    {
      icon: Handshake,
      title: "Partnerships",
      desc: "Work with local councils and healthcare providers",
    },
  ];

  return (
    <section className="slide slide-light relative">
      <div className="max-w-6xl mx-auto w-full">
        <AnimatedText className="mb-4">
          <span className="font-body text-sm uppercase tracking-[0.2em] text-primary">
            Section 08
          </span>
        </AnimatedText>

        <AnimatedText delay={0.1}>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-4">
            Strategic <span className="text-gradient">Priorities</span>
          </h2>
        </AnimatedText>

        <AnimatedText delay={0.2}>
          <p className="font-body text-lg text-muted-foreground max-w-xl mb-12">
            Key focus areas driving Saforaai's success in 2026
          </p>
        </AnimatedText>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-border hidden md:block" />

          <div className="space-y-6">
            {priorities.map((priority, index) => (
              <div
                key={priority.title}
                className="flex items-start gap-6 relative animate-slide-in-left"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shrink-0 z-10 shadow-lg hover:scale-110 hover:rotate-12 transition-transform">
                  <priority.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="card-glass p-6 flex-1 hover:border-primary/30 transition-colors">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {priority.title}
                  </h3>
                  <p className="font-body text-muted-foreground">{priority.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicPrioritiesSlide;