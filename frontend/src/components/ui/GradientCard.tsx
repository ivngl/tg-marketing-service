import React from 'react';
import type { GroupProps } from '@mantine/core';
import { Text, Box, Card, Group, Title } from '@mantine/core';
import classes from './GradientCard.module.css';

interface GradientCardProps {
  gradient: [string, string];
  title: string;
  titleOrder?: 1 | 2 | 3 | 4 | 5 | 6;
  minHeight?: number;
  radius?: 'sm' | 'md' | 'lg' | 'xl';
  featured?: React.ReactNode;
  content?: React.ReactNode;
  meta?: React.ReactNode;
  metaJustify?: GroupProps['justify'];
  children?: React.ReactNode;
  onClick?: () => void;
}

export const GradientCard: React.FC<GradientCardProps> = ({
  gradient,
  title,
  titleOrder = 3,
  minHeight = 120,
  radius = 'md',
  featured,
  content,
  meta,
  metaJustify,
  children,
  onClick,
}) => {
  return (
    <Card
      p={0}
      radius={radius}
      withBorder
      className={onClick ? classes.card : undefined}
      onClick={onClick}
    >
      <Box
        p="lg"
        className={classes.gradient}
        style={{ background: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})`, minHeight }}
      >
        <Group justify="space-between" mb="xs" wrap="nowrap">
          <Title order={titleOrder} c="white">{title}</Title>
          {featured}
        </Group>
        {content}
      </Box>
      {(meta || children) && (
        <Box p="md">
          {meta && (
            <Group gap="md" justify={metaJustify} mb={children ? 'xs' : 0}>
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
