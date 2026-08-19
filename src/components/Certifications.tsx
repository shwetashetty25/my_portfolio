import { Award } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export default function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-dark-text relative inline-block">
            Certifications
            {/* Draw curve line doodle underneath */}
            <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-16 h-1 bg-brand-pink rounded-full" />
          </h2>
          <p className="font-body text-[#b8ada0] mt-4 text-sm max-w-md">
            Milestones in my continuous journey of learning.
          </p>
        </div>

        {/* Certifications Layout Grid - exactly 2 columns for balanced presentation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center max-w-4xl mx-auto">
          {certifications.map((cert, idx) => (
            <a
              key={idx}
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block group h-full focus:outline-none"
            >
              <div className="bg-[#200f08]/65 backdrop-blur-xl border border-[#6b4f22]/40 group-hover:border-[#e8b84b]/60 rounded-3xl p-6 shadow-lg group-hover:translate-y-[-4px] group-hover:shadow-[0_0_15px_rgba(232,184,75,0.15)] transition-all duration-300 flex flex-col justify-between items-start gap-5 relative overflow-hidden h-full text-left">
                {/* Star details in background card corner */}
                <div className="absolute top-2 right-2 text-[#e8b84b]/10 group-hover:text-[#e8b84b]/25 text-3xl select-none font-bold transition-colors">★</div>
                
                <div className="flex gap-4 items-start w-full">
                  {/* Icon Wrap */}
                  <div className="p-3 bg-[#0d0704]/50 border border-[#6b4f22]/30 group-hover:border-[#e8b84b]/30 rounded-2xl shrink-0 text-brand-pink transition-colors">
                    <Award size={24} />
                  </div>
                  
                  <div className="font-body flex-1 pr-4">
                    <h3 className="font-heading text-lg font-bold text-[#f4ede0] leading-snug group-hover:text-[#e8b84b] transition-colors">
                      {cert.name}
                    </h3>
                    <p className="text-sm font-semibold text-[#b8ada0] mt-1">
                      {cert.issuer}
                    </p>
                    {cert.code && (
                      <p className="text-[10px] text-[#b8ada0]/50 font-mono mt-2">
                        Certificate code: {cert.code}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subtle Clickable Cue */}
                <div className="text-[11px] font-bold text-[#e8b84b]/70 group-hover:text-[#e8b84b] inline-flex items-center gap-1 transition-colors">
                  View Certificate
                  <span className="text-[10px] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
