import { PoundSterling, CheckCircle2, TrendingUp } from "lucide-react";
import AnimatedText from "../AnimatedText";

const FinancialPlanSlide = () => {
  const fundingUse = [
    "Regulatory setup and compliance costs",
    "Initial staff recruitment and mandatory training",
    "Insurance, safeguarding, and operational readiness",
    "Essential systems and tools for safe service delivery",
  ];

  const highlights = [
    { label: "Revenue Sources", value: "Hourly domiciliary care, bundled packages" },
    { label: "Pricing Model", value: "Competitive, transparent hourly rates" },
    { label: "Profit Strategy", value: "Quality focus, then controlled growth" },
    { label: "Sustainability", value: "Lean structure, scalable workforce" },
  ];

  return (
    <section className="slide slide-light relative">
      <div className="max-w-6xl mx-auto w-full">
        <AnimatedText className="mb-4">
          <span className="font-body text-sm uppercase tracking-[0.2em] text-primary">
            Section 11
          </span>
        </AnimatedText>

        <AnimatedText delay={0.1}>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-4">
            Financial <span className="text-gradient">Plan</span>
          </h2>
        </AnimatedText>

        <AnimatedText delay={0.2}>
          <p className="font-body text-lg text-muted-foreground max-w-xl mb-12">
            Funding-ready overview with financial discipline and sustainability as core principles
          </p>
        </AnimatedText>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Funding Use */}
          <div className="bg-primary rounded-3xl p-8 text-primary-foreground animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-primary-foreground/20 flex items-center justify-center">
                <PoundSterling className="w-8 h-8" />
              </div>
              <div>
                <span className="font-body text-sm opacity-80 block">Startup Grant</span>
                <span className="font-display text-4xl font-bold">£6,000</span>
              </div>
            </div>

            <h3 className="font-display text-xl font-semibold mb-4">Funding Use</h3>
            <div className="space-y-3">
              {fundingUse.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 animate-slide-in-left"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" />
                  <span className="font-body text-sm opacity-90">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Financial Highlights */}
          <div className="space-y-4">
            {highlights.map((item, index) => (
              <div
                key={item.label}
                className="card-glass p-5 flex items-center gap-4 hover:border-primary/30 transition-colors animate-slide-in-right"
                style={{ animationDelay: `${0.35 + index * 0.1}s` }}
              >
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5 text-primary" />
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
    </section>
  );
};

export default FinancialPlanSlide;