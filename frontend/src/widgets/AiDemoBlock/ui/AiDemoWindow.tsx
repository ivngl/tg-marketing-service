import React from 'react';
import { Text, Paper } from '@mantine/core';
import type { AiDemoBlockProps } from '../model/types';
import classes from './AiDemoWindow.module.css';

export const AiDemoWindow: React.FC<AiDemoBlockProps> = (props) => {
  const { demoTitle } = props;

  return (
    <Paper p="md" radius="xl" className={classes.paper}>
      <div className={classes.window}>
        <Text fz={48} c="dimmed">{demoTitle || 'AI Assistant Chat'}</Text>
      </div>
    </Paper>
  );
};
