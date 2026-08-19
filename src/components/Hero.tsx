import { useRef, useEffect } from "react";
import { Mail, ArrowRight } from "lucide-react";
import { portfolioData } from "../data/portfolio";

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export default function Hero() {
  const { name, title, bio, socials } = portfolioData.personalInfo;
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  // Detect user preferences for reduced motion
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.targetX = (e.clientX / window.innerWidth) - 0.5;
      mouse.current.targetY = (e.clientY / window.innerHeight) - 0.5;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Resize canvas precisely to hero parent offset bounding box dimensions
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
      }
    };
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // 120 star objects (radius 0.3 - 1.5px)
    const stars: {
      x: number;
      y: number;
      size: number;
      opacity: number;
      vx: number;
      vy: number;
      twinkleSpeed: number;
      phase: number;
    }[] = [];

    for (let i = 0; i < 120; i++) {
      stars.push({
        x: Math.random() * (canvas.width || window.innerWidth),
        y: Math.random() * (canvas.height || window.innerHeight),
        size: Math.random() * 1.2 + 0.3,
        opacity: Math.random() * 0.5 + 0.3,
        vx: Math.random() * 0.03 + 0.02, // slow x drift
        vy: Math.random() * 0.02 + 0.015, // slow y drift
        twinkleSpeed: Math.random() * 1.5 + 0.5,
        phase: Math.random() * Math.PI * 2,
      });
    }

    let animationFrameId: number;
    let shootingStar: {
      x: number;
      y: number;
      dx: number;
      dy: number;
      length: number;
      life: number;
      decay: number;
    } | null = null;

    let nextStarTime = Date.now() + Math.random() * 4000 + 8000; // randomized 8-12 seconds

    const render = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth mouse coordinates for parallax
      mouse.current.x += (mouse.current.targetX - mouse.current.x) * 0.05;
      mouse.current.y += (mouse.current.targetY - mouse.current.y) * 0.05;

      const pOffsetX = -mouse.current.x * 4; // opposite cursor shift 4px max
      const pOffsetY = -mouse.current.y * 4;

      // Render Distant Orbit Curves (integrated into universe background)
      if (!prefersReducedMotion) {
        ctx.strokeStyle = "rgba(232, 184, 75, 0.02)";
        ctx.lineWidth = 0.8;
        
        // Orbit 1: Centered on screen, rotated slowly
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height * 0.45);
        ctx.rotate(time * 0.000012);
        ctx.beginPath();
        ctx.ellipse(0, 0, Math.min(canvas.width * 0.35, 550), Math.min(canvas.width * 0.16, 260), 0, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();

        // Orbit 2: Concentric, slightly offset, opposite rotation
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height * 0.45);
        ctx.rotate(-time * 0.000006);
        ctx.beginPath();
        ctx.ellipse(0, 0, Math.min(canvas.width * 0.42, 650), Math.min(canvas.width * 0.20, 320), 0, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }

      // Render stars
      stars.forEach((s) => {
        // Slow diagonal drift
        s.x += s.vx;
        s.y += s.vy;

        // Wrap around borders when they exit the canvas
        if (s.x > canvas.width) s.x = 0;
        if (s.y > canvas.height) s.y = 0;

        // Twinkle: oscillate opacity mapped to 0.1 - 0.9 range
        const twinkle = Math.sin(time * 0.001 * s.twinkleSpeed + s.phase);
        const opacity = 0.1 + ((twinkle + 1) / 2) * 0.8; // mapped directly to [0.1, 0.9]

        // Apply mouse parallax opposite to cursor position
        const drawX = s.x + pOffsetX;
        const drawY = s.y + pOffsetY;

        ctx.fillStyle = `rgba(232, 184, 75, ${opacity})`;
        ctx.beginPath();
        ctx.arc(drawX, drawY, s.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Update & Render shooting star (spans ~150px diagonally over 1s then removes itself)
      if (Date.now() > nextStarTime && !shootingStar) {
        shootingStar = {
          x: Math.random() * canvas.width * 0.7,
          y: Math.random() * canvas.height * 0.4,
          dx: 4.5, // 4.5px per frame yields ~150px diagonal in 1s (60 frames)
          dy: 3.5,
          length: 50,
          life: 1.0,
          decay: 0.018, // Fades out in approx 1s
        };
        nextStarTime = Date.now() + Math.random() * 4000 + 8000;
      }

      if (shootingStar) {
        ctx.strokeStyle = `rgba(244, 237, 224, ${shootingStar.life * 0.9})`; // cream bright line
        ctx.lineWidth = 1.0;
        ctx.beginPath();
        ctx.moveTo(shootingStar.x + pOffsetX, shootingStar.y + pOffsetY);
        ctx.lineTo(
          (shootingStar.x - (shootingStar.dx / 3) * shootingStar.length) + pOffsetX,
          (shootingStar.y - (shootingStar.dy / 3) * shootingStar.length) + pOffsetY
        );
        ctx.stroke();

        shootingStar.x += shootingStar.dx;
        shootingStar.y += shootingStar.dy;
        shootingStar.life -= shootingStar.decay;

        if (shootingStar.life <= 0) {
          shootingStar = null;
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [prefersReducedMotion]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-[#0d0704] z-0 px-6"
    >
      {/* 2 large radial-gradient nebula blobs behind canvas */}
      <div 
        className="absolute top-[20%] left-[15%] w-72 h-72 md:w-96 md:h-96 rounded-full bg-[#3a1a10] opacity-8 animate-drift-nebula-1 blur-[80px] pointer-events-none -z-10" 
        style={{ contentVisibility: "auto" }}
      />
      <div 
        className="absolute bottom-[25%] right-[10%] w-[380px] h-[380px] md:w-[480px] md:h-[480px] rounded-full bg-[#e8b84b] opacity-8 animate-drift-nebula-2 blur-[90px] pointer-events-none -z-10" 
        style={{ contentVisibility: "auto" }}
      />

      {/* Absolutely positioned canvas for edge-to-edge rendering */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0 display-block"
      />

      {/* Main content wrapper - flexbox layout gap-6 maps to intentional spacing */}
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center justify-center text-center relative z-10 gap-6">
        
        {/* Soft diffuse ambient background illumination */}
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-gradient-to-r from-[#e8b84b]/4 via-[#6b4f22]/2 to-transparent filter blur-3xl pointer-events-none -z-10" />

        {/* Elegant Playfair Display greeting tag */}
        <span className="font-playfair italic font-medium text-[16px] tracking-[0.5px] text-[#d8b46a] select-none block">
          Hi, I'm
        </span>

        {/* Centered Single-Line Playfair Display Name Heading */}
        <h1 className="font-playfair font-semibold text-[clamp(42px,6vw,64px)] tracking-[0.5px] leading-none m-0 p-0 select-none flex flex-row flex-wrap items-center justify-center gap-x-2 md:gap-x-3">
          <span className="text-[#f4ede0] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            {name.split(" ")[0]}
          </span>
          <span className="text-[#e8b84b] drop-shadow-[0_0_20px_rgba(232,184,75,0.25)]">
            {name.split(" ")[1]}
          </span>
        </h1>

        {/* Subtitle Badge Pill */}
        <div className="inline-flex items-center justify-center gap-2 bg-[#200f08]/45 border border-[#6b4f22]/60 px-6 py-2.5 rounded-full shadow-[0_0_12px_rgba(232,184,75,0.12)] select-none mt-2">
          <span className="text-[#e8b84b] font-bold text-sm font-body inline-flex items-center justify-center leading-none">&lt;/&gt;</span>
          <span className="text-[#f4ede0] text-sm font-body inline-flex items-center justify-center leading-none">{title}</span>
        </div>

        {/* Description body */}
        <p className="text-sm md:text-base text-[#b8ada0] font-body leading-relaxed max-w-xl text-center">
          {bio}
        </p>

        {/* Premium Gold Action Button & Resume Button */}
        <div className="relative flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => scrollToSection("projects")}
            className="group px-8 py-3.5 bg-[#e8b84b] text-[#0d0704] font-bold font-body rounded-full hover:bg-[#e8b84b]/95 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(232,184,75,0.35)] hover:shadow-[0_0_25px_rgba(232,184,75,0.5)] border-2 border-[#e8b84b] focus:outline-none cursor-pointer"
          >
            View My Work
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          
          <a
            href="/ShwetaShetty-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 border-2 border-[#e8b84b] text-[#e8b84b] hover:bg-[#e8b84b] hover:text-[#0d0704] font-bold font-body rounded-full transition-all duration-200 shadow-[0_0_12px_rgba(232,184,75,0.15)] hover:shadow-[0_0_20px_rgba(232,184,75,0.4)] focus:outline-none text-center inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            View Resume
          </a>
        </div>

        {/* Circular Gold-bordered social icons */}
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://github.com/shwetashetty25"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-[#6b4f22]/35 flex items-center justify-center text-[#b8ada0] hover:text-[#e8b84b] hover:border-[#e8b84b] hover:scale-110 hover:-translate-y-0.5 hover:shadow-[0_0_12px_rgba(232,184,75,0.25)] transition-all duration-200 bg-[#200f08]/20 backdrop-blur-sm"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/shweta-shetty-340196332/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-[#6b4f22]/35 flex items-center justify-center text-[#b8ada0] hover:text-[#e8b84b] hover:border-[#e8b84b] hover:scale-110 hover:-translate-y-0.5 hover:shadow-[0_0_12px_rgba(232,184,75,0.25)] transition-all duration-200 bg-[#200f08]/20 backdrop-blur-sm"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="w-10 h-10 rounded-full border border-[#6b4f22]/35 flex items-center justify-center text-[#b8ada0] hover:text-[#e8b84b] hover:border-[#e8b84b] hover:scale-110 hover:-translate-y-0.5 hover:shadow-[0_0_12px_rgba(232,184,75,0.25)] transition-all duration-200 bg-[#200f08]/20 backdrop-blur-sm"
            aria-label="Twitter Profile"
          >
            <TwitterIcon size={18} />
          </a>
          <a
            href={socials.email || "#"}
            onClick={socials.email ? undefined : (e) => e.preventDefault()}
            className="w-10 h-10 rounded-full border border-[#6b4f22]/35 flex items-center justify-center text-[#b8ada0] hover:text-[#e8b84b] hover:border-[#e8b84b] hover:scale-110 hover:-translate-y-0.5 hover:shadow-[0_0_12px_rgba(232,184,75,0.25)] transition-all duration-200 bg-[#200f08]/20 backdrop-blur-sm"
            aria-label="Email Contact"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>

      {/* Tiny minimal scroll indicator absolutely anchored to the bottom center */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#b8ada0] hover:text-[#e8b84b] transition-colors focus:outline-none z-10 cursor-pointer"
      >
        {/* Mouse Capsule */}
        <div className="w-5 h-8 rounded-full border border-[#6b4f22]/40 flex justify-center p-1 relative bg-[#200f08]/10">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e8b84b] shadow-[0_0_8px_#e8b84b] absolute top-1.5 left-1/2 -translate-x-1/2 animate-bounce" />
        </div>
        <span className="font-body text-[9px] font-extrabold tracking-widest uppercase">
          Scroll
        </span>
        {/* Vertical line going down */}
        <div className="w-[1px] h-10 bg-gradient-to-b from-[#6b4f22]/40 to-transparent mt-1" />
      </button>
    </section>
  );
}
