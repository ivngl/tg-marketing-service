import React from 'react';
import {
  Badge,
  Box,
  Button,
  Card,
  Container,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  ThemeIcon,
  Title,
} from '@mantine/core';
import { IconBulb, IconSend, IconSparkles, IconTrendingUp, IconAlertTriangle, IconThumbUp } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

const ideas = [
  {
    icon: IconBulb,
    title: 'Обзор новых функций Telegram',
    reason: 'Актуальная тема, растущий интерес',
    chips: ['~48K охват', 'чт 19:30'],
  },
  {
    icon: IconTrendingUp,
    title: 'Как монетизировать Telegram-канал',
    reason: 'Высокий спрос среди авторов',
    chips: ['~62K охват', 'ср 20:00'],
  },
  {
    icon: IconBulb,
    title: 'Топ-10 ботов для автоматизации',
    reason: 'Техническая аудитория ищет инструменты',
    chips: ['~35K охват', 'пт 18:00'],
  },
];

const insights = [
  { type: 'recommendation', icon: IconBulb, color: 'green', bg: '#e6fcf5', text: 'Публикуйте посты в среду в 19:00 — пик активности' },
  { type: 'trend', icon: IconTrendingUp, color: 'tgblue', bg: '#E7F5FB', text: 'Вовлечённость выросла на 12% за месяц' },
  { type: 'warning', icon: IconAlertTriangle, color: 'orange', bg: '#fff4e6', text: 'Частота публикаций упала — рекомендуем 3-4 поста в неделю' },
  { type: 'positive', icon: IconThumbUp, color: 'green', bg: '#e6fcf5', text: 'Новых подписчиков больше, чем отписок в 3.2 раза' },
];

const competitors = [
  { name: '@techreview', er: 9.2, delta: +1.1 },
  { name: '@droider', er: 7.8, delta: -0.5 },
  { name: '@habr', er: 6.1, delta: -2.2 },
];

const quickQuestions = [
  'Лучшее время для постов',
  'Как увеличить охват',
  'Тренды недели',
  'Анализ конкурентов',
];

const AICabinetPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box bg="gray.0" mih="100vh">
      <Container size="xl" py={40} px="md">
        <Group gap="sm" mb="lg">
          <ThemeIcon size={36} radius="md" variant="gradient" gradient={{ from: 'tgblue', to: 'tgpurple', deg: 135 }}>
            <IconSparkles size={20} />
          </ThemeIcon>
          <Title order={1}>AI-кабинет автора</Title>
        </Group>

        <SimpleGrid cols={{ base: 1, lg: 2 }} spacing="lg">
          <Stack gap="lg">
            <Card withBorder p="lg" radius="md">
              <Title order={3} mb="md">
                О чём написать на этой неделе
              </Title>
              <Stack gap="md">
                {ideas.map((idea) => (
                  <Paper key={idea.title} p="md" radius="md" withBorder>
                    <Group gap="sm" mb="xs">
                      <ThemeIcon size={28} variant="light" color="tgpurple">
                        <idea.icon size={16} />
                      </ThemeIcon>
                      <Text fw={700} size="sm">
                        {idea.title}
                      </Text>
                    </Group>
                    <Text size="xs" c="dimmed" mb="xs">
                      {idea.reason}
                    </Text>
                    <Group justify="space-between">
                      <Group gap="xs">
                        {idea.chips.map((chip) => (
                          <Badge key={chip} size="xs" variant="light" color="gray">
                            {chip}
                          </Badge>
                        ))}
                      </Group>
                      <Button
                        size="xs"
                        variant="filled"
                        color="tgpurple"
                      >
                        Написать
                      </Button>
                    </Group>
                  </Paper>
                ))}
              </Stack>
            </Card>

            <Card withBorder p="lg" radius="md">
              <Title order={3} mb="md">
                Конкуренты
              </Title>
              <Stack gap="sm">
                {competitors.map((c) => (
                  <Group key={c.name} justify="space-between">
                    <Text size="sm" fw={500}>
                      {c.name}
                    </Text>
                    <Group gap="xs">
                      <Text size="xs" c="dimmed">
                        ER {c.er}%
                      </Text>
                      <Badge
                        size="xs"
                        variant="light"
                        color={c.delta >= 0 ? 'green' : 'red'}
                      >
                        {c.delta >= 0 ? '+' : ''}{c.delta}%
                      </Badge>
                    </Group>
                  </Group>
                ))}
              </Stack>
              <Group mt="md" gap="sm">
                <Button size="xs" variant="light" color="tgblue">
                  + Добавить
                </Button>
                <Button
                  size="xs"
                  variant="subtle"
                  color="tgblue"
                  onClick={() => navigate('/compare')}
                >
                  Сравнить все каналы
                </Button>
              </Group>
            </Card>
          </Stack>

          <Stack gap="lg">
            <Card withBorder p="lg" radius="md">
              <Title order={3} mb="md">
                Инсайты недели
              </Title>
              <Stack gap="sm">
                {insights.map((ins, i) => (
                  <Paper
                    key={i}
                    p="sm"
                    radius="md"
                    style={{ borderLeft: `3px solid var(--mantine-color-${ins.color}-6)`, backgroundColor: ins.bg }}
                  >
                    <Group gap="xs">
                      <ins.icon size={14} color={`var(--mantine-color-${ins.color}-6)`} />
                      <Text size="sm">{ins.text}</Text>
                    </Group>
                  </Paper>
                ))}
              </Stack>
            </Card>

            <Card withBorder p="lg" radius="md">
              <Title order={3} mb="md">
                Спросить AI о канале
              </Title>
              <Group gap="xs" mb="md" wrap="wrap">
                {quickQuestions.map((q) => (
                  <Badge key={q} size="md" variant="light" color="tgpurple" style={{ cursor: 'pointer' }}>
                    {q}
                  </Badge>
                ))}
              </Group>
              <TextInput
                placeholder="Задайте вопрос..."
                rightSection={
                  <IconSend
                    size={16}
                    style={{ cursor: 'pointer' }}
                    color="var(--mantine-color-tgpurple-5)"
                  />
                }
              />
            </Card>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default AICabinetPage;
