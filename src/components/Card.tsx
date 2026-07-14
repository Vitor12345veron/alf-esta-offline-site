import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  index?: number;
}

export function Card({ children, className = '', index = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0.95, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className={`group rounded-xl border border-alf-white/10 bg-alf-graphite/60 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-alf-red/30 hover:bg-alf-graphite ${className}`}
    >
      {children}
    </motion.div>
  );
}

interface CardTitleProps {
  children: ReactNode;
}

export function CardTitle({ children }: CardTitleProps) {
  return (
    <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-alf-white">
      {children}
    </h3>
  );
}

interface CardTextProps {
  children: ReactNode;
}

export function CardText({ children }: CardTextProps) {
  return (
    <p className="mt-2 text-alf-gray/80 leading-relaxed">
      {children}
    </p>
  );
}
