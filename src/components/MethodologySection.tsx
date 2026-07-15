import { motion } from 'framer-motion';
import { METHODOLOGY } from '../data/siteData';
import { Section, SectionHeader } from './Section';

interface MethodologyStep {
  number: string;
  title: string;
  description: string;
}

function MethodologyCard({ step, index }: { step: MethodologyStep; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0.95, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="flex h-full flex-col rounded-xl border border-alf-white/10 bg-alf-black/40 p-6 transition-colors duration-300 hover:border-alf-red/40 hover:bg-alf-black/60"
    >
      <span className="font-display text-3xl font-bold text-alf-red">{step.number}</span>
      <h3 className="mt-3 font-display text-xl font-semibold uppercase tracking-wide text-alf-white">
        {step.title}
      </h3>
      <p className="mt-2 text-alf-gray/80">{step.description}</p>
    </motion.div>
  );
}

export function MethodologySection() {
  const [firstRow, secondRow] = [
    METHODOLOGY.steps.slice(0, 2),
    METHODOLOGY.steps.slice(2),
  ];

  return (
    <Section id="metodologia" variant="graphite">
      <SectionHeader title={METHODOLOGY.title} subtitle={METHODOLOGY.lead} />

      <div className="mx-auto flex max-w-3xl flex-col gap-6 sm:flex-row">
        {firstRow.map((step, index) => (
          <div key={step.number} className="sm:flex-1">
            <MethodologyCard step={step} index={index} />
          </div>
        ))}
      </div>

      <div className="mx-auto mt-6 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {secondRow.map((step, index) => (
          <div
            key={step.number}
            className={
              index === 2
                ? 'sm:col-span-2 sm:mx-auto sm:w-full sm:max-w-sm lg:col-span-1 lg:max-w-none'
                : undefined
            }
          >
            <MethodologyCard step={step} index={index + firstRow.length} />
          </div>
        ))}
      </div>
    </Section>
  );
}
