import React from 'react';
import { Avatar } from '@mantine/core';

const brandGradient = { from: '#229ED9', to: '#6741d9', deg: 135 };

interface BrandAvatarProps {
  name: string;
  size?: number;
}

export const BrandAvatar: React.FC<BrandAvatarProps> = ({ name, size = 46 }) => {
  const initial = name?.[0]?.toUpperCase() ?? '?';

  return (
    <Avatar size={size} radius="xl" variant="gradient" gradient={brandGradient}>
      {initial}
    </Avatar>
  );
};
