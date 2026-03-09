import { TrendingUp, Users, MapPin, ChartColumn } from "lucide-react";
import AnimatedText from "../AnimatedText";
import { motion } from "framer-motion";
import MeshBackground from "../MeshBackground";
import { memo } from "react";

const MarketAnalysisSlide = memo(() => {
    const statistics = [
        { label: "Market Need", value: "High demand in Stratford-upon-Avon", icon: MapPin, color: "text-primary", bg: "bg-primary/10" },
        { label: "Target Demo", value: "65+ population growing 15% annually", icon: Users, color: "text-coral", bg: "bg-coral/10" },
        { label: "Growth", value: "£20B+ UK Elderly Care Market", icon: TrendingUp, color: "text-gold", bg: "bg-gold/10" },
    ];

    return (
        <section className="slide bg-white relative overflow-hidden flex">
            {/* Mesh Background */}
            <MeshBackground colors={["#F8FAFC", "#F0FDFA", "#FFF7ED"]} />

            <div className="max-w-7xl mx-auto w-full relative z-10 px-4 py-6 lg:py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                    <div>
                        <AnimatedText className="mb-1.5">
                            <span className="font-body text-[11px] lg:text-xs uppercase tracking-[0.4em] text-primary font-bold">
                                Section 03
                            </span>
                        </AnimatedText>

                        <AnimatedText delay={0.1}>
                            <h2 className="font-display text-3xl lg:text-5xl font-bold text-navy mb-4 leading-[1.1] tracking-tight">
                                Market <br />
                                <span className="text-gradient">Analysis</span>
                            </h2>
                        </AnimatedText>

                        <AnimatedText delay={0.2}>
                            <p className="font-body text-sm lg:text-base text-muted-foreground mb-5 lg:mb-6 leading-relaxed max-w-xl">
                                We are entering a market with <span className="text-navy font-bold">unprecedented demand</span>. The UK's aging population requires specialized, reliable care that is currently under-supplied in regional hubs like Stratford-upon-Avon.
                            </p>
                        </AnimatedText>

                        <div className="space-y-3.5 lg:space-y-4.5">
                            {statistics.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, x: -25 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.25 + index * 0.1, duration: 0.5 }}
                                    className="flex items-center gap-4 lg:gap-6 p-4 lg:p-5 card-glass rounded-[1.5rem] lg:rounded-[2rem] group hover:translate-x-3 transition-all"
                                >
                                    <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-[1.1rem] lg:rounded-[1.3rem] ${stat.bg} shadow-soft flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                        <stat.icon className={`w-5 h-5 lg:w-6 lg:h-6 ${stat.color}`} />
                                    </div>
                                    <div>
                                        <span className="font-body text-[9px] lg:text-xs uppercase tracking-[0.2em] text-muted-foreground font-bold block mb-1">
                                            {stat.label}
                                        </span>
                                        <span className="font-display text-lg lg:text-2xl font-bold text-navy group-hover:text-primary transition-colors">
                                            {stat.value}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 50 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative mt-12 lg:mt-0"
                    >
                        <div className="relative rounded-[2.5rem] lg:rounded-[5rem] overflow-hidden shadow-2xl border-[8px] lg:border-[12px] border-white group transition-all duration-700 hover:scale-[1.02] hover:rotate-1">
                            <img
                                src="/gemini_2.png"
                                alt="Market Analysis Visual"
                                className="w-full h-64 md:h-80 lg:h-[22rem] xl:h-[26rem] object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
                            <div className="absolute bottom-6 left-6 right-6 lg:bottom-12 lg:left-12 lg:right-12 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                                <div className="bg-white/10 backdrop-blur-xl p-6 lg:p-8 rounded-[1.5rem] lg:rounded-[3rem] border border-white/20 shadow-2xl">
                                    <div className="flex items-center gap-3 lg:gap-4 mb-2 lg:mb-3">
                                        <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-primary/20 flex items-center justify-center">
                                            <ChartColumn className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                                        </div>
                                        <span className="font-display text-xl lg:text-3xl font-bold text-white uppercase tracking-widest">2026 Forecast</span>
                                    </div>
                                    <p className="font-body text-sm lg:text-lg text-white/90 leading-relaxed font-medium italic">Strategic positioning for long-term growth and market dominance.</p>
                                </div>
                            </div>
                        </div>

                        {/* Decorative blurs */}
                        <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/20 blur-[100px] rounded-full -z-10" />
                        <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-coral/10 blur-[100px] rounded-full -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
});

MarketAnalysisSlide.displayName = "MarketAnalysisSlide";

export default MarketAnalysisSlide;
