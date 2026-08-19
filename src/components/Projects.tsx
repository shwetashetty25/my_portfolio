import { useState } from "react";
import { X, ExternalLink } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { portfolioData } from "../data/portfolio";
import type { Project } from "../data/portfolio";

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter projects by featured
  const featuredProjects = projects.filter((p) => p.featured);

  const handleOpenCaseStudy = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden"; // disable background scrolling
  };

  const handleCloseCaseStudy = () => {
    setSelectedProject(null);
    document.body.style.overflow = "unset"; // restore background scrolling
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-dark-text relative inline-block">
            Things I've Built 💗
            {/* Doodle line underneath */}
            <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-20 h-1 bg-brand-pink rounded-full" />
          </h2>
          <p className="font-body text-[#6B6B6B] mt-4 text-sm max-w-md">
            A hand-picked selection of full-stack systems and algorithmic solutions.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenCaseStudy={handleOpenCaseStudy}
            />
          ))}
        </div>

      </div>

      {/* Case Study Modal Dialog */}
      {selectedProject && selectedProject.caseStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md transition-opacity duration-300">
          
          {/* Modal Container */}
          <div 
            className="w-full max-w-3xl max-h-[85vh] bg-[#2B0B12]/95 backdrop-blur-xl border border-[#D4AF37]/20 rounded-[2rem] shadow-2xl overflow-y-auto relative flex flex-col p-6 md:p-8 animate-scale-up"
            role="dialog"
            aria-modal="true"
          >
            {/* Floating Close Button */}
            <button
              onClick={handleCloseCaseStudy}
              className="absolute top-4 right-4 p-2 bg-[#2B0B12] border border-[#D4AF37]/25 text-white hover:text-brand-pink hover:border-brand-pink transition-colors rounded-full focus:outline-none z-10"
              aria-label="Close case study details"
            >
              <X size={20} />
            </button>

            {/* Modal Content */}
            <div className="text-left font-body">
              
              {/* Top Banner */}
              <div className="border-b border-white/5 pb-4 mb-6 pr-8">
                <span className="px-3 py-1 bg-[#2B0B12]/80 text-brand-pink border border-[#D4AF37]/15 text-[10px] font-extrabold rounded-full uppercase">
                  {selectedProject.category}
                </span>
                <h3 className="font-heading text-3xl font-black text-dark-text mt-2">
                  {selectedProject.name}
                </h3>
              </div>

              {/* Case Study Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Left Meta Column */}
                <div className="md:col-span-1 flex flex-col gap-5 bg-[#2B0B12]/60 border border-[#D4AF37]/15 rounded-2xl p-4 h-fit">
                  <div>
                    <h4 className="text-xs font-bold text-brand-pink uppercase tracking-wide mb-1 drop-shadow-[0_0_4px_rgba(212,175,55,0.3)]">My Role</h4>
                    <p className="text-xs font-extrabold text-dark-text">{selectedProject.caseStudy.role}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-brand-pink uppercase tracking-wide mb-1.5 drop-shadow-[0_0_4px_rgba(212,175,55,0.3)]">Technologies</h4>
                    <div className="flex flex-wrap gap-1">
                      {selectedProject.tech.map((t, idx) => (
                        <span key={idx} className="px-2 py-0.5 bg-[#120809]/60 border border-[#D4AF37]/15 text-[9px] font-bold text-dark-text rounded-full">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Modal Links */}
                  {(selectedProject.githubUrl || selectedProject.liveUrl) && (
                    <div className="flex flex-col gap-2 pt-2 border-t border-white/5">
                      {selectedProject.githubUrl && (
                        <a
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-2 bg-[#120809]/50 text-dark-text border border-[#D4AF37]/25 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-[#D4AF37] hover:text-[#120809] transition-colors"
                        >
                          <GithubIcon size={12} />
                          GitHub Code
                        </a>
                      )}
                      {selectedProject.liveUrl && (
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-2 bg-brand-pink text-main-bg border border-brand-pink rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 hover:scale-105 shadow-[0_0_10px_rgba(212,175,55,0.25)] transition-colors"
                        >
                          <ExternalLink size={12} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  )}
                </div>

                {/* Right Context Content Column */}
                <div className="md:col-span-2 flex flex-col gap-6 text-sm text-[#6B6B6B] leading-relaxed">
                  <div>
                    <h4 className="font-heading text-lg font-bold text-[#111111] mb-1">Problem Statement</h4>
                    <p className="text-xs">{selectedProject.caseStudy.problem}</p>
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-bold text-[#111111] mb-1">Goal</h4>
                    <p className="text-xs">{selectedProject.caseStudy.goal}</p>
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-bold text-[#111111] mb-1">Process</h4>
                    <p className="text-xs">{selectedProject.caseStudy.process}</p>
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-bold text-[#111111] mb-1">Challenges Faced</h4>
                    <p className="text-xs font-semibold text-[#E91E63]">{selectedProject.caseStudy.challenges}</p>
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-bold text-[#111111] mb-1">The Solution</h4>
                    <p className="text-xs">{selectedProject.caseStudy.solution}</p>
                  </div>
                  <div className="bg-[#FFDCE9]/20 border border-[#FFDCE9] p-4 rounded-2xl">
                    <h4 className="font-heading text-lg font-bold text-[#111111] mb-1">Final Outcome</h4>
                    <p className="text-xs text-[#111111] font-medium">{selectedProject.caseStudy.outcome}</p>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      )}
    </section>
  );
}
