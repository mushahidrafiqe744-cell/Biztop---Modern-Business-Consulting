import React, { useState, useEffect } from "react";
import { 
  MapPin, 
  Mail, 
  Phone, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube, 
  Search, 
  Menu, 
  X, 
  ArrowRight, 
  CheckCircle2,
  Lock
} from "lucide-react";

interface TopBarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  openQuoteModal: () => void;
}

export default function TopBar({ activeSection, onNavigate, openQuoteModal }: TopBarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [isSticky, setIsSticky] = useState(false);

  // Monitor scroll for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Services", id: "services" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Blog", id: "blog" },
    { name: "Contact", id: "contact" },
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.trim() === "") {
      setSearchResults([]);
      return;
    }
    
    // Simple searchable list based on website content
    const items = [
      "Business Consulting Strategy",
      "Financial Growth Planning",
      "Digital Marketing & SEO Solutions",
      "Web and Mobile App Development",
      "Professional Executive Team",
      "Success Case Studies & Portfolio",
      "Biztop Business Blog",
      "Get a Free Strategy Quote",
      "Corporate Office Location & Contact"
    ];
    
    const filtered = items.filter(item => 
      item.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filtered);
  };

  const handleLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      {/* 1. Thin Top Information Bar */}
      <div className="bg-primary text-[#F7F8F1]/90 text-xs border-b border-[#0A564F] py-2 px-4 md:px-8 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 font-sans">
              <MapPin className="w-3.5 h-3.5 text-secondary" />
              100 Pine St, Suite 1250, San Francisco, CA 94111
            </span>
            <a href="mailto:info@biztop.com" className="flex items-center gap-1.5 hover:text-secondary transition-colors font-sans">
              <Mail className="w-3.5 h-3.5 text-secondary" />
              info@biztop.com
            </a>
            <span className="flex items-center gap-1.5 font-sans">
              <Phone className="w-3.5 h-3.5 text-secondary" />
              +1 (800) 555-0199
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="#facebook" aria-label="Facebook" className="hover:text-secondary transition-colors">
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a href="#twitter" aria-label="X" className="hover:text-secondary transition-colors">
              <Twitter className="w-3.5 h-3.5" />
            </a>
            <a href="#linkedin" aria-label="LinkedIn" className="hover:text-secondary transition-colors">
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a href="#instagram" aria-label="Instagram" className="hover:text-secondary transition-colors">
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a href="#youtube" aria-label="YouTube" className="hover:text-secondary transition-colors">
              <Youtube className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar (Sticky and responsive) */}
      <header className={`w-full z-40 transition-all duration-300 ${
        isSticky 
          ? "fixed top-0 left-0 bg-primary/95 text-white shadow-lg backdrop-blur-md border-b border-[#0A564F] py-3" 
          : "relative bg-primary text-[#F7F8F1] py-5"
      }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          
          {/* Zone 1: Single element Brand Wordmark */}
          <button 
            onClick={() => handleLinkClick("home")} 
            className="flex items-center gap-1.5 font-display text-2xl font-bold tracking-tight text-white focus:outline-none cursor-pointer"
          >
            <span className="text-secondary font-extrabold">BIZ</span>TOP
          </button>

          {/* Zone 2: Navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`relative py-1.5 hover:text-secondary transition-colors cursor-pointer font-sans ${
                  activeSection === link.id 
                    ? "text-secondary font-semibold" 
                    : "text-[#F7F8F1]/80"
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary rounded-full transition-all duration-300" />
                )}
              </button>
            ))}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="flex items-center gap-4">
            {/* Search Icon Trigger */}
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="p-2 rounded-full hover:bg-white/10 text-white/90 hover:text-secondary transition-all cursor-pointer"
              aria-label="Search website"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Quote Action Button */}
            <button
              onClick={openQuoteModal}
              className="hidden sm:flex items-center gap-2 bg-secondary text-primary font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-white hover:text-primary transition-all duration-300 cursor-pointer shadow-md shadow-secondary/10 whitespace-nowrap"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Mobile Hamburger Trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-full hover:bg-white/10 text-white hover:text-secondary transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* 3. Mobile Sidebar Drawer */}
      <div className={`fixed inset-0 z-50 bg-primary/45 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${
        isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`} onClick={() => setIsMobileMenuOpen(false)}>
        <div 
          className={`fixed top-0 right-0 w-80 max-w-[85vw] h-full bg-primary text-white shadow-2xl p-6 transition-transform duration-300 ease-out flex flex-col justify-between ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <span className="font-display text-2xl font-bold tracking-tight">
                <span className="text-secondary font-extrabold">BIZ</span>TOP
              </span>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1.5 rounded-full hover:bg-white/10 text-white hover:text-secondary"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-5 py-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-left text-lg font-medium py-1 transition-all ${
                    activeSection === link.id 
                      ? "text-secondary pl-2 border-l-2 border-secondary font-bold" 
                      : "text-[#F7F8F1]/80 hover:text-white hover:pl-2"
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          <div className="space-y-6 pt-6 border-t border-white/10">
            <div className="space-y-3.5 text-xs text-[#F7F8F1]/70">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-secondary shrink-0" />
                San Francisco, CA
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-secondary shrink-0" />
                info@biztop.com
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-secondary shrink-0" />
                +1 (800) 555-0199
              </p>
            </div>
            
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                openQuoteModal();
              }}
              className="w-full flex items-center justify-center gap-2 bg-secondary text-primary font-bold py-3 px-4 rounded-xl hover:bg-white transition-all shadow-lg shadow-secondary/10"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 4. Search Modal Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-primary/70 backdrop-blur-md pt-20 px-4">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <div className="flex items-center gap-3 flex-1">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Type to search Biztop services, blogs, strategy..."
                  className="w-full text-base bg-transparent border-none outline-none text-primary placeholder-gray-400 focus:ring-0"
                  autoFocus
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </div>
              <button 
                onClick={() => {
                  setIsSearchOpen(false);
                  setSearchQuery("");
                  setSearchResults([]);
                }}
                className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Results */}
            <div className="p-4 max-h-96 overflow-y-auto">
              {searchQuery.trim() === "" ? (
                <div className="py-8 text-center text-gray-400 text-sm">
                  <p>Type keywords to search our professional offerings</p>
                  <p className="text-xs mt-1 text-gray-400">e.g., Development, Consulting, Strategy, Portfolio</p>
                </div>
              ) : searchResults.length > 0 ? (
                <div className="space-y-1.5">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-2 pb-1.5">Search Suggestions ({searchResults.length})</p>
                  {searchResults.map((result, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setIsSearchOpen(false);
                        setSearchQuery("");
                        setSearchResults([]);
                        // Navigate to specific targets
                        if (result.toLowerCase().includes("contact") || result.toLowerCase().includes("quote")) {
                          onNavigate("contact");
                        } else if (result.toLowerCase().includes("portfolio")) {
                          onNavigate("portfolio");
                        } else if (result.toLowerCase().includes("blog")) {
                          onNavigate("blog");
                        } else if (result.toLowerCase().includes("team") || result.toLowerCase().includes("about")) {
                          onNavigate("about");
                        } else {
                          onNavigate("services");
                        }
                      }}
                      className="w-full text-left px-3 py-2.5 text-sm rounded-xl hover:bg-[#F7F8F1] hover:text-primary transition-all flex items-center justify-between font-sans text-gray-700 font-medium group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">{result}</span>
                      <ArrowRight className="w-4 h-4 text-secondary opacity-0 group-hover:opacity-100 transition-all shrink-0" />
                    </button>
                  ))}
                </div>
              ) : (
                <div className="py-8 text-center text-gray-500 text-sm">
                  <p>No results found for "<span className="font-semibold text-primary">{searchQuery}</span>"</p>
                  <p className="text-xs mt-1 text-gray-400">Try searching for other terms like 'consulting', 'SEO' or 'team'</p>
                </div>
              )}
            </div>
            
            <div className="bg-[#F7F8F1] px-4 py-3 border-t border-gray-100 text-[11px] text-gray-500 flex items-center justify-between">
              <span className="flex items-center gap-1"><Lock className="w-3 h-3 text-emerald-800" /> Secure Search Terminal</span>
              <span>Press <kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-[10px] shadow-sm font-mono">ESC</kbd> to close</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
