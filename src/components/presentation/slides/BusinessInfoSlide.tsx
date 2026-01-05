import { Building2, MapPin, Calendar, FileText } from "lucide-react";
import AnimatedText from "../AnimatedText";

const BusinessInfoSlide = () => {
  const infoItems = [
    { icon: Building2, label: "Business Name", value: "Saforaai" },
    { icon: FileText, label: "Organisation Type", value: "Private Limited Company" },
    { icon: MapPin, label: "Location", value: "Stratford-upon-Avon, UK" },
    { icon: Calendar, label: "Year of Plan", value: "2026" },
  ];

  return (
    <section className="slide slide-light relative">
      <div className="max-w-6xl mx-auto w-full">
        <AnimatedText className="mb-4">
          <span className="font-body text-sm uppercase tracking-[0.2em] text-primary">
            Section 01
          </span>
        </AnimatedText>

        <AnimatedText delay={0.1}>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            Basic Business
            <br />
            <span className="text-gradient">Information</span>
          </h2>
        </AnimatedText>

        <AnimatedText delay={0.2}>
          <p className="font-body text-lg text-muted-foreground max-w-xl mb-12">
            Submission to bank and government bodies to secure startup funding,
            including eligibility for a £6,000 support grant.
          </p>
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {infoItems.map((item, index) => (
            <div
              key={item.label}
              className="card-glass p-6 flex items-start gap-4 group hover:border-primary/30 transition-colors animate-fade-up"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <span className="font-body text-sm text-muted-foreground block mb-1">
                  {item.label}
                </span>
                <span className="font-display text-xl font-semibold text-foreground">
                  {item.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessInfoSlide;