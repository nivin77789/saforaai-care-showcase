import { TrendingUp, BarChart3, Rocket, DollarSign, ArrowUpRight, CheckCircle2 } from "lucide-react";
import AnimatedText from "../AnimatedText";
import { motion } from "framer-motion";
import MeshBackground from "../MeshBackground";

const BusinessProfitSlide = () => {
    const metrics = [
        { label: "Gross Margin", value: "35% - 45%", description: "High margins through premium service tiering and operational efficiency." },
        { label: "Customer Lifetime Value", value: "£45k+", description: "Long-term relationships with a focus on comprehensive wellness packages." },
        { label: "Market Growth", value: "8.5% CAGR", description: "Operating in the rapidly expanding elderly care and health-tech market." },
        { label: "Payback Period", value: "18-24 Months", description: "Efficient capital deployment leads to a quick path to profitability." },
    ];

    return (
        <section className="slide bg-white relative overflow-hidden flex">
            <MeshBackground colors={["#F0FDF4", "#DCFCE7", "#F0FDFA"]} />

            <div className="max-w-7xl mx-auto w-full relative z-10 px-4 py-8 lg:py-12">
                <div className="text-center mb-8 lg:mb-12">
                    <AnimatedText className="mb-2">
                        <span className="font-body text-sm uppercase tracking-[0.4em] text-primary font-bold">
                            Section 16
                        </span>
                    </AnimatedText>

                    <AnimatedText delay={0.1}>
                        <h2 className="font-display text-4xl lg:text-7xl font-bold text-navy mb-4 tracking-tight">
                            Economic <span className="text-gradient">Potential</span>
                        </h2>
                    </AnimatedText>

                    <AnimatedText delay={0.2}>
                        <p className="font-body text-base lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            A high-growth business model engineered for sustainable recurring revenue and robust profitability.
                        </p>
                    </AnimatedText>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-navy rounded-[3.5rem] p-10 lg:p-16 text-white relative overflow-hidden flex flex-col justify-between border border-white/10 shadow-3xl"
                    >
                        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.15),transparent)] pointer-events-none" />

                        <div>
                            <div className="w-20 h-20 rounded-3xl bg-primary/20 backdrop-blur-xl border border-white/10 flex items-center justify-center mb-12">
                                <TrendingUp className="w-10 h-10 text-primary" />
                            </div>

                            <h3 className="font-display text-4xl lg:text-6xl font-bold mb-8 leading-tight">
                                Scalable <span className="text-primary italic">Revenue</span> Streams
                            </h3>

                            <div className="space-y-6">
                                {[
                                    "Premium Subscription Tiers",
                                    "AI-Monitoring License Fees",
                                    "Ancillary Lifestyle Services",
                                    "Corporate Wellness Partnerships"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-6 group">
                                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                            <CheckCircle2 className="w-5 h-5 text-primary" />
                                        </div>
                                        <span className="font-body text-xl lg:text-2xl text-white/80 group-hover:text-white transition-colors">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-16 pt-16 border-t border-white/5 flex items-center gap-8">
                            <div>
                                <p className="font-body text-sm text-white/50 uppercase tracking-widest mb-2">Projected EBITDA Margin</p>
                                <p className="font-display text-4xl font-bold text-primary">22%</p>
                            </div>
                            <div className="w-px h-12 bg-white/10" />
                            <div>
                                <p className="font-body text-sm text-white/50 uppercase tracking-widest mb-2">Break-even Point</p>
                                <p className="font-display text-4xl font-bold text-primary">Year 2</p>
                            </div>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
                        {metrics.map((metric, index) => (
                            <motion.div
                                key={metric.label}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="card-glass p-10 rounded-[2.5rem] flex flex-col justify-between group hover:border-primary/30 transition-all duration-500 shadow-xl"
                            >
                                <div>
                                    <div className="flex justify-between items-start mb-8">
                                        <span className="font-body text-xs uppercase tracking-widest text-primary font-bold">{metric.label}</span>
                                        <ArrowUpRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                    <p className="font-display text-4xl font-bold text-navy mb-4">{metric.value}</p>
                                    <p className="font-body text-muted-foreground leading-relaxed">
                                        {metric.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessProfitSlide;
