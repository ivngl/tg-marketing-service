import React from 'react';
import { Avatar } from '@mantine/core';
import { brandGradient } from '@/app/constants';

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
