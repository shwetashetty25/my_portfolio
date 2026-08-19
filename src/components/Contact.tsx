import { useState } from "react";
import type { FormEvent } from "react";
import { Mail, Send } from "lucide-react";
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

export default function Contact() {
  const { socials } = portfolioData.personalInfo;
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = (e: FormEvent) => {
    e.preventDefault();
    if (socials.email) {
      window.location.href = `${socials.email}?subject=Hello from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;
    }
  };

  const hasContactInfo = socials.email || socials.linkedin || socials.github;

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Banner container inspired by reference image */}
        <div className="bg-[#2B0B12]/60 backdrop-blur-xl border border-[#D4AF37]/20 rounded-[3rem] p-8 md:p-12 relative overflow-hidden shadow-2xl">
          
          {/* Subtle Grid Background inside banner */}
          <div 
            className="absolute inset-0 opacity-[0.18] pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(to right, var(--color-brand-lavender) 1px, transparent 1px),
                linear-gradient(to bottom, var(--color-brand-lavender) 1px, transparent 1px)
              `,
              backgroundSize: "20px 20px",
            }}
          />

          {/* Handdrawn stickers absolute position */}
          <div className="absolute top-6 right-8 text-brand-pink text-2xl rotate-[15deg] hidden md:block">
            ✨
          </div>
          <div className="absolute bottom-6 left-6 text-brand-lavender text-lg rotate-[-10deg] hidden md:block">
            ☄️
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Content Column */}
            <div className="md:col-span-7 text-left font-body">
              <span className="text-xs font-extrabold uppercase text-brand-pink tracking-widest drop-shadow-[0_0_4px_rgba(212,175,55,0.3)]">
                Let's Build Something
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-dark-text mt-2 mb-4 leading-tight">
                Amazing Together!
              </h2>
              <p className="text-sm text-[#6B6B6B] leading-relaxed mb-6">
                I'm always open to new opportunities, student collaborations, or just a friendly chat about full-stack development and UI/UX design.
              </p>

              {/* Conditional rendering of social buttons */}
              {hasContactInfo ? (
                <div className="flex flex-col gap-3">
                  {socials.email && (
                    <a
                      href={socials.email}
                      className="flex items-center gap-3 text-dark-text hover:text-brand-pink font-bold text-sm transition-colors w-fit"
                    >
                      <div className="p-2 bg-[#120809]/50 border border-[#D4AF37]/20 text-[#B9AAA0] rounded-xl">
                        <Mail size={16} />
                      </div>
                      Email Shweta
                    </a>
                  )}
                  {socials.linkedin && (
                    <a
                      href={socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-dark-text hover:text-brand-pink font-bold text-sm transition-colors w-fit"
                    >
                      <div className="p-2 bg-[#120809]/50 border border-[#D4AF37]/20 text-[#B9AAA0] rounded-xl">
                        <LinkedinIcon size={16} />
                      </div>
                      LinkedIn Profile
                    </a>
                  )}
                  {socials.github && (
                    <a
                      href={socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-dark-text hover:text-brand-pink font-bold text-sm transition-colors w-fit"
                    >
                      <div className="p-2 bg-[#120809]/50 border border-[#D4AF37]/20 text-[#B9AAA0] rounded-xl">
                        <GithubIcon size={16} />
                      </div>
                      GitHub Profile
                    </a>
                  )}
                </div>
              ) : (
                <div className="bg-[#120809]/50 border border-[#D4AF37]/15 rounded-2xl p-4 mt-2">
                  <p className="text-xs font-semibold text-[#6B6B6B]">
                    Connect options are being finalized. Reach out shortly! 💌
                  </p>
                </div>
              )}
            </div>

            {/* Right Interactive Email Form Column (Only visible if email is set) */}
            <div className="md:col-span-5 w-full">
              {socials.email ? (
                <form
                  onSubmit={handleSend}
                  className="bg-[#2B0B12]/65 backdrop-blur-xl border border-[#D4AF37]/18 rounded-2.5xl p-5 shadow-lg flex flex-col gap-3"
                >
                  <div className="flex flex-col gap-1 text-left">
                    <label htmlFor="user-name" className="text-[10px] font-extrabold text-dark-text uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      id="user-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Shweta Shetty"
                      className="px-3.5 py-2 border border-[#D4AF37]/15 focus:border-brand-pink focus:shadow-[0_0_10px_rgba(212,175,55,0.2)] rounded-xl text-xs font-medium font-body bg-[#120809]/60 text-dark-text outline-none"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-1 text-left">
                    <label htmlFor="user-msg" className="text-[10px] font-extrabold text-dark-text uppercase tracking-wider">
                      Your Message
                    </label>
                    <textarea
                      id="user-msg"
                      rows={3}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Let's build a React app!"
                      className="px-3.5 py-2 border border-[#D4AF37]/15 focus:border-brand-pink focus:shadow-[0_0_10px_rgba(212,175,55,0.2)] rounded-xl text-xs font-medium font-body bg-[#120809]/60 resize-none text-dark-text outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 bg-brand-pink text-main-bg font-bold font-body rounded-xl hover:bg-brand-pink/90 hover:scale-[1.02] shadow-[0_0_10px_rgba(212,175,55,0.25)] transition-all duration-200 text-xs border border-brand-pink"
                  >
                    Get In Touch
                    <Send size={12} />
                  </button>
                </form>
              ) : (
                /* Cute Letter Doodle Illustration if no email is set */
                <div className="flex items-center justify-center p-6">
                  <div className="w-36 h-28 bg-[#2B0B12]/70 border border-[#D4AF37]/20 rounded-2xl relative shadow-md flex items-center justify-center rotate-[4deg]">
                    {/* Letter flap lines */}
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-transparent flex flex-col justify-between p-2">
                      <div className="flex justify-between items-start text-xs text-brand-pink">
                        <span>💌</span>
                        <span>*</span>
                      </div>
                      <div className="h-0.5 bg-[#D4AF37]/25 w-2/3 mx-auto rounded-full" />
                      <div className="h-0.5 bg-[#D4AF37]/25 w-1/2 mx-auto rounded-full" />
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
