import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { BOOK } from '../data/siteData';
import { Section, SectionHeader } from './Section';
import { Button } from './Button';

export function BookSection() {
  return (
    <Section id="livro" variant="black">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0.95, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="order-2 mx-auto max-w-sm lg:order-1 lg:max-w-md"
        >
          <div className="relative">
            <div className="absolute -inset-6 rounded-full bg-alf-red/5 blur-3xl" />
            <img
              src="/capa-livro.png"
              alt="Capa do livro ALF Está Offline"
              className="relative rounded-xl shadow-2xl shadow-black/40"
              width={520}
              height={780}
              loading="lazy"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0.95, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="order-1 flex flex-col gap-6 lg:order-2"
        >
          <SectionHeader title={BOOK.title} centered={false} />

          {BOOK.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 30)} className="text-lg text-alf-gray/90 leading-relaxed">
              {paragraph}
            </p>
          ))}

          <blockquote className="relative my-6 border-l-4 border-alf-red bg-alf-graphite/50 p-6">
            <Quote className="absolute right-4 top-4 h-8 w-8 text-alf-red/20" aria-hidden="true" />
            <p className="font-display text-2xl font-medium italic text-alf-white md:text-3xl">
              {BOOK.quote}
            </p>
          </blockquote>

          <div className="mt-2">
            <Button href={BOOK.sampleLink} variant="outline" size="large">
              {BOOK.cta}
            </Button>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
