import { useEffect, useState } from "react";

interface PageTransitionOptions {
  duration?: number;
  easing?: string;
  threshold?: number;
}

export function usePageTransition(options: PageTransitionOptions = {}) {
  const {
    duration = 800,
    easing = 'cubic-bezier(0.76, 0, 0.24, 1)',
    threshold = 100
  } = options;
  
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentSection, setCurrentSection] = useState<string | null>(null);
  
  useEffect(() => {
    // Get all sections
    const sections = document.querySelectorAll('section[id]');
    let lastScrollY = window.scrollY;
    let ticking = false;
    let transitioningTo: string | null = null;
    
    // Create the overlay element for transitions
    const overlay = document.createElement('div');
    overlay.className = 'fixed inset-0 bg-background z-50 pointer-events-none opacity-0 transition-opacity';
    overlay.style.transitionDuration = `${duration}ms`;
    overlay.style.transitionTimingFunction = easing;
    document.body.appendChild(overlay);
    
    // Function to handle scroll
    const handleScroll = () => {
      lastScrollY = window.scrollY;
      
      if (!ticking) {
        window.requestAnimationFrame(() => {
          checkVisibleSection();
          ticking = false;
        });
        
        ticking = true;
      }
    };
    
    // Check which section is currently visible
    const checkVisibleSection = () => {
      const scrollY = lastScrollY;
      
      let foundVisible = false;
      sections.forEach((section) => {
        const sectionId = section.id;
        const rect = section.getBoundingClientRect();
        
        // Determine if the section is visible
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          foundVisible = true;
          
          // Only update if it's a new section
          if (currentSection !== sectionId) {
            if (!isTransitioning) {
              const deltaY = Math.abs(rect.top - (window.innerHeight / 2));
              
              // Only trigger transition if scrolled past threshold
              if (deltaY > threshold) {
                transitioningTo = sectionId;
                transitionToSection(sectionId);
              } else {
                setCurrentSection(sectionId);
              }
            }
          }
        }
      });
      
      // If no section is visible (like at the very top or bottom)
      if (!foundVisible && !isTransitioning) {
        setCurrentSection(null);
      }
    };
    
    // Function to handle the transition
    const transitionToSection = (sectionId: string) => {
      // Don't transition if already transitioning
      if (isTransitioning) return;
      
      // Start transition
      setIsTransitioning(true);
      
      // Show overlay
      overlay.style.opacity = '1';
      
      // After half the duration, update current section
      setTimeout(() => {
        setCurrentSection(sectionId);
        
        // After full duration, hide overlay and complete transition
        setTimeout(() => {
          overlay.style.opacity = '0';
          setIsTransitioning(false);
          transitioningTo = null;
        }, duration / 2);
      }, duration / 2);
    };
    
    // Add event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    checkVisibleSection();
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.removeChild(overlay);
    };
  }, [duration, easing, threshold, isTransitioning, currentSection]);
  
  return {
    currentSection,
    isTransitioning
  };
}

export default usePageTransition;