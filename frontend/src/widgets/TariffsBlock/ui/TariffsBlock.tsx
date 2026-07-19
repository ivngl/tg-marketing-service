import React, { useState } from 'react';
import { Paper, Title, Container, SimpleGrid } from '@mantine/core';
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
    <Paper
      component="section"
      bg="white"
      py={80}
      shadow="none"
      withBorder={false}
    >
      <Container>
        <Title order={2} fw={800} c="primary" ta="center" mb={60} fz="32px">
          Тарифы
        </Title>

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing={32}>
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
    </Paper>
  );
};
