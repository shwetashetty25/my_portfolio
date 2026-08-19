import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = [
      "home",
      "about",
      "skills",
      "projects",
      "tech-stack",
      "certifications",
      "achievements",
      "contact",
    ];

    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null, // viewport
      rootMargin: "-25% 0px -60% 0px", // triggers when section occupies the upper-middle of viewport
      threshold: 0,
    };

    const observer = new IntersectionObserver(handleObserver, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen text-dark-text selection:bg-brand-pink/20 selection:text-brand-pink relative">
      {/* 1. Animated background elements */}
      <AnimatedBackground />

      {/* 2. Sticky Navbar */}
      <Navbar activeSection={activeSection} />

      {/* 3. Main Sections Layout */}
      <main className="relative z-10 w-full">
        {/* Home / Hero Section */}
        <Hero />
        
        {/* Divider Doodle */}
        <div className="max-w-6xl mx-auto px-6 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent" />

        {/* About Section */}
        <About />

        {/* Tech Stack Section */}
        <TechStack />

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <Projects />

        {/* Certifications Section */}
        <Certifications />

        {/* Achievements Section */}
        <Achievements />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* 4. Footer */}
      <Footer />
    </div>
  );
}
