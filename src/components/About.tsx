import { Sparkles, Terminal, FileCode, Layers } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export default function About() {
  const { title, paragraphs, badges } = portfolioData.about;

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-dark-text relative inline-block">
            About Me
            {/* Draw curve line doodle underneath */}
            <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-16 h-1 bg-brand-pink rounded-full" />
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Abstract Coding Panel */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Background glow frame */}
            <div className="absolute inset-0 bg-brand-lavender/5 rounded-[2rem] filter blur-2xl -z-10" />

            {/* Sticker attached to the bottom left */}
            <div className="absolute -bottom-4 -left-4 bg-[#200f08]/90 border border-[#6b4f22]/35 backdrop-blur-md p-4 rounded-2xl shadow-lg max-w-[200px] rotate-[-5deg] z-20 flex flex-col gap-1.5 text-left">
              <span className="text-brand-pink text-lg font-bold drop-shadow-[0_0_5px_#e8b84b]">✦</span>
              <p className="font-heading text-sm font-bold text-dark-text leading-snug">
                CS Student
              </p>
              <p className="font-body text-[11px] font-semibold text-[#b8ada0]">
                Problem Solver & Creative Thinker
              </p>
            </div>

            {/* IDE/Code Editor Mockup Frame */}
            <div className="w-full max-w-[360px] h-[340px] bg-[#200f08]/65 backdrop-blur-xl border border-[#6b4f22]/35 rounded-[2rem] shadow-xl relative overflow-hidden flex flex-col">
              
              {/* Window Header */}
              <div className="bg-[#200f08]/85 border-b border-[#6b4f22]/25 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-brand-pink shadow-[0_0_4px_#e8b84b]" />
                  <div className="w-3 h-3 rounded-full bg-brand-mint shadow-[0_0_4px_#e8b84b]" />
                  <div className="w-3 h-3 rounded-full bg-brand-lavender shadow-[0_0_4px_#f4ede0]" />
                </div>
                <span className="font-body text-[11px] font-bold text-[#b8ada0] tracking-wider uppercase">
                  shweta.tsx
                </span>
                <div className="w-4" /> {/* spacer */}
              </div>

              {/* Sidebar and Editor workspace structure */}
              <div className="flex-1 flex bg-[#0d0704]/40">
                
                {/* Visual File Tree sidebar */}
                <div className="w-24 border-r border-[#6b4f22]/20 bg-[#0d0704]/50 p-3 flex flex-col gap-2.5 text-[10px] font-body font-bold text-[#b8ada0]">
                  <div className="flex items-center gap-1 text-brand-pink">
                    <Terminal size={10} />
                    <span>src/</span>
                  </div>
                  <div className="pl-3 flex items-center gap-1 text-dark-text">
                    <FileCode size={10} className="text-brand-lavender" />
                    <span>App.tsx</span>
                  </div>
                  <div className="pl-3 flex items-center gap-1">
                    <FileCode size={10} />
                    <span>data.ts</span>
                  </div>
                  <div className="pl-3 flex items-center gap-1">
                    <Layers size={10} />
                    <span>styles/</span>
                  </div>
                </div>

                {/* Main Code Editor Panel */}
                <div className="flex-1 p-4 font-mono text-[10px] text-[#b8ada0] leading-relaxed flex flex-col gap-2.5 select-none">
                  <div>
                    <span className="text-brand-pink">const</span>{" "}
                    <span className="text-dark-text font-bold">developer</span> = &#123;
                  </div>
                  <div className="pl-3">
                    name: <span className="text-brand-pink">"Shweta Shetty"</span>,
                  </div>
                  <div className="pl-3">
                    type: <span className="text-brand-pink">"CS Student"</span>,
                  </div>
                  <div className="pl-3">
                    focus: <span className="text-brand-pink">"Full-Stack Web"</span>,
                  </div>
                  <div className="pl-3">
                    loves: [<span className="text-brand-pink">"Coffee ☕"</span>, <span className="text-brand-pink">"Code 💻"</span>],
                  </div>
                  <div className="pl-3">
                    readyToBuild: <span className="text-brand-pink">true</span>
                  </div>
                  <div>&#125;;</div>

                  {/* Visual sticker/badge shape in editor */}
                  <div className="mt-auto border border-dashed border-[#6b4f22]/25 bg-[#200f08]/40 rounded-xl p-2.5 flex items-center gap-2">
                    <Sparkles size={14} className="text-brand-pink animate-pulse" />
                    <span className="font-body text-[9px] font-bold text-dark-text uppercase tracking-wide">
                      Aesthetic Code Only!
                    </span>
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* Right Column: Bio text */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <h3 className="text-2xl md:text-3xl font-bold font-heading text-dark-text leading-snug mb-6 flex items-center gap-2">
              {title}
              <Sparkles size={24} className="text-brand-pink shrink-0 drop-shadow-[0_0_8px_#e8b84b]" />
            </h3>

            {paragraphs.map((para, idx) => (
              <p key={idx} className="text-base text-[#b8ada0] font-body leading-relaxed mb-4">
                {para}
              </p>
            ))}

            {/* Badges row */}
            <div className="flex flex-wrap gap-2.5 mt-4">
              {badges.map((badge, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-[#200f08]/45 hover:bg-[#200f08]/85 text-dark-text border border-[#6b4f22]/35 hover:border-brand-pink hover:scale-105 hover:shadow-[0_0_10px_rgba(232,184,75,0.15)] transition-all duration-200 text-xs font-semibold font-body rounded-full"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* Stat highlight cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 w-full">
              <div className="bg-[#200f08]/65 backdrop-blur-xl border border-[#6b4f22]/40 rounded-2xl p-4 flex flex-col gap-1 shadow-md hover:border-brand-pink/50 transition-colors duration-300">
                <span className="text-brand-pink font-extrabold font-body text-[10px] tracking-wider uppercase">Focus</span>
                <span className="text-[#f4ede0] font-heading font-semibold text-sm">Full-Stack Development</span>
              </div>
              <div className="bg-[#200f08]/65 backdrop-blur-xl border border-[#6b4f22]/40 rounded-2xl p-4 flex flex-col gap-1 shadow-md hover:border-brand-pink/50 transition-colors duration-300">
                <span className="text-brand-pink font-extrabold font-body text-[10px] tracking-wider uppercase">Education</span>
                <span className="text-[#f4ede0] font-heading font-semibold text-sm">B.Tech CS, 2024–Present</span>
              </div>
              <div className="bg-[#200f08]/65 backdrop-blur-xl border border-[#6b4f22]/40 rounded-2xl p-4 flex flex-col gap-1 shadow-md hover:border-brand-pink/50 transition-colors duration-300">
                <span className="text-brand-pink font-extrabold font-body text-[10px] tracking-wider uppercase">Backend Stack</span>
                <span className="text-[#f4ede0] font-heading font-semibold text-sm">Node.js & MySQL/MongoDB</span>
              </div>
              <div className="bg-[#200f08]/65 backdrop-blur-xl border border-[#6b4f22]/40 rounded-2xl p-4 flex flex-col gap-1 shadow-md hover:border-brand-pink/50 transition-colors duration-300">
                <span className="text-brand-pink font-extrabold font-body text-[10px] tracking-wider uppercase">Frontend Stack</span>
                <span className="text-[#f4ede0] font-heading font-semibold text-sm">React & Modern JavaScript</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
