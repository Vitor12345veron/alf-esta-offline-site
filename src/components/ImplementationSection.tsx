import { motion } from 'framer-motion';
import { IMPLEMENTATION } from '../data/siteData';
import { Section, SectionHeader } from './Section';

export function ImplementationSection() {
  return (
    <Section id="implementacao" variant="graphite">
      <SectionHeader title={IMPLEMENTATION.title} subtitle={IMPLEMENTATION.lead} />

      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-alf-red/30 md:left-8" />

        <ol className="relative space-y-8">
          {IMPLEMENTATION.steps.map((step, index) => (
            <motion.li
              key={step}
              initial={{ opacity: 0.95, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex items-start gap-6"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-alf-red font-display text-lg font-bold text-white md:h-16 md:w-16 md:text-xl">
                {index + 1}
              </span>
              <div className="rounded-xl border border-alf-white/10 bg-alf-black/40 p-5 md:p-6">
                <p className="text-lg font-medium text-alf-white">{step}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
