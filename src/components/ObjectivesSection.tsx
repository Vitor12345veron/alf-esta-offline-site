import { Check } from 'lucide-react';
import { OBJECTIVES } from '../data/siteData';
import { Section, SectionHeader } from './Section';
import { motion } from 'framer-motion';

export function ObjectivesSection() {
  return (
    <Section id="objetivos" variant="black">
      <SectionHeader title={OBJECTIVES.title} />

      <div className="grid gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0.95, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-xl border-l-4 border-alf-red bg-alf-graphite/50 p-8"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-alf-red">
            {OBJECTIVES.general.label}
          </span>
          <p className="mt-4 text-lg leading-relaxed text-alf-gray/90">
            {OBJECTIVES.general.text}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0.95, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-xl border border-alf-white/10 bg-alf-graphite/30 p-8"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-alf-red">
            {OBJECTIVES.specific.label}
          </span>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {OBJECTIVES.specific.items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-alf-red" aria-hidden="true" />
                <span className="text-alf-gray/90">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}
