import { Shield, Heart, HandHelping, Anchor, Star } from "lucide-react";
import AnimatedText from "../AnimatedText";
import { motion } from "framer-motion";
import FloatingElement from "../FloatingElement";
import MeshBackground from "../MeshBackground";
import { memo } from "react";

const ValuesSlide = memo(() => {
    const values = [
        { title: "Compassion", desc: "Every action we take is rooted in genuine empathy and kindness.", icon: Heart, color: "text-coral", bg: "bg-coral/10" },
        { title: "Dignity", desc: "Respecting the autonomy and choices of our clients above all else.", icon: Anchor, color: "text-primary", bg: "bg-primary/10" },
        { title: "Reliability", desc: "Consistency and speed in response times that families can trust.", icon: Shield, color: "text-navy", bg: "bg-navy/10" },
        { title: "Ethics", desc: "Transparent practices and fair treatment for both clients and staff.", icon: HandHelping, color: "text-gold", bg: "bg-gold/10" },
    ];

    return (
        <section className="slide bg-white relative overflow-hidden flex">
            {/* Mesh Background */}
            <MeshBackground colors={["#ECFEFF", "#FDF2F8", "#FFFBEB"]} />

            <FloatingElement icon={Star} className="top-[10%] left-[10%] w-16 h-16 text-gold/10" delay={0.1} />
            <FloatingElement icon={Shield} className="bottom-[10%] right-[5%] w-20 h-20 text-navy/10" delay={0.4} />

            <div className="max-w-7xl mx-auto w-full relative z-10 px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: -50 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="order-2 lg:order-1 mt-12 lg:mt-0"
                    >
                        <div className="relative rounded-[2.5rem] lg:rounded-[5rem] overflow-hidden shadow-2xl border-[8px] lg:border-[12px] border-white group transition-all duration-700 hover:rotate-1">
                            <img
                                src="/elderly_joy_home_1767709482773.png"
                                alt="Happy Elderly Couple"
                                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-coral/40 to-transparent opacity-60" />
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 blur-[60px] rounded-full group-hover:bg-primary/30 transition-colors" />
                        </div>
                    </motion.div>

                    <div className="order-1 lg:order-2">
                        <AnimatedText className="mb-4">
                            <span className="font-body text-xs lg:text-sm uppercase tracking-[0.4em] text-primary font-bold">
                                Section 08
                            </span>
                        </AnimatedText>

                        <AnimatedText delay={0.1}>
                            <h2 className="font-display text-4xl md:text-8xl font-bold text-navy mb-10 leading-[1.1] tracking-tight">
                                Our Core <br />
                                <span className="text-gradient">Values</span>
                            </h2>
                        </AnimatedText>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                            {values.map((v, index) => (
                                <motion.div
                                    key={v.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                                    className="card-glass p-6 lg:p-10 rounded-[2rem] lg:rounded-[2.5rem] hover:-translate-y-2 transition-all group cursor-default"
                                >
                                    <div className={`w-12 h-12 lg:w-16 lg:h-16 rounded-2xl ${v.bg} flex items-center justify-center mb-6 lg:mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-sm shadow-black/5`}>
                                        <v.icon className={`w-6 h-6 lg:w-8 lg:h-8 ${v.color}`} />
                                    </div>
                                    <h3 className="font-display text-xl lg:text-3xl font-bold text-navy mb-3 lg:mb-4 group-hover:text-primary transition-colors">{v.title}</h3>
                                    <p className="font-body text-sm lg:text-base text-navy/70 leading-relaxed font-medium">{v.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

ValuesSlide.displayName = "ValuesSlide";

export default ValuesSlide;
