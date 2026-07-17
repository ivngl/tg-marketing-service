import React from 'react';
import { Text, Card, Group, Stack, Button, Box } from '@mantine/core';
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
      styles={{
        root: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
          overflow: 'visible',
          cursor: 'pointer',
          transition: 'border 150ms ease, box-shadow 150ms ease',
          ...(isHighlighted
            ? {
                border: '1px solid var(--mantine-color-tgblue-5)',
                outline: '2px solid var(--mantine-color-tgblue-5)',
                outlineOffset: '-1px',
                boxShadow: '0 12px 24px rgba(34, 158, 217, 0.08)',
              }
            : {
                border: '1px solid var(--mantine-color-gray-3)',
                outline: 'none',
                outlineOffset: '-1px',
              }),
        },
      }}
    >
      {isPopular && (
        <Box
          styles={{
            root: {
              position: 'absolute',
              top: -14,
              left: 80,
              transform: 'translateX(-50%)',
              backgroundColor: 'var(--mantine-color-tgblue-5)',
              color: 'var(--mantine-color-white)',
              padding: '4px 14px',
              borderRadius: 12,
              fontSize: 'var(--mantine-font-size-xs)',
              fontWeight: 800,
              zIndex: 2,
            },
          }}
        >
          Популярный
        </Box>
      )}

      <Stack styles={{ root: { flex: 1 } }}>
        <Text size="md" fw={800} c="primary">{name}</Text>

        <Stack gap={2}>
          <Text fw={800} c="primary" lh={1.1} fz="34px">
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
              <Text size="sm" c="muted">{feat.text}</Text>
            </Group>
          ))}
        </Stack>
      </Stack>

      <Button
        size="md"
        color="tgblue"
        fw={700}
        styles={{ root: { height: 44, marginTop: 'auto', visibility: isHighlighted ? 'visible' : 'hidden' } }}
      >
        {button.label}
      </Button>
    </Card>
  );
};
