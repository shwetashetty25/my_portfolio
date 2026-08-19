import { Code, Database, Cpu, Cloud, Palette, Terminal } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export default function Skills() {
  const { skills } = portfolioData;

  // Map categories to visual icons
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "frontend development":
        return <Code size={20} className="text-brand-pink" />;
      case "backend development":
        return <Terminal size={20} className="text-brand-pink" />;
      case "databases":
        return <Database size={20} className="text-brand-pink" />;
      case "programming":
        return <Cpu size={20} className="text-brand-pink" />;
      case "cloud & devops":
        return <Cloud size={20} className="text-brand-pink" />;
      case "design":
        return <Palette size={20} className="text-brand-pink" />;
      default:
        return <Code size={20} className="text-brand-pink" />;
    }
  };

  const stripColors = ["bg-brand-pink", "bg-brand-lavender", "bg-brand-mint"];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-dark-text relative inline-block">
            My Skills
            {/* Draw handwritten heart underline doodle */}
            <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-16 h-1 bg-brand-pink rounded-full" />
          </h2>
          <p className="font-body text-[#6B6B6B] mt-4 text-sm max-w-md">
            Here are the primary areas of technology I work with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, idx) => (
            <div
              key={idx}
              className="bg-[#2B0B12]/65 backdrop-blur-xl border border-[#D4AF37]/18 rounded-3xl p-6 shadow-lg hover:translate-y-[-4px] hover:shadow-[0_0_15px_rgba(212,175,55,0.15)] hover:border-brand-pink/45 transition-all duration-300 flex flex-col gap-4 relative overflow-hidden"
            >
              {/* Top border strip for styling */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 ${stripColors[idx % stripColors.length]}`} />
              
              {/* Category Header */}
              <div className="flex items-center gap-3 border-b border-white/5 pb-3">
                <div className="p-2 bg-[#120809]/50 rounded-xl border border-[#D4AF37]/15">
                  {getCategoryIcon(category.category)}
                </div>
                <h3 className="font-heading text-lg font-bold text-dark-text">
                  {category.category}
                </h3>
              </div>

              {/* Skill Pills */}
              <div className="flex flex-wrap gap-2 mt-2">
                {category.items.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3.5 py-1.5 bg-[#2B0B12]/45 hover:bg-[#2B0B12]/85 text-dark-text border border-[#D4AF37]/20 hover:border-brand-pink hover:scale-105 transition-all duration-200 text-xs font-semibold font-body rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
