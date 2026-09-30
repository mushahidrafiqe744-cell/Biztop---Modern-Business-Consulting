import React, { useState } from "react";
import { ArrowRight, X, TrendingUp, Sparkles, Code2, Award, ArrowUpRight } from "lucide-react";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  client: string;
  tagline: string;
  metric: string;
  image: string;
  problem: string;
  solution: string;
  results: string[];
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedCase, setSelectedCase] = useState<PortfolioItem | null>(null);

  const categories = [
    { label: "All Projects", id: "all" },
    { label: "Consulting", id: "consulting" },
    { label: "Digital Marketing", id: "marketing" },
    { label: "Software Dev", id: "development" }
  ];

  const projects: PortfolioItem[] = [
    {
      id: 1,
      title: "FinTech Transaction Restructure",
      category: "consulting",
      client: "Finetix Platform",
      tagline: "Unblocking Series-A operational constraints.",
      metric: "-45% Operational Latency",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600&h=400",
      problem: "Finetix was struggling with transactional data matching and team processing bottlenecks following their $12M Series-A round.",
      solution: "Biztop consultants designed an automated reconciliation layout and retrained the customer operations pool in agile sprint methodologies.",
      results: [
        "Reduced transaction mismatch loops from 24 hours to 8 minutes",
        "Saved $120,000 in monthly employee administrative overhead",
        "Prepared database for subsequent Institutional Series-B auditing"
      ]
    },
    {
      id: 2,
      title: "GreenTech Lead Generator",
      category: "marketing",
      client: "Helios Renewable Energy",
      tagline: "Constructing active performance ad spend channels.",
      metric: "4.8x Verified Ad-spend ROI",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600&h=400",
      problem: "Helios wanted high-intent commercial building leads but faced exceptionally high generic CPC rates across classic advertising networks.",
      solution: "We designed dynamic custom landing pages tailored to specific corporate building segments, and deployed automated hyper-targeted email followups.",
      results: [
        "Lowered cost-per-qualified-lead from $340 to $72",
        "Generated $2.4M in active commercial contract sales pipelines",
        "Secured market share dominance across key regional districts"
      ]
    },
    {
      id: 3,
      title: "Enterprise Custom Logistics PWA",
      category: "development",
      client: "Apex Worldwide",
      tagline: "Engineering highly defensive inventory tools.",
      metric: "99.99% Architecture SLA Uptime",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=600&h=400",
      problem: "Apex's field agents were using fragile native applications that frequently lost data connection in deep loading docks.",
      solution: "We built a mobile-first Progressive Web App (PWA) with fully offline-first sync operations and customized reactive state tables.",
      results: [
        "Erased offline data-loss entirely (0 reported incidents post-launch)",
        "Dramatically improved sync latency (90% faster background uploads)",
        "Achieved a clean 100/100 Lighthouse performance and accessibility index"
      ]
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="bg-white py-20 md:py-28 relative scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Headings */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl text-left">
            <p className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-2 font-sans">
              CASE STUDIES
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-primary tracking-tight leading-tight">
              Our Proven Outcomes
            </h2>
            <p className="text-sm md:text-base text-primary/80 font-sans mt-3">
              We focus strictly on quantified metrics. Discover how we partner with leading firms to restructure structures, acquire users, and code elite technology.
            </p>
          </div>

          {/* Interactive Filters Tabs (Unboxed clean styling, but clickable button list) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F7F8F1] rounded-xl border border-gray-100">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  activeFilter === cat.id 
                    ? "bg-primary text-white shadow-sm" 
                    : "text-primary/75 hover:text-primary hover:bg-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento/Grid of Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setSelectedCase(proj)}
              className="group bg-[#F7F8F1]/40 border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col h-full justify-between"
            >
              <div>
                {/* Image panel with zoom on hover */}
                <div className="relative aspect-[16/11] overflow-hidden bg-primary/10">
                  <div className="absolute inset-0 bg-primary/25 z-10 opacity-30 group-hover:opacity-0 transition-opacity" />
                  <img
                    src={proj.image}
                    alt={proj.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400&h=250";
                    }}
                  />
                  
                  {/* Floating metric badge on top of image (Zero pills - let's make it a nice styled corner block) */}
                  <div className="absolute top-4 right-4 z-20 bg-primary text-secondary text-xs font-mono font-bold px-3 py-1.5 rounded-lg shadow-sm">
                    {proj.metric}
                  </div>
                </div>

                {/* Content details */}
                <div className="p-6 space-y-3 text-left">
                  <div className="flex items-center gap-2 text-[10px] text-gray-400 font-bold uppercase tracking-wider font-sans">
                    <span>{proj.client}</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-emerald-800">{proj.category}</span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-primary group-hover:text-primary/80 transition-colors leading-snug">
                    {proj.title}
                  </h3>

                  <p className="text-xs text-gray-600 font-sans leading-relaxed">
                    {proj.tagline}
                  </p>
                </div>
              </div>

              {/* Action row */}
              <div className="p-6 pt-0 flex items-center justify-between border-t border-gray-100 mt-4">
                <span className="text-xs font-bold text-primary group-hover:text-secondary group-hover:underline transition-all">View Case Study</span>
                <ArrowUpRight className="w-4 h-4 text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Detailed Modal */}
      {selectedCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary/60 backdrop-blur-md p-4">
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden border border-gray-100">
            
            {/* Modal Header banner */}
            <div className="bg-primary text-white p-6 md:p-8 flex items-center justify-between relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary opacity-10 rounded-full blur-2xl pointer-events-none" />
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-secondary font-mono">CASE STUDY REPORT: {selectedCase.client}</span>
                <h3 className="text-xl md:text-2xl font-display font-extrabold mt-1">{selectedCase.title}</h3>
              </div>
              <button 
                onClick={() => setSelectedCase(null)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 space-y-6">
              
              {/* Problem / Solution Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-400 font-bold">The Challenge</p>
                  <p className="text-gray-700 text-xs md:text-sm leading-relaxed mt-1.5 font-sans">
                    {selectedCase.problem}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-400 font-bold">Biztop Execution</p>
                  <p className="text-gray-700 text-xs md:text-sm leading-relaxed mt-1.5 font-sans">
                    {selectedCase.solution}
                  </p>
                </div>
              </div>

              {/* Quantified Outcomes */}
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-wider text-gray-400 font-bold">Quantified Business Outcomes</p>
                <div className="space-y-2">
                  {selectedCase.results.map((r, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-[#F7F8F1] border border-gray-100">
                      <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
                        <TrendingUp className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs md:text-sm text-primary font-sans font-medium">{r}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Details */}
              <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                <div>
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">Performance Yield</span>
                  <p className="text-emerald-800 font-display font-extrabold text-base md:text-lg mt-0.5">{selectedCase.metric}</p>
                </div>
                <button
                  onClick={() => setSelectedCase(null)}
                  className="bg-primary text-white font-bold text-xs py-2.5 px-5 rounded-lg hover:bg-primary/95 transition-all cursor-pointer"
                >
                  Dismiss Report
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}
