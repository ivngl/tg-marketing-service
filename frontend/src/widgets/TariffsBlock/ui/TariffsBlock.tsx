import React, { useState } from 'react';
import { Title, Container, SimpleGrid } from '@mantine/core';
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
    <section style={{ padding: '80px 0', backgroundColor: '#FFFFFF', borderTop: '1px solid #E9ECEF', borderBottom: '1px solid #E9ECEF' }}>
      <Container size="xl">
        <Title order={2} style={{ fontSize: '32px', fontWeight: 800, color: '#111', textAlign: 'center', marginBottom: '60px' }}>
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
    </section>
  );
};
