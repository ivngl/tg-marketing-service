import React from 'react';
import { Text as MantineText } from '@mantine/core';
import type { TextProps as MantineTextProps } from '@mantine/core';

type SemanticColor = 'primary' | 'secondary' | 'muted' | 'dimmed';

type TextProps = React.ComponentProps<'p'> &
  Omit<MantineTextProps, 'variant' | 'color' | keyof React.ComponentProps<'p'>> & {
    color?: SemanticColor | (string & {});
  };

export const Text: React.FC<TextProps> = ({ color, ...props }) => {
  return (
    <MantineText
      c={color}
      {...(props as MantineTextProps)}
    />
  );
};
