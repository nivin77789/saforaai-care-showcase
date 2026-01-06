import { Car, Scissors, Sparkles, ShoppingBag, ArrowRight, CheckCircle2, MapPin, Coffee } from "lucide-react";
import AnimatedText from "../AnimatedText";
import { motion } from "framer-motion";
import FloatingElement from "../FloatingElement";
import MeshBackground from "../MeshBackground";
import { memo } from "react";

const LifestyleMobilitySlide = memo(() => {
    const lifestyleFeatures = [
        {
            icon: Car,
            title: "Accessible Mobilty",
            desc: "Customized vehicle with wheelchair accessibility for stress-free shopping trips.",
            color: "text-primary",
            bg: "bg-primary/10"
        },
        {
            icon: Scissors,
            title: "Expert Grooming",
            desc: "Well-trained hairdressers providing salon-quality care in the comfort of home.",
            color: "text-coral",
            bg: "bg-coral/10"
        },
        {
            icon: Sparkles,
            title: "Personal Care+",
            desc: "Professional nail cleaning and grooming staff for consistent wellbeing.",
            color: "text-gold",
            bg: "bg-gold/10"
        },
    ];

    return (
        <section className="slide bg-white relative overflow-hidden flex items-center py-20 lg:py-0">
            {/* Mesh Background */}
            <MeshBackground colors={["#FDF2F8", "#F0FDFA", "#FFF7ED"]} />

            <FloatingElement icon={Car} className="top-[10%] left-[5%] w-20 h-20 text-primary/10" delay={0.1} />
            <FloatingElement icon={MapPin} className="bottom-[15%] left-[10%] w-12 h-12 text-coral/10" delay={0.4} />
            <FloatingElement icon={Coffee} className="top-[20%] right-[10%] w-10 h-10 text-gold/10" delay={0.7} />

            <div className="max-w-7xl mx-auto w-full relative z-10 px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    <div className="order-2 lg:order-1">
                        <AnimatedText className="mb-4">
                            <span className="font-body text-xs lg:text-sm uppercase tracking-[0.4em] text-primary font-bold">
                                Section 07
                            </span>
                        </AnimatedText>

                        <AnimatedText delay={0.1}>
                            <h2 className="font-display text-4xl md:text-8xl font-bold text-navy mb-10 leading-[1.1] tracking-tight">
                                The <span className="text-gradient">Extra Mile</span>
                            </h2>
                        </AnimatedText>

                        <AnimatedText delay={0.2}>
                            <p className="font-body text-lg lg:text-2xl text-muted-foreground mb-10 lg:mb-16 leading-relaxed max-w-xl">
                                Beyond medical support, we focus on lifestyle and dignity. We bring independent living to life with specialized mobility and premium home-based grooming.
                            </p>
                        </AnimatedText>

                        <div className="space-y-4 lg:space-y-8">
                            {lifestyleFeatures.map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                    className="card-glass p-6 lg:p-10 rounded-[2rem] lg:rounded-[2.5rem] flex items-center gap-6 lg:gap-8 group hover:-translate-y-2 transition-all cursor-default"
                                >
                                    <div className={`w-14 h-14 lg:w-20 lg:h-20 rounded-3xl ${item.bg} flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-sm shadow-black/5`}>
                                        <item.icon className={`w-7 h-7 lg:w-10 lg:h-10 ${item.color}`} />
                                    </div>
                                    <div>
                                        <h4 className="font-display text-xl lg:text-3xl font-bold text-navy mb-2 lg:mb-3 group-hover:text-primary transition-colors">{item.title}</h4>
                                        <p className="font-body text-sm lg:text-lg text-muted-foreground leading-relaxed">{item.desc}</p>
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
                        className="order-1 lg:order-2 mt-12 lg:mt-0"
                    >
                        <div className="relative rounded-[2.5rem] lg:rounded-[5rem] overflow-hidden shadow-2xl border-[8px] lg:border-[12px] border-white group transition-all duration-700 hover:scale-[1.02] hover:-rotate-1">
                            <img
                                src="/accessible_shopping_van_1767710243118.png"
                                alt="Saforaai Accessible Mobility"
                                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
                            <div className="absolute bottom-6 left-6 right-6 lg:bottom-12 lg:left-12 lg:right-12 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                                <div className="bg-white/10 backdrop-blur-xl p-4 lg:p-8 rounded-[1.5rem] lg:rounded-[3rem] border border-white/20 shadow-2xl">
                                    <div className="flex items-center gap-3 lg:gap-4 mb-2 lg:mb-3">
                                        <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-white/20 flex items-center justify-center">
                                            <ShoppingBag className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                                        </div>
                                        <span className="font-display text-xl lg:text-3xl font-bold text-white uppercase tracking-widest">Shopping Trips</span>
                                    </div>
                                    <p className="font-body text-sm lg:text-lg text-white/90 leading-relaxed font-medium italic">Tailored outings in our wheelchair-accessible customized vehicle.</p>
                                </div>
                            </div>
                        </div>

                        {/* Decorative floating blur */}
                        <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/20 blur-[100px] rounded-full -z-10 group-hover:bg-primary/30 transition-colors" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
});

LifestyleMobilitySlide.displayName = "LifestyleMobilitySlide";

export default LifestyleMobilitySlide;
