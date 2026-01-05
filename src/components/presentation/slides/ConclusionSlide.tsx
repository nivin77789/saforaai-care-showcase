import { Rocket, Mail, MapPin } from "lucide-react";
import AnimatedText from "../AnimatedText";

const ConclusionSlide = () => {
  const commitments = [
    "Responsible growth",
    "Regulatory excellence",
    "Measurable social value",
  ];

  return (
    <section className="slide slide-accent relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-primary-foreground/20 rounded-full animate-scale-in"
            style={{
              width: `${300 + i * 200}px`,
              height: `${300 + i * 200}px`,
              right: "-10%",
              bottom: "-20%",
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto w-full relative z-10 text-center">
        <div className="w-20 h-20 rounded-full bg-primary-foreground/20 flex items-center justify-center mx-auto mb-8 animate-scale-in">
          <Rocket className="w-10 h-10 text-primary-foreground" />
        </div>

        <AnimatedText delay={0.1}>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6">
            Ready to Launch
          </h2>
        </AnimatedText>

        <AnimatedText delay={0.2}>
          <p className="font-body text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-12 leading-relaxed">
            Saforaai represents a <strong>low-risk, high-impact investment opportunity</strong> in a sector of critical national importance. With targeted startup funding and banking support, we are ready to launch immediately.
          </p>
        </AnimatedText>

        <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          {commitments.map((item, index) => (
            <div
              key={item}
              className="bg-primary-foreground/10 backdrop-blur-sm px-6 py-3 rounded-full border border-primary-foreground/20 animate-scale-in"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <span className="font-body text-primary-foreground">{item}</span>
            </div>
          ))}
        </div>

        <div className="bg-primary-foreground rounded-3xl p-8 md:p-12 text-left max-w-2xl mx-auto shadow-card animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <h3 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
            We Welcome Your Support
          </h3>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-body text-foreground">Contact us for partnership opportunities</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-body text-foreground">Stratford-upon-Avon, United Kingdom</span>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border text-center">
            <span className="font-display text-3xl font-bold text-gradient">Saforaai</span>
            <p className="font-body text-sm text-muted-foreground mt-2">
              Compassionate Elderly Care, Delivered with Dignity
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConclusionSlide;