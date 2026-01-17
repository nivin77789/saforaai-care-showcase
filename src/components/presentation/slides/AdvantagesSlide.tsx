import { ShieldCheck, Zap, Users, Heart, Star, Target } from "lucide-react";
import AnimatedText from "../AnimatedText";
import { motion } from "framer-motion";
import MeshBackground from "../MeshBackground";

const AdvantagesSlide = () => {
    const advantages = [
        {
            title: "Premium Positioning",
            description: "Targeting the high-end market with bespoke, luxury care services that command premium pricing.",
            icon: Star,
            color: "text-gold",
            bg: "bg-gold/10"
        },
        {
            title: "Tech-Driven Care",
            description: "Leveraging advanced AI and IoT for real-time monitoring and personalized health insights.",
            icon: Zap,
            color: "text-primary",
            bg: "bg-primary/10"
        },
        {
            title: "Elite Workforce",
            description: "Rigorous vetting and continuous training through our dedicated academy ensures top-tier service.",
            icon: Users,
            color: "text-coral",
            bg: "bg-coral/10"
        },
        {
            title: "Holistic Wellness",
            description: "Moving beyond basic care to include lifestyle, mental health, and social engagement.",
            icon: Heart,
            color: "text-navy",
            bg: "bg-navy/10"
        }
    ];

    return (
        <section className="slide bg-white relative overflow-hidden flex">
            <MeshBackground colors={["#FFFBEB", "#FEF3C7", "#FFF7ED"]} />

            <div className="max-w-7xl mx-auto w-full relative z-10 px-4 py-8 lg:py-12">
                <div className="text-center mb-8 lg:mb-12">
                    <AnimatedText className="mb-2">
                        <span className="font-body text-sm uppercase tracking-[0.4em] text-primary font-bold">
                            Section 14
                        </span>
                    </AnimatedText>

                    <AnimatedText delay={0.1}>
                        <h2 className="font-display text-4xl lg:text-7xl font-bold text-navy mb-4 tracking-tight">
                            Strategic <span className="text-gradient">Advantages</span>
                        </h2>
                    </AnimatedText>

                    <AnimatedText delay={0.2}>
                        <p className="font-body text-base lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Why SaforaAI is set to redefine the homecare landscape through innovation and excellence.
                        </p>
                    </AnimatedText>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {advantages.map((adv, index) => (
                        <motion.div
                            key={adv.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="card-glass p-10 lg:p-14 rounded-[3rem] border border-white/50 shadow-xl group hover:-translate-y-3 transition-all duration-500"
                        >
                            <div className={`w-20 h-20 rounded-3xl ${adv.bg} flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                <adv.icon className={`w-10 h-10 ${adv.color}`} />
                            </div>

                            <h3 className="font-display text-2xl lg:text-3xl font-bold text-navy mb-6 group-hover:text-primary transition-colors">
                                {adv.title}
                            </h3>

                            <p className="font-body text-lg text-muted-foreground leading-relaxed">
                                {adv.description}
                            </p>

                            <div className="mt-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <span className="font-body text-sm font-bold text-primary uppercase tracking-widest">Learn More</span>
                                <Target className="w-4 h-4 text-primary" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AdvantagesSlide;
