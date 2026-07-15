import React from 'react';
import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Container,
  Group,
  Paper,
  SegmentedControl,
  SimpleGrid,
  Stack,
  Table,
  Text,
  Title,
} from '@mantine/core';
import { IconCheck, IconDownload } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import channelsCol from '@/fixtures/channelsCollection';

const channel = channelsCol[0];

const kpis = [
  { label: 'Подписчики', value: '142 340', delta: '+2 480 · 1.8%', positive: true },
  { label: 'Ср. охват', value: '38 200', delta: '+4.1%', positive: true },
  { label: 'ER', value: '26.9%', delta: '−1.2%', positive: false },
  { label: 'Индекс цитирования', value: '184', delta: '+9', positive: true },
];

const posts = [
  { title: 'Обзор нового iPhone 16 Pro', views: '42.1K', reactions: 890, forwards: 234, er: 31.2 },
  { title: 'Сравнение Android vs iOS в 2026', views: '38.7K', reactions: 756, forwards: 189, er: 28.4 },
  { title: 'Топ-10 приложений для продуктивности', views: '31.2K', reactions: 567, forwards: 123, er: 22.1 },
  { title: 'Как заработать на Telegram-канале', views: '12.3K', reactions: 198, forwards: 45, er: 14.8 },
];

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box bg="gray.0" mih="100vh">
      <Container size="xl" py={40} px="md">
        <Group justify="space-between" mb="md">
          <Group gap="md">
            <Avatar
              size={58}
              radius="xl"
              variant="gradient"
              gradient={{ from: '#229ED9', to: '#6741d9', deg: 135 }}
            >
              {channel.name[0]}
            </Avatar>
            <div>
              <Group gap={4}>
                <Title order={2}>{channel.name}</Title>
                {channel.verified && <IconCheck size={18} color="var(--mantine-color-blue-5)" />}
              </Group>
              <Text size="sm" c="dimmed">
                {channel.username} · <Badge size="xs" variant="light">{channel.category}</Badge>
              </Text>
            </div>
          </Group>
          <Group gap="sm">
            <SegmentedControl
              data={[
                { label: '7д', value: '7d' },
                { label: '30д', value: '30d' },
                { label: '90д', value: '90d' },
              ]}
              defaultValue="30d"
              size="sm"
            />
            <Button variant="outline" leftSection={<IconDownload size={16} />} size="sm">
              Экспорт
            </Button>
          </Group>
        </Group>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="md" mb="lg">
          {kpis.map((kpi) => (
            <Card key={kpi.label} p="md" radius="md" withBorder>
              <Text size="xs" c="dimmed" mb={4}>
                {kpi.label}
              </Text>
              <Text fw={800} size="xl" mb={4}>
                {kpi.value}
              </Text>
              <Text
                size="xs"
                fw={600}
                c={kpi.positive ? 'green' : 'red'}
              >
                {kpi.positive ? '▲' : '▼'} {kpi.delta}
              </Text>
            </Card>
          ))}
        </SimpleGrid>

        <SimpleGrid cols={{ base: 1, lg: 2 }} spacing="lg" mb="lg">
          <Card p="md" radius="md" withBorder>
            <Title order={3} mb="md">
              Рост подписчиков
            </Title>
            <Paper
              p="xl"
              radius="md"
              style={{
                height: 200,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'var(--mantine-color-gray-0)',
              }}
            >
              <Text c="dimmed" size="sm">
                График роста (AreaChart)
              </Text>
            </Paper>
          </Card>

          <Card p="md" radius="md" withBorder>
            <Title order={3} mb="md">
              AI-советы
            </Title>
            <Stack gap="sm">
              <Paper
                p="sm"
                radius="md"
                style={{ borderLeft: '3px solid var(--mantine-color-green-6)' }}
              >
                <Text size="sm" fw={600} mb={2}>
                  Рекомендация
                </Text>
                <Text size="xs" c="dimmed">
                  Публикуйте посты в среду в 19:00 — ваша аудитория наиболее активна
                </Text>
              </Paper>
              <Paper
                p="sm"
                radius="md"
                style={{ borderLeft: '3px solid var(--mantine-color-tgblue-5)' }}
              >
                <Text size="sm" fw={600} mb={2}>
                  Тренд
                </Text>
                <Text size="xs" c="dimmed">
                  Вовлечённость выросла на 12% за последние 30 дней
                </Text>
              </Paper>
            </Stack>
            <Button
              variant="light"
              color="tgblue"
              size="sm"
              mt="md"
              fullWidth
              onClick={() => navigate('/ai-cabinet')}
            >
              Открыть AI-кабинет
            </Button>
          </Card>
        </SimpleGrid>

        <Card p="md" radius="md" withBorder>
          <Title order={3} mb="md">
            Последние посты
          </Title>
          <Table striped highlightOnHover>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Пост</Table.Th>
                <Table.Th ta="right">Просмотры</Table.Th>
                <Table.Th ta="right">Реакции</Table.Th>
                <Table.Th ta="right">Пересылки</Table.Th>
                <Table.Th ta="right">ER</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {posts.map((post) => (
                <Table.Tr
                  key={post.title}
                  style={{ cursor: 'pointer' }}
                  onClick={() => navigate('/post')}
                >
                  <Table.Td>{post.title}</Table.Td>
                  <Table.Td ta="right">{post.views}</Table.Td>
                  <Table.Td ta="right" c="green">
                    {post.reactions}
                  </Table.Td>
                  <Table.Td ta="right">{post.forwards}</Table.Td>
                  <Table.Td ta="right">
                    <Badge
                      size="sm"
                      variant="light"
                      color={post.er >= 25 ? 'green' : post.er >= 15 ? 'yellow' : 'red'}
                    >
                      {post.er}%
                    </Badge>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Card>
      </Container>
    </Box>
  );
};

export default DashboardPage;
