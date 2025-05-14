import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useParallax } from "@/hooks/use-parallax";
import { HiCheck, HiDownload } from "react-icons/hi";

export function AboutSection() {
  const { ref } = useParallax<HTMLDivElement>();
  
  const handleDownloadResume = () => {
    // In a real scenario, this would be a link to a hosted PDF file
    alert("In a production environment, this would download the resume PDF.");
  };

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-text-secondary text-lg">Get to know me and my professional journey</p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img 
                ref={ref}
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700" 
                alt="Developer coding on a laptop with code visible on screen" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-60"></div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">Hi, I'm John Doe</h3>
            
            <p className="text-text-secondary leading-relaxed">
              I'm a passionate software developer with over 5 years of experience building web applications and digital solutions. My journey in tech began at an early age when I started tinkering with computers and writing simple programs.
            </p>
            
            <p className="text-text-secondary leading-relaxed">
              I specialize in front-end development with React and have expertise in building performant, accessible, and beautiful user interfaces. I'm also proficient in backend technologies including Node.js and Python.
            </p>
            
            <p className="text-text-secondary leading-relaxed">
              When I'm not coding, you can find me hiking, reading tech blogs, or contributing to open-source projects. I'm constantly learning and exploring new technologies to stay at the cutting edge of web development.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              {[
                "Front-end Development",
                "Back-end Development",
                "Mobile Development",
                "UI/UX Design"
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
                  className="flex items-center space-x-2"
                >
                  <HiCheck className="h-5 w-5 text-accent" />
                  <span>{skill}</span>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="pt-4"
            >
              <Button 
                onClick={handleDownloadResume}
                className="inline-flex items-center justify-center px-6 py-3 h-auto rounded-lg bg-accent text-white font-medium transition-all hover:bg-accent/90"
              >
                Download Resume 
                <HiDownload className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
