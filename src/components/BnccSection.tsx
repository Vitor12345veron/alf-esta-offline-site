import { motion } from 'framer-motion';
import { BNCC } from '../data/siteData';
import { Section, SectionHeader } from './Section';

export function BnccSection() {
  return (
    <Section id="bncc" variant="concrete">
      <SectionHeader title={BNCC.title} subtitle={BNCC.lead} />

      <div className="flex flex-wrap justify-center gap-3">
        {BNCC.tags.map((tag, index) => (
          <motion.span
            key={tag}
            initial={{ opacity: 0.95, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="rounded-full border border-alf-red/30 bg-alf-red/10 px-5 py-2 text-sm font-semibold uppercase tracking-wide text-alf-white transition-colors hover:border-alf-red hover:bg-alf-red/20"
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </Section>
  );
}
