import { Heart, Shield, Users } from "lucide-react";

const HeroSlide = () => {
  return (
    <section className="slide slide-accent relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full border border-primary-foreground/10 animate-scale-in" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full border border-primary-foreground/10 animate-scale-in" style={{ animationDelay: "0.2s" }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="flex items-center gap-2 mb-8 animate-fade-up">
          <div className="w-12 h-1 bg-primary-foreground/60 rounded-full" />
          <span className="font-body text-sm uppercase tracking-[0.2em] text-primary-foreground/80">
            Business Plan 2026
          </span>
        </div>

        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-primary-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Saforaai
        </h1>

        <p className="font-body text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mb-12 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          Compassionate Elderly Care, Delivered with Dignity
        </p>

        <div className="flex flex-wrap gap-6 animate-fade-up" style={{ animationDelay: "0.6s" }}>
          {[
            { icon: Heart, label: "Person-Centered Care" },
            { icon: Shield, label: "Trusted & Compliant" },
            { icon: Users, label: "Community Focused" },
          ].map((item, index) => (
            <div
              key={item.label}
              className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm px-5 py-3 rounded-full border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-colors"
              style={{ animationDelay: `${0.8 + index * 0.1}s` }}
            >
              <item.icon className="w-5 h-5 text-primary-foreground" />
              <span className="font-body text-sm text-primary-foreground">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: "1.2s" }}>
          <span className="font-body text-xs text-primary-foreground/60 uppercase tracking-widest">
            Scroll to explore
          </span>
          <div className="w-5 h-8 rounded-full border-2 border-primary-foreground/40 flex items-start justify-center p-1">
            <div className="w-1.5 h-1.5 bg-primary-foreground rounded-full animate-float" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlide;