import React from "react";
import { motion } from "framer-motion";
import { SkillCard, SkillPill } from "@/components/ui/skill-card";
import { useParallax } from "@/hooks/use-parallax";
import {
  SiNodedotjs,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiGit,
  SiNextdotjs
} from "react-icons/si";

const skills = [
  { 
    title: "Node.js", 
    icon: <SiNodedotjs className="h-12 w-12" />, 
    category: "Backend Development" 
  },
  { 
    title: "React", 
    icon: <SiReact className="h-12 w-12" />, 
    category: "Frontend Framework" 
  },
  { 
    title: "JavaScript", 
    icon: <SiJavascript className="h-12 w-12" />, 
    category: "Programming Language" 
  },
  { 
    title: "TypeScript", 
    icon: <SiTypescript className="h-12 w-12" />, 
    category: "Type Safety" 
  },
  { 
    title: "Redux", 
    icon: <SiRedux className="h-12 w-12" />, 
    category: "State Management" 
  },
  { 
    title: "Tailwind CSS", 
    icon: <SiTailwindcss className="h-12 w-12" />, 
    category: "Utility CSS" 
  },
  { 
    title: "Git", 
    icon: <SiGit className="h-12 w-12" />, 
    category: "Version Control" 
  },
  { 
    title: "Next.js", 
    icon: <SiNextdotjs className="h-12 w-12" />, 
    category: "React Framework" 
  }
];

const skillTags = [
  "HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", 
  "Node.js", "Express", "MongoDB", "PostgreSQL", "GraphQL", 
  "REST APIs", "Redux", "Jest", "Docker", "AWS", "Firebase", "Git", 
  "CI/CD", "Responsive Design"
];

export function SkillsSection() {
  const { ref } = useParallax<HTMLDivElement>();
  
  return (
    <section id="skills" className="py-24 relative">
      {/* Background with parallax effect */}
      <div 
        ref={ref}
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-text-secondary text-lg">Technologies and tools I work with</p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              title={skill.title}
              icon={skill.icon}
              category={skill.category}
              delay={0.1 * index}
            />
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex flex-wrap gap-3 justify-center"
        >
          {skillTags.map((skill, index) => (
            <SkillPill key={index} title={skill} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default SkillsSection;
