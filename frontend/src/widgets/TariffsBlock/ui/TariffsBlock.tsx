import React, { useState } from 'react';
import { Box, Title, Container, SimpleGrid } from '@mantine/core';
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
    <Box component="section" bg="white" py={80} style={{ borderTop: '1px solid var(--mantine-color-gray-3)', borderBottom: '1px solid var(--mantine-color-gray-3)' }}>
      <Container size="xl">
        <Title order={2} fw={800} c="headingText" ta="center" mb={60} style={{ fontSize: '32px' }}>
          Тарифы
        </Title>

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing={32} style={{ alignItems: 'stretch' }}>
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
    </Box>
  );
};
