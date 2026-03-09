import { TrendingUp, Users, DollarSign, Target, ArrowUpRight, ChartColumn } from "lucide-react";
import AnimatedText from "../AnimatedText";
import { motion } from "framer-motion";
import MeshBackground from "../MeshBackground";
import { memo } from "react";

const DetailedFinancialProjectionsSlide = memo(() => {
  const projections = [
    {
      year: "2026",
      revenue: "£450K",
      costs: "£380K",
      profit: "£70K",
      margin: "15.6%",
      clients: "120",
      description: "Launch year with initial client acquisition and operational setup"
    },
    {
      year: "2027",
      revenue: "£1.2M",
      costs: "£850K",
      profit: "£350K",
      margin: "29.2%",
      clients: "320",
      description: "Full operational capacity with expanded service offerings"
    },
    {
      year: "2028",
      revenue: "£2.8M",
      costs: "£1.8M",
      profit: "£1M",
      margin: "35.7%",
      clients: "650",
      description: "Regional expansion and technology platform maturity"
    },
    {
      year: "2029",
      revenue: "£5.2M",
      costs: "£3.1M",
      profit: "£2.1M",
      margin: "40.4%",
      clients: "1,200",
      description: "Established market leader with multiple revenue streams"
    },
    {
      year: "2030",
      revenue: "£8.5M",
      costs: "£4.8M",
      profit: "£3.7M",
      margin: "43.5%",
      clients: "2,000",
      description: "National presence with scalable care delivery model"
    }
  ];

  return (
    <section className="slide bg-white relative overflow-hidden flex">
      <MeshBackground colors={["#F0FDFA", "#ECFDF5", "#FEF3C7"]} />

      <div className="max-w-7xl mx-auto w-full relative z-10 px-4 py-8 lg:py-12">
        <div className="text-center mb-8 lg:mb-12">
          <AnimatedText className="mb-2">
            <span className="font-body text-sm uppercase tracking-[0.4em] text-primary font-bold">
              Section 17
            </span>
          </AnimatedText>

          <AnimatedText delay={0.1}>
            <h2 className="font-display text-4xl lg:text-7xl font-bold text-navy mb-4 tracking-tight">
              5-Year <span className="text-gradient">Financial Projections</span>
            </h2>
          </AnimatedText>

          <AnimatedText delay={0.2}>
            <p className="font-body text-base lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Detailed revenue growth, profitability trajectory, and key financial milestones over the next five years.
            </p>
          </AnimatedText>
        </div>

        <div className="space-y-6 lg:space-y-8">
          {projections.map((projection, index) => (
            <motion.div
              key={projection.year}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="bg-white rounded-[2.5rem] p-8 lg:p-10 shadow-xl border border-black/5 group hover:shadow-2xl hover:border-primary/20 transition-all duration-500"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-2">
                  <div className="text-center lg:text-left">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto lg:mx-0 mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <ChartColumn className={`w-8 h-8 lg:w-10 lg:h-10 ${index === 0 ? 'text-primary' : index === 1 ? 'text-coral' : index === 2 ? 'text-gold' : index === 3 ? 'text-navy' : 'text-primary'}`} />
                    </div>
                    <span className="font-display text-3xl lg:text-4xl font-bold text-navy group-hover:text-primary transition-colors">{projection.year}</span>
                  </div>
                </div>

                <div className="lg:col-span-8">
                  <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 text-center">
                    <div>
                      <span className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground font-bold block mb-2">Revenue</span>
                      <span className="font-display text-2xl lg:text-3xl font-bold text-primary">{projection.revenue}</span>
                    </div>
                    <div>
                      <span className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground font-bold block mb-2">Costs</span>
                      <span className="font-display text-2xl lg:text-3xl font-bold text-coral">{projection.costs}</span>
                    </div>
                    <div>
                      <span className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground font-bold block mb-2">Profit</span>
                      <span className="font-display text-2xl lg:text-3xl font-bold text-gold">{projection.profit}</span>
                    </div>
                    <div>
                      <span className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground font-bold block mb-2">Margin</span>
                      <span className="font-display text-2xl lg:text-3xl font-bold text-navy">{projection.margin}</span>
                    </div>
                    <div>
                      <span className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground font-bold block mb-2">Clients</span>
                      <span className="font-display text-2xl lg:text-3xl font-bold text-primary">{projection.clients}</span>
                    </div>
                  </div>
                  <p className="font-body text-sm lg:text-base text-muted-foreground mt-6 leading-relaxed">{projection.description}</p>
                </div>

                <div className="lg:col-span-2 text-center lg:text-right">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full group-hover:bg-primary/10 transition-colors">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    <span className="font-body text-sm font-bold text-primary">Growing</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 lg:mt-16 bg-navy rounded-[3rem] p-8 lg:p-12 text-white text-center"
        >
          <h3 className="font-display text-3xl lg:text-5xl font-bold mb-6">
            Key Financial <span className="text-primary italic">Milestones</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <span className="font-display text-2xl font-bold text-primary block mb-2">£1M Revenue</span>
              <span className="font-body text-sm text-white/80">Year 2 Achievement</span>
            </div>
            <div>
              <div className="w-16 h-16 rounded-2xl bg-gold/20 flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-gold" />
              </div>
              <span className="font-display text-2xl font-bold text-gold block mb-2">£1M Profit</span>
              <span className="font-body text-sm text-white/80">Year 3 Achievement</span>
            </div>
            <div>
              <div className="w-16 h-16 rounded-2xl bg-coral/20 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-coral" />
              </div>
              <span className="font-display text-2xl font-bold text-coral block mb-2">1,000 Clients</span>
              <span className="font-body text-sm text-white/80">Year 4 Achievement</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

DetailedFinancialProjectionsSlide.displayName = "DetailedFinancialProjectionsSlide";

export default DetailedFinancialProjectionsSlide;