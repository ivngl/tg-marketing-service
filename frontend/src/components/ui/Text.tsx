import React from 'react';
import { Text as MantineText } from '@mantine/core';
import type { TextProps as MantineTextProps } from '@mantine/core';

type TextVariant = 'primary' | 'secondary' | 'muted' | 'dimmed';

type TextProps = React.ComponentProps<'p'> &
  Omit<MantineTextProps, 'variant' | keyof React.ComponentProps<'p'>> & {
    variant?: TextVariant;
  };

const colorMap: Record<TextVariant, string> = {
  primary: 'headingText',
  secondary: 'bodyText',
  muted: 'captionText',
  dimmed: 'dimmed',
};

export const Text: React.FC<TextProps> = ({ variant, ...props }) => {
  return (
    <MantineText
      {...(variant ? { c: colorMap[variant] } : {})}
      {...(props as MantineTextProps)}
    />
  );
};
