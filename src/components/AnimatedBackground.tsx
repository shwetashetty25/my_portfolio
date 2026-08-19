import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  vx: number;
  vy: number;
  twinkleSpeed: number;
  phase: number;
}

interface Nebula {
  ratioX: number;
  ratioY: number;
  baseRadius: number;
  color: string;
  phaseOffset: number;
  moveRange: number;
}

interface ShootingStar {
  x: number;
  y: number;
  dx: number;
  dy: number;
  length: number;
  life: number;
  decay: number;
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  // Detect user preferences for reduced motion
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    // Mouse movement listener (for parallax)
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize to -0.5 to 0.5
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

    let animationFrameId: number;

    // Handle Resize
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Generate Twinkling Starfield (100–150 small dots)
    const starCount = Math.floor(Math.random() * 51) + 100; // 100 to 150
    const stars: Star[] = [];
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 1.2 + 0.3, // radius 0.3px to 1.5px
        opacity: Math.random() * 0.5 + 0.3, // base opacity 0.3 to 0.8
        vx: Math.random() * 0.03 + 0.02, // slow diagonal drift vx
        vy: Math.random() * 0.02 + 0.015, // slow diagonal drift vy
        twinkleSpeed: Math.random() * 1.2 + 0.4, // unique sine twinkle freq
        phase: Math.random() * Math.PI * 2, // unique starting phase
      });
    }

    // Generate 3 large, low-opacity radial gradients (Nebula glow)
    const nebulae: Nebula[] = [
      {
        ratioX: 0.2,
        ratioY: 0.3,
        baseRadius: 400,
        color: "rgba(74, 16, 28, 0.07)", // deep maroon
        phaseOffset: 0,
        moveRange: 45,
      },
      {
        ratioX: 0.8,
        ratioY: 0.4,
        baseRadius: 550,
        color: "rgba(232, 184, 75, 0.04)", // gold
        phaseOffset: Math.PI / 3,
        moveRange: 60,
      },
      {
        ratioX: 0.5,
        ratioY: 0.85,
        baseRadius: 450,
        color: "rgba(110, 30, 46, 0.06)", // maroon/gold dust mix
        phaseOffset: Math.PI * (2 / 3),
        moveRange: 35,
      }
    ];

    let shootingStars: ShootingStar[] = [];
    let nextShootingStarTime = Math.random() * 4000 + 8000; // spawn in 8-12 seconds

    // 3. Render Loop
    const render = (time: number) => {

      // Clear Canvas with target background color #0d0704
      ctx.fillStyle = "#0d0704";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Smooth mouse coordinates for parallax
      if (!prefersReducedMotion) {
        mouse.current.x += (mouse.current.targetX - mouse.current.x) * 0.05;
        mouse.current.y += (mouse.current.targetY - mouse.current.y) * 0.05;
      }

      // Parallax shifts opposite to cursor position (max 4px)
      const pOffsetX = -mouse.current.x * 4;
      const pOffsetY = -mouse.current.y * 4;

      // Render Nebula glows with slow breathing loop (20-30s)
      nebulae.forEach((n) => {
        const breathingFactor = Math.sin(time * 0.0002 + n.phaseOffset);
        
        // Calculate animated radius and color opacity
        const radius = n.baseRadius * (0.95 + breathingFactor * 0.05); // +/-5% size breathing
        const driftX = Math.sin(time * 0.00008 + n.phaseOffset) * n.moveRange;
        const driftY = Math.cos(time * 0.00008 + n.phaseOffset) * (n.moveRange * 0.6);

        const drawX = n.ratioX * canvas.width + driftX + pOffsetX;
        const drawY = n.ratioY * canvas.height + driftY + pOffsetY;

        const grad = ctx.createRadialGradient(drawX, drawY, 0, drawX, drawY, radius);
        
        // Low opacity radial fill
        grad.addColorStop(0, n.color);
        grad.addColorStop(1, "rgba(13, 7, 4, 0)"); // clear to background #0d0704
        
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(drawX, drawY, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Render Twinkling Stars
      stars.forEach((s) => {
        // Slow diagonal drift motion
        s.x += s.vx;
        s.y += s.vy;

        // Wrap around canvas edges
        if (s.x > canvas.width) s.x = 0;
        if (s.y > canvas.height) s.y = 0;

        // Twinkle: slow independent sine wave
        let opacity = s.opacity;
        if (!prefersReducedMotion) {
          const twinkleVal = Math.sin(time * 0.001 * s.twinkleSpeed + s.phase);
          opacity = s.opacity * (0.35 + twinkleVal * 0.65); // independent oscillation
        }

        // Apply mouse parallax opposite to cursor
        const drawX = s.x + pOffsetX;
        const drawY = s.y + pOffsetY;

        // Draw star in target color rgba(232, 184, 75, opacity)
        ctx.fillStyle = `rgba(232, 184, 75, ${opacity})`;
        ctx.beginPath();
        ctx.arc(drawX, drawY, s.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Render Shooting Stars
      if (!prefersReducedMotion) {
        if (time > nextShootingStarTime) {
          // Spawn new diagonal shooting star
          shootingStars.push({
            x: Math.random() * canvas.width * 0.6,
            y: Math.random() * canvas.height * 0.4,
            dx: Math.random() * 8 + 8, // fast diagonal x speed
            dy: Math.random() * 5 + 5, // fast diagonal y speed
            length: Math.random() * 80 + 80,
            life: 1.0,
            decay: 0.022, // Fades out in approx 1s (45 frames)
          });
          // Schedule next shooting star in 8-12 seconds
          nextShootingStarTime = time + Math.random() * 4000 + 8000;
        }

        shootingStars.forEach((star) => {
          ctx.strokeStyle = `rgba(244, 237, 224, ${star.life * 0.8})`; // bright off-white streak
          ctx.lineWidth = 1.0;
          ctx.beginPath();
          ctx.moveTo(star.x, star.y);
          // Draw diagonal tail trail
          ctx.lineTo(star.x - (star.dx / 4) * star.length, star.y - (star.dy / 4) * star.length);
          ctx.stroke();

          // Move
          star.x += star.dx;
          star.y += star.dy;
          star.life -= star.decay;
        });

        // Filter out expired shooting stars
        shootingStars = shootingStars.filter((s) => s.life > 0 && s.x < canvas.width + 100 && s.y < canvas.height + 100);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [prefersReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none -z-20 bg-[#0d0704]"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
