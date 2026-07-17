import React from 'react';
import { Link } from 'react-router-dom';
import type { LinkProps } from 'react-router-dom';
import { Anchor } from '@mantine/core';

type Size = 'sm' | 'md' | 'lg';

interface AppLinkProps extends Omit<LinkProps, 'href' | 'label' | 'size' | 'className'> {
  to: string;
  label?: string | React.ReactElement;
  size?: Size;
  isDisabled?: boolean;
  variant?: 'solid' | 'outline' | 'text';
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  scheme?: 'primary' | 'accent' | 'danger' | 'default';
  children?: React.ReactNode;
}

const mantineSize: Record<Size, 'sm' | 'md' | 'lg'> = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
};

const schemeColor: Record<string, string | undefined> = {
  primary: 'blue.6',
  accent: 'violet.6',
  danger: 'red.6',
  default: undefined,
};

const AppLink: React.FC<AppLinkProps> = ({
  to,
  label,
  size = 'md',
  isDisabled = false,
  variant = 'text',
  leftIcon,
  rightIcon,
  scheme = 'default',
  children,
  onClick,
  ...rest
}) => {
  const content = label || children;

  return (
    <Anchor
      component={Link}
      to={isDisabled ? '#' : to}
      size={mantineSize[size]}
      underline={variant === 'text' ? 'hover' : 'never'}
      c={schemeColor[scheme]}
      fw={scheme !== 'default' ? 500 : undefined}
      onClick={isDisabled ? undefined : onClick}
      display="inline-flex"
      align="center"
      gap={6}
      styles={{ root: { pointerEvents: isDisabled ? 'none' : undefined, opacity: isDisabled ? 0.5 : undefined } }}
      {...rest}
    >
      {leftIcon}
      {content}
      {rightIcon}
    </Anchor>
  );
};

export default AppLink;
