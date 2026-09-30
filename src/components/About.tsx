import React, { useState } from "react";
import { ArrowRight, CheckCircle2, X, Award, Users2, ShieldAlert, Sparkles, Building2, HelpCircle } from "lucide-react";

interface AboutProps {
  onQuoteRequested: () => void;
}

export default function About({ onQuoteRequested }: AboutProps) {
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const [isTeamOpen, setIsTeamOpen] = useState(false);

  const keyDifferentiators = [
    "High-touch client-to-advisor engagement",
    "Evidence-backed roadmap models",
    "Comprehensive full-stack digital execution",
    "Measurable, metric-bound service outcomes"
  ];

  const teamMembers = [
    {
      name: "Marcus Sterling",
      role: "Managing Director & Principal Consultant",
      bio: "Former BCG Principal with 18+ years designing enterprise growth frameworks.",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "Dr. Elena Rostova",
      role: "Head of Digital Strategy & Technology",
      avatar: "/src/assets/images/client_profile_executive_1790767238669.jpg", // our generated portrait!
      bio: "Ph.D in Operations Management. Architect of Biztop's automated conversion systems."
    },
    {
      name: "Sarah Jenkins",
      role: "Director of Performance Marketing",
      bio: "12+ years managing over $50M in cumulative ad spend with consistent positive ROI yields.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200"
    }
  ];

  return (
    <section id="about" className="bg-white py-24 md:py-32 relative border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Overlapping Images & Badges */}
          <div className="lg:col-span-6 relative">
            <div className="relative">
              {/* Primary Image: Generated about image */}
              <div className="rounded-2xl md:rounded-3xl overflow-hidden aspect-[4/3] shadow-lg border border-gray-100 group">
                <img
                  src="/src/assets/images/about_corporate_office_1790767225826.jpg"
                  alt="Biztop modern physical corporate consulting hub interior"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      const fallback = document.createElement('div');
                      fallback.className = "absolute inset-0 bg-gradient-to-br from-primary via-emerald-950 to-primary/80 flex flex-col justify-center items-center p-8 text-center text-white";
                      fallback.innerHTML = `
                        <div class="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center text-secondary mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-building"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M8 10h.01"/><path d="M16 10h.01"/><path d="M8 14h.01"/><path d="M16 14h.01"/></svg>
                        </div>
                        <h4 class="font-display font-bold text-lg">Biztop Operations Facility</h4>
                        <p class="text-xs text-[#F7F8F1]/70 mt-2 max-w-xs">Our headquarters represent modern operational excellence, structured specifically to spark strategic breakthroughs.</p>
                      `;
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </div>

              {/* Overlapping Small Portrait Card */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-white p-3 rounded-2xl shadow-xl border border-gray-100 max-w-[200px] hidden sm:block">
                <div className="relative rounded-xl overflow-hidden aspect-square w-full mb-2">
                  <img
                    src="/src/assets/images/client_profile_executive_1790767238669.jpg"
                    alt="Dr. Elena Rostova - Partner"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150";
                    }}
                  />
                  <div className="absolute bottom-1 right-1 w-3 h-3 bg-secondary rounded-full border-2 border-white" />
                </div>
                <p className="text-xs font-bold text-primary">Dr. Elena Rostova</p>
                <p className="text-[10px] text-gray-500 font-medium">Head of Strategy</p>
              </div>

              {/* Green statistics badge */}
              <div className="absolute top-6 left-6 bg-secondary text-primary px-5 py-3 rounded-xl shadow-lg flex items-center gap-2.5 max-w-[220px] border border-white/20 animate-bounce-slow">
                <span className="font-display font-black text-2xl tracking-tight leading-none text-primary">15+</span>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-primary leading-tight font-sans">
                  Years of <br /> Experience
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Copy */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary/60 font-sans">
              ABOUT US
            </div>

            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-primary leading-[1.15] tracking-tight text-wrap">
              We are a team of passionate <br className="hidden sm:inline" />
              problem solvers
            </h2>

            <p className="text-sm md:text-base text-primary/80 leading-relaxed font-sans">
              Biztop is a modern business solutions company helping startups and established businesses grow with innovative strategies, technology and expert support.
            </p>

            <div className="space-y-3.5 w-full">
              {keyDifferentiators.map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary fill-transparent" />
                  </div>
                  <span className="text-sm font-semibold text-primary/90 font-sans">{text}</span>
                </div>
              ))}
            </div>

            {/* Interactive Actions */}
            <div className="flex flex-wrap gap-4 pt-4 w-full">
              <button
                onClick={() => setIsStoryOpen(true)}
                className="group flex items-center gap-1.5 bg-primary text-white font-bold text-sm px-6 py-3.5 rounded-xl hover:bg-primary/95 transition-all duration-300 cursor-pointer shadow-md"
              >
                Our Story
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => setIsTeamOpen(true)}
                className="bg-gray-100 hover:bg-gray-200 text-primary font-bold text-sm px-6 py-3.5 rounded-xl transition-all cursor-pointer border border-gray-200/55"
              >
                Meet Our Team
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Story Modal popup (Anti-dead clicks) */}
      {isStoryOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary/60 backdrop-blur-md p-4">
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden border border-gray-100">
            <div className="bg-primary text-white p-6 md:p-8 flex items-center justify-between relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary opacity-10 rounded-full blur-2xl pointer-events-none" />
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-secondary font-sans">ESTABLISHED 2011</span>
                <h3 className="text-xl md:text-2xl font-display font-extrabold mt-1">Our Journey & Philosophy</h3>
              </div>
              <button 
                onClick={() => setIsStoryOpen(false)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 md:p-8 space-y-5">
              <p className="text-sm md:text-base text-gray-700 leading-relaxed font-sans">
                Biztop was founded in San Francisco with a unified mission: **to replace bloated corporate consulting models with agile, technological growth engines**.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-[#F7F8F1] rounded-xl border border-gray-100">
                  <span className="font-display font-black text-xl text-primary block">2011</span>
                  <span className="text-xs text-gray-600 mt-1 block">Founded by Marcus Sterling as a niche boutique operational consultancy</span>
                </div>
                <div className="p-4 bg-[#F7F8F1] rounded-xl border border-gray-100">
                  <span className="font-display font-black text-xl text-primary block">2018</span>
                  <span className="text-xs text-gray-600 mt-1 block">Expanded digital agency and tech development divisions globally</span>
                </div>
              </div>

              <p className="text-xs md:text-sm text-gray-500 font-sans leading-relaxed">
                Today, Biztop acts as an auxiliary brain to fortune leaders, private equity groups, and fast-scaling unicorn brands. We combine rigorous economic theory with bleeding-edge technology.
              </p>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => {
                    setIsStoryOpen(false);
                    onQuoteRequested();
                  }}
                  className="flex-1 bg-secondary text-primary font-bold text-sm py-3 px-4 rounded-xl hover:bg-primary hover:text-white transition-all text-center cursor-pointer"
                >
                  Schedule Strategy Discovery
                </button>
                <button
                  onClick={() => setIsStoryOpen(false)}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-sm py-3 px-4 rounded-xl transition-all text-center cursor-pointer"
                >
                  Close Story
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Leadership Team Modal (Anti-dead clicks) */}
      {isTeamOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary/60 backdrop-blur-md p-4">
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden border border-gray-100">
            <div className="bg-primary text-white p-6 md:p-8 flex items-center justify-between relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary opacity-10 rounded-full blur-2xl pointer-events-none" />
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-secondary font-sans">BIZTOP STRATEGISTS</span>
                <h3 className="text-xl md:text-2xl font-display font-extrabold mt-1">Executive Leadership</h3>
              </div>
              <button 
                onClick={() => setIsTeamOpen(false)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 md:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
              <p className="text-sm text-gray-600 font-sans">
                Our advisors hold deep-domain specializations across private equity, automated digital funnels, and enterprise system infrastructure.
              </p>

              <div className="space-y-4">
                {teamMembers.map((member, i) => (
                  <div key={i} className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 shadow-inner border border-gray-200">
                      <img 
                        src={member.avatar} 
                        alt={member.name} 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150&h=150";
                        }}
                      />
                    </div>
                    <div className="text-center sm:text-left">
                      <h4 className="font-display font-bold text-base text-primary">{member.name}</h4>
                      <p className="text-xs text-emerald-800 font-semibold">{member.role}</p>
                      <p className="text-xs text-gray-600 mt-1.5 font-sans leading-relaxed">{member.bio}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => {
                    setIsTeamOpen(false);
                    onQuoteRequested();
                  }}
                  className="w-full bg-primary text-white font-bold text-sm py-3 px-4 rounded-xl hover:bg-primary/95 transition-all text-center cursor-pointer"
                >
                  Partner With Us
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
