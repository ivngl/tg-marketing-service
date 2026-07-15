import React, { useState } from 'react';
import { Title, Text, Container, SimpleGrid } from '@mantine/core';
import type { TariffsBlockProps } from '../model/types';
import { useTariffsBlock } from '../model/useTariffsBlock';
import { TariffCard } from './TariffCard';

export const TariffsBlock: React.FC<TariffsBlockProps> = ({ tariffs: propsTariffs }) => {
  const { tariffs: tariffFromPage } = useTariffsBlock();
  const tariffs = propsTariffs ?? tariffFromPage;

  const [activeTariffId, setActiveTariffId] = useState<number>(
    tariffs?.find((t) => t.isHighlighted)?.id || tariffs?.[0]?.id || 0
  );

  if (!tariffs || tariffs.length === 0) return null;

  return (
    <section style={{ width: '100%', backgroundColor: '#FEFEFE', padding: 64 }}>
      <Container size="xl" px="md">
        <Title order={2} ta="center" mb="sm">Тарифы</Title>
        <Text ta="center" c="dimmed" mb={48} maw={640} mx="auto">
          Начните бесплатно. Обновляйтесь по мере роста команды и запросов.
        </Text>

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl">
          {tariffs.map((tariff) => (
            <TariffCard
              key={tariff.id}
              {...tariff}
              isHighlighted={tariff.id === activeTariffId}
              onClick={() => setActiveTariffId(tariff.id)}
            />
          ))}
        </SimpleGrid>
      </Container>
    </section>
  );
};
