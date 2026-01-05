import { Quote, User, Target, Rocket } from "lucide-react";
import AnimatedText from "../AnimatedText";

const ExecutiveSummarySlide = () => {
  const keyPoints = [
    {
      icon: Target,
      title: "Our Focus",
      text: "Correct systemic limitations in care—slow response times, overstretched staff, inconsistent standards",
    },
    {
      icon: Rocket,
      title: "2026 Objective",
      text: "Launch operations in Stratford-upon-Avon, secure compliance, and begin revenue-generating services",
    },
  ];

  return (
    <section className="slide slide-dark relative overflow-hidden">
      {/* Decorative quote mark */}
      <div className="absolute top-20 right-20 opacity-5 animate-scale-in">
        <Quote className="w-64 h-64 text-cream" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <AnimatedText className="mb-4">
          <span className="font-body text-sm uppercase tracking-[0.2em] text-teal-light">
            Section 02
          </span>
        </AnimatedText>

        <AnimatedText delay={0.1}>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-cream mb-8">
            Executive Summary
          </h2>
        </AnimatedText>

        <div className="flex items-center gap-4 mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
            <User className="w-8 h-8 text-primary-foreground" />
          </div>
          <div>
            <span className="font-display text-xl text-cream font-semibold block">
              Nithin Mathew S
            </span>
            <span className="font-body text-sm text-cream/60">
              CEO & Founder
            </span>
          </div>
        </div>

        <blockquote className="border-l-4 border-primary pl-6 mb-12 animate-slide-in-left" style={{ animationDelay: "0.3s" }}>
          <p className="font-body text-lg md:text-xl text-cream/90 leading-relaxed italic">
            "Saforaai is a purpose-driven, private care organisation founded to respond to one of the UK's fastest-growing and most under-served needs: high-quality, reliable elderly care delivered with dignity, speed, and compassion."
          </p>
        </blockquote>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {keyPoints.map((point, index) => (
            <div
              key={point.title}
              className="bg-cream/5 backdrop-blur-sm border border-cream/10 rounded-2xl p-6 animate-fade-up"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <point.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-lg text-cream font-semibold mb-2">
                {point.title}
              </h3>
              <p className="font-body text-sm text-cream/70">{point.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExecutiveSummarySlide;