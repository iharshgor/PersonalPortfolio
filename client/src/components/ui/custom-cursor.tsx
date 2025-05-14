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
      className={`fixed pointer-events-none z-[9999] ${className}`}
      style={{
        left: position.x,
        top: position.y,
      }}
      animate={{
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        opacity: { duration: 0.2 }
      }}
    >
      {/* Outer ring - always visible */}
      <motion.div 
        className="absolute border border-accent/70 rounded-full"
        style={{ transform: 'translate(-50%, -50%)' }}
        animate={{
          width: isPointer ? 40 : 24,
          height: isPointer ? 40 : 24,
          opacity: 0.6,
          scale: isClicking ? 0.8 : 1
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 28
        }}
      />
      
      {/* Middle ring - decorative */}
      <motion.div 
        className="absolute border border-white/30 rounded-full backdrop-blur-sm"
        style={{ transform: 'translate(-50%, -50%)' }}
        animate={{
          width: isPointer ? 28 : 16,
          height: isPointer ? 28 : 16,
          opacity: isPointer ? 0.6 : 0.4,
          scale: isClicking ? 0.9 : 1
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25
        }}
      />
      
      {/* Inner dot */}
      <motion.div 
        className="absolute bg-accent rounded-full"
        style={{ transform: 'translate(-50%, -50%)' }}
        animate={{
          width: isPointer ? 8 : 6,
          height: isPointer ? 8 : 6,
          opacity: 0.9,
          scale: isClicking ? 0.6 : 1
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 20
        }}
      />
    </motion.div>
  );
}

export default CustomCursor;
