import React from 'react';
import { Link } from 'react-router-dom';
import type { LinkProps } from 'react-router-dom';
import { Anchor } from '@mantine/core';

interface AppLinkProps extends Omit<LinkProps, 'href' | 'label' | 'className'> {
  to: string;
  label?: string | React.ReactElement;
  isDisabled?: boolean;
  variant?: 'solid' | 'outline' | 'text';
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  scheme?: 'primary' | 'accent' | 'danger' | 'default';
  size?: string;
  children?: React.ReactNode;
}

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
      size={size}
      underline={variant === 'text' ? 'hover' : 'never'}
      c={schemeColor[scheme]}
      fw={scheme !== 'default' ? 500 : undefined}
      onClick={isDisabled ? undefined : onClick}
      display="inline-flex"
      opacity={isDisabled ? 0.5 : undefined}
      style={{ alignItems: 'center', gap: 6, pointerEvents: isDisabled ? 'none' : undefined }}
      {...rest}
    >
      {leftIcon}
      {content}
      {rightIcon}
    </Anchor>
  );
};

export default AppLink;
