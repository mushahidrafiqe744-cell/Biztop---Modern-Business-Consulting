import React from "react";
import { ArrowRight, Sparkles, Building, Handshake, Users, Trophy } from "lucide-react";

interface StatsProps {
  onGetStarted: () => void;
}

export default function Stats({ onGetStarted }: StatsProps) {
  const statsList = [
    {
      num: "500+",
      label: "Happy Clients",
      sub: "Global leaders & local unicorns",
      icon: <Users className="w-5 h-5 text-secondary" />
    },
    {
      num: "250+",
      label: "Projects Completed",
      sub: "Bespoke systems & funnels",
      icon: <Trophy className="w-5 h-5 text-secondary" />
    },
    {
      num: "12+",
      label: "Years Experience",
      sub: "Operational & tactical depth",
      icon: <Building className="w-5 h-5 text-secondary" />
    },
    {
      num: "24/7",
      label: "SLA Support",
      sub: "Constant engineering monitoring",
      icon: <Handshake className="w-5 h-5 text-secondary" />
    }
  ];

  return (
    <section className="bg-primary text-white py-20 md:py-28 relative overflow-hidden">
      {/* Light glow elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary opacity-5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side */}
          <div className="lg:col-span-5 space-y-6 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 bg-[#F7F8F1]/10 border border-white/10 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-secondary font-sans">
              <Sparkles className="w-3 h-3 text-secondary animate-pulse" />
              Verified Performance
            </div>

            <h2 className="text-3xl md:text-4xl xl:text-5xl font-display font-extrabold text-white leading-tight tracking-tight text-wrap">
              Numbers Speak <br />
              For Themselves
            </h2>

            <p className="text-sm md:text-base text-[#F7F8F1]/80 leading-relaxed font-sans max-w-md">
              We have helped hundreds of businesses grow and achieve their goals through rigorous modeling, tech adoption, and high-ROI advertising campaigns.
            </p>

            <button
              onClick={onGetStarted}
              className="group flex items-center justify-center gap-2 bg-secondary text-primary font-bold text-sm px-6 py-3.5 rounded-xl hover:bg-white transition-all duration-300 cursor-pointer shadow-lg"
            >
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Side: Grid of 4 counters */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {statsList.map((stat, i) => (
              <div 
                key={i} 
                className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:bg-white/10 hover:border-secondary/30 transition-all group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#0A564F] flex items-center justify-center mb-6 group-hover:scale-110 transition-all">
                    {stat.icon}
                  </div>
                  
                  {/* Large typography for numbers with tabular-nums */}
                  <h3 className="font-display font-extrabold text-4xl md:text-5xl text-secondary tracking-tight font-mono tabular-nums leading-none">
                    {stat.num}
                  </h3>
                </div>

                <div className="mt-4">
                  <p className="text-sm font-bold text-white tracking-wide">{stat.label}</p>
                  <p className="text-xs text-[#F7F8F1]/60 mt-1 font-sans">{stat.sub}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
