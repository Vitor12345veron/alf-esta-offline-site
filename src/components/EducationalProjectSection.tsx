import { BookOpen, ClipboardList, FileText, Layers, Puzzle, Scale } from 'lucide-react';
import { EDUCATIONAL_PROJECT } from '../data/siteData';
import { Section, SectionHeader } from './Section';
import { Card, CardTitle, CardText } from './Card';

const icons = [BookOpen, ClipboardList, FileText, Puzzle, Layers, Scale];

export function EducationalProjectSection() {
  return (
    <Section id="projeto" variant="concrete">
      <SectionHeader title={EDUCATIONAL_PROJECT.title} subtitle={EDUCATIONAL_PROJECT.lead} />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {EDUCATIONAL_PROJECT.cards.map((card, index) => {
          const Icon = icons[index % icons.length];
          return (
            <Card key={card.title} index={index}>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-alf-red/10 text-alf-red">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <CardTitle>{card.title}</CardTitle>
              <CardText>{card.description}</CardText>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
