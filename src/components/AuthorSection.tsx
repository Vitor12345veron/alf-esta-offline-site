import { motion } from 'framer-motion';
import { AUTHOR, SITE_CONFIG } from '../data/siteData';
import { Section, SectionHeader } from './Section';
import { Button } from './Button';
import { WhatsAppButton } from './WhatsAppButton';
import autorFoto from '../assets/images/autor.jpg';

export function AuthorSection() {
  return (
    <Section id="autor" variant="graphite">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0.95, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-md"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-alf-red/20 to-transparent blur-xl" />
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-alf-black shadow-2xl shadow-black/40 ring-1 ring-alf-white/10">
              <img
                src={autorFoto}
                alt={`Foto de ${AUTHOR.name}`}
                className="h-full w-full object-cover object-top"
                width={520}
                height={520}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0.95, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6"
        >
          <SectionHeader title={AUTHOR.title} centered={false} />

          <h3 className="font-display text-3xl font-bold text-alf-white">
            {AUTHOR.name}
          </h3>

          {AUTHOR.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 30)} className="text-lg leading-relaxed text-alf-gray/90">
              {paragraph}
            </p>
          ))}

          <div className="mt-2 flex flex-col gap-4 sm:flex-row">
            <Button href={`https://instagram.com/${SITE_CONFIG.instagram.replace('@', '')}`} variant="outline" size="large">
              {AUTHOR.buttons.primary}
            </Button>
            <WhatsAppButton size="large" variant="primary" label={AUTHOR.buttons.secondary} />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
