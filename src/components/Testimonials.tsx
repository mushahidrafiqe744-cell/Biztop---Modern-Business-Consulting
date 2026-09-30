import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import clientProfileExecutive from "../assets/images/client_profile_executive_1790767238669.jpg";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const list = [
    {
      name: "Dr. Catherine Bennett",
      role: "VP of Operations, HealthVault Inc.",
      review: "Biztop restructured our digital supply chain and engineering models. They delivered a fully scalable React application and reduced operating latency by 45%. Their strategic insights are unparalleled.",
      rating: 5,
      photo: clientProfileExecutive // our generated high fidelity image!
    },
    {
      name: "Thomas Finch",
      role: "CEO & Founder, Apex Logistics",
      review: "We achieved an incredible 4.2x ROAS in under 3 months utilizing their Performance Digital Marketing funnels. The team at Biztop did not just provide a slide deck—they coded, launched, and managed our core growth channels.",
      rating: 5,
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "Sophia Martinez",
      role: "Chief Marketing Officer, Finetix Group",
      review: "The business consulting team helped us model our series-B round, structuring a defensible 3-year plan that impressed our institutional investors. Their SEO framework drove a massive 180% growth in organic inbound leads.",
      rating: 5,
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200"
    }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev === list.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? list.length - 1 : prev - 1));
  };

  // Autoplay loop that pauses when the user hovers over the slider
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      handleNext();
    }, 4500);
    return () => clearInterval(interval);
  }, [activeIndex, isHovered]);

  return (
    <section id="testimonials" className="bg-[#F7F8F1] py-24 md:py-32 relative border-t border-b border-gray-200/50 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl text-left">
            <p className="text-xs font-bold uppercase tracking-widest text-[#073F3B]/60 mb-2 font-sans">
              SUCCESS STORIES
            </p>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-display font-extrabold text-[#073F3B] tracking-tight leading-tight">
              What Our Clients Say
            </h2>
            <p className="text-sm md:text-base text-[#073F3B]/80 font-sans mt-4">
              Real outcomes from real partnerships. See how global teams scale operations, capture high-intent audiences, and engineer core technologies with Biztop.
            </p>
          </div>

          {/* Nav Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-gray-200 hover:border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all cursor-pointer shadow-sm"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-gray-200 hover:border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all cursor-pointer shadow-sm"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials Slider Area with hover pausing controls */}
        <div 
          className="relative overflow-hidden min-h-[340px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {list.map((item, index) => (
              <div 
                key={index} 
                className="w-full shrink-0 px-1"
                aria-hidden={activeIndex !== index}
              >
                <div className="bg-white p-8 md:p-12 rounded-2xl md:rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/50 flex flex-col md:flex-row md:items-center gap-8 md:gap-12 relative max-w-5xl mx-auto">
                  
                  {/* Absolute Quote Mark Accent */}
                  <div className="absolute top-8 right-8 text-secondary opacity-30 pointer-events-none hidden sm:block">
                    <Quote className="w-16 h-16 transform rotate-180 fill-current" />
                  </div>

                  {/* Client Photo Container */}
                  <div className="w-24 h-24 md:w-36 md:h-36 rounded-2xl overflow-hidden shrink-0 shadow-lg border border-gray-100 relative group">
                    <img
                      src={item.photo}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        // fallback image if any fails
                        e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150";
                      }}
                    />
                  </div>

                  {/* Narrative details */}
                  <div className="space-y-4 flex-1">
                    {/* Star ratings */}
                    <div className="flex items-center gap-1 text-[#073F3B]">
                      {[...Array(item.rating)].map((_, starI) => (
                        <Star key={starI} className="w-4 h-4 fill-secondary text-secondary" />
                      ))}
                    </div>

                    <p className="text-base md:text-xl text-primary font-sans italic font-medium leading-relaxed">
                      "{item.review}"
                    </p>

                    <div>
                      <h4 className="font-display font-extrabold text-lg text-primary leading-tight">
                        {item.name}
                      </h4>
                      <p className="text-xs md:text-sm text-emerald-800 font-semibold mt-1 font-sans">
                        {item.role}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel indicators dots */}
        <div className="flex justify-center items-center gap-2.5 mt-8">
          {list.map((_, dotI) => (
            <button
              key={dotI}
              onClick={() => setActiveIndex(dotI)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === dotI ? "w-8 bg-primary" : "w-2 bg-gray-200 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial slide ${dotI + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
