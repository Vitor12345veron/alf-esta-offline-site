import { motion } from 'framer-motion';
import { Building2, Church, GraduationCap, Library, School, Users } from 'lucide-react';
import { TARGET_AUDIENCE } from '../data/siteData';
import { Section, SectionHeader } from './Section';

const audienceIcons: Record<string, typeof GraduationCap> = {
  '6º ano': GraduationCap,
  '7º ano': GraduationCap,
  '8º ano': GraduationCap,
  '9º ano': GraduationCap,
  'Escolas de tempo integral': School,
  'Projetos sociais': Users,
  'Bibliotecas': Library,
  'Escolas confessionais': Church,
  'Redes públicas e privadas': Building2,
};

export function TargetAudienceSection() {
  return (
    <Section id="publico" variant="graphite">
      <SectionHeader title={TARGET_AUDIENCE.title} />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {TARGET_AUDIENCE.groups.map((group, index) => {
          const Icon = audienceIcons[group] || Users;
          return (
            <motion.div
              key={group}
              initial={{ opacity: 0.95, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="flex items-center gap-4 rounded-xl border border-alf-white/10 bg-alf-black/40 p-5 transition-colors hover:border-alf-red/30"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-alf-red/10 text-alf-red">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <span className="font-display text-lg font-medium uppercase tracking-wide text-alf-white">
                {group}
              </span>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
