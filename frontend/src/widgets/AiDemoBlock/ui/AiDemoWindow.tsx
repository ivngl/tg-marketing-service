import React from 'react';
import { Paper } from '@mantine/core';
import { Text } from '@/components/ui/Text';
import type { AiDemoBlockProps } from '../model/types';

export const AiDemoWindow: React.FC<AiDemoBlockProps> = (props) => {
  const { demoTitle } = props;

  return (
    <Paper withBorder p="md" radius="xl" style={{ flex: 1, minHeight: '15rem', display: 'flex' }}>
      <div
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 16,
          backgroundColor: '#F8F9FB',
        }}
      >
        <Text fz={48} variant="dimmed">{demoTitle || 'AI Assistant Chat'}</Text>
      </div>
    </Paper>
  );
};
