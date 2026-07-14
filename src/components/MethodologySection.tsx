import { motion } from 'framer-motion';
import { METHODOLOGY } from '../data/siteData';
import { Section, SectionHeader } from './Section';

export function MethodologySection() {
  return (
    <Section id="metodologia" variant="graphite">
      <SectionHeader title={METHODOLOGY.title} subtitle={METHODOLOGY.lead} />

      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-alf-red/50 via-alf-red/20 to-transparent lg:left-1/2" />

        <div className="space-y-12">
          {METHODOLOGY.steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0.95, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center gap-8 ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className={`hidden flex-1 lg:block ${isEven ? 'text-right' : 'text-left'}`}>
                  <h3 className="font-display text-2xl font-semibold uppercase tracking-wide text-alf-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-alf-gray/80">{step.description}</p>
                </div>

                <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-alf-red bg-alf-black font-display text-xl font-bold text-alf-white">
                  {step.number}
                </div>

                <div className="flex-1">
                  <h3 className="font-display text-2xl font-semibold uppercase tracking-wide text-alf-white lg:hidden">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-alf-gray/80 lg:hidden">{step.description}</p>
                  <div className="hidden rounded-xl border border-alf-white/10 bg-alf-black/40 p-6 lg:block">
                    <p className="text-alf-gray/90">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
