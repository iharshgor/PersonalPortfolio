import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className="glass-card p-0 overflow-hidden mb-8 last:mb-0 group hover:scale-[1.02] transition-all duration-300"
    >
      <div className="relative">
        {/* Top colorful accent bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-accent to-accent/50"></div>
        
        <div className="p-6 pb-3">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center">
                <h3 className="text-xl font-bold">{role}</h3>
                <div className="h-1.5 w-1.5 rounded-full bg-accent mx-3"></div>
                <h4 className="text-lg text-accent">{company}</h4>
              </div>
              <div className="mt-2 flex items-center">
                <span className="text-text-secondary text-sm px-3 py-1 bg-accent/10 rounded-full">
                  {period}
                </span>
              </div>
            </div>
            
            <div className="mt-4 md:mt-0 flex flex-wrap gap-2 scroll-slide-left scroll-animate">
              {technologies.slice(0, 3).map((tech, index) => (
                <Badge 
                  key={index} 
                  variant="secondary"
                  className="bg-primary/50 text-xs font-medium"
                >
                  {tech}
                </Badge>
              ))}
              {technologies.length > 3 && (
                <Badge 
                  variant="secondary"
                  className="bg-accent/20 text-accent text-xs"
                >
                  +{technologies.length - 3}
                </Badge>
              )}
            </div>
          </div>
        </div>
        
        {/* Expandable description */}
        <div className="p-6 pt-2">
          <div className="text-text-secondary text-sm mb-4 scroll-fade-in scroll-animate">
            {description}
          </div>
          
          <div className="flex flex-wrap gap-2 pt-3 stagger-children">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 rounded-full border border-white/5 text-white/70 bg-primary/70 scroll-animate scroll-fade-in"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* Bottom highlight on hover */}
        <div className="h-1 w-full bg-gradient-to-r from-accent/0 via-accent/50 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </motion.div>
  );
}

export default ExperienceCard;