import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";
import { useParallax } from "@/hooks/use-parallax";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaDribbble
} from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi";

export function HeroSection() {
  const { ref } = useParallax<HTMLDivElement>();
  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background with parallax effect */}
      <div 
        ref={ref}
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-primary/50 to-primary" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-text-primary block"
              >
                Hi, I'm
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-accent block mt-2"
              >
                John Doe
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-text-primary block mt-2"
              >
                Software Developer
              </motion.span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-xl text-text-secondary max-w-md"
            >
              I build exceptional digital experiences with a focus on performance, accessibility, and cutting-edge technology.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button 
                onClick={() => scrollToSection("projects")}
                className="button-glow inline-flex items-center justify-center px-8 py-6 h-auto rounded-lg bg-accent text-white font-medium transition-all hover:bg-accent/90 overflow-hidden relative"
              >
                <span className="relative z-10 flex items-center">
                  View My Work
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="absolute inset-0 overflow-hidden rounded-lg before:absolute before:inset-0 before:-translate-x-full hover:before:animate-[button-glow_1s_forwards] before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent"></span>
              </Button>
              
              <Button 
                onClick={() => scrollToSection("contact")}
                variant="outline" 
                className="inline-flex items-center justify-center px-8 py-6 h-auto rounded-lg border border-accent text-accent font-medium transition-all hover:bg-accent/10"
              >
                Contact Me
              </Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex items-center space-x-4 pt-6"
            >
              <motion.a 
                href="https://github.com"
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: "#6D28D9" }}
                className="text-text-secondary hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="h-6 w-6" />
              </motion.a>
              <motion.a 
                href="https://linkedin.com"
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: "#6D28D9" }}
                className="text-text-secondary hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="h-6 w-6" />
              </motion.a>
              <motion.a 
                href="https://twitter.com"
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: "#6D28D9" }}
                className="text-text-secondary hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="h-6 w-6" />
              </motion.a>
              <motion.a 
                href="https://dribbble.com"
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: "#6D28D9" }}
                className="text-text-secondary hover:text-accent transition-colors"
                aria-label="Dribbble"
              >
                <FaDribbble className="h-6 w-6" />
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mx-auto max-w-md lg:max-w-full"
          >
            <motion.img 
              src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600" 
              alt="Developer workspace with dual monitors and clean setup" 
              className="rounded-xl shadow-2xl"
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ 
                repeat: Infinity, 
                duration: 4,
                ease: "easeInOut"
              }}
            />
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="absolute -bottom-6 -right-6 bg-secondary rounded-lg p-4 shadow-xl"
            >
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-success animate-pulse"></div>
                <span className="text-sm font-medium">Available for hire</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-10 left-0 right-0 flex justify-center"
      >
        <motion.a 
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("about");
          }}
          animate={{ y: [0, 10, 0] }}
          transition={{ 
            repeat: Infinity, 
            duration: 1.5,
            ease: "easeInOut"
          }}
          className="text-text-secondary hover:text-accent"
        >
          <HiChevronDown className="h-8 w-8" />
        </motion.a>
      </motion.div>
    </section>
  );
}

export default HeroSection;
