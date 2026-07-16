import React from 'react';
import { Text, Card, Group, Stack, Button } from '@mantine/core';
import type { Tariff } from '../model/types';
import classes from './TariffCard.module.css';

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
      className={`${classes.card} ${isHighlighted ? classes.cardHighlighted : classes.cardDefault}`}
    >
      {isPopular && (
        <div className={classes.popularBadge}>
          Популярный
        </div>
      )}

      <Stack className={classes.cardStack}>
        <Text size="md" fw={800} c="primary">{name}</Text>

        <Stack gap={2}>
          <Text fw={800} c="primary" lh={1.1} className={classes.price}>
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
        className={`${classes.button} ${isHighlighted ? '' : classes.buttonHidden}`}
      >
        {button.label}
      </Button>
    </Card>
  );
};
