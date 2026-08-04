import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  BookOpenCheck,
  Brain,
  CalendarClock,
  ChevronDown,
  GraduationCap,
  MessagesSquare,
  Sparkles,
} from 'lucide-react';
import { TEACHER_GUIDE } from '../data/siteData';

const dimensions = [
  { key: 'psychology' as const, label: 'Olhar psicológico', Icon: Brain },
  { key: 'mediation' as const, label: 'Mediação', Icon: MessagesSquare },
  { key: 'planning' as const, label: 'Planejamento', Icon: CalendarClock },
  { key: 'classroom' as const, label: 'Aplicação em sala', Icon: GraduationCap },
];

function ModuleAccordion({ index }: { index: number }) {
  const module = TEACHER_GUIDE.modules[index];
  const [open, setOpen] = useState(index === 0);

  return (
    <div className="overflow-hidden rounded-xl border border-alf-white/10 bg-alf-black/40">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className="flex w-full items-center gap-4 px-5 py-5 text-left transition-colors hover:bg-alf-black/60"
      >
        <span className="font-display text-2xl font-bold text-alf-red/80">{module.number}</span>
        <span className="flex-1">
          <span className="block font-display text-lg font-semibold uppercase tracking-wide text-alf-white">
            {module.title}
          </span>
          <span className="mt-1 block text-sm text-alf-gray/70">{module.focus}</span>
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-alf-red transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="grid gap-4 border-t border-alf-white/10 px-5 py-6 sm:grid-cols-2">
              {dimensions.map(({ key, label, Icon }) => (
                <div key={key} className="rounded-lg bg-alf-graphite/50 p-4">
                  <div className="mb-2 flex items-center gap-2 text-alf-red">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    <span className="font-display text-xs font-semibold uppercase tracking-widest">
                      {label}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-alf-gray/80">{module[key]}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function TeacherGuideDetail() {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0.95, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4 }}
      className="mt-10 rounded-2xl border border-alf-red/20 bg-alf-graphite/60 p-6 backdrop-blur-sm sm:p-8"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-alf-red/10 px-3 py-1 font-display text-xs font-semibold uppercase tracking-widest text-alf-red">
            <BookOpenCheck className="h-4 w-4" aria-hidden="true" />
            {TEACHER_GUIDE.eyebrow}
          </span>
          <h3 className="mt-4 font-display text-2xl font-bold uppercase tracking-wide text-alf-white md:text-3xl">
            {TEACHER_GUIDE.title}
          </h3>
          <p className="mt-3 leading-relaxed text-alf-gray/80">{TEACHER_GUIDE.lead}</p>
        </div>

        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          aria-expanded={expanded}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-alf-red px-5 py-3 font-display text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-alf-red-hover"
        >
          {expanded ? TEACHER_GUIDE.toggleClose : TEACHER_GUIDE.toggleOpen}
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
            aria-hidden="true"
          />
        </button>
      </div>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="mt-8 border-t border-alf-white/10 pt-8">
              {/* Estrutura de condução — os cinco momentos */}
              <div className="mb-4 flex items-center gap-2 text-alf-red">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                <span className="font-display text-sm font-semibold uppercase tracking-widest">
                  {TEACHER_GUIDE.framework.title}
                </span>
              </div>
              <p className="mb-6 max-w-3xl leading-relaxed text-alf-gray/80">
                {TEACHER_GUIDE.framework.lead}
              </p>
              <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {TEACHER_GUIDE.framework.steps.map((step) => (
                  <li key={step.number} className="rounded-lg border border-alf-white/10 bg-alf-black/40 p-4">
                    <span className="font-display text-xl font-bold text-alf-red/80">{step.number}</span>
                    <h4 className="mt-1 font-display text-sm font-semibold uppercase tracking-wide text-alf-white">
                      {step.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-alf-gray/70">{step.description}</p>
                  </li>
                ))}
              </ol>

              {/* Módulos temáticos */}
              <p className="mb-6 mt-10 max-w-3xl leading-relaxed text-alf-gray/80">
                {TEACHER_GUIDE.modulesLead}
              </p>
              <div className="flex flex-col gap-4">
                {TEACHER_GUIDE.modules.map((module, index) => (
                  <ModuleAccordion key={module.number} index={index} />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
