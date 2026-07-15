import React from 'react';
import { Card, Group, Text, Title, Badge, Stack, Button, ThemeIcon } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import type { Tariff } from '../model/types';

interface TariffCardProps extends Tariff {
  onClick?: () => void;
  period?: 'month' | 'year';
}

const monthlyPrices: Record<number, number> = {
  1: 0,
  2: 990,
  3: 2990,
};

export const TariffCard: React.FC<TariffCardProps> = ({
  id,
  name,
  label,
  description,
  features,
  button,
  isHighlighted,
  onClick,
  period = 'month',
}) => {
  const monthly = monthlyPrices[id] ?? 0;
  const displayPrice = period === 'year' && monthly > 0
    ? Math.round(monthly * 0.8)
    : monthly;
  const suffix = period === 'year' ? '/мес (год)' : '/мес';

  return (
    <Card
      onClick={onClick}
      withBorder
      p="lg"
      radius="xl"
      style={{
        cursor: 'pointer',
        borderColor: isHighlighted ? 'var(--mantine-color-tgblue-5)' : undefined,
        boxShadow: isHighlighted ? '0 2px 8px rgba(21,92,250,0.15)' : undefined,
        transition: 'transform 150ms ease, box-shadow 150ms ease',
      }}
      styles={{
        root: {
          '&:hover': { transform: 'scale(1.02)', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' },
        },
      }}
    >
      <Group justify="space-between" align="center">
        <Title order={3}>{name}</Title>
        {label && (
          <Badge variant="light" color="tgblue" size="sm">
            {label}
          </Badge>
        )}
      </Group>

      <Text size="sm" c="dimmed" mt={2}>{description}</Text>

      <Group align="baseline" gap={4} mt="sm">
        <Text fw={700} fz={30} lh={1}>
          {displayPrice === 0 ? '0' : `${displayPrice} ₽`}
        </Text>
        <Text size="sm" fw={600} c="dimmed" lh={1}>
          {suffix}
        </Text>
      </Group>

      <Stack gap={6} mt="md">
        {features.map((f) => (
          <Group key={f.id} gap={8} wrap="nowrap">
            <ThemeIcon size="sm" radius="xl" color="green.6" variant="filled">
              <IconCheck size={12} />
            </ThemeIcon>
            <Text size="sm">{f.text}</Text>
          </Group>
        ))}
      </Stack>

      <Button
        mt="md"
        fullWidth
        variant={isHighlighted ? 'filled' : 'outline'}
        color={isHighlighted ? 'tgblue' : 'gray'}
      >
        {button.label}
      </Button>
    </Card>
  );
};
