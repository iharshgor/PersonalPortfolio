import React from "react";
import { motion } from "framer-motion";

export interface ExperienceProps {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  delay?: number;
}

export function ExperienceCard({
  role,
  company,
  period,
  description,
  technologies,
  delay = 0
}: ExperienceProps) {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      className="mb-12 last:mb-0 relative pl-8"
    >
      {/* Timeline line */}
      <div className="absolute top-0 left-0 w-1 h-full bg-accent/30"></div>
      
      {/* Timeline dot */}
      <motion.div 
        className="absolute top-0 left-0 w-4 h-4 rounded-full bg-accent -translate-x-1.5"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: delay + 0.2 }}
      ></motion.div>
      
      <div className="bg-primary/50 rounded-xl p-6 border border-white/5 hover:border-accent/20 transition-all duration-300">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <h3 className="text-xl font-bold">{role}</h3>
          <div className="flex items-center mt-2 md:mt-0">
            <span className="text-accent">{period}</span>
          </div>
        </div>
        
        <h4 className="text-lg mb-4 text-accent">{company}</h4>
        
        <p className="text-text-secondary mb-4">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-accent/20 rounded-full text-accent text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default ExperienceCard;
