import { BookOpen, Brain, Heart, Users } from 'lucide-react';
import { DIFFERENTIAL } from '../data/siteData';
import { Section, SectionHeader } from './Section';
import { Card, CardTitle, CardText } from './Card';

const icons = [BookOpen, Brain, Heart, Users];

export function DifferentialSection() {
  return (
    <Section id="diferencial" variant="black">
      <SectionHeader title={DIFFERENTIAL.title} />

      <div className="grid gap-6 sm:grid-cols-2">
        {DIFFERENTIAL.cards.map((card, index) => {
          const Icon = icons[index];
          return (
            <Card key={card.title} index={index} className="p-8">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-alf-red/10 text-alf-red">
                <Icon className="h-7 w-7" aria-hidden="true" />
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
