import React, { useMemo, useState } from 'react';
import {
  Badge,
  Group,
  SegmentedControl,
  SimpleGrid,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { PageShell } from '@/components/ui/PageShell';
import { IconSearch } from '@tabler/icons-react';
import ChannelCard from '../ui/ChannelCard';
import type { ChannelsProps } from '@/types/channel';
import channelsCol from '@/fixtures/channelsCollection';

const defaultChannels = channelsCol;

type TypeFilter = 'all' | 'channel' | 'group';

const Channels: React.FC<ChannelsProps> = ({ channels = defaultChannels }) => {
  const [query, setQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<TypeFilter>('all');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const sortedChannels = useMemo(
    () => [...channels].sort((a, b) => b.subscribers - a.subscribers),
    [channels],
  );

  const categories = useMemo(() => {
    const map = new Map<string, number>();
    for (const ch of sortedChannels) {
      map.set(ch.category, (map.get(ch.category) ?? 0) + 1);
    }
    return Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
  }, [sortedChannels]);

  const filtered = useMemo(() => {
    let result = sortedChannels;

    if (typeFilter !== 'all') {
      result = result.filter((ch) => ch.type === typeFilter);
    }

    if (activeCategory) {
      result = result.filter((ch) => ch.category === activeCategory);
    }

    if (query.trim()) {
      const q = query.trim().toLowerCase();
      result = result.filter(
        (ch) =>
          ch.name.toLowerCase().includes(q) ||
          ch.username.toLowerCase().includes(q) ||
          ch.category.toLowerCase().includes(q)
      );
    }

    return result;
  }, [sortedChannels, typeFilter, activeCategory, query]);

  return (
    <PageShell>
        <Group justify="space-between" mb="md">
          <Title order={1}>Каталог каналов и групп</Title>
          <Text c="dimmed" size="sm">
            Найдено: {filtered.length} из {channels.length}
          </Text>
        </Group>

        <Group mb="md" gap="md" wrap="wrap" align="center">
          <TextInput
            placeholder="Поиск по названию, @username или категории"
            leftSection={<IconSearch size={16} />}
            value={query}
            onChange={(e) => setQuery(e.currentTarget.value)}
            style={{ flex: 1, minWidth: 250, maxWidth: 450 }}
          />
          <SegmentedControl
            data={[
              { label: 'Все', value: 'all' },
              { label: 'Каналы', value: 'channel' },
              { label: 'Группы', value: 'group' },
            ]}
            value={typeFilter}
            onChange={(val) => setTypeFilter(val as TypeFilter)}
          />
        </Group>

        <Group gap="xs" mb="lg" wrap="wrap">
          <Badge
            size="lg"
            radius="sm"
            variant={activeCategory === null ? 'filled' : 'light'}
            color={activeCategory === null ? 'blue' : 'gray'}
            style={{ cursor: 'pointer' }}
            onClick={() => setActiveCategory(null)}
          >
            Все
          </Badge>
          {categories.map(([cat, count]) => (
            <Badge
              key={cat}
              size="lg"
              radius="sm"
              variant={activeCategory === cat ? 'filled' : 'light'}
              color={activeCategory === cat ? 'blue' : 'gray'}
              style={{ cursor: 'pointer' }}
              onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
            >
              {cat} ({count})
            </Badge>
          ))}
        </Group>

        {filtered.length === 0 ? (
          <Text c="dimmed" ta="center" py="xl" size="lg">
            Ничего не найдено
          </Text>
        ) : (
          <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing={16}>
            {filtered.map((channel) => (
              <ChannelCard key={channel.id} channel={channel} />
            ))}
          </SimpleGrid>
        )}
      </PageShell>
  );
};

export default Channels;
