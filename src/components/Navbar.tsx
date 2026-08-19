import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { portfolioData } from "../data/portfolio";

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Tech Stack", id: "tech-stack" },
    { label: "Certifications", id: "certifications" },
    { label: "Achievements", id: "achievements" },
    { label: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-[#2B0B12]/85 backdrop-blur-xl border-b border-[#D4AF37]/8 shadow-[0_0_20px_rgba(212,175,55,0.06)]"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavClick("home")}
          className="text-2xl font-bold font-heading text-dark-text hover:text-brand-pink transition-colors flex items-center gap-1 focus:outline-none"
        >
          {portfolioData.personalInfo.name.split(" ")[0]}
          <span className="text-brand-pink drop-shadow-[0_0_8px_#D4AF37]">✦</span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`relative text-sm font-medium font-body transition-all focus:outline-none py-1 ${
                activeSection === item.id
                  ? "text-brand-pink font-bold drop-shadow-[0_0_4px_rgba(212,175,55,0.4)]"
                  : "text-[#6B6B6B] hover:text-dark-text"
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-pink rounded-full shadow-[0_0_10px_#D4AF37]" />
              )}
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <button
            onClick={() => handleNavClick("contact")}
            className="px-5 py-2.5 text-sm font-bold font-body bg-brand-pink text-main-bg rounded-full hover:bg-brand-pink/90 hover:scale-105 hover:shadow-[0_0_15px_rgba(212,175,55,0.45)] transition-all duration-200 border-2 border-brand-pink"
          >
            Let's Connect! 💌
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="lg:hidden p-2 text-dark-text hover:text-brand-pink transition-colors focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#2B0B12]/95 backdrop-blur-xl border-b border-[#D4AF37]/15 py-4 px-6 flex flex-col gap-4 shadow-2xl animate-fade-in">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-left text-base font-semibold font-body py-2 transition-colors border-b border-white/5 ${
                activeSection === item.id ? "text-brand-pink font-bold" : "text-[#6B6B6B]"
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("contact")}
            className="w-full text-center px-5 py-3 mt-2 text-sm font-bold font-body bg-brand-pink text-main-bg rounded-full hover:bg-brand-pink/90 transition-all border-2 border-brand-pink"
          >
            Let's Connect! 💌
          </button>
        </div>
      )}
    </header>
  );
}
