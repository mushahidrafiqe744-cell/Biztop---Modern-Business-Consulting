/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import TopBar from "./components/TopBar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import { X, CheckCircle, ArrowRight, ShieldCheck, HeartHandshake, HelpCircle } from "lucide-react";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  
  // Free Quote Modal State
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteForm, setQuoteForm] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    brief: ""
  });
  const [quoteErrors, setQuoteErrors] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    brief: ""
  });
  const [isQuoteSubmitting, setIsQuoteSubmitting] = useState(false);
  const [isQuoteSuccess, setIsQuoteSuccess] = useState(false);

  const handleNavigate = (id: string) => {
    setActiveSection(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Form Validation
  const validateField = (name: string, value: string) => {
    let error = "";
    if (!value.trim()) {
      error = "Required";
    } else if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        error = "Invalid email";
      }
    } else if (name === "phone") {
      const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
      if (!phoneRegex.test(value)) {
        error = "Invalid phone";
      }
    }
    return error;
  };

  const handleQuoteChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setQuoteForm(prev => ({ ...prev, [name]: value }));
    if (quoteErrors[name as keyof typeof quoteErrors]) {
      setQuoteErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleQuoteBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setQuoteErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = {
      name: validateField("name", quoteForm.name),
      email: validateField("email", quoteForm.email),
      phone: validateField("phone", quoteForm.phone),
      budget: quoteForm.budget ? "" : "Please select budget",
      brief: validateField("brief", quoteForm.brief)
    };

    setQuoteErrors(newErrors);

    const hasErrors = Object.values(newErrors).some(err => err !== "");
    if (hasErrors) {
      return;
    }

    setIsQuoteSubmitting(true);
    setTimeout(() => {
      setIsQuoteSubmitting(false);
      setIsQuoteSuccess(true);
      setQuoteForm({
        name: "",
        email: "",
        phone: "",
        budget: "",
        brief: ""
      });
    }, 1200);
  };

  const closeQuoteModal = () => {
    setIsQuoteOpen(false);
    setIsQuoteSuccess(false);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-secondary selection:text-primary">
      
      {/* Interactive Sticky Top Nav system */}
      <TopBar 
        activeSection={activeSection} 
        onNavigate={handleNavigate}
        openQuoteModal={() => setIsQuoteOpen(true)}
      />

      {/* Main Sections flow - Conditionally rendering only the active section */}
      <main className="flex-grow">
        {activeSection === "home" && (
          <div className="animate-fade-in">
            <Hero onGetStarted={() => handleNavigate("contact")} />
          </div>
        )}

        {activeSection === "about" && (
          <div className="animate-fade-in">
            <About onQuoteRequested={() => setIsQuoteOpen(true)} />
            <Stats onGetStarted={() => handleNavigate("contact")} />
            <Testimonials />
          </div>
        )}

        {activeSection === "services" && (
          <div className="animate-fade-in">
            <Services onQuoteRequested={() => setIsQuoteOpen(true)} />
            <Features onQuoteRequested={() => setIsQuoteOpen(true)} />
          </div>
        )}

        {activeSection === "portfolio" && (
          <div className="animate-fade-in">
            <Portfolio />
          </div>
        )}

        {activeSection === "blog" && (
          <div className="animate-fade-in">
            <Blog />
          </div>
        )}

        {activeSection === "contact" && (
          <div className="animate-fade-in">
            <Contact />
          </div>
        )}
      </main>

      {/* Footer System */}
      <Footer onNavigate={handleNavigate} />

      {/* Global "Get a Free Quote" Overlay Modal */}
      {isQuoteOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary/60 backdrop-blur-md p-4 animate-fade-in">
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden border border-gray-100 relative">
            
            {/* Modal Header */}
            <div className="bg-primary text-white p-6 md:p-8 flex items-center justify-between relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary opacity-15 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center gap-2.5">
                <HeartHandshake className="w-6 h-6 text-secondary" />
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-secondary font-mono">ADVISORY ESTIMATE</span>
                  <h3 className="text-lg md:text-xl font-display font-extrabold leading-none mt-0.5">Request Strategy Quote</h3>
                </div>
              </div>
              <button 
                onClick={closeQuoteModal}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Close form"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8">
              {isQuoteSuccess ? (
                <div className="text-center py-8 space-y-5">
                  <div className="w-14 h-14 bg-secondary/25 rounded-full flex items-center justify-center text-primary mx-auto shadow-inner">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="font-display font-extrabold text-xl text-primary">Quote Request Dispatched</h4>
                    <p className="text-xs text-gray-500 max-w-sm mx-auto font-sans">
                      Your inquiry was received. An executive consultant will construct a bespoke strategy blueprint and call you within 2 business hours.
                    </p>
                  </div>
                  <button
                    onClick={closeQuoteModal}
                    className="w-full bg-primary text-white font-bold text-sm py-3 px-4 rounded-xl hover:bg-primary/90 transition-all cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleQuoteSubmit} className="space-y-4">
                  
                  {/* Name field */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="e.g. Sterling Archer"
                      value={quoteForm.name}
                      onChange={handleQuoteChange}
                      onBlur={handleQuoteBlur}
                      className={`w-full text-xs font-sans px-3.5 py-2.5 rounded-xl border bg-[#F7F8F1]/40 focus:bg-white text-primary focus:outline-none focus:ring-1 focus:ring-primary ${
                        quoteErrors.name ? "border-red-400 focus:ring-red-400" : "border-gray-200"
                      }`}
                    />
                    {quoteErrors.name && <p className="text-[10px] text-red-500 font-sans">{quoteErrors.name}</p>}
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5 text-left">
                      <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Business Email</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="e.g. s.archer@isis.agency"
                        value={quoteForm.email}
                        onChange={handleQuoteChange}
                        onBlur={handleQuoteBlur}
                        className={`w-full text-xs font-sans px-3.5 py-2.5 rounded-xl border bg-[#F7F8F1]/40 focus:bg-white text-primary focus:outline-none focus:ring-1 focus:ring-primary ${
                          quoteErrors.email ? "border-red-400 focus:ring-red-400" : "border-gray-200"
                        }`}
                      />
                      {quoteErrors.email && <p className="text-[10px] text-red-500 font-sans">{quoteErrors.email}</p>}
                    </div>

                    <div className="space-y-1.5 text-left">
                      <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="e.g. +1 (555) 0199"
                        value={quoteForm.phone}
                        onChange={handleQuoteChange}
                        onBlur={handleQuoteBlur}
                        className={`w-full text-xs font-sans px-3.5 py-2.5 rounded-xl border bg-[#F7F8F1]/40 focus:bg-white text-primary focus:outline-none focus:ring-1 focus:ring-primary ${
                          quoteErrors.phone ? "border-red-400 focus:ring-red-400" : "border-gray-200"
                        }`}
                      />
                      {quoteErrors.phone && <p className="text-[10px] text-red-500 font-sans">{quoteErrors.phone}</p>}
                    </div>
                  </div>

                  {/* Budget Dropdown */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Project Budget Horizon</label>
                    <select
                      name="budget"
                      value={quoteForm.budget}
                      onChange={handleQuoteChange}
                      onBlur={handleQuoteBlur}
                      className={`w-full text-xs font-sans px-3.5 py-2.5 rounded-xl border bg-[#F7F8F1]/40 focus:bg-white text-primary focus:outline-none focus:ring-1 focus:ring-primary ${
                        quoteErrors.budget ? "border-red-400 focus:ring-red-400" : "border-gray-200"
                      }`}
                    >
                      <option value="">-- Select Budget Target --</option>
                      <option value="under_10k">Under $10k</option>
                      <option value="10k_50k">$10k - $50k</option>
                      <option value="50k_100k">$50k - $100k</option>
                      <option value="above_100k">$100k+ enterprise</option>
                    </select>
                    {quoteErrors.budget && <p className="text-[10px] text-red-500 font-sans">{quoteErrors.budget}</p>}
                  </div>

                  {/* Brief textarea */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Project Scope Brief</label>
                    <textarea
                      name="brief"
                      rows={3}
                      placeholder="E.g. We require organic search rank growth and standard corporate portal design..."
                      value={quoteForm.brief}
                      onChange={handleQuoteChange}
                      onBlur={handleQuoteBlur}
                      className={`w-full text-xs font-sans px-3.5 py-2.5 rounded-xl border bg-[#F7F8F1]/40 focus:bg-white text-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none ${
                        quoteErrors.brief ? "border-red-400 focus:ring-red-400" : "border-gray-200"
                      }`}
                    />
                    {quoteErrors.brief && <p className="text-[10px] text-red-500 font-sans">{quoteErrors.brief}</p>}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isQuoteSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-secondary text-primary font-bold text-sm py-3.5 px-4 rounded-xl hover:bg-primary hover:text-white transition-all disabled:bg-gray-100 disabled:text-gray-400 cursor-pointer shadow-md mt-2"
                  >
                    {isQuoteSubmitting ? (
                      <span>Validating and sending...</span>
                    ) : (
                      <>
                        <span>Submit Proposal</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="text-[10px] text-gray-400 font-sans flex items-center justify-center gap-1.5 pt-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-800 shrink-0" /> Secure SSL 256-bit encrypted channel.
                  </div>

                </form>
              )}
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
