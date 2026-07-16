import { TariffsBlock } from '@/widgets/TariffsBlock';
import { Button } from '@/components/ui/Button';
import { InsightCard } from '@/components/ui/InsightCard';
import { Text } from '@/components/ui/Text';
import {
  Badge,
  Box,
  Card,
  Container,
  Group,
  SimpleGrid,
  Stack,
  ThemeIcon,
  Title,
} from '@mantine/core';
import {
  IconPresentationAnalytics,
  IconScale,
  IconSparkles,
} from '@tabler/icons-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const stats = [
  { value: '2.4M', label: 'каналов в базе' },
  { value: '18 млрд', label: 'проанализ. постов' },
  { value: '120K', label: 'авторов' },
];

const features = [
  {
    icon: IconPresentationAnalytics,
    iconColor: '#F85149',
    iconBg: '#FFF5F5',
    title: 'Статистика каналов',
    description: 'Подписчики, охваты, ER, индекс цитирования, прирост по дням и вовлечённость каждого поста.',
  },
  {
    icon: IconSparkles,
    iconColor: '#7c5cdb',
    iconBg: '#F3F0FF',
    title: 'AI: о чём писать',
    description: 'ИИ анализирует реакции и спрос, предлагает темы постов и лучшее время публикации для роста.',
  },
  {
    icon: IconScale,
    iconColor: '#12b886',
    iconBg: '#E6FCF5',
    title: 'Сравнение и подбор',
    description: 'Сравнивайте каналы для закупки рекламы: цена контакта, накрутки, пересечение аудиторий.',
  },
];


const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box bg="gray.0" mih="100vh">
      {/* HERO SECTION */}
      <Box component="section" bg="white" py={80} style={{ borderBottom: '1px solid var(--mantine-color-gray-3)' }}>
        <Container size="xl">
          <Group gap={60} align="center" wrap="wrap">
            <Stack style={{ flex: '1.1 1 0', minWidth: 320 }} gap="xl">
              <Badge
                variant="light"
                color="tgblue"
                size="lg"
                radius="xl"
                styles={{
                  root: {
                    textTransform: 'none',
                    fontWeight: 600,
                    padding: '8px 16px',
                    height: 'auto',
                    fontSize: 'var(--mantine-font-size-sm)',
                  },
                }}
              >
                ✦ Аналитика Telegram с искусственным интеллектом
              </Badge>

              <Title order={1}>
                Знайте о своём канале
                <br />
                больше, чем вы сами
              </Title>

              <Text size="lg" color="dimmed" lh={1.5} maw={500}>
                Статистика, охваты и реакции каждого поста — и AI, который подсказывает,{' '}
                <span style={{ fontWeight: 700, color: 'var(--mantine-color-primary-5)' }}>о чём писать дальше</span>, чтобы расти быстрее.
              </Text>

              <Group gap="md">
                <Button
                  size="md"
                  onClick={() => navigate('/channels')}
                >
                  Добавить свой канал
                </Button>
                <Button
                  variant="default"
                  size="md"
                  onClick={() => navigate('/channels')}
                  style={{
                    backgroundColor: 'var(--mantine-color-gray-0)',
                    borderColor: 'var(--mantine-color-gray-3)',
                    color: 'var(--mantine-color-primary-5)',
                  }}
                >
                  Каталог каналов
                </Button>
              </Group>

              <Group gap={48} mt="lg">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <Text fw={800} color="primary" lh={1.1} style={{ fontSize: '32px' }}>
                      {stat.value}
                    </Text>
                    <Text size="sm" color="dimmed" mt="xs">
                      {stat.label}
                    </Text>
                  </div>
                ))}
              </Group>
            </Stack>
            <Box style={{ flex: '0.9 1 0', minWidth: 320 }}>
              <Card
                padding="lg"
                radius="lg"
                style={{
                  border: '1px solid var(--mantine-color-gray-3)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.06)',
                  width: '100%',
                  maxWidth: '430px',
                  marginLeft: 'auto',
                }}
              >
                <Group justify="space-between" mb="lg">
                  <Group gap={6}>
                    <ThemeIcon size={22} radius="xl" color="tgblue">
                      <IconSparkles size={12} />
                    </ThemeIcon>
                    <Text size="md" fw={700} color="primary">
                      AI-помощник редактора
                    </Text>
                  </Group>
                  <Text size="xs" c="gray.5">
                    @product_radar
                  </Text>
                </Group>

                <Stack gap="md">
                  <InsightCard color="green" label="РЕКОМЕНДАЦИЯ">
                    <Text size="xs" color="secondary" lh={1.4}>
                      Разборы кейсов дают <span style={{ fontWeight: 700 }}>+34%</span> реакций. Запланируйте один на этой неделе.
                    </Text>
                  </InsightCard>

                  <InsightCard color="blue" label="ТРЕНД">
                    <Text size="xs" color="secondary" lh={1.4}>
                      Тема <span style={{ fontWeight: 700 }}>AI-агентов +180%</span> за 30 дней — ниша ещё свободна.
                    </Text>
                  </InsightCard>

                  <InsightCard color="purple">
                    <Group gap={6} align="flex-start" wrap="nowrap">
                      <Text size="lg">🎯</Text>
                      <Box>
                        <Text size="sm" fw={700} color="primary" mb={2}>
                          «Как AI-агенты меняют онбординг»
                        </Text>
                        <Text size="xs" fw={600} c="tggreen.7">
                          Прогноз ~48K охват <span style={{ color: 'var(--mantine-color-muted-5)', fontWeight: 400 }}>• чт 19:30</span>
                        </Text>
                      </Box>
                    </Group>
                  </InsightCard>
                </Stack>
              </Card>
            </Box>
          </Group>
        </Container>
      </Box>

      <Box component="section" bg="gray.0" py={80}>
        <Container size="xl">
          <Stack gap={10} align="center" mb={50}>
            <Title order={2} ta="center">
              Всё, что умеет tgstats — и AI сверху
            </Title>
            <Text color="dimmed" ta="center" maw={600} style={{ fontSize: '15px' }}>
              Полная статистика каналов плюс рекомендательный слой на искусственном интеллекте
            </Text>
          </Stack>

          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl">
            {features.map((f) => (
              <Card
                key={f.title}
                padding="lg"
                radius="lg"
                style={{
                  border: '1px solid var(--mantine-color-gray-3)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.02)',
                }}
              >
                <ThemeIcon
                  size={48}
                  radius="md"
                  style={{
                    backgroundColor: f.iconBg,
                    color: f.iconColor,
                    marginBottom: '20px',
                  }}
                >
                  <f.icon size={24} />
                </ThemeIcon>
                <Title order={3} mb="xs">
                  {f.title}
                </Title>
                <Text size="sm" color="dimmed" lh={1.5}>
                  {f.description}
                </Text>
              </Card>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
      <TariffsBlock />
      <FooterCustom navigate={navigate} />
    </Box>
  );
};

export default LandingPage;

const FooterCustom: React.FC<{ navigate: any }> = ({ navigate }) => {
  return (
    <Box component="footer" bg="gray.0" py={60} style={{ borderTop: '1px solid var(--mantine-color-gray-3)' }}>
      <Container size="xl">
        <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing={40}>
          <Stack gap="md">
            <Group gap="xs">
              <ThemeIcon size={24} radius="xl" color="tgblue">
                <span style={{ fontSize: 'var(--mantine-font-size-xs)', fontWeight: 800 }}>t</span>
              </ThemeIcon>
              <Text fw={800} size="lg" color="primary">tgpulse</Text>
            </Group>
            <Text size="sm" color="dimmed" lh={1.5} maw={240}>
              Аналитика Telegram-каналов с искусственным интеллектом. Знайте о своём канале больше, чем вы сами.
            </Text>
          </Stack>

          <Stack gap="sm">
            <Text fw={800} size="md" color="primary">Продукт</Text>
            <Text
              size="sm"
              color="dimmed"
              style={{ cursor: 'pointer' }}
              onClick={() => navigate('/channels')}
            >
              Каталог каналов
            </Text>
            <Text
              size="sm"
              color="dimmed"
              style={{ cursor: 'pointer' }}
              onClick={() => navigate('/collections')}
            >
              Подборки
            </Text>
          </Stack>

          <Stack gap="sm">
            <Text fw={800} size="md" color="primary">Компания</Text>
            <Text
              size="sm"
              color="dimmed"
              style={{ cursor: 'pointer' }}
              onClick={() => navigate('/blog')}
            >
              Блог
            </Text>
            <Text
              size="sm"
              color="dimmed"
              style={{ cursor: 'pointer' }}
              onClick={() => navigate('/')}
            >
              О сервисе
            </Text>
          </Stack>

          <Stack gap="sm">
            <Text fw={800} size="md" color="primary">Правовое</Text>
            <Text
              size="sm"
              color="dimmed"
              style={{ cursor: 'pointer' }}
              onClick={() => navigate('/legal')}
            >
              Конфиденциальность
            </Text>
            <Text
              size="sm"
              color="dimmed"
              style={{ cursor: 'pointer' }}
              onClick={() => navigate('/legal')}
            >
              Соглашение
            </Text>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
