import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExperienceCard, ExperienceProps } from "@/components/ui/experience-card-redesigned";
import { HiDownload, HiChevronDown } from "react-icons/hi";

const experiences: ExperienceProps[] = [
  {
    id: 1,
    role: "Senior Frontend Developer",
    company: "TechFusion Inc.",
    period: "2020 - Present",
    description: "Led the frontend development team in building a modern web application that increased user engagement by 45%. Implemented performance optimizations that improved load times by 60%. Mentored junior developers and introduced new technical standards for the team.",
    technologies: ["React", "Next.js", "TypeScript", "Redux", "TailwindCSS", "GraphQL"]
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "WebSolutions Co.",
    period: "2018 - 2020",
    description: "Developed and maintained multiple client websites and web applications. Collaborated with designers to implement responsive, accessible user interfaces. Integrated RESTful APIs with frontend applications. Optimized web performance and implemented analytics.",
    technologies: ["JavaScript", "React", "CSS3", "HTML5", "REST API", "Webpack"]
  },
  {
    id: 3,
    role: "Junior Web Developer",
    company: "DigitalCraft Agency",
    period: "2016 - 2018",
    description: "Assisted in developing responsive websites for various clients. Implemented UI components and features according to design specifications. Participated in code reviews and team meetings. Worked closely with UX designers to translate mockups into functional interfaces.",
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "PHP"]
  }
];

export function ExperienceSection() {
  const handleDownloadResume = () => {
    // In a real scenario, this would be a link to a hosted PDF file
    alert("In a production environment, this would download the resume PDF.");
  };

  return (
    <section id="experience" className="py-24 relative">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16 scroll-fade-in scroll-animate"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-text-secondary text-lg">My professional journey</p>
        </motion.div>
        
        {/* Mouse-following decoration */}
        <div 
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-accent/20 blur-3xl mouse-parallax" 
          data-speed="0.08"
        ></div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line connecting experiences */}
          <div className="absolute left-[calc(50%-1px)] top-8 bottom-0 w-0.5 bg-accent/20 hidden md:block"></div>
          
          {experiences.map((experience, index) => (
            <div key={experience.id} className={`md:flex items-stretch ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              {/* Visible only on medium screens and up */}
              <div className="hidden md:flex w-1/2 justify-center items-start relative">
                {/* Circle on timeline */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 * index }}
                  className="w-4 h-4 rounded-full bg-accent absolute top-8 z-10"
                ></motion.div>
                
                {/* Arrow pointing to card */}
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: 40 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 * index }}
                  className={`h-0.5 bg-accent/50 absolute top-10 ${index % 2 === 0 ? 'left-1/2' : 'right-1/2'}`}
                ></motion.div>
              </div>
              
              {/* Card container */}
              <div className="md:w-1/2 scroll-animate scroll-slide-up mb-10 md:mb-16">
                <ExperienceCard {...experience} delay={0.1 * index} />
              </div>
            </div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 scroll-animate scroll-fade-in"
        >
          <Button 
            onClick={handleDownloadResume}
            className="inline-flex items-center justify-center px-6 py-3 h-auto rounded-lg glass border border-accent/20 text-accent font-medium transition-all hover:bg-accent/10 group"
          >
            <span>View Complete Resume</span>
            <HiDownload className="h-5 w-5 ml-2 group-hover:translate-y-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
      
      {/* Removed animated chevron */}
    </section>
  );
}

export default ExperienceSection;