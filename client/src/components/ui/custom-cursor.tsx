import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

type CustomCursorProps = {
  className?: string;
};

export function CustomCursor({ className }: CustomCursorProps) {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show cursor on desktop devices
    if (window.matchMedia("(pointer: fine)").matches) {
      setIsVisible(true);

      const updatePosition = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };

      const updateCursorType = () => {
        const target = document.elementFromPoint(position.x, position.y);
        const isClickable = target?.closest('a, button, .tech-icon, .project-card, .skill-pill');
        setIsPointer(!!isClickable);
      };

      const handleMouseDown = () => setIsClicking(true);
      const handleMouseUp = () => setIsClicking(false);
      const handleMouseEnter = () => setIsVisible(true);
      const handleMouseLeave = () => setIsVisible(false);

      document.addEventListener('mousemove', updatePosition);
      document.addEventListener('mousemove', updateCursorType);
      document.addEventListener('mousedown', handleMouseDown);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('mouseenter', handleMouseEnter);
      document.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        document.removeEventListener('mousemove', updatePosition);
        document.removeEventListener('mousemove', updateCursorType);
        document.removeEventListener('mousedown', handleMouseDown);
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('mouseenter', handleMouseEnter);
        document.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [position.x, position.y]);

  if (!isVisible) return null;

  return (
    <motion.div
      className={`fixed pointer-events-none z-[9999] mix-blend-difference ${className}`}
      style={{
        left: position.x,
        top: position.y,
      }}
      animate={{
        scale: isPointer ? 1.5 : isClicking ? 0.8 : 1,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        scale: { type: "spring", stiffness: 500, damping: 30 },
        opacity: { duration: 0.2 }
      }}
    >
      <div className="relative flex items-center justify-center">
        <div 
          className={`absolute rounded-full bg-white
            ${isPointer ? "w-10 h-10 opacity-30" : "w-6 h-6 opacity-50"}`}
          style={{ 
            transform: 'translate(-50%, -50%)',
            backdropFilter: 'blur(2px)'  
          }}
        />
        <div 
          className="absolute rounded-full bg-white w-2 h-2 opacity-90"
          style={{ transform: 'translate(-50%, -50%)' }}
        />
      </div>
    </motion.div>
  );
}

export default CustomCursor;
