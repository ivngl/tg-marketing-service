import React from 'react';
import { Card, Text, Title, ThemeIcon, Stack } from '@mantine/core';
import type { StepCardProps } from '../model/types';

export const StepCard: React.FC<StepCardProps> = ({ title, description, number }) => {
  return (
    <Card withBorder p={{ base: 'md', md: 'lg' }} radius="xl" shadow="sm">
      <Stack gap="md">
        <ThemeIcon size={48} radius="xl" variant="light" color="blue.6">
          <Text fw={700} fz="md">{number}</Text>
        </ThemeIcon>

        <Title order={4}>{title}</Title>

        <Text size="sm" lh="lg">{description}</Text>
      </Stack>
    </Card>
  );
};
