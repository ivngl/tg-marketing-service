import {
  Badge,
  Box,
  Button,
  Card,
  Container,
  Group,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import { InsightCard } from '@/components/ui/InsightCard';
import { TariffsBlock } from '@/widgets/TariffsBlock';
import {
  IconPresentationAnalytics,
  IconScale,
  IconSparkles,
} from '@tabler/icons-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './LandingPage.module.css';

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
      <Box component="section" bg="white" py={80} className={classes.heroSection}>
        <Container>
          <Group gap={60} align="center" wrap="wrap">
            <Stack className={classes.heroStack} gap="xl">
              <Badge
                variant="light"
                color="tgblue"
                size="lg"
               
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

              <Text size="lg" c="dimmed" maw={500}>
                Статистика, охваты и реакции каждого поста — и AI, который подсказывает,{' '}
                <span className={classes.boldPrimary}>о чём писать дальше</span>, чтобы расти быстрее.
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
                >
                  Каталог каналов
                </Button>
              </Group>

              <Group gap={48} mt="lg">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <Text fw={800} c="primary" lh={1.1} fz="32px">
                      {stat.value}
                    </Text>
                    <Text size="sm" c="dimmed" mt="xs">
                      {stat.label}
                    </Text>
                  </div>
                ))}
              </Group>
            </Stack>
            <Box className={classes.heroRight}>
              <Card
                padding="lg"
                radius="lg"
                className={classes.heroCard}
              >
                <Group justify="space-between" mb="lg">
                  <Group gap={6}>
                    <ThemeIcon size={22} color="tgblue">
                      <IconSparkles size={12} />
                    </ThemeIcon>
                    <Text size="md" fw={700} c="primary">
                      AI-помощник редактора
                    </Text>
                  </Group>
                  <Text size="xs" c="gray.5">
                    @product_radar
                  </Text>
                </Group>

                <Stack>
                  <InsightCard color="green" label="РЕКОМЕНДАЦИЯ">
                    <Text size="xs" c="secondary" lh={1.4}>
                      Разборы кейсов дают <span className={classes.bold}>+34%</span> реакций. Запланируйте один на этой неделе.
                    </Text>
                  </InsightCard>

                  <InsightCard color="blue" label="ТРЕНД">
                    <Text size="xs" c="secondary" lh={1.4}>
                      Тема <span className={classes.bold}>AI-агентов +180%</span> за 30 дней — ниша ещё свободна.
                    </Text>
                  </InsightCard>

                  <InsightCard color="purple">
                    <Group gap={6} align="flex-start" wrap="nowrap">
                      <Text size="lg">🎯</Text>
                      <Box>
                        <Text size="sm" fw={700} c="primary" mb={2}>
                          «Как AI-агенты меняют онбординг»
                        </Text>
                        <Text size="xs" fw={600} c="tggreen.7">
                          Прогноз ~48K охват <span className={classes.boldMuted}>• чт 19:30</span>
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
        <Container>
          <Stack gap={10} align="center" mb={50}>
            <Title order={2} ta="center">
              Всё, что умеет tgstats — и AI сверху
            </Title>
            <Text c="dimmed" ta="center" maw={600} fz="15px">
              Полная статистика каналов плюс рекомендательный слой на искусственном интеллекте
            </Text>
          </Stack>

          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl">
            {features.map((f) => (
              <Card
                key={f.title}
                padding="lg"
                radius="lg"
                className={classes.heroFeatureCard}
              >
                <ThemeIcon
                  size={48}
                  radius="md"
                  bg={f.iconBg}
                  c={f.iconColor}
                  className={classes.heroFeatureIcon}
                >
                  <f.icon size={24} />
                </ThemeIcon>
                <Title order={3} mb="xs">
                  {f.title}
                </Title>
                <Text size="sm" c="dimmed">
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
    <Box component="footer" bg="gray.0" py={60} className={classes.footerSection}>
      <Container>
        <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing={40}>
          <Stack>
            <Group gap="xs">
              <ThemeIcon size={24} color="tgblue">
                <span className={classes.footerLogoText}>t</span>
              </ThemeIcon>
              <Text fw={800} size="lg" c="primary">tgpulse</Text>
            </Group>
            <Text size="sm" c="dimmed" maw={240}>
              Аналитика Telegram-каналов с искусственным интеллектом. Знайте о своём канале больше, чем вы сами.
            </Text>
          </Stack>

          <Stack gap="sm">
            <Text fw={800} size="md" c="primary">Продукт</Text>
            <Text
              size="sm"
              color="dimmed"
              className={classes.clickable}
              onClick={() => navigate('/channels')}
            >
              Каталог каналов
            </Text>
            <Text
              size="sm"
              color="dimmed"
              className={classes.clickable}
              onClick={() => navigate('/collections')}
            >
              Подборки
            </Text>
          </Stack>

          <Stack gap="sm">
            <Text fw={800} size="md" c="primary">Компания</Text>
            <Text
              size="sm"
              color="dimmed"
              className={classes.clickable}
              onClick={() => navigate('/blog')}
            >
              Блог
            </Text>
            <Text
              size="sm"
              color="dimmed"
              className={classes.clickable}
              onClick={() => navigate('/')}
            >
              О сервисе
            </Text>
          </Stack>

          <Stack gap="sm">
            <Text fw={800} size="md" c="primary">Правовое</Text>
            <Text
              size="sm"
              color="dimmed"
              className={classes.clickable}
              onClick={() => navigate('/legal')}
            >
              Конфиденциальность
            </Text>
            <Text
              size="sm"
              color="dimmed"
              className={classes.clickable}
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
