import { CheckCircle2 } from "lucide-react";
import AnimatedText from "../AnimatedText";

const GoalsSlide = () => {
  const goals = [
    "Register Saforaai with all required UK regulatory bodies (including CQC)",
    "Commence operations within the first quarter of funding approval",
    "Recruit, train, and retain a high-quality care workforce",
    "Achieve strong client satisfaction and referral-based growth",
    "Reach operational break-even through controlled scaling",
    "Establish as a trusted local care brand within Stratford-upon-Avon",
  ];

  return (
    <section className="slide slide-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-cream/5 rounded-full animate-scale-in"
            style={{
              width: `${200 + i * 150}px`,
              height: `${200 + i * 150}px`,
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <AnimatedText className="mb-4">
          <span className="font-body text-sm uppercase tracking-[0.2em] text-teal-light">
            Section 07
          </span>
        </AnimatedText>

        <AnimatedText delay={0.1}>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-cream mb-4">
            Goals & Objectives
          </h2>
        </AnimatedText>

        <AnimatedText delay={0.2}>
          <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full mb-12">
            <span className="font-display text-2xl font-bold text-primary">2026</span>
            <span className="font-body text-sm text-cream/80">Targets</span>
          </div>
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {goals.map((goal, index) => (
            <div
              key={index}
              className={`flex items-start gap-4 bg-cream/5 backdrop-blur-sm rounded-xl p-5 border border-cream/10 hover:border-primary/50 transition-colors group ${
                index % 2 === 0 ? "animate-slide-in-left" : "animate-slide-in-right"
              }`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="mt-0.5">
                <CheckCircle2 className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <p className="font-body text-cream/90">{goal}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoalsSlide;