import React from 'react';
import { Card, Group, Text, Avatar, Box } from '@mantine/core';
import type { Channel } from '@/types/channel';

interface ChannelProps {
  channel: Channel;
  height?: string;
}

const ChannelCard: React.FC<ChannelProps> = ({ channel }) => {
  const { name, subscribers, imageUrl } = channel;
  return (
    <Card padding="sm" radius="md" withBorder>
      <Group justify="space-between" wrap="nowrap">
        <Avatar src={imageUrl} size="md" radius="md" />
        <Box style={{ flex: 1, minWidth: 0 }}>
          <Text fw={700} size="md" truncate="end">{name}</Text>
          <Text size="xs" c="dimmed" truncate="end">
            {new Intl.NumberFormat('ru-RU').format(subscribers)} подписчиков
          </Text>
        </Box>
        <Text size="sm" component="a" href="#" visibleFrom="xl">
          Открыть
        </Text>
      </Group>
    </Card>
  );
};

export default ChannelCard;
