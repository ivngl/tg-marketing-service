import React from 'react';
import { Paper, Text } from '@mantine/core';

type InsightColor = 'green' | 'blue' | 'purple' | 'orange';

const colorMap: Record<InsightColor, { bg: string; border: string; text: string }> = {
  green:  { bg: '#F4FBF6', border: '#40C057', text: '#40C057' },
  blue:   { bg: '#E7F5FB', border: '#1B87BC', text: '#1182C5' },
  purple: { bg: '#F3F0FF', border: '#7c5cdb', text: '#7c5cdb' },
  orange: { bg: '#FFF4E6', border: '#FD7E14', text: '#FD7E14' },
};

interface InsightCardProps {
  color: InsightColor;
  label?: string;
  children: React.ReactNode;
}

export const InsightCard: React.FC<InsightCardProps> = ({ color, label, children }) => {
  const palette = colorMap[color];

  return (
    <Paper
      p="sm"
      radius="md"
      bg={palette.bg}
      styles={{
        root: {
          borderLeft: '4px solid',
          borderLeftColor: palette.border,
          borderRadius: '0 8px 8px 0',
        },
      }}
    >
      {label && (
        <Text
          fz="10px"
          fw={800}
          mb={4}
          lts="0.5px"
          c={palette.text}
        >
          {label}
        </Text>
      )}
      {children}
    </Paper>
  );
};
