import { useRef, useEffect } from 'react';

export function useParallax<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const elementTop = element.getBoundingClientRect().top + scrollTop;
      const elementHeight = element.offsetHeight;
      const windowHeight = window.innerHeight;
      
      // Calculate how far the element is from the viewport center
      const distanceFromCenter = (elementTop + elementHeight / 2) - (scrollTop + windowHeight / 2);
      
      // Determine the parallax amount based on distance from center
      // The closer to center, the more pronounced the effect
      const parallaxAmount = distanceFromCenter * 0.1;
      
      // Apply the parallax transform
      element.style.transform = `translateY(${parallaxAmount}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    // Run once to set initial position
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return { ref };
}

export default useParallax;
