import { motion } from 'framer-motion';
import { Section } from './Section';

interface QuoteSectionProps {
  quote: string;
}

export function QuoteSection({ quote }: QuoteSectionProps) {
  return (
    <Section variant="black" withTexture={false}>
      <motion.div
        initial={{ opacity: 0.9, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-5xl text-center"
      >
        <span className="mb-4 block font-body text-sm font-semibold uppercase tracking-widest text-alf-red">
          Reflexão
        </span>
        <blockquote className="font-display text-2xl font-medium leading-tight text-alf-white sm:text-3xl md:text-4xl">
          “{quote}”
        </blockquote>
      </motion.div>
    </Section>
  );
}
