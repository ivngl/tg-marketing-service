import React from 'react';
import {
  Select,
  TextInput,
  Button,
  Title,
  Box,
  Stack,
  Group,
  SimpleGrid,
  Paper,
  Badge,
  Text,
  Container,
} from '@mantine/core';
import { useMediaQuery } from 'react-responsive';
import { IconCheck } from '@tabler/icons-react';
import ChannelCard from '../ui/ChannelCard.tsx';
import type { Channel, ChannelsProps } from '@/types/channel.ts';
import formatNumberShort from '@/utils/formatNumberShort.ts';
import {
  reduceChannelsByCategory,
  countChannelsByCategory,
  mapCategoryCountEntry,
} from '@/utils/reduceChannels.ts';
import channelsCol from '@/fixtures/channelsCollection.ts';

const defaultChannels = channelsCol;

const Channels: React.FC<ChannelsProps> = ({ channels = defaultChannels }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const countries: string[] = [
    ...new Set(channels.map(({ country }) => country)),
  ];

  const channelsByCategory = Object.entries(
    channels.reduce<Record<string, Channel[]>>(reduceChannelsByCategory, {})
  );

  const categoriesCountObj = channels.reduce(countChannelsByCategory, {});

  const categoriesCounter = Object.entries(categoriesCountObj).map(
    mapCategoryCountEntry
  );

  const categories =
    isMobile || isTablet
      ? categoriesCounter.slice(0, isMobile ? 3 : 12)
      : categoriesCounter.slice(0, 12);

  const isVerifChannels = channels.filter((channel) => channel.verified);

  const channelsForVerif =
    isMobile || isTablet
      ? isVerifChannels.slice(0, isMobile ? 2 : 4)
      : isVerifChannels.slice(0, 6);

  const [countryValue, setCountryValue] = React.useState<string | null>(null);

  return (
    <Box bg="gray.0" style={{ display: 'flex', justifyContent: 'center' }}>
      <Container size="xl" py={60} px="md">
        <Group justify="center">
          <Title order={1} ta="center">Каталог подборок Telegram</Title>
        </Group>

        <Group pt={40} justify="center" gap="md" wrap="wrap">
          <Select
            data={countries.map((c) => ({ value: c, label: c }))}
            placeholder="Выберите страну"
            value={countryValue}
            onChange={setCountryValue}
            w={isMobile ? 250 : 300}
          />
          <TextInput
            type="search"
            placeholder="Поиск по подборкам"
            w={isMobile ? 250 : undefined}
            style={{ flex: 1, maxWidth: 450 }}
          />
          <Button variant="outline" w={isMobile ? 250 : 100}>
            Найти
          </Button>
        </Group>

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="md" py={40}>
          {channels.slice(0, 3).map((channel) => (
            <Box key={channel.id}>
              <ChannelCard channel={channel} />
            </Box>
          ))}
        </SimpleGrid>

        <Stack align="flex-start" my="md">
          <Group gap="sm" pb="md">
            <Title order={2}>Верифицированные подборки</Title>
            <IconCheck size={24} color="var(--mantine-color-blue-5)" />
          </Group>
          <Paper withBorder p="md" radius="md" w="100%">
            <SimpleGrid cols={{ base: 1, lg: 3 }} spacing="md">
              {channelsForVerif.map((channel) => (
                <ChannelCard key={channel.id} channel={channel} />
              ))}
            </SimpleGrid>
          </Paper>
        </Stack>

        <Stack align="flex-start" my="md">
          <Group gap="sm" py="md">
            <Title order={2}>Все категории</Title>
          </Group>
          <Paper withBorder p="md" radius="md" w="100%">
            <SimpleGrid cols={{ base: 1, md: 4 }} spacing="md">
              {categories.map(({ category, count }) => (
                <Paper key={category} withBorder p="sm" radius="md">
                  <Group justify="space-between" wrap="nowrap">
                    <Text fw={500} truncate="end" component="a" href="">{category}</Text>
                    <Text size="xs" c="dimmed">{formatNumberShort(count)}</Text>
                  </Group>
                </Paper>
              ))}
            </SimpleGrid>
          </Paper>
        </Stack>

        <Stack>
          {channelsByCategory.map(([category, chList]) => (
            <Stack key={category} align="flex-start" my="md">
              <Group justify="space-between" w="100" py="md">
                <Title order={2}>{category}</Title>
                <Text size="sm" fw={600} component="a" href="" px="sm">Ещё</Text>
              </Group>
              <Paper withBorder p="md" radius="md" w="100%">
                <SimpleGrid cols={{ base: 1, md: 3, lg: 4 }} spacing="md">
                  {(isMobile || isTablet
                    ? chList.slice(0, isMobile ? 2 : 3)
                    : chList.slice(0, 4)
                  ).map((channel) => (
                    <ChannelCard key={channel.id} channel={channel} />
                  ))}
                </SimpleGrid>
              </Paper>
            </Stack>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Channels;
