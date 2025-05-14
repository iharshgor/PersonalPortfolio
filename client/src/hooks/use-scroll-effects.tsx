import { useEffect } from 'react';

export function useScrollEffects() {
  useEffect(() => {
    // Scroll reveal animation function
    const animateOnScroll = () => {
      const scrollElements = document.querySelectorAll('.scroll-animate');
      
      scrollElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementHeight = element.getBoundingClientRect().height;
        const windowHeight = window.innerHeight;
        
        // When element is visible
        if (elementTop < windowHeight - elementHeight / 4) {
          element.classList.add('animate-visible');
        } else {
          // Optional: Remove the class when scrolling back up
          // element.classList.remove('animate-visible');
        }
      });
    };
    
    // Mouse position tracker for parallax effects
    const handleMouseMove = (e: MouseEvent) => {
      const parallaxElements = document.querySelectorAll('.mouse-parallax');
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      parallaxElements.forEach((element) => {
        const speed = element.getAttribute('data-speed') || '0.05';
        const x = (window.innerWidth - mouseX * parseFloat(speed)) / 100;
        const y = (window.innerHeight - mouseY * parseFloat(speed)) / 100;
        
        (element as HTMLElement).style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };
    
    // Run animation on scroll
    window.addEventListener('scroll', animateOnScroll);
    // Run animation on mouse move for parallax
    window.addEventListener('mousemove', handleMouseMove);
    // Initial check
    animateOnScroll();
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return null;
}

export default useScrollEffects;