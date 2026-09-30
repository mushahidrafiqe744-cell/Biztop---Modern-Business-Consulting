import React, { useState } from "react";
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube, 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle,
  AlertCircle
} from "lucide-react";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    
    if (!newsletterEmail.trim()) {
      setErrorMsg("Email is required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newsletterEmail)) {
      setErrorMsg("Please enter a valid email");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setNewsletterEmail("");
    }, 1000);
  };

  const handleLinkClick = (id: string) => {
    onNavigate(id);
  };

  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t border-[#0A564F] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-white/10">
          
          {/* Logo Column (4 columns) */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <button 
              onClick={() => handleLinkClick("home")}
              className="font-display text-3xl font-bold tracking-tight text-white cursor-pointer"
            >
              <span className="text-secondary font-extrabold">BIZ</span>TOP
            </button>
            <p className="text-xs uppercase tracking-widest text-[#F7F8F1]/60 font-semibold">
              Build • Grow • Succeed
            </p>
            <p className="text-sm text-[#F7F8F1]/75 max-w-sm leading-relaxed">
              We provide modern, innovative and result-driven business solutions to help companies grow, compete and succeed in today's digital world.
            </p>
            
            {/* Social media icons */}
            <div className="flex items-center gap-3.5 pt-4">
              <a href="#facebook" aria-label="Facebook" className="w-8 h-8 rounded-full bg-white/5 hover:bg-secondary hover:text-primary transition-all flex items-center justify-center text-white/80">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#twitter" aria-label="X" className="w-8 h-8 rounded-full bg-white/5 hover:bg-secondary hover:text-primary transition-all flex items-center justify-center text-white/80">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#linkedin" aria-label="LinkedIn" className="w-8 h-8 rounded-full bg-white/5 hover:bg-secondary hover:text-primary transition-all flex items-center justify-center text-white/80">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#instagram" aria-label="Instagram" className="w-8 h-8 rounded-full bg-white/5 hover:bg-secondary hover:text-primary transition-all flex items-center justify-center text-white/80">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#youtube" aria-label="YouTube" className="w-8 h-8 rounded-full bg-white/5 hover:bg-secondary hover:text-primary transition-all flex items-center justify-center text-white/80">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column (2 columns) */}
          <div className="lg:col-span-2 text-left space-y-4">
            <h4 className="font-display font-bold text-base tracking-wide text-white uppercase text-xs">Quick Links</h4>
            <div className="flex flex-col gap-2.5 text-sm font-sans text-[#F7F8F1]/80">
              <button onClick={() => handleLinkClick("home")} className="text-left hover:text-secondary hover:translate-x-1 transition-all cursor-pointer">Home</button>
              <button onClick={() => handleLinkClick("about")} className="text-left hover:text-secondary hover:translate-x-1 transition-all cursor-pointer">About Us</button>
              <button onClick={() => handleLinkClick("services")} className="text-left hover:text-secondary hover:translate-x-1 transition-all cursor-pointer">Services</button>
              <button onClick={() => handleLinkClick("portfolio")} className="text-left hover:text-secondary hover:translate-x-1 transition-all cursor-pointer">Portfolio</button>
              <button onClick={() => handleLinkClick("blog")} className="text-left hover:text-secondary hover:translate-x-1 transition-all cursor-pointer">Blog</button>
              <button onClick={() => handleLinkClick("contact")} className="text-left hover:text-secondary hover:translate-x-1 transition-all cursor-pointer">Contact</button>
            </div>
          </div>

          {/* Contact Us Column (3 columns) */}
          <div className="lg:col-span-3 text-left space-y-4">
            <h4 className="font-display font-bold text-base tracking-wide text-white uppercase text-xs">Contact Us</h4>
            <div className="space-y-3.5 text-sm font-sans text-[#F7F8F1]/80">
              <p className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span>+1 (800) 555-0199</span>
              </p>
              <a href="mailto:info@biztop.com" className="flex items-start gap-3 hover:text-secondary">
                <Mail className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span>info@biztop.com</span>
              </a>
              <p className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span>100 Pine St, Suite 1250, San Francisco, CA 94111</span>
              </p>
            </div>
          </div>

          {/* Newsletter Column (3 columns) */}
          <div className="lg:col-span-3 text-left space-y-4">
            <h4 className="font-display font-bold text-base tracking-wide text-white uppercase text-xs font-semibold">Newsletter</h4>
            <p className="text-sm text-[#F7F8F1]/80 leading-relaxed font-sans">
              Get the latest updates, strategy tips and corporate offers.
            </p>

            {isSuccess ? (
              <div className="p-3 bg-secondary/15 rounded-xl border border-secondary/20 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-secondary shrink-0" />
                <span className="text-xs text-secondary font-semibold font-sans">Subscribed successfully!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full text-xs font-sans px-4 py-3.5 pr-12 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="absolute right-1.5 top-1.5 bottom-1.5 w-9 rounded-lg bg-secondary text-primary hover:bg-white transition-all flex items-center justify-center cursor-pointer"
                    aria-label="Subscribe"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                {errorMsg && (
                  <p className="text-xs text-red-300 flex items-center gap-1 font-sans">
                    <AlertCircle className="w-3 h-3" /> {errorMsg}
                  </p>
                )}
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F7F8F1]/60 font-sans">
          <p>© 2026 Biztop. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-secondary transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-secondary transition-colors">Terms & Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
