import React, { useState } from "react";
import { TrendingUp, BarChart3, Globe, ArrowRight, X, Sparkles, Shield, Cpu, Award } from "lucide-react";

interface FeaturesProps {
  onQuoteRequested: () => void;
}

interface FeatureCard {
  title: string;
  desc: string;
  icon: React.ReactNode;
  kicker: string;
  points: string[];
  extendedDesc: string;
  metrics: string;
}

export default function Features({ onQuoteRequested }: FeaturesProps) {
  const [selectedFeature, setSelectedFeature] = useState<FeatureCard | null>(null);

  const features: FeatureCard[] = [
    {
      title: "Business Growth Consulting",
      desc: "Get expert advice and strategies to scale your business faster.",
      icon: <TrendingUp className="w-8 h-8 text-[#073F3B]" />,
      kicker: "Scale Strategically",
      metrics: "Average 45% YOY Growth Achieved",
      points: [
        "Corporate restructure and financial modeling",
        "Market entrance analysis and risk validation",
        "Competitor gap identification and operational design",
        "Venture capital pitching guidance and compliance support"
      ],
      extendedDesc: "Our Business Growth Consulting service equips founders and executives with actionable roadmap designs. We dive deep into financial statement diagnostics, commercial supply lines, and employee performance structures to optimize overall operating efficiency."
    },
    {
      title: "Digital Marketing Solutions",
      desc: "Boost your online presence and reach more customers.",
      icon: <BarChart3 className="w-8 h-8 text-[#073F3B]" />,
      kicker: "Gain Visibility",
      metrics: "3.8x High-intent ROI Average",
      points: [
        "Meta & Google Ads commercial lead capture funnels",
        "Data-first social audience profile acquisition",
        "Conversion rate optimization (CRO) landing pages",
        "Performance marketing dashboarding & custom analytics tracking"
      ],
      extendedDesc: "We design multi-channel customer acquisition funnels that convert cold traffic into loyal brand advocates. Leveraging advanced user-persona tracking and multi-variant creative testing, we optimize your advertising spend to maximize high-intent leads."
    },
    {
      title: "Web & Software Development",
      desc: "Modern, secure and scalable web and mobile solutions.",
      icon: <Globe className="w-8 h-8 text-[#073F3B]" />,
      kicker: "Build Core Tech",
      metrics: "99.99% Architecture SLA Uptime",
      points: [
        "Custom enterprise web application engineering (Vite, React, TS, Node)",
        "Mobile-first PWA and responsive native viewport solutions",
        "RESTful API & Serverless cloud orchestrations",
        "SOC2/GDPR compliance frameworks & secure payment gateways"
      ],
      extendedDesc: "Our software engineering branch constructs robust, low-latency websites and digital dashboards designed to grow with your user-base. We emphasize semantic accessibility, extreme optimization, and clean architectural maintainability."
    }
  ];

  return (
    <section id="features" className="bg-[#F7F8F1] py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Headings */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-[#073F3B]/60 mb-2 font-sans">
            Biztop Core Pillars
          </p>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-display font-extrabold text-[#073F3B] tracking-tight leading-[1.15] text-wrap">
            Essential features for <br />
            modern business success
          </h2>
          <p className="text-sm md:text-base text-[#073F3B]/80 mt-4 leading-relaxed font-sans max-w-2xl">
            We deliver tailor-made roadmaps, creative marketing funnels, and robust software architectures. Our multidisciplinary specialists work closely with your internal teams to design systems that reduce overhead, drive lead engagement, and sustain robust digital growth.
          </p>
        </div>

        {/* 3 Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feat, index) => (
            <div
              key={index}
              onClick={() => setSelectedFeature(feat)}
              className="group bg-white p-8 md:p-10 rounded-2xl md:rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Icon box (lime highlight with deep primary symbol) */}
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                  {feat.icon}
                </div>

                <p className="text-xs font-bold text-[#073F3B]/50 uppercase tracking-widest mb-2 font-sans">
                  {feat.kicker}
                </p>

                <h3 className="text-xl md:text-2xl font-display font-bold text-[#073F3B] mb-4 group-hover:text-primary transition-colors">
                  {feat.title}
                </h3>

                <p className="text-[#073F3B]/70 text-sm md:text-base leading-relaxed mb-6 font-sans">
                  {feat.desc}
                </p>
              </div>

              <div className="flex items-center gap-1 text-sm font-bold text-[#073F3B] group-hover:text-secondary group-hover:underline transition-colors mt-4">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Feature Detailed Drawer / Modal (Anti-dead clicks) */}
      {selectedFeature && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary/60 backdrop-blur-md p-4">
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden border border-gray-100 transition-all">
            
            {/* Modal Header banner */}
            <div className="bg-primary text-white p-6 md:p-8 flex items-center justify-between relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary opacity-10 rounded-full blur-2xl pointer-events-none" />
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-secondary font-sans">{selectedFeature.kicker}</span>
                <h3 className="text-xl md:text-2xl font-display font-extrabold mt-1">{selectedFeature.title}</h3>
              </div>
              <button 
                onClick={() => setSelectedFeature(null)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 space-y-6">
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400 font-bold">Primary Scope</p>
                <p className="text-[#073F3B] text-sm md:text-base leading-relaxed font-sans mt-2">
                  {selectedFeature.extendedDesc}
                </p>
              </div>

              {/* Bullet checklist */}
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-wider text-gray-400 font-bold">Key Tactical Deliverables</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedFeature.points.map((pt, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-gray-700">
                      <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
                        <ArrowRight className="w-3 h-3" />
                      </div>
                      <span className="font-sans font-medium">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance / Metric Banner */}
              <div className="bg-[#F7F8F1] p-4 rounded-xl border border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Performance Benchmark</p>
                  <p className="text-[#073F3B] font-display font-bold text-base md:text-lg mt-0.5">{selectedFeature.metrics}</p>
                </div>
                <div className="flex gap-2">
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-white rounded border border-gray-200 text-[10px] font-semibold text-gray-600"><Sparkles className="w-3 h-3 text-amber-500" /> Premium</span>
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-white rounded border border-gray-200 text-[10px] font-semibold text-gray-600"><Shield className="w-3 h-3 text-emerald-600" /> Verified</span>
                </div>
              </div>

              {/* CTA buttons inside modal */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={() => {
                    setSelectedFeature(null);
                    onQuoteRequested();
                  }}
                  className="flex-1 bg-primary text-white font-bold text-sm py-3 px-4 rounded-xl hover:bg-primary/95 transition-all text-center cursor-pointer"
                >
                  Consult an Expert
                </button>
                <button
                  onClick={() => setSelectedFeature(null)}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-sm py-3 px-4 rounded-xl transition-all text-center cursor-pointer"
                >
                  Dismiss Details
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
