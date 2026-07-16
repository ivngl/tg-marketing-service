import React from 'react';
import { SimpleGrid } from '@mantine/core';
import { Text } from '@/components/ui/Text';
import { useNavigate } from 'react-router-dom';
import { PageShell } from '@/components/ui/PageShell';
import { GradientCard } from '@/components/ui/GradientCard';

const collections = [
  { id: 1, name: 'Лучшие IT-каналы', description: 'Подборка технологических каналов', curator: 'TG Pulse', count: 12, gradient: ['#229ED9', '#6741d9'] as [string, string], featured: true },
  { id: 2, name: 'Криптовалюты', description: 'Каналы о крипте и блокчейне', curator: 'TG Pulse', count: 8, gradient: ['#f76707', '#e8590c'] as [string, string], featured: false },
  { id: 3, name: 'Маркетинг и продажи', description: 'Каналы для маркетологов', curator: 'TG Pulse', count: 10, gradient: ['#12b886', '#0ca678'] as [string, string], featured: true },
  { id: 4, name: 'Бизнес и стартапы', description: 'Для предпринимателей', curator: 'TG Pulse', count: 6, gradient: ['#f783ac', '#e64980'] as [string, string], featured: false },
];

const CollectionsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <PageShell>
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
          {collections.map((col) => (
            <GradientCard
              key={col.id}
              gradient={col.gradient}
              title={col.name}
              minHeight={120}
              featured={col.featured ? <Text size="xs" fw={600}>★ Редакция</Text> : undefined}
              metaJustify="space-between"
              meta={
                <>
                  <Text size="xs" variant="dimmed">Куратор: {col.curator}</Text>
                  <Text size="xs" variant="dimmed">{col.count} каналов</Text>
                </>
              }
              onClick={() => navigate(`/collections/${col.id}`)}
            >
              {col.description}
            </GradientCard>
          ))}
        </SimpleGrid>
      </PageShell>
  );
};

export default CollectionsPage;
