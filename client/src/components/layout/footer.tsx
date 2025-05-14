import React from "react";
import { motion } from "framer-motion";
import { SocialLink } from "@/components/ui/contact-card";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaDribbble
} from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-secondary/80 backdrop-blur-sm border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-0"
          >
            <div className="text-2xl font-bold">
              <span className="text-accent">Dev</span>Portfolio
            </div>
            <p className="text-text-secondary mt-2 max-w-md">
              Building exceptional digital experiences with modern technologies.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center md:items-end"
          >
            <div className="flex space-x-4 mb-4">
              <SocialLink 
                href="https://github.com" 
                icon={<FaGithub className="h-6 w-6" />} 
                label="GitHub" 
                delay={0.1}
              />
              <SocialLink 
                href="https://linkedin.com" 
                icon={<FaLinkedinIn className="h-6 w-6" />} 
                label="LinkedIn" 
                delay={0.2}
              />
              <SocialLink 
                href="https://twitter.com" 
                icon={<FaTwitter className="h-6 w-6" />} 
                label="Twitter" 
                delay={0.3}
              />
              <SocialLink 
                href="https://dribbble.com" 
                icon={<FaDribbble className="h-6 w-6" />} 
                label="Dribbble" 
                delay={0.4}
              />
            </div>
            <p className="text-text-secondary text-sm text-center md:text-right">
              &copy; {currentYear} John Doe. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
