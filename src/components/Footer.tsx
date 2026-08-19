import { Mail, ArrowUp } from "lucide-react";
import { portfolioData } from "../data/portfolio";

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const { name, socials } = portfolioData.personalInfo;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const hasSocials = socials.github || socials.linkedin || socials.email;

  return (
    <footer className="bg-[#120809] text-dark-text py-12 relative overflow-hidden font-body border-t border-[#D4AF37]/10">
      
      {/* Scroll to Top Button inside footer */}
      <div className="absolute top-6 right-6 md:right-12">
        <button
          onClick={scrollToTop}
          className="p-3 bg-brand-pink text-main-bg rounded-full hover:bg-brand-pink/90 transition-colors focus:outline-none shadow-[0_0_12px_rgba(212,175,55,0.45)]"
          aria-label="Scroll to top of page"
        >
          <ArrowUp size={18} />
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo and Copyright */}
        <div className="text-center md:text-left">
          <h4 className="text-xl font-black font-heading tracking-wider flex items-center justify-center md:justify-start gap-1">
            {name.split(" ")[0]}
            <span className="text-brand-pink drop-shadow-[0_0_6px_#D4AF37]">✦</span>
          </h4>
          <p className="text-[11px] text-[#6B6B6B] mt-1.5">
            © {new Date().getFullYear()} {name}. All rights reserved.
          </p>
        </div>

        {/* Playful tagline */}
        <div className="text-sm font-semibold text-dark-text tracking-wide">
          Built with <span className="text-brand-pink">✨</span> and lots of <span className="text-dark-text">☕</span>
        </div>

        {/* Social media icons (Conditionally rendered) */}
        {hasSocials && (
          <div className="flex items-center gap-3">
            {socials.github && (
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/10 hover:bg-brand-pink hover:text-[#120809] rounded-xl transition-all"
                aria-label="GitHub Profile Link"
              >
                <GithubIcon size={16} />
              </a>
            )}
            {socials.linkedin && (
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/10 hover:bg-brand-pink hover:text-[#120809] rounded-xl transition-all"
                aria-label="LinkedIn Profile Link"
              >
                <LinkedinIcon size={16} />
              </a>
            )}
            {socials.email && (
              <a
                href={socials.email}
                className="p-2.5 bg-white/10 hover:bg-brand-pink hover:text-[#120809] rounded-xl transition-all"
                aria-label="Email Address Link"
              >
                <Mail size={16} />
              </a>
            )}
          </div>
        )}

      </div>
    </footer>
  );
}
