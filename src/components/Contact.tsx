import React, { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowRight, 
  CheckCircle, 
  AlertCircle,
  Compass,
  ArrowUpRight
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const servicesOptions = [
    "Business Consulting",
    "Website Development",
    "Digital Marketing",
    "Graphic Design",
    "SEO Optimization",
    "IT Support & Maintenance"
  ];

  const validateField = (name: string, value: string) => {
    let error = "";
    if (!value.trim()) {
      error = "This field is required";
    } else if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        error = "Please enter a valid email address";
      }
    } else if (name === "phone") {
      const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
      if (!phoneRegex.test(value)) {
        error = "Please enter a valid phone number (10+ digits)";
      }
    }
    return error;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error on change
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      phone: validateField("phone", formData.phone),
      service: formData.service ? "" : "Please select a service",
      message: validateField("message", formData.message)
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some(error => error !== "");
    if (hasErrors) {
      return;
    }

    // Submit mock API simulation
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
    }, 1200);
  };

  return (
    <section id="contact" className="bg-white py-24 md:py-32 relative scroll-mt-10 border-t border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Headings */}
        <div className="max-w-3xl mb-16 text-left">
          <p className="text-xs font-bold uppercase tracking-widest text-[#073F3B]/60 mb-2 font-sans">
            GET IN TOUCH
          </p>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-display font-extrabold text-[#073F3B] tracking-tight leading-none">
            Ready to Build Your Success?
          </h2>
          <p className="text-sm md:text-base text-[#073F3B]/80 mt-4 leading-relaxed font-sans max-w-xl">
            Drop us a line or visit our San Francisco headquarters. Our advisors will diagnose your current bottlenecks and present a free high-impact roadmap quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Contact Information & Mock Maps (5 columns) */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="bg-white p-8 rounded-2xl md:rounded-3xl border border-gray-100 shadow-sm space-y-6">
              <h3 className="font-display font-bold text-lg text-primary">Office Directory</h3>
              
              <div className="space-y-4 text-sm font-sans text-gray-700">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#F7F8F1] flex items-center justify-center text-primary shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wide">Phone Line</p>
                    <p className="font-semibold text-primary mt-0.5">+1 (800) 555-0199</p>
                    <p className="text-xs text-gray-500">Mon-Fri · 8:00 AM - 6:00 PM PST</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#F7F8F1] flex items-center justify-center text-primary shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wide">Email</p>
                    <a href="mailto:info@biztop.com" className="font-semibold text-primary hover:text-secondary hover:underline transition-all mt-0.5 block">info@biztop.com</a>
                    <p className="text-xs text-gray-500">24-hour advisory response SLA</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#F7F8F1] flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wide">Headquarters</p>
                    <p className="font-semibold text-primary mt-0.5">100 Pine St, Suite 1250, San Francisco, CA 94111</p>
                    <p className="text-xs text-gray-500">Financial District · Private Parking Available</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#F7F8F1] flex items-center justify-center text-primary shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wide">Operating Hours</p>
                    <p className="font-semibold text-primary mt-0.5">Monday — Friday, 8:00 AM — 6:00 PM</p>
                    <p className="text-xs text-gray-500">Weekend emergency SLA monitoring active</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Style Location Card */}
            <div className="bg-primary text-white rounded-2xl md:rounded-3xl overflow-hidden shadow-md relative group aspect-[16/10] border border-white/10">
              <div className="absolute inset-0 bg-emerald-950/90 z-0 flex flex-col justify-between p-6">
                
                {/* CSS Vector Map Graphic Mockup */}
                <div className="absolute inset-0 opacity-15 pointer-events-none overflow-hidden">
                  <div className="absolute top-1/4 left-0 w-full h-[2px] bg-white transform rotate-6" />
                  <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white transform -rotate-12" />
                  <div className="absolute top-0 left-1/3 w-[2px] h-full bg-white transform rotate-12" />
                  <div className="absolute top-0 left-2/3 w-[2px] h-full bg-white transform -rotate-6" />
                  <div className="absolute top-1/3 left-1/4 w-32 h-32 rounded-full border-2 border-dashed border-white" />
                  <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full border-2 border-dashed border-white" />
                </div>

                <div className="relative z-10 flex justify-between items-start">
                  <div>
                    <span className="inline-flex items-center gap-1 bg-[#A8F45A]/20 text-secondary text-[10px] px-2.5 py-1 rounded-full font-bold border border-secondary/20">
                      <Compass className="w-3.5 h-3.5 animate-spin-slow" /> Real-time Location
                    </span>
                    <h4 className="font-display font-bold text-lg mt-2 text-white">Pine Street Center</h4>
                  </div>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-2 rounded-full bg-white/10 hover:bg-secondary hover:text-primary transition-all text-white"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                <div className="relative z-10 space-y-1">
                  <p className="text-xs text-[#F7F8F1]/60">100 Pine St, Suite 1250, San Francisco</p>
                  <p className="text-[10px] text-secondary font-bold font-sans">Click map icon above for real directions</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Contact Form Panel (7 columns) */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-2xl md:rounded-3xl border border-gray-100 shadow-xl">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-secondary/20 text-[#073F3B] flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-extrabold text-2xl text-primary">Message Dispatched!</h3>
                  <p className="text-sm text-gray-600 max-w-md mx-auto font-sans">
                    Thank you. Your consultation request has been encrypted and passed to our San Francisco advisory pool. A lead strategist will evaluate your specifications and follow up within 2 hours.
                  </p>
                </div>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-primary text-white font-bold text-sm py-3 px-6 rounded-xl hover:bg-primary/95 transition-all cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-display font-bold text-xl text-primary pb-3 border-b border-gray-100">
                  Secure Consultation Intake
                </h3>

                {/* Name */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="name" className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="e.g. Sterling Archer"
                    className={`w-full text-sm font-sans px-4 py-3 rounded-xl border bg-[#F7F8F1]/40 focus:bg-white text-primary focus:ring-1 focus:ring-primary focus:border-primary focus:outline-none transition-all ${
                      errors.name ? "border-red-400 focus:ring-red-400" : "border-gray-200"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500 flex items-center gap-1 mt-1 font-sans">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Email and Phone side-by-side */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="email" className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                      Business Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="e.g. s.archer@isis.agency"
                      className={`w-full text-sm font-sans px-4 py-3 rounded-xl border bg-[#F7F8F1]/40 focus:bg-white text-primary focus:ring-1 focus:ring-primary focus:border-primary focus:outline-none transition-all ${
                        errors.email ? "border-red-400 focus:ring-red-400" : "border-gray-200"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 flex items-center gap-1 mt-1 font-sans">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="phone" className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="e.g. +1 (555) 0199"
                      className={`w-full text-sm font-sans px-4 py-3 rounded-xl border bg-[#F7F8F1]/40 focus:bg-white text-primary focus:ring-1 focus:ring-primary focus:border-primary focus:outline-none transition-all ${
                        errors.phone ? "border-red-400 focus:ring-red-400" : "border-gray-200"
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-500 flex items-center gap-1 mt-1 font-sans">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Service Dropdown */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="service" className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Requested Service Pillar
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full text-sm font-sans px-4 py-3 rounded-xl border bg-[#F7F8F1]/40 focus:bg-white text-primary focus:ring-1 focus:ring-primary focus:border-primary focus:outline-none transition-all ${
                      errors.service ? "border-red-400 focus:ring-red-400" : "border-gray-200"
                    }`}
                  >
                    <option value="">-- Choose a Service Pillar --</option>
                    {servicesOptions.map((opt, i) => (
                      <option key={i} value={opt}>{opt}</option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="text-xs text-red-500 flex items-center gap-1 mt-1 font-sans">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.service}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="message" className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Inquiry Brief / Scope Specifications
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Describe your current bottlenecks, target budget, and desired outcome metrics..."
                    className={`w-full text-sm font-sans px-4 py-3 rounded-xl border bg-[#F7F8F1]/40 focus:bg-white text-primary focus:ring-1 focus:ring-primary focus:border-primary focus:outline-none transition-all resize-none ${
                      errors.message ? "border-red-400 focus:ring-red-400" : "border-gray-200"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-500 flex items-center gap-1 mt-1 font-sans">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-secondary text-primary font-bold text-sm py-4 px-6 rounded-xl hover:bg-primary hover:text-white disabled:bg-gray-100 disabled:text-gray-400 transition-all duration-300 cursor-pointer shadow-md"
                >
                  {isSubmitting ? (
                    <span>Encrypting and Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
