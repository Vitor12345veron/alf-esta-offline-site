import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  variant?: 'black' | 'graphite' | 'concrete';
  withTexture?: boolean;
}

const variants = {
  black: 'bg-alf-black',
  graphite: 'bg-alf-graphite',
  concrete: 'bg-alf-concrete',
} as const;

export function Section({
  id,
  children,
  className = '',
  variant = 'black',
  withTexture = true,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative ${variants[variant]} ${className}`}
    >
      {withTexture && (
        <div
          className="texture-overlay absolute inset-0 z-0"
          aria-hidden="true"
        />
      )}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0.95, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className={`mb-16 ${centered ? 'text-center' : ''}`}
    >
      <h2
        className={`font-display text-4xl font-bold uppercase tracking-wide md:text-5xl ${
          light ? 'text-alf-white' : 'text-alf-white'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg ${
            light ? 'text-alf-gray/80' : 'text-alf-gray/80'
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
