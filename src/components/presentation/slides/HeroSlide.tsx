import { Heart, Shield, Users, ArrowRight, Sparkles, Star, Anchor } from "lucide-react";
import { motion } from "framer-motion";
import FloatingElement from "../FloatingElement";
import MeshBackground from "../MeshBackground";
import { memo } from "react";

const HeroSlide = memo(() => {
  return (
    <section className="slide bg-white relative overflow-hidden flex items-center">
      {/* Background Decorative Elements */}
      <MeshBackground colors={["#ECFEFF", "#FDF2F8", "#FFFBEB"]} />

      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />

      <FloatingElement icon={Heart} className="top-[15%] left-[10%] w-16 h-16 text-primary/20" delay={0.2} />
      <FloatingElement icon={Star} className="bottom-[20%] left-[5%] w-12 h-12 text-gold/20" delay={0.5} />
      <FloatingElement icon={Shield} className="top-[20%] right-[15%] w-20 h-20 text-navy/10" delay={0.8} />
      <FloatingElement icon={Sparkles} className="bottom-[15%] right-[10%] w-10 h-10 text-coral/20" delay={1.1} />
      <FloatingElement icon={Anchor} className="top-[40%] right-[5%] w-14 h-14 text-primary/10" delay={1.4} />

      <div className="max-w-7xl mx-auto w-full relative z-10 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          <div className="text-left relative">
            {/* Background Glow for Text */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -z-10" />

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-8 lg:mb-10"
            >
              <div className="w-16 h-[2px] bg-gradient-to-r from-primary to-transparent rounded-full" />
              <span className="font-body text-sm uppercase tracking-[0.5em] text-primary font-bold">
                Business Plan 2026
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-6xl md:text-9xl lg:text-[10rem] font-bold mb-8 lg:mb-10 tracking-tighter leading-none"
            >
              <span className="text-navy">Safor</span>
              <span className="text-gradient">aai</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-body text-xl md:text-3xl text-navy/70 max-w-2xl mb-12 lg:mb-16 leading-relaxed font-medium"
            >
              Compassionate Elderly Care, <br />
              <span className="text-gradient font-bold italic underline decoration-primary/30 underline-offset-8">Delivered with Dignity.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap gap-4 lg:gap-6"
            >
              {[
                { icon: Heart, label: "Person-Centered", color: "text-primary", bg: "bg-primary/5" },
                { icon: Shield, label: "Trusted & Secure", color: "text-navy", bg: "bg-navy/5" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="card-glass flex items-center gap-4 px-6 lg:px-10 py-4 lg:py-5 rounded-2xl group hover:-translate-y-1 transition-all duration-500 cursor-default"
                >
                  <div className={`w-8 h-8 lg:w-10 lg:h-10 rounded-xl ${item.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-4 h-4 lg:w-5 lg:h-5 text-navy" />
                  </div>
                  <span className="font-body text-sm lg:text-lg font-bold text-navy">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
            animate={{ opacity: 1, scale: 1, rotate: -2 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative mt-12 lg:mt-0"
          >
            <div className="relative z-10 rounded-[2.5rem] lg:rounded-[5rem] overflow-hidden shadow-2xl border-[8px] lg:border-[12px] border-white group transition-all duration-1000 hover:rotate-0 hover:scale-[1.02]">
              <img
                src="/caregiver_elderly_hero_1767709358442.png"
                alt="Compassionate Care"
                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-700" />

              {/* Image Info Tag */}
              <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10 bg-white/10 backdrop-blur-xl p-4 lg:p-6 rounded-[1.5rem] lg:rounded-[2.5rem] border border-white/20 shadow-2xl translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                <p className="font-body text-white font-bold text-[10px] lg:text-sm tracking-widest uppercase mb-1">Curo with Compassion</p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-2 h-2 lg:w-3 lg:h-3 text-gold fill-gold" />)}
                </div>
              </div>
            </div>

            {/* Decorative background blurs */}
            <div className="absolute -top-8 -right-8 lg:-top-16 lg:-right-16 w-40 lg:w-80 h-40 lg:h-80 bg-primary/20 blur-[60px] lg:blur-[120px] rounded-full z-0" />
            <div className="absolute -bottom-8 -left-8 lg:-bottom-16 lg:-left-16 w-40 lg:w-80 h-40 lg:h-80 bg-coral/20 blur-[60px] lg:blur-[120px] rounded-full z-0" />

            {/* Decorative ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] border border-navy/5 rounded-full -z-10 animate-[spin_20s_linear_infinite]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-primary/10 rounded-full -z-10 animate-[spin_15s_linear_infinite_reverse]" />
          </motion.div>

        </div>
      </div>
    </section>
  );
});

HeroSlide.displayName = "HeroSlide";

export default HeroSlide;