import { Sparkles } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export default function Achievements() {
  const { achievements } = portfolioData;

  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-dark-text relative inline-block">
            Achievements
            {/* Draw squiggle line doodle underneath */}
            <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-16 h-1 bg-brand-pink rounded-full" />
          </h2>
          <p className="font-body text-[#6B6B6B] mt-4 text-sm max-w-md">
            Recognitions and learning milestones throughout my coding journey.
          </p>
        </div>

        {/* Timeline or Grid for Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((ach, idx) => {
            const ribbonColors = ["bg-brand-pink", "bg-brand-lavender", "bg-brand-mint"];
            const textColors = ["text-brand-pink", "text-brand-lavender", "text-brand-mint"];
            return (
              <div
                key={idx}
                className="bg-[#2B0B12]/65 backdrop-blur-xl border border-[#D4AF37]/18 rounded-3xl p-6 shadow-lg hover:translate-y-[-4px] hover:shadow-[0_0_15px_rgba(212,175,55,0.15)] hover:border-brand-pink/45 transition-all duration-300 flex flex-col items-start text-left gap-3.5 relative overflow-hidden"
              >
                {/* Highlight ribbon */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 ${ribbonColors[idx % ribbonColors.length]}`} />
                
                {/* Icon wrap */}
                <div className={`p-2.5 bg-[#120809]/50 border border-[#D4AF37]/15 rounded-2xl shrink-0 ${textColors[idx % textColors.length]}`}>
                  <Sparkles size={20} />
                </div>

                <div className="font-body">
                  <h3 className="font-heading text-lg font-bold text-dark-text leading-snug">
                    {ach.title}
                  </h3>
                  <p className="text-sm text-[#6B6B6B] mt-2.5 leading-relaxed">
                    {ach.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
