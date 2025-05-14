import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface ProjectProps {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  delay?: number;
}

export function ProjectCard({
  title,
  description,
  image,
  technologies,
  demoUrl,
  githubUrl,
  delay = 0
}: ProjectProps) {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className={cn(
        "bg-secondary/50 rounded-xl overflow-hidden border border-white/5 h-full flex flex-col",
        "hover:shadow-2xl hover:shadow-accent/20 hover:border-accent/10",
        "transition-all duration-500 project-card",
        "hover:translate-y-[-8px] hover:scale-[1.02]"
      )}
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-52 object-cover transition-all duration-500"
      />
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-text-secondary text-sm mb-4 flex-grow">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-accent/20 rounded-full text-accent text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          {demoUrl && (
            <Button
              variant="outline"
              size="sm"
              className="border-accent text-accent hover:bg-accent/10"
              asChild
            >
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                View Demo
              </a>
            </Button>
          )}
          
          {githubUrl && (
            <Button
              variant="secondary"
              size="sm"
              className="bg-accent/20 text-accent hover:bg-accent/30"
              asChild
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
