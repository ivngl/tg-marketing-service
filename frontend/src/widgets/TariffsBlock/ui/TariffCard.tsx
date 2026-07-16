import React from 'react';
import { Card, Group, Text, Stack, Button } from '@mantine/core';
import type { Tariff } from '../model/types';

interface TariffCardProps extends Tariff {
  onClick?: () => void;
}

export const TariffCard: React.FC<TariffCardProps> = ({
  name,
  period,
  monthlyPrice,
  features,
  button,
  isHighlighted,
  isPopular,
  onClick,
}) => {
  return (
    <Card
      onClick={onClick}
      padding="xl"
      radius="lg"
      style={{
        backgroundColor: '#FFFFFF',
        border: isHighlighted ? '2px solid #229ED9' : '1px solid #E9ECEF',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        overflow: 'visible',
        cursor: 'pointer',
        boxShadow: isHighlighted ? '0 12px 24px rgba(34, 158, 217, 0.08)' : undefined,
        transition: 'border 150ms ease, box-shadow 150ms ease',
      }}
    >
      {isPopular && (
        <div
          style={{
            position: 'absolute',
            top: '-14px',
            left: '80px',
            transform: 'translateX(-50%)',
            backgroundColor: '#229ED9',
            color: '#FFFFFF',
            padding: '4px 14px',
            borderRadius: '12px',
            fontSize: '11px',
            fontWeight: 800,
            zIndex: 2,
          }}
        >
          Популярный
        </div>
      )}

      <Stack gap="md" style={{ flex: 1 }}>
        <Text style={{ fontSize: '14px', fontWeight: 800, color: '#111' }}>{name}</Text>

        <Stack gap={2}>
          <Text style={{ fontSize: '34px', fontWeight: 800, color: '#111', lineHeight: 1.1 }}>
            {monthlyPrice === 0 ? '0 ₽' : `${monthlyPrice} ₽`}
          </Text>
          <Text style={{ fontSize: '12px', color: '#A0AEC0' }}>
            {period}
          </Text>
        </Stack>

        <Stack gap="sm" mt="md" mb={isHighlighted ? 'xl' : undefined}>
          {features.map((feat) => (
            <Group key={feat.id} gap={8} wrap="nowrap" align="flex-start">
              <Text style={{ fontSize: '12.5px', color: '#10B981', fontWeight: 650 }}>✓</Text>
              <Text style={{ fontSize: '13px', color: '#4A5568' }}>{feat.text}</Text>
            </Group>
          ))}
        </Stack>
      </Stack>

      {isHighlighted && (
        <Button
          size="md"
          color="tgblue"
          style={{
            fontWeight: 700,
            height: '44px',
            borderRadius: '8px',
            marginTop: 'auto',
          }}
        >
          {button.label}
        </Button>
      )}
    </Card>
  );
};
