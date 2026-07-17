import React from 'react';
import { Text, Paper, Box } from '@mantine/core';
import type { AiDemoBlockProps } from '../model/types';

export const AiDemoWindow: React.FC<AiDemoBlockProps> = (props) => {
  const { demoTitle } = props;

  return (
    <Paper
      p="md"
      radius="xl"
      styles={{ root: { flex: 1, minHeight: '15rem', display: 'flex' } }}
    >
      <Box
        w="100%"
        h="100%"
        display="flex"
        align="center"
        justify="center"
        p={16}
        bg="#F8F9FB"
        styles={{ root: { borderRadius: 8 } }}
      >
        <Text fz={48} c="dimmed">{demoTitle || 'AI Assistant Chat'}</Text>
      </Box>
    </Paper>
  );
};
