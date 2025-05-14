import React, { useEffect } from "react";
import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import SkillsSection from "@/components/sections/skills";
import ProjectsSection from "@/components/sections/projects";
import ExperienceSection from "@/components/sections/experience";
import ContactSection from "@/components/sections/contact";
import CustomCursor from "@/components/ui/custom-cursor";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export function HomePage() {
  // Add Apple-style smooth scrolling
  useEffect(() => {
    // Add CSS for smooth scrolling
    document.documentElement.style.scrollBehavior = "smooth";

    // Custom cursor styling - hide default cursor on desktop
    if (window.matchMedia("(pointer: fine)").matches) {
      document.body.classList.add("custom-cursor-enabled");
      
      const style = document.createElement("style");
      style.textContent = `
        .custom-cursor-enabled, 
        .custom-cursor-enabled * {
          cursor: none !important;
        }
      `;
      document.head.appendChild(style);
    }

    // Define keyframes for button glow animation
    const keyframes = `
      @keyframes button-glow {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
    `;
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = keyframes;
    document.head.appendChild(styleSheet);

    return () => {
      document.documentElement.style.scrollBehavior = "";
      document.body.classList.remove("custom-cursor-enabled");
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <>
      <CustomCursor />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
