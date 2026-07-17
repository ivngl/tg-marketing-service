import { Avatar } from '@mantine/core';
import React from 'react';

interface BrandAvatarProps {
  name: string;
  size?: number;
}

export const BrandAvatar: React.FC<BrandAvatarProps> = ({ name, size = 46 }) => {
  const initial = name?.[0]?.toUpperCase() ?? '?';

  return (
    <Avatar size={size} radius="xl" variant="gradient" gradient={{ from: '#229ED9', to: '#6741d9', deg: 135 }}>
      {initial}
    </Avatar>
  );
};
