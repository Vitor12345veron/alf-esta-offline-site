import { motion } from 'framer-motion';
import { CTA } from '../data/siteData';
import { Section } from './Section';
import { Button } from './Button';
import { WhatsAppButton } from './WhatsAppButton';

export function CtaSection() {
  return (
    <Section variant="concrete" withTexture={false}>
      <motion.div
        initial={{ opacity: 0.95, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="rounded-2xl bg-gradient-to-br from-alf-red to-alf-red-hover p-8 text-center shadow-2xl shadow-black/30 md:p-16"
      >
        <h2 className="mx-auto max-w-4xl font-display text-3xl font-bold uppercase tracking-wide text-white md:text-4xl lg:text-5xl">
          {CTA.title}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
          {CTA.text}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="#contato" variant="secondary" size="large">
            {CTA.buttons.primary}
          </Button>
          <Button href="#contato" variant="outline" size="large" className="border-white text-white hover:bg-white/10">
            {CTA.buttons.secondary}
          </Button>
          <WhatsAppButton
            size="large"
            variant="secondary"
            label={CTA.buttons.whatsapp}
          />
        </div>
      </motion.div>
    </Section>
  );
}
