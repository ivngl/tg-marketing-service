import React from 'react';
import { Avatar, Badge, Card, Group } from '@mantine/core';
import { Text } from '@/components/ui/Text';
import { IconCheck } from '@tabler/icons-react';
import type { Channel } from '@/types/channel';
import formatNumberShort from '@/utils/formatNumberShort';

interface ChannelCardProps {
  channel: Channel;
}

const initials = (name: string) =>
  name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

const gradients: Record<string, [string, string]> = {
  'Технологии': ['#229ED9', '#6741d9'],
  'Криптовалюты': ['#f76707', '#e8590c'],
  'Маркетинг': ['#12b886', '#0ca678'],
  'Психология': ['#f783ac', '#e64980'],
  'Бизнес': ['#229ED9', '#12b886'],
  'Спорт': ['#f76707', '#229ED9'],
  'Книги': ['#6741d9', '#f783ac'],
};

const ChannelCard: React.FC<ChannelCardProps> = ({ channel }) => {
  const {
    name,
    username,
    type,
    subscribers,
    category,
    verified,
    imageUrl,
    er,
    growth30d,
  } = channel;

  const [from, to] = gradients[category] ?? ['#229ED9', '#6741d9'];

  return (
    <Card
      padding="sm"
      radius="md"
      withBorder
      style={{ cursor: 'pointer', transition: 'transform 150ms, box-shadow 150ms' }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(16,18,22,.10)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <Group gap="sm" wrap="nowrap" mb="sm">
        <Avatar
          size={46}
          radius={12}
          variant="gradient"
          gradient={{ from, to, deg: 135 }}
          src={imageUrl || undefined}
        >
          {initials(name)}
        </Avatar>
        <div style={{ flex: 1, minWidth: 0 }}>
          <Group gap={4} wrap="nowrap">
            <Text fw={800} size="15px" truncate="end">
              {name}
            </Text>
            {verified && (
              <IconCheck
                size={14}
                color="var(--mantine-color-blue-5)"
                style={{ flexShrink: 0 }}
              />
            )}
          </Group>
          <Text size="xs" variant="dimmed" truncate="end">
            {username}
          </Text>
        </div>
      </Group>

      <Group gap="xs" mb="sm">
        <Badge
          size="sm"
          radius="sm"
          variant="light"
          color={type === 'channel' ? 'tggreen' : 'tgpurple'}
        >
          {type === 'channel' ? 'Канал' : 'Группа'}
        </Badge>
        <Badge
          size="sm"
          radius="sm"
          variant="light"
          color="tgblue"
        >
          {category}
        </Badge>
      </Group>

      <Group gap="md" wrap="nowrap">
        <Text size="xs" variant="dimmed">
          {formatNumberShort(subscribers)} {type === 'channel' ? 'подписчиков' : 'участников'}
        </Text>
        <Text size="xs" fw={600} c="green">
          ER {er.toFixed(1)}%
        </Text>
        <Text
          size="xs"
          fw={600}
          c={growth30d >= 0 ? 'green' : 'red'}
        >
          {growth30d >= 0 ? '+' : ''}
          {growth30d.toFixed(1)}%
        </Text>
      </Group>
    </Card>
  );
};

export default ChannelCard;
