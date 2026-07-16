import React from 'react';
import { Box, Card, Group, Text, Title } from '@mantine/core';

interface GradientCardProps {
  gradient: [string, string];
  title: string;
  titleOrder?: 1 | 2 | 3 | 4 | 5 | 6;
  minHeight?: number;
  meta?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: () => void;
}

export const GradientCard: React.FC<GradientCardProps> = ({
  gradient,
  title,
  titleOrder = 3,
  minHeight = 120,
  meta,
  children,
  onClick,
}) => {
  return (
    <Card
      p={0}
      radius="md"
      withBorder
      style={{ cursor: onClick ? 'pointer' : undefined, overflow: 'hidden' }}
      onClick={onClick}
    >
      <Box
        p="lg"
        style={{
          background: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})`,
          color: '#fff',
          minHeight,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}
      >
        <Title order={titleOrder} c="white">{title}</Title>
      </Box>
      {(meta || children) && (
        <Box p="md">
          {meta && (
            <Group gap="md" mb={children ? 'xs' : 0}>
              {meta}
            </Group>
          )}
          {children && (
            <Text size="sm" c="dimmed">{children}</Text>
          )}
        </Box>
      )}
    </Card>
  );
};
