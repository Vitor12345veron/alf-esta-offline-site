import { motion } from 'framer-motion';
import { ArrowDown, WifiOff } from 'lucide-react';
import { HERO } from '../data/siteData';
import { Button } from './Button';
import { WhatsAppButton } from './WhatsAppButton';

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center bg-alf-black pt-20"
    >
      <div
        className="texture-overlay absolute inset-0 z-0"
        aria-hidden="true"
      />

      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-alf-red/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-alf-concrete/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0.95, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 text-alf-red">
              <WifiOff className="h-5 w-5" aria-hidden="true" />
              <span className="text-sm font-semibold uppercase tracking-widest">
                Projeto Educacional
              </span>
            </div>

            <h1 className="font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight text-alf-white sm:text-6xl md:text-7xl">
              {HERO.title}
            </h1>

            <p className="text-xl font-medium text-alf-white md:text-2xl">
              {HERO.subtitle}
            </p>

            <p className="max-w-xl text-alf-gray/80 md:text-lg">
              {HERO.supportText}
            </p>

            <div className="mt-4 flex flex-col gap-4 sm:flex-row">
              <Button href="#contato" size="large">
                {HERO.buttons.primary}
              </Button>
              <Button href="#projeto" variant="outline" size="large">
                {HERO.buttons.secondary}
              </Button>
              <WhatsAppButton size="large" variant="secondary" className="sm:hidden" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0.95, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-md"
          >
            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-alf-red/25 via-alf-red/5 to-transparent blur-2xl" />
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-alf-red/20 to-transparent opacity-60" />
              <img
                src="/images/capa-livro.png"
                alt="Capa do livro ALF Está Offline, de Fabrício Lopes"
                className="relative h-auto w-full rounded-xl object-cover shadow-2xl shadow-black/60 ring-1 ring-alf-white/10"
                width={600}
                height={900}
                loading="eager"
                decoding="async"
              />
            </div>
          </motion.div>
        </div>

        <motion.a
          href="#problema"
          initial={{ opacity: 0.95, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-alf-gray transition-colors hover:text-alf-white lg:flex"
          aria-label="Rolar para próxima seção"
        >
          <span className="text-xs uppercase tracking-widest">Conhecer</span>
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}
