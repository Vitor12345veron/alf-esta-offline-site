import { motion } from 'framer-motion';
import { IMPLEMENTATION } from '../data/siteData';
import { Section, SectionHeader } from './Section';

export function ImplementationSection() {
  return (
    <Section id="implementacao" variant="graphite">
      <SectionHeader title={IMPLEMENTATION.title} subtitle={IMPLEMENTATION.lead} />

      <div className="mx-auto max-w-5xl">
        <ol className="grid gap-6 md:grid-flow-col md:grid-cols-2 md:grid-rows-4 md:gap-x-10 md:gap-y-6">
          {IMPLEMENTATION.steps.map((step, index) => (
            <motion.li
              key={step}
              initial={{ opacity: 0.95, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % 4) * 0.08 }}
              className="flex items-center gap-5"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-alf-red font-display text-lg font-bold text-white md:h-14 md:w-14 md:text-xl">
                {index + 1}
              </span>
              <div className="flex-1 rounded-xl border border-alf-white/10 bg-alf-black/40 p-5">
                <p className="text-lg font-medium text-alf-white">{step}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
