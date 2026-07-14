import { AlertTriangle, Brain, BookOpen, MessageSquareOff, MonitorSmartphone, Users } from 'lucide-react';
import { PROBLEM } from '../data/siteData';
import { Section, SectionHeader } from './Section';
import { Card, CardTitle, CardText } from './Card';

const icons = [
  MonitorSmartphone,
  Users,
  Brain,
  AlertTriangle,
  MessageSquareOff,
  BookOpen,
  MessageSquareOff,
];

export function ProblemSection() {
  return (
    <Section id="problema" variant="graphite">
      <SectionHeader title={PROBLEM.title} subtitle={PROBLEM.lead} />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROBLEM.items.map((item, index) => {
          const Icon = icons[index % icons.length];
          return (
            <Card key={item.title} index={index}>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-alf-red/10 text-alf-red">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <CardTitle>{item.title}</CardTitle>
              <CardText>{item.description}</CardText>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
