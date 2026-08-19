import { ExternalLink, BookOpen, Star } from "lucide-react";
import type { Project } from "../data/portfolio";

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
}

export default function ProjectCard({ project, onOpenCaseStudy }: ProjectCardProps) {
  const { name, category, description, tech, highlights, githubUrl, liveUrl, caseStudy } = project;

  // Render a custom CSS-painted/SVG mockup preview for each project (NO LAPTOPS!)
  const renderProjectPreview = (id: string) => {
    switch (id) {
      case "eduplatform":
        return (
          <div className="w-full h-full bg-[#FFF4F8] flex flex-col justify-between p-4 relative font-body">
            {/* Header toolbar */}
            <div className="flex justify-between items-center border-b border-[#FFDCE9] pb-2">
              <span className="text-[10px] font-bold text-[#111111]">EduDashboard</span>
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F43F7A]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFDCE9]" />
              </div>
            </div>
            {/* Mock stats content */}
            <div className="flex-1 flex flex-col gap-2.5 justify-center">
              <div className="flex justify-between items-center">
                <span className="text-[9px] text-[#6B6B6B]">Course Progress</span>
                <span className="text-[9px] font-bold text-[#F43F7A]">78%</span>
              </div>
              <div className="w-full h-2 bg-[#FFDCE9] rounded-full overflow-hidden">
                <div className="w-[78%] h-full bg-[#F43F7A]" />
              </div>
              <div className="grid grid-cols-2 gap-2 mt-1">
                <div className="bg-white border border-[#FFDCE9] p-1.5 rounded-lg text-center">
                  <p className="text-[7px] text-[#6B6B6B]">Quiz Score</p>
                  <p className="text-[10px] font-bold text-[#111111]">92%</p>
                </div>
                <div className="bg-white border border-[#FFDCE9] p-1.5 rounded-lg text-center">
                  <p className="text-[7px] text-[#6B6B6B]">Hours Study</p>
                  <p className="text-[10px] font-bold text-[#E91E63]">18h</p>
                </div>
              </div>
            </div>
            {/* Floating stars */}
            <div className="absolute top-8 right-2 text-[#E91E63] animate-pulse">★</div>
          </div>
        );

      case "logistics-cost-optimizer":
        return (
          <div className="w-full h-full bg-[#111111] flex flex-col justify-between p-4 relative text-white font-body">
            {/* Header */}
            <div className="flex justify-between items-center border-b border-[#FFFFFF]/10 pb-2">
              <span className="text-[10px] font-bold text-[#FFDCE9]">Router Optimizer</span>
              <span className="text-[9px] text-[#F43F7A] font-mono">OK - 290ms</span>
            </div>
            {/* Grid Nodes */}
            <div className="flex-1 relative flex items-center justify-center">
              {/* Connected lines */}
              <svg className="absolute inset-0 w-full h-full text-[#F43F7A]/40" stroke="currentColor" strokeWidth="1">
                <line x1="20%" y1="20%" x2="80%" y2="40%" />
                <line x1="80%" y1="40%" x2="50%" y2="80%" />
                <line x1="50%" y1="80%" x2="20%" y2="20%" />
              </svg>
              {/* Nodes */}
              <div className="absolute top-[20%] left-[20%] w-2 h-2 rounded-full bg-[#F43F7A] shadow-[0_0_8px_#F43F7A]" />
              <div className="absolute top-[40%] right-[20%] w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_8px_#FFFFFF]" />
              <div className="absolute bottom-[20%] left-[50%] w-2 h-2 rounded-full bg-[#FFDCE9]" />
            </div>
            <div className="text-[8px] text-[#6B6B6B] flex justify-between">
              <span>Nodes: 12</span>
              <span>Cost Red: -15%</span>
            </div>
          </div>
        );

      case "fleet-tracker":
        return (
          <div className="w-full h-full bg-white flex flex-col justify-between p-4 relative font-body">
            {/* Header */}
            <div className="flex justify-between items-center border-b border-[#FFDCE9] pb-2">
              <span className="text-[10px] font-bold text-[#111111]">Fleet Diagnostician</span>
              <span className="px-2 py-0.5 rounded-full bg-[#111111] text-white text-[7px]">Active</span>
            </div>
            {/* Diagnostic items */}
            <div className="flex-1 flex flex-col gap-2 justify-center">
              <div className="flex items-center justify-between bg-[#FFF4F8] p-1.5 rounded-lg border border-[#FFDCE9]">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F43F7A]" />
                  <span className="text-[8px] font-semibold text-[#111111]">Truck #12</span>
                </div>
                <span className="text-[7px] text-[#6B6B6B]">Oil Change in 12mi</span>
              </div>
              <div className="flex items-center justify-between bg-[#FFEAF1] p-1.5 rounded-lg border border-[#FFDCE9]">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E91E63]" />
                  <span className="text-[8px] font-semibold text-[#111111]">Van #04</span>
                </div>
                <span className="text-[7px] text-[#E91E63] font-bold">Overdue Service</span>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full h-full bg-[#FFF4F8] flex flex-col justify-center items-center p-4">
            <div className="p-3 bg-[#FFEAF1] rounded-full border border-[#FFDCE9] text-[#F43F7A]">
              <Star size={24} />
            </div>
            <span className="font-heading text-xs font-bold text-[#111111] mt-3">
              Full-Stack Application
            </span>
          </div>
        );
    }
  };

  const hasLinks = githubUrl || liveUrl || caseStudy;

  return (
    <div className="bg-[#2B0B12]/65 backdrop-blur-xl border border-[#D4AF37]/18 rounded-[2.5rem] p-5 shadow-lg hover:translate-y-[-4px] hover:shadow-[0_0_15px_rgba(212,175,55,0.15)] hover:border-brand-pink/45 transition-all duration-300 flex flex-col gap-4 relative overflow-hidden group">
      
      {/* Category Ribbon */}
      <div className={`absolute top-4 right-4 ${
        project.id === "eduplatform" ? "bg-brand-lavender/25 text-brand-lavender" : 
        project.id === "logistics-cost-optimizer" ? "bg-brand-mint/25 text-brand-mint" : 
        "bg-brand-pink/25 text-brand-pink"
      } border border-[#D4AF37]/10 px-3 py-1 rounded-full text-[10px] font-extrabold font-body uppercase z-10`}>
        {category}
      </div>

      {/* Visual Preview Container */}
      <div className="w-full h-40 rounded-2xl border border-[#D4AF37]/15 overflow-hidden relative shrink-0">
        {renderProjectPreview(project.id)}
      </div>

      {/* Card Content */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-heading text-xl font-extrabold text-dark-text mb-2 text-left group-hover:text-brand-pink transition-colors">
            {name}
          </h3>
          <p className="font-body text-xs text-[#6B6B6B] leading-relaxed mb-4 text-left">
            {description}
          </p>

          {/* Highlights Checklist */}
          {highlights && highlights.length > 0 && (
            <ul className="flex flex-col gap-1.5 mb-4 text-left font-body text-[11px] font-semibold text-dark-text">
              {highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-brand-pink">✦</span>
                  <span className="leading-tight text-[#B9AAA0]">{highlight}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {tech.map((t, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 bg-[#120809]/50 text-[#B9AAA0] border border-[#D4AF37]/15 text-[10px] font-extrabold font-body rounded-full"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Button Links Container */}
          {hasLinks && (
            <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 text-[11px] font-bold font-body border border-[#D4AF37]/25 rounded-xl flex items-center gap-1.5 bg-[#120809]/50 hover:bg-[#D4AF37] hover:text-[#120809] text-dark-text transition-all duration-200"
                >
                  <GithubIcon size={14} />
                  Code
                </a>
              )}
              
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 text-[11px] font-bold font-body bg-brand-pink text-main-bg border border-brand-pink rounded-xl flex items-center gap-1.5 hover:scale-105 shadow-[0_0_10px_rgba(212,175,55,0.25)] transition-all duration-200"
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>
              )}

              {caseStudy && (
                <button
                  onClick={() => onOpenCaseStudy(project)}
                  className="px-3.5 py-2 text-[11px] font-bold font-body bg-[#2B0B12]/80 text-brand-pink border border-[#D4AF37]/25 rounded-xl flex items-center gap-1.5 hover:bg-brand-pink hover:text-[#120809] transition-all ml-auto focus:outline-none"
                >
                  <BookOpen size={14} />
                  Case Study
                </button>
              )}
            </div>
          )}
        </div>
      </div>

    </div>
  );
}
