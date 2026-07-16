import React from 'react';
import { Button as MantineButton } from '@mantine/core';
import type { ButtonProps as MantineButtonProps } from '@mantine/core';

type SemanticVariant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'default';

type ButtonProps = React.ComponentProps<'button'> &
  Omit<MantineButtonProps, 'variant' | keyof React.ComponentProps<'button'>> & {
    variant?: SemanticVariant | MantineButtonProps['variant'];
  };

const semanticMap: Record<SemanticVariant, { variant: NonNullable<MantineButtonProps['variant']>; color: MantineButtonProps['color'] }> = {
  primary: { variant: 'filled', color: 'tgblue' },
  secondary: { variant: 'outline', color: 'tgblue' },
  ghost: { variant: 'subtle', color: 'tgblue' },
  danger: { variant: 'light', color: 'red' },
  default: { variant: 'default', color: 'gray' },
};

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', ...props }) => {
  const mapped = semanticMap[variant as SemanticVariant];

  if (mapped) {
    return (
      <MantineButton
        variant={mapped.variant}
        color={mapped.color}
        {...(props as MantineButtonProps)}
      />
    );
  }

  return (
    <MantineButton
      variant={variant as MantineButtonProps['variant']}
      {...(props as MantineButtonProps)}
    />
  );
};
