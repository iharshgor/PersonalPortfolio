import React, { useEffect, useState } from "react";
import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import SkillsSection from "@/components/sections/skills";
import ProjectsSection from "@/components/sections/projects";
import ExperienceSection from "@/components/sections/experience-updated";
import ContactSection from "@/components/sections/contact-updated";
import CustomCursor from "@/components/ui/custom-cursor";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import usePageTransition from "@/hooks/use-page-transition";
import { motion, AnimatePresence } from "framer-motion";

export function HomePage() {
  // Use the page transition hook to handle full-page transitions
  const { currentSection, isTransitioning } = usePageTransition({
    duration: 600,
    threshold: 150
  });
  
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
    
    // Add page transition overlay CSS
    const transitionStyle = document.createElement("style");
    transitionStyle.textContent = `
      .page-transition-overlay {
        position: fixed;
        inset: 0;
        background-color: rgba(11, 10, 15, 0.95);
        z-index: 100;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.6s cubic-bezier(0.76, 0, 0.24, 1);
      }
      
      .page-transition-overlay.active {
        opacity: 1;
      }
    `;
    document.head.appendChild(transitionStyle);

    return () => {
      document.documentElement.style.scrollBehavior = "";
      document.body.classList.remove("custom-cursor-enabled");
      document.head.removeChild(styleSheet);
      document.head.removeChild(transitionStyle);
    };
  }, []);
  
  // Create a div to show what section we're transitioning to
  useEffect(() => {
    const overlay = document.createElement('div');
    overlay.className = 'page-transition-overlay';
    
    // Add section indicator
    const indicator = document.createElement('div');
    indicator.className = 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-accent/80 text-4xl font-bold opacity-0 transition-opacity duration-500';
    overlay.appendChild(indicator);
    
    document.body.appendChild(overlay);
    
    // Update overlay based on transition state
    if (isTransitioning) {
      overlay.classList.add('active');
      
      // Show section name when transitioning
      if (currentSection) {
        indicator.textContent = currentSection.charAt(0).toUpperCase() + currentSection.slice(1);
        setTimeout(() => {
          indicator.style.opacity = '1';
        }, 300);
      }
    } else {
      overlay.classList.remove('active');
      indicator.style.opacity = '0';
    }
    
    return () => {
      if (document.body.contains(overlay)) {
        document.body.removeChild(overlay);
      }
    };
  }, [isTransitioning, currentSection]);

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
