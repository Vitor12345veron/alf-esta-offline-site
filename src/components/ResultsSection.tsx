import { BookOpen, HeartHandshake, MessageCircle, School, TrendingUp, Users } from 'lucide-react';
import { RESULTS } from '../data/siteData';
import { Section, SectionHeader } from './Section';
import { Card, CardTitle, CardText } from './Card';

const icons = [BookOpen, TrendingUp, Users, HeartHandshake, MessageCircle, School];

export function ResultsSection() {
  return (
    <Section id="resultados" variant="black">
      <SectionHeader title={RESULTS.title} />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {RESULTS.cards.map((card, index) => {
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
