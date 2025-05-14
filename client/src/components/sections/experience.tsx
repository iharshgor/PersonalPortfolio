import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExperienceCard, ExperienceProps } from "@/components/ui/experience-card";
import { HiDownload } from "react-icons/hi";

const experiences: ExperienceProps[] = [
  {
    id: 1,
    role: "Senior Frontend Developer",
    company: "TechFusion Inc.",
    period: "2020 - Present",
    description: "Led the frontend development team in building a modern web application that increased user engagement by 45%. Implemented performance optimizations that improved load times by 60%.",
    technologies: ["React", "Next.js", "TypeScript", "Redux"]
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "WebSolutions Co.",
    period: "2018 - 2020",
    description: "Developed and maintained multiple client websites and web applications. Collaborated with designers to implement responsive, accessible user interfaces. Integrated RESTful APIs with frontend applications.",
    technologies: ["JavaScript", "React", "CSS3", "HTML5"]
  },
  {
    id: 3,
    role: "Junior Web Developer",
    company: "DigitalCraft Agency",
    period: "2016 - 2018",
    description: "Assisted in developing responsive websites for various clients. Implemented UI components and features according to design specifications. Participated in code reviews and team meetings.",
    technologies: ["HTML", "CSS", "JavaScript", "jQuery"]
  }
];

export function ExperienceSection() {
  const handleDownloadResume = () => {
    // In a real scenario, this would be a link to a hosted PDF file
    alert("In a production environment, this would download the resume PDF.");
  };

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-text-secondary text-lg">My professional journey</p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              {...experience}
              delay={0.1 * index}
            />
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button 
            onClick={handleDownloadResume}
            variant="outline"
            className="inline-flex items-center justify-center px-6 py-3 h-auto rounded-lg border border-accent text-accent font-medium transition-all hover:bg-accent/10"
          >
            View Complete Resume
            <HiDownload className="h-5 w-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export default ExperienceSection;
