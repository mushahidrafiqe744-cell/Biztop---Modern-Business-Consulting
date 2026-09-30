import React, { useState } from "react";
import { 
  Compass, 
  Code2, 
  Megaphone, 
  Palette, 
  SearchCheck, 
  Settings, 
  ArrowRight, 
  X, 
  CheckCircle2, 
  DollarSign, 
  Calendar, 
  Activity,
  HeartHandshake
} from "lucide-react";

interface ServicesProps {
  onQuoteRequested: () => void;
}

interface ServiceItem {
  id: number;
  title: string;
  shortDesc: string;
  icon: React.ReactNode;
  extendedDesc: string;
  deliverables: string[];
  timeline: string;
  roiMetric: string;
  pricingEstimate: string;
}

export default function Services({ onQuoteRequested }: ServicesProps) {
  const [activeService, setActiveService] = useState<ServiceItem | null>(null);

  const servicesList: ServiceItem[] = [
    {
      id: 1,
      title: "Business Consulting",
      shortDesc: "Optimize corporate structure, plan operations, and build financial models to secure sustainable capital.",
      icon: <Compass className="w-6 h-6 text-[#073F3B]" />,
      extendedDesc: "Our premier consulting service assesses market entry, structural inefficiencies, and resource modeling to build highly defensive and profitable scaling systems.",
      deliverables: [
        "Financial model restructuring & sensitivity analysis",
        "Market size mapping & competitor defense analysis",
        "Comprehensive 3-Year growth scaling roadmaps",
        "Executive operational reporting system design"
      ],
      timeline: "4 - 8 Weeks Core Engagement",
      roiMetric: "Average 35% Operating Cost Optimization",
      pricingEstimate: "Bespoke Project Retainer"
    },
    {
      id: 2,
      title: "Website Development",
      shortDesc: "Engineered web apps using modern frameworks. Fast, responsive, accessible, and secure.",
      icon: <Code2 className="w-6 h-6 text-[#073F3B]" />,
      extendedDesc: "We build high-performance client-facing web applications. Utilizing React, TypeScript, and serverless technology, we deliver pristine, lightweight, and accessible codebases.",
      deliverables: [
        "Interactive custom dashboard engineering",
        "Optimized client-facing product portals",
        "Full Progressive Web App (PWA) compliance",
        "Tailwind CSS theme custom integration"
      ],
      timeline: "6 - 12 Weeks Development Cycle",
      roiMetric: "99+ Google Lighthouse Speed Scores",
      pricingEstimate: "Milestone-based Project Scope"
    },
    {
      id: 3,
      title: "Digital Marketing",
      shortDesc: "Convert clicks into revenue with Meta/Google ads, funnels, and precision performance metrics.",
      icon: <Megaphone className="w-6 h-6 text-[#073F3B]" />,
      extendedDesc: "We construct and manage automated, multi-tiered advertising funnels that systematically target, engage, and capture transactional and contract leads.",
      deliverables: [
        "Meta Ads & Google Search Ads campaigns management",
        "High-converting visual asset generation",
        "Custom behavioral landing page split-testing",
        "Automated CRM & sales pipeline integrations"
      ],
      timeline: "Ongoing Monthly Optimization",
      roiMetric: "Cumulative 3.8x High-intent ROAS",
      pricingEstimate: "Monthly Ad-Spend Retainer"
    },
    {
      id: 4,
      title: "Graphic Design",
      shortDesc: "Premium visual assets, corporate brand systems, decks, and high-fidelity collateral design.",
      icon: <Palette className="w-6 h-6 text-[#073F3B]" />,
      extendedDesc: "We produce clean, premium corporate identities. From vector logo packages and digital guidelines to pitch decks, we ensure your brand exudes elite professionalism.",
      deliverables: [
        "Corporate branding guideline & asset book",
        "Custom investor pitch deck redesign",
        "Commercial advertising creatives templates",
        "Custom SVG layouts & typography assets"
      ],
      timeline: "3 - 5 Weeks Creative Sprint",
      roiMetric: "Consistent premium brand positioning",
      pricingEstimate: "Fixed Package Pricing"
    },
    {
      id: 5,
      title: "SEO Optimization",
      shortDesc: "Rank organically on Google for highly transactional search terms. Drive consistent inbound leads.",
      icon: <SearchCheck className="w-6 h-6 text-[#073F3B]" />,
      extendedDesc: "We analyze high-intent keywords, restructure site architecture, and execute robust off-page authority building to secure top organic ranks for transactional search terms.",
      deliverables: [
        "In-depth programmatic keyword opportunity audits",
        "On-page schema markup & speed optimization",
        "Premium editorial backlink profile outreach",
        "Monthly rankings & search console reporting"
      ],
      timeline: "4 - 6 Months Standard Horizon",
      roiMetric: "+180% Year-over-Year Organic Traffic",
      pricingEstimate: "Monthly Performance Retainer"
    },
    {
      id: 6,
      title: "IT Support & Maintenance",
      shortDesc: "SLA uptime guarantees, database maintenance, cloud scaling, and serverless security management.",
      icon: <Settings className="w-6 h-6 text-[#073F3B]" />,
      extendedDesc: "Our operations desk provides round-the-clock infrastructure patching, automated database backups, cloud server scaling, and robust application monitoring.",
      deliverables: [
        "24/7 Serverless cloud server monitoring & alerts",
        "Automated daily snapshot backups",
        "SSL certifications & Web application firewall patching",
        "Post-launch technical support ticket priority"
      ],
      timeline: "Yearly SLA Engagement",
      roiMetric: "99.99% Core System Architecture Uptime",
      pricingEstimate: "Flat Monthly Maintenance Fee"
    }
  ];

  return (
    <section id="services" className="bg-[#F7F8F1] py-20 md:py-28 relative border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-[#073F3B]/60 mb-2 font-sans">
            OUR CORE EXPERTISE
          </p>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-display font-extrabold text-[#073F3B] tracking-tight leading-tight">
            We Offer a Wide Range of <br />
            Business Services
          </h2>
          <div className="w-12 h-1 bg-secondary mx-auto my-5 rounded-full" />
          <p className="text-sm md:text-base text-[#073F3B]/80 font-sans max-w-2xl mx-auto">
            From strategy to execution, we provide end-to-end solutions to help your business succeed.
          </p>
        </div>

        {/* 6 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service) => (
            <div
              key={service.id}
              onClick={() => setActiveService(service)}
              className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-6">
                  {/* Icon wrap (soft circular overlay with fresh lime background) */}
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <span className="text-[10px] text-gray-400 font-bold font-mono tracking-tight">0{service.id}.</span>
                </div>

                <h3 className="text-lg md:text-xl font-display font-bold text-primary mb-3.5 group-hover:text-primary/90">
                  {service.title}
                </h3>

                <p className="text-[#073F3B]/75 text-xs md:text-sm leading-relaxed font-sans mb-6">
                  {service.shortDesc}
                </p>
              </div>

              {/* Bottom Row */}
              <div className="flex items-center justify-between border-t border-gray-50 pt-4 mt-2">
                <span className="text-xs font-bold text-[#073F3B]/60 group-hover:text-primary transition-colors">Explore Scope</span>
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Service Detail Overlay Drawer (Anti-dead clicks) */}
      {activeService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary/60 backdrop-blur-md p-4">
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden border border-gray-100">
            
            {/* Modal Header */}
            <div className="bg-primary text-white p-6 md:p-8 flex items-center justify-between relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary opacity-10 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center shrink-0">
                  {activeService.icon}
                </div>
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-secondary font-mono">SERVICE DELIVERABLE 0{activeService.id}</span>
                  <h3 className="text-lg md:text-xl font-display font-extrabold">{activeService.title}</h3>
                </div>
              </div>
              <button 
                onClick={() => setActiveService(null)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 space-y-6">
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400 font-bold">Comprehensive Overview</p>
                <p className="text-gray-700 text-sm md:text-base mt-1.5 leading-relaxed font-sans">
                  {activeService.extendedDesc}
                </p>
              </div>

              {/* Scope lists */}
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400 font-bold mb-2">Scope of Work & Checklist</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeService.deliverables.map((item, index) => (
                    <div key={index} className="flex items-start gap-2 text-xs md:text-sm text-gray-600">
                      <div className="w-4 h-4 rounded bg-secondary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
                        <ArrowRight className="w-2.5 h-2.5" />
                      </div>
                      <span className="font-sans font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Details Row */}
              <div className="grid grid-cols-3 gap-4 border-t border-b border-gray-100 py-4">
                <div>
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider font-bold block"><Calendar className="w-3.5 h-3.5 inline mr-1 text-primary" /> Delivery Time</span>
                  <span className="text-xs font-bold text-primary block mt-1">{activeService.timeline}</span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider font-bold block"><Activity className="w-3.5 h-3.5 inline mr-1 text-primary" /> Projected Yield</span>
                  <span className="text-xs font-bold text-primary block mt-1">{activeService.roiMetric}</span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider font-bold block"><DollarSign className="w-3.5 h-3.5 inline mr-1 text-primary" /> Budget Level</span>
                  <span className="text-xs font-bold text-primary block mt-1">{activeService.pricingEstimate}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={() => {
                    setActiveService(null);
                    onQuoteRequested();
                  }}
                  className="flex-1 bg-primary text-white font-bold text-sm py-3 px-4 rounded-xl hover:bg-primary/95 transition-all text-center cursor-pointer flex items-center justify-center gap-2"
                >
                  <HeartHandshake className="w-4 h-4 text-secondary" />
                  Request Full Framework Quote
                </button>
                <button
                  onClick={() => setActiveService(null)}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-sm py-3 px-4 rounded-xl transition-all text-center cursor-pointer"
                >
                  Close Scope
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
