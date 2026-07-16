import React from 'react';
import { Card, Group, Stack } from '@mantine/core';
import { Button } from '@mantine/core';
import { Text } from '@/components/ui/Text';
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
        border: `1px solid ${isHighlighted ? 'var(--mantine-color-tgblue-5)' : 'var(--mantine-color-gray-3)'}`,
        outline: isHighlighted ? '2px solid var(--mantine-color-tgblue-5)' : 'none',
        outlineOffset: '-1px',
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
            backgroundColor: 'var(--mantine-color-tgblue-5)',
            color: 'var(--mantine-color-white)',
            padding: '4px 14px',
            borderRadius: '12px',
            fontSize: 'var(--mantine-font-size-xs)',
            fontWeight: 800,
            zIndex: 2,
          }}
        >
          Популярный
        </div>
      )}

      <Stack style={{ flex: 1 }}>
        <Text size="md" fw={800} color="primary">{name}</Text>

        <Stack gap={2}>
          <Text fw={800} color="primary" lh={1.1} style={{ fontSize: '34px' }}>
            {monthlyPrice === 0 ? '0 ₽' : `${monthlyPrice} ₽`}
          </Text>
          <Text size="xs" c="gray.5">
            {period}
          </Text>
        </Stack>

        <Stack gap="sm" mt="md" mb="xl">
          {features.map((feat) => (
            <Group key={feat.id} gap={8} wrap="nowrap" align="flex-start">
              <Text size="sm" fw={600} c="#10B981">✓</Text>
              <Text size="sm" color="muted">{feat.text}</Text>
            </Group>
          ))}
        </Stack>
      </Stack>

      <Button
        size="md"
        color="tgblue"
        fw={700}
        style={{
          height: '44px',
          borderRadius: 'var(--mantine-radius-md)',
          marginTop: 'auto',
          visibility: isHighlighted ? 'visible' : 'hidden',
        }}
      >
        {button.label}
      </Button>
    </Card>
  );
};
