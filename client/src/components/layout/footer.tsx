import React from "react";
import { motion } from "framer-motion";
import { SocialLink } from "@/components/ui/contact-card";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaDribbble,
  FaInstagram,
  FaBehance
} from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { HiArrowUp } from "react-icons/hi";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  return (
    <footer className="py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-background/0 z-0" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-accent/0 via-accent/20 to-accent/0" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="scroll-animate scroll-fade-in"
          >
            <div className="text-2xl font-bold mb-4">
              <span className="text-accent">Dev</span>Portfolio
            </div>
            <p className="text-text-secondary text-sm mb-4 max-w-xs">
              Building exceptional digital experiences with modern technologies.
              Specialized in creating intuitive and engaging user interfaces.
            </p>
            <div className="flex space-x-3 mt-6">
              <SocialLink 
                href="https://github.com" 
                icon={<FaGithub className="h-5 w-5" />} 
                label="GitHub" 
              />
              <SocialLink 
                href="https://linkedin.com" 
                icon={<FaLinkedinIn className="h-5 w-5" />} 
                label="LinkedIn" 
              />
              <SocialLink 
                href="https://twitter.com" 
                icon={<FaTwitter className="h-5 w-5" />} 
                label="Twitter" 
              />
            </div>
          </motion.div>
          
          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="scroll-animate scroll-fade-in"
          >
            <h4 className="font-semibold mb-4 text-lg">Navigate</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item, index) => (
                <li key={index} className="scroll-animate scroll-fade-in">
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-text-secondary hover:text-accent transition-colors duration-200 text-sm flex items-center"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/50 mr-2"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Column 3: Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="scroll-animate scroll-fade-in"
          >
            <h4 className="font-semibold mb-4 text-lg">Services</h4>
            <ul className="space-y-2">
              {[
                'Web Development', 
                'UI/UX Design', 
                'Mobile Apps', 
                'Frontend Development',
                'Responsive Design', 
                'Performance Optimization'
              ].map((item, index) => (
                <li key={index} className="text-text-secondary text-sm scroll-animate scroll-fade-in">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/50 mr-2 inline-block"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Column 4: Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="scroll-animate scroll-fade-in"
          >
            <h4 className="font-semibold mb-4 text-lg">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start text-sm text-text-secondary">
                <span className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-accent/10 text-accent shrink-0">
                  <MdLocationOn className="h-4 w-4" />
                </span>
                <span>123 Innovation Street<br />San Francisco, CA 94103</span>
              </li>
              <li className="flex items-center text-sm text-text-secondary">
                <span className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-accent/10 text-accent shrink-0">
                  <MdEmail className="h-4 w-4" />
                </span>
                <span>contact@devportfolio.com</span>
              </li>
              <li className="flex items-center text-sm text-text-secondary">
                <span className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-accent/10 text-accent shrink-0">
                  <MdPhone className="h-4 w-4" />
                </span>
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
            
            <div className="mt-6 flex space-x-3">
              <SocialLink 
                href="https://dribbble.com" 
                icon={<FaDribbble className="h-5 w-5" />} 
                label="Dribbble" 
              />
              <SocialLink 
                href="https://instagram.com" 
                icon={<FaInstagram className="h-5 w-5" />} 
                label="Instagram" 
              />
              <SocialLink 
                href="https://behance.net" 
                icon={<FaBehance className="h-5 w-5" />} 
                label="Behance" 
              />
            </div>
          </motion.div>
        </div>
        
        {/* Divider */}
        <div className="h-px bg-border/10 my-8" />
        
        {/* Copyright & Back to top */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-text-secondary text-sm mb-4 sm:mb-0">
            &copy; {currentYear} DevPortfolio. All rights reserved.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button 
              onClick={scrollToTop}
              variant="outline" 
              size="icon"
              className="rounded-full border-accent/20 hover:bg-accent/10 hover:text-accent"
            >
              <HiArrowUp className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
