import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SkillCardProps {
  title: string;
  icon: React.ReactNode;
  category: string;
  delay?: number;
  className?: string;
}

export function SkillCard({ 
  title, 
  icon, 
  category, 
  delay = 0, 
  className 
}: SkillCardProps) {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: delay }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className={cn(
        "bg-primary/80 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center border border-white/5 hover:border-accent/30 transition-all tech-icon",
        className
      )}
    >
      <div className="w-16 h-16 mb-4 flex items-center justify-center text-accent">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-center">{title}</h3>
      <p className="text-text-secondary text-sm text-center mt-2">{category}</p>
    </motion.div>
  );
}

export function SkillPill({ title }: { title: string }) {
  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      className="px-4 py-2 bg-primary rounded-full text-text-secondary border border-white/5 skill-pill transition-all hover:border-accent/30 hover:shadow-[0_0_15px_rgba(109,40,217,0.6)]"
    >
      {title}
    </motion.span>
  );
}

export default SkillCard;
