import React, { useState } from "react";
import { ArrowRight, Play, CheckCircle2, Shield, Users, Clock, X } from "lucide-react";
import heroBusinessTeam from "../assets/images/hero_business_team_1790767214199.jpg";

interface HeroProps {
  onGetStarted: () => void;
}

export default function Hero({ onGetStarted }: HeroProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section id="home" className="relative bg-primary overflow-hidden min-h-[90vh] flex items-center pt-8 pb-16 md:py-24">
      {/* Full-width YouTube professional business looping video background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Soft transparent black overlay gradient for pristine B&W contrast (No Color bleeding) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent z-10 pointer-events-none" />
        
        {/* YouTube Background Player styled perfectly to prevent black bars and render in grayscale */}
        <div className="absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2 opacity-40">
          <iframe
            src="https://www.youtube.com/embed/U6fC4Ij608A?autoplay=1&mute=1&loop=1&playlist=U6fC4Ij608A&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1"
            className="w-full h-full filter grayscale contrast-125 brightness-[0.45] pointer-events-none"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            title="Biztop YouTube Hero Background"
          />
        </div>
      </div>

      {/* Visual background accents */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[70%] rounded-full bg-secondary blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[60%] rounded-full bg-secondary blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content Area (5 columns) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 md:space-y-8">
            
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 bg-[#F7F8F1]/10 border border-white/10 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-secondary">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
              Grow Your Business With Us
            </div>

            {/* Giant Display Headline */}
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-display font-extrabold text-white leading-[1.1] tracking-tight text-wrap">
              NEXT — GEN <br />
              <span className="text-secondary inline-block relative">
                BUSINESS
                <span className="absolute bottom-1 left-0 w-full h-[6px] bg-secondary/20 rounded-full" />
              </span> SOLUTIONS
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-[#F7F8F1]/80 max-w-xl font-sans leading-relaxed">
              We provide modern, innovative and result-driven business solutions to help you grow, compete and succeed in today's digital world.
            </p>

            {/* CTA Button Block */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onGetStarted}
                className="group flex items-center justify-center gap-2 bg-secondary text-primary font-bold text-base px-8 py-4 rounded-xl hover:bg-white hover:text-primary transition-all duration-300 cursor-pointer shadow-lg shadow-secondary/15"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => setIsVideoOpen(true)}
                className="flex items-center justify-center gap-2.5 bg-white/10 text-white font-semibold text-base px-7 py-4 rounded-xl hover:bg-white/20 transition-all cursor-pointer border border-white/10"
              >
                <span className="w-6 h-6 flex items-center justify-center bg-secondary text-primary rounded-full shadow-inner">
                  <Play className="w-3 h-3 fill-primary text-primary ml-0.5" />
                </span>
                Watch Video
              </button>
            </div>

            {/* Trust Indicators Block */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 pt-6 border-t border-white/10 w-full">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-secondary shrink-0">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-white/50 font-bold leading-none">Status</p>
                  <p className="text-xs md:text-sm font-semibold text-white/95 mt-1">Trusted Partner</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-secondary shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-white/50 font-bold leading-none">Consultants</p>
                  <p className="text-xs md:text-sm font-semibold text-white/95 mt-1">Expert Team</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-secondary shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-white/50 font-bold leading-none">Support</p>
                  <p className="text-xs md:text-sm font-semibold text-white/95 mt-1">24/7 Support</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Media Pane (5 columns) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-square shadow-2xl border border-white/10 group bg-primary/20">
              <img
                src={heroBusinessTeam}
                alt="Biztop Professional Business Team collaborating in an executive conference"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  // Fallback container in case visual asset fails
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    const fallback = document.createElement('div');
                    fallback.className = "absolute inset-0 bg-gradient-to-br from-primary via-emerald-950 to-[#0A564F] flex flex-col justify-center items-center p-8 text-center text-white";
                    fallback.innerHTML = `
                      <div class="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center text-secondary mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                      </div>
                      <h4 class="font-display font-bold text-xl">Biztop Collaboration Center</h4>
                      <p class="text-xs text-[#F7F8F1]/70 mt-2 max-w-xs">Connecting elite enterprise strategists with digital creators to drive real metric-bound results.</p>
                    `;
                    parent.appendChild(fallback);
                  }
                }}
              />
            </div>
            
            {/* Soft geometric accent behind card */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-secondary/15 rounded-full blur-xl pointer-events-none" />
          </div>

        </div>
      </div>

      {/* Video Modal Player */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4">
          <div className="relative w-full max-w-4xl bg-primary rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors cursor-pointer z-10"
              aria-label="Close video player"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-video w-full relative">
              {/* Simulated high-fidelity video layout */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/80 z-0" />
              <img 
                src="/src/assets/images/hero_business_team_1790767214199.jpg" 
                alt="Video preview" 
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-secondary text-primary flex items-center justify-center animate-bounce shadow-lg shadow-secondary/20">
                  <Play className="w-6 h-6 fill-primary ml-1" />
                </div>
                <div className="max-w-md">
                  <h3 className="font-display font-bold text-xl md:text-2xl text-white">Biztop Executive Introduction</h3>
                  <p className="text-sm text-gray-300 mt-2">Discover how we help global startups and fortune companies streamline operations, optimize marketing budgets, and leverage technology.</p>
                </div>
                <p className="text-xs text-white/40 italic">Runtime 3:45 · Biztop Solutions Inc.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
