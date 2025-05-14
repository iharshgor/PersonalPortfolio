import React, { useState } from "react";
import { motion } from "framer-motion";
import { ContactCard, SocialLink } from "@/components/ui/contact-card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiGlobe
} from "react-icons/hi";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaDribbble
} from "react-icons/fa";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: (data: ContactFormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
        variant: "success"
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later.",
        variant: "destructive"
      });
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-text-secondary text-lg">Let's discuss your project or just say hello</p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <ContactCard
              icon={<HiMail className="h-6 w-6 text-accent" />}
              title="Email"
              value="john.doe@example.com"
              delay={0.1}
            />
            
            <ContactCard
              icon={<HiPhone className="h-6 w-6 text-accent" />}
              title="Phone"
              value="+1 (555) 123-4567"
              delay={0.2}
            />
            
            <ContactCard
              icon={<HiLocationMarker className="h-6 w-6 text-accent" />}
              title="Location"
              value="San Francisco, CA"
              delay={0.3}
            />
            
            <ContactCard
              icon={<HiGlobe className="h-6 w-6 text-accent" />}
              title="Website"
              value="www.johndoe-dev.com"
              delay={0.4}
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center space-x-4"
            >
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
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card p-8"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-primary/50 border border-white/10 rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-colors" 
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-primary/50 border border-white/10 rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-colors" 
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-text-secondary mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-primary/50 border border-white/10 rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-colors" 
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5} 
                  className="w-full bg-primary/50 border border-white/10 rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-colors resize-none" 
                />
              </div>
              
              <div>
                <Button 
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full button-glow inline-flex items-center justify-center px-6 py-3 h-auto rounded-lg bg-accent text-white font-medium transition-all hover:bg-accent/90 relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                    {!contactMutation.isPending && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H3a1 1 0 110-2h9.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    )}
                  </span>
                  <span className="absolute inset-0 overflow-hidden rounded-lg before:absolute before:inset-0 before:-translate-x-full hover:before:animate-[button-glow_1s_forwards] before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent"></span>
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
