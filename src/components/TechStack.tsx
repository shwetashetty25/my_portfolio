import { portfolioData } from "../data/portfolio";

// Helper function to render a unified, aesthetic SVG icon for each technology
const getTechIcon = (tech: string) => {
  const lowercase = tech.toLowerCase();
  
  // Custom styled SVG icons matching the charcoal/pink design system
  if (lowercase.includes("react")) {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-pink drop-shadow-[0_0_4px_#38BDF8]">
        <circle cx="12" cy="12" r="2"/>
        <path d="M12 3a9 9 0 0 0 0 18 9 9 0 0 0 0-18zm0 0a24 24 0 0 0 0 18m0-18A24 24 0 0 1 12 21"/>
        <path d="M3 12a9 9 0 0 0 18 0 9 9 0 0 0-18 0zm0 0a24 24 0 0 0 18 0M3 12a24 24 0 0 1 18 0" transform="rotate(30 12 12)"/>
        <path d="M3 12a9 9 0 0 0 18 0 9 9 0 0 0-18 0zm0 0a24 24 0 0 0 18 0M3 12a24 24 0 0 1 18 0" transform="rotate(60 12 12)"/>
      </svg>
    );
  }
  if (lowercase === "javascript" || lowercase === "js") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#020617]">
        <rect x="3" y="3" width="18" height="18" rx="2" fill="var(--color-brand-yellow)" />
        <text x="13" y="18" fill="currentColor" fontSize="10" fontWeight="bold" fontFamily="sans-serif">JS</text>
      </svg>
    );
  }
  if (lowercase === "typescript" || lowercase === "ts") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-pink">
        <rect x="3" y="3" width="18" height="18" rx="2" fill="var(--color-sec-bg)" />
        <text x="13" y="18" fill="#FFFFFF" fontSize="10" fontWeight="bold" fontFamily="sans-serif">TS</text>
      </svg>
    );
  }
  if (lowercase.includes("node")) {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-mint">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2z"/>
        <path d="M12 22V12m0 0L2 7m10 5l10-5"/>
      </svg>
    );
  }
  if (lowercase.includes("mongo")) {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-mint">
        <path d="M12 2c0 0-4 4.5-4 9.5S10.5 20 12 22c1.5-2 4-8.5 4-10.5S12 2 12 2z"/>
        <path d="M12 6v10"/>
      </svg>
    );
  }
  if (lowercase.includes("python")) {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#020617]">
        <path d="M12 2a5 5 0 0 0-5 5v2H5a5 5 0 0 0-5 5v3a5 5 0 0 0 5 5h2v-2a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v2h2a5 5 0 0 0 5-5v-3a5 5 0 0 0-5-5h-2V7a5 5 0 0 0-5-5z" fill="var(--color-brand-yellow)"/>
      </svg>
    );
  }
  if (lowercase === "c++") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-lavender">
        <circle cx="9" cy="12" r="6"/>
        <path d="M16 12h6M19 9v6"/>
      </svg>
    );
  }
  if (lowercase === "html") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#020617]">
        <path d="M12 2L2 5l1.5 14 8.5 3 8.5-3L22 5L12 2z" fill="var(--color-brand-yellow)"/>
        <text x="7.5" y="14" fill="currentColor" fontSize="8" fontWeight="bold" fontFamily="sans-serif">HTML</text>
      </svg>
    );
  }
  if (lowercase === "css") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-pink">
        <path d="M12 2L2 5l1.5 14 8.5 3 8.5-3L22 5L12 2z"/>
        <text x="8.5" y="14" fill="currentColor" fontSize="8" fontWeight="bold" fontFamily="sans-serif">CSS</text>
      </svg>
    );
  }
  if (lowercase.includes("tailwind")) {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-pink">
        <path d="M12 3c-2.5 0-4 1.5-4.5 4.5.5-1.5 1.5-2.5 3-2.5 1.5 0 2.5.5 3 2s1.5 3.5 4.5 3.5c2.5 0 4-1.5 4.5-4.5-.5 1.5-1.5 2.5-3 2.5-1.5 0-2.5-.5-3-2S15 3 12 3zm-6 6c-2.5 0-4 1.5-4.5 4.5.5-1.5 1.5-2.5 3-2.5 1.5 0 2.5.5 3 2s1.5 3.5 4.5 3.5c2.5 0 4-1.5 4.5-4.5-.5 1.5-1.5 2.5-3 2.5-1.5 0-2.5-.5-3-2S9 9 6 9z"/>
      </svg>
    );
  }
  if (lowercase === "mysql" || lowercase === "postgresql" || lowercase === "postgres") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-pink">
        <path d="M12 2C6.5 2 2 4.5 2 7.5S6.5 13 12 13s10-2.5 10-5.5S17.5 2 12 2z"/>
        <path d="M2 7.5v5c0 3 4.5 5.5 10 5.5s10-2.5 10-5.5v-5"/>
        <path d="M2 12.5v5c0 3 4.5 5.5 10 5.5s10-2.5 10-5.5v-5"/>
      </svg>
    );
  }
  if (lowercase === "figma") {
    return (
      <svg width="20" height="24" viewBox="0 0 16 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-lavender">
        <path d="M4 12c-2.2 0-4-1.8-4-4s1.8-4 4-4h4V12H4z"/>
        <path d="M12 12c2.2 0 4-1.8 4-4s-1.8-4-4-4H8V12H12z"/>
        <path d="M12 20c2.2 0 4-1.8 4-4s-1.8-4-4-4H8V20H12z"/>
        <path d="M4 20c-2.2 0-4-1.8-4-4V20h4z"/>
        <circle cx="4" cy="12" r="4" fill="var(--color-brand-yellow)" fillOpacity="0.3"/>
      </svg>
    );
  }
  if (lowercase === "docker") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-pink">
        <rect x="2" y="10" width="4" height="4" rx="1"/>
        <rect x="7" y="10" width="4" height="4" rx="1"/>
        <rect x="12" y="10" width="4" height="4" rx="1"/>
        <rect x="7" y="5" width="4" height="4" rx="1"/>
        <path d="M2 15a8 8 0 0 0 16 0v-1H2v1z"/>
      </svg>
    );
  }
  if (lowercase === "aws") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-pink">
        <path d="M4 16l4-10 4 10m-6-3h4"/>
        <path d="M14 6l2 7 2-7M6 20c4 2 8 2 12 0" strokeDasharray="3 2"/>
      </svg>
    );
  }
  if (lowercase === "git" || lowercase === "github") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-pink">
        <circle cx="12" cy="18" r="3"/>
        <circle cx="6" cy="6" r="3"/>
        <circle cx="18" cy="6" r="3"/>
        <path d="M18 9v2a4 4 0 0 1-4 4h-2m-6-6v6"/>
      </svg>
    );
  }

  // Fallback coding symbol icon
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#6B6B6B]">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
};

export default function TechStack() {
  const { techStack } = portfolioData;

  return (
    <section id="tech-stack" className="py-20 bg-[#2B0B12]/40 border-y border-[#D4AF37]/10 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-dark-text relative inline-block">
            Tech I Love
            {/* Draw a small doodle squiggle */}
            <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-16 h-1 bg-brand-pink rounded-full shadow-[0_0_8px_#D4AF37]" />
          </h2>
          <p className="font-body text-[#6B6B6B] mt-4 text-sm max-w-md">
            A cohesive view of languages, frameworks, and design tools I frequently use.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {techStack.map((tech, idx) => (
            <div
              key={idx}
              className="bg-[#2B0B12]/65 backdrop-blur-xl border border-[#D4AF37]/18 rounded-2xl p-4 flex items-center gap-3 hover:translate-y-[-4px] hover:shadow-[0_0_15px_rgba(212,175,55,0.15)] hover:border-brand-pink/45 transition-all duration-300"
            >
              {/* Custom SVG Icon Container */}
              <div className="p-2.5 bg-[#120809]/50 rounded-xl border border-[#D4AF37]/15 flex items-center justify-center shrink-0">
                {getTechIcon(tech)}
              </div>
              
              {/* Technology name */}
              <span className="font-body text-xs font-bold text-dark-text">
                {tech}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
