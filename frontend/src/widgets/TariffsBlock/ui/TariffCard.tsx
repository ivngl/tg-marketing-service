import React from 'react';
import { Card, Group, Text, Title, Badge, Stack, Button, Box, ThemeIcon, SimpleGrid } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import type { Tariff } from '../model/types';

export const TariffCard: React.FC<Tariff & { onClick?: () => void }> = ({
  name,
  label,
  description,
  price,
  features,
  button,
  isHighlighted,
  onClick,
}) => {
  return (
    <Card
      onClick={onClick}
      withBorder
      p="lg"
      radius="xl"
      style={{
        cursor: 'pointer',
        borderColor: isHighlighted ? '#155CFA' : undefined,
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
          <Badge variant="light" color="blue.6" size="sm">
            {label}
          </Badge>
        )}
      </Group>

      <Text size="sm" c="dimmed" mt={2}>{description}</Text>

      <Group align="baseline" gap={4} mt="sm">
        <Text fw={700} fz={30} lh={1}>{price.split('/')[0]}</Text>
        <Text size="sm" fw={600} c="dimmed" lh={1}>/{price.split('/')[1]}</Text>
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
        color={isHighlighted ? 'blue.6' : 'gray'}
      >
        {button.label}
      </Button>
    </Card>
  );
};
