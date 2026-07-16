import React from 'react';
import { Card, Group, Title } from '@mantine/core';

interface SectionCardProps {
  title: string;
  titleOrder?: 1 | 2 | 3 | 4 | 5 | 6;
  action?: React.ReactNode;
  children: React.ReactNode;
}

export const SectionCard: React.FC<SectionCardProps> = ({
  title,
  titleOrder = 3,
  action,
  children,
}) => {
  return (
    <Card withBorder p="lg" radius="md">
      <Group justify="space-between" mb="md">
        <Title order={titleOrder}>{title}</Title>
        {action}
      </Group>
      {children}
    </Card>
  );
};
