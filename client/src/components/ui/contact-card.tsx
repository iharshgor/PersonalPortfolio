import React from "react";
import { motion } from "framer-motion";

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  delay?: number;
}

export function ContactCard({ icon, title, value, delay = 0 }: ContactCardProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-secondary/50 rounded-xl p-6 border border-white/5 hover:border-accent/20 transition-all duration-300"
    >
      <div className="flex items-start space-x-4">
        <div className="bg-accent/20 p-3 rounded-lg">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          <p className="text-text-secondary">{value}</p>
        </div>
      </div>
    </motion.div>
  );
}

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  delay?: number;
}

export function SocialLink({ href, icon, label, delay = 0 }: SocialLinkProps) {
  return (
    <motion.a
      href={href}
      aria-label={label}
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
      className="bg-secondary/50 p-3 rounded-full text-text-primary hover:text-accent hover:bg-secondary transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </motion.a>
  );
}

export default { ContactCard, SocialLink };
