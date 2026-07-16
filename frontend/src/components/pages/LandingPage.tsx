import React from 'react';
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
import { useNavigate } from 'react-router-dom';
import {
  IconScale,
  IconSparkles,
  IconPresentationAnalytics,
} from '@tabler/icons-react';

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
    <Box style={{ backgroundColor: '#F8F9FB', minHeight: '100vh' }}>
      {/* HERO SECTION */}
      <section style={{ backgroundColor: '#FFF', padding: '80px 0 60px 0', borderBottom: '1px solid #E9ECEF' }}>
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
                    fontSize: '13px',
                  },
                }}
              >
                ✦ Аналитика Telegram с искусственным интеллектом
              </Badge>

              <Title order={1} style={{ fontSize: '46px', fontWeight: 850, lineHeight: 1.15, color: '#111' }}>
                Знайте о своём канале
                <br />
                больше, чем вы сами
              </Title>

              <Text style={{ fontSize: '16px', color: '#687588', lineHeight: 1.5, maxWidth: 500 }}>
                Статистика, охваты и реакции каждого поста — и AI, который подсказывает,{' '}
                <span style={{ fontWeight: 700, color: '#111' }}>о чём писать дальше</span>, чтобы расти быстрее.
              </Text>

              <Group gap="md">
                <Button
                  size="md"
                  color="tgblue"
                  onClick={() => navigate('/channels')}
                  style={{
                    fontWeight: 600,
                    height: '46px',
                    padding: '0 24px',
                    borderRadius: '8px',
                  }}
                >
                  Добавить свой канал
                </Button>
                <Button
                  size="md"
                  variant="default"
                  onClick={() => navigate('/channels')}
                  style={{
                    fontWeight: 600,
                    height: '46px',
                    padding: '0 24px',
                    borderRadius: '8px',
                    backgroundColor: '#F8F9FB',
                    borderColor: '#E9ECEF',
                    color: '#111',
                  }}
                >
                  Каталог каналов
                </Button>
              </Group>

              <Group gap={48} mt="lg">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <Text style={{ fontSize: '32px', fontWeight: 800, color: '#111', lineHeight: '1.1' }}>
                      {stat.value}
                    </Text>
                    <Text style={{ fontSize: '13px', color: '#687588', marginTop: '4px' }}>
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
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E9ECEF',
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
                    <Text style={{ fontSize: '14px', fontWeight: 750, color: '#111' }}>
                      AI-помощник редактора
                    </Text>
                  </Group>
                  <Text style={{ fontSize: '12px', color: '#A0AEC0' }}>
                    @product_radar
                  </Text>
                </Group>

                <Stack gap="md">
                  {/* Recommendation Block */}
                  <Box
                    p="sm"
                    style={{
                      backgroundColor: '#F4FBF6',
                      borderLeft: '4px solid #40C057',
                      borderRadius: '0 8px 8px 0',
                    }}
                  >
                    <Text style={{ fontSize: '10px', fontWeight: 800, color: '#40C057', letterSpacing: '0.5px' }} mb={4}>
                      РЕКОМЕНДАЦИЯ
                    </Text>
                    <Text style={{ fontSize: '12px', color: '#2D3748', lineHeight: 1.4 }}>
                      Разборы кейсов дают <span style={{ fontWeight: 700 }}>+34%</span> реакций. Запланируйте один на этой неделе.
                    </Text>
                  </Box>

                  {/* Trend Block */}
                  <Box
                    p="sm"
                    style={{
                      backgroundColor: '#E7F5FB',
                      borderLeft: '4px solid #1B87BC',
                      borderRadius: '0 8px 8px 0',
                    }}
                  >
                    <Text style={{ fontSize: '10px', fontWeight: 800, color: '#1182C5', letterSpacing: '0.5px' }} mb={4}>
                      ТРЕНД
                    </Text>
                    <Text style={{ fontSize: '12px', color: '#2D3748', lineHeight: 1.4 }}>
                      Тема <span style={{ fontWeight: 700 }}>AI-агентов +180%</span> за 30 дней — ниша ещё свободна.
                    </Text>
                  </Box>

                  {/* Post Card Block */}
                  <Box
                    p="sm"
                    style={{
                      backgroundColor: '#F3F0FF',
                      borderLeft: '4px solid #7c5cdb',
                      borderRadius: '0 8px 8px 0',
                    }}
                  >
                    <Group gap={6} align="flex-start" wrap="nowrap">
                      <Text style={{ fontSize: '16px' }}>🎯</Text>
                      <Box>
                        <Text style={{ fontSize: '12.5px', fontWeight: 700, color: '#111' }} mb={2}>
                          «Как AI-агенты меняют онбординг»
                        </Text>
                        <Text style={{ fontSize: '12px', color: '#12b886', fontWeight: 600 }}>
                          Прогноз ~48K охват <span style={{ color: '#4A5568', fontWeight: 400 }}>• чт 19:30</span>
                        </Text>
                      </Box>
                    </Group>
                  </Box>
                </Stack>
              </Card>
            </Box>
          </Group>
        </Container>
      </section>

      <section style={{ padding: '80px 0', backgroundColor: '#F8F9FB' }}>
        <Container size="xl">
          <Stack gap={10} align="center" mb={50}>
            <Title order={2} style={{ fontSize: '32px', fontWeight: 800, color: '#111', textAlign: 'center' }}>
              Всё, что умеет tgstats — и AI сверху
            </Title>
            <Text style={{ fontSize: '15px', color: '#687588', textAlign: 'center', maxWidth: '600px' }}>
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
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E9ECEF',
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
                <Title order={3} style={{ fontSize: '16px', fontWeight: 800, color: '#111', marginBottom: '8px' }}>
                  {f.title}
                </Title>
                <Text style={{ fontSize: '13px', color: '#687588', lineHeight: 1.5 }}>
                  {f.description}
                </Text>
              </Card>
            ))}
          </SimpleGrid>
        </Container>
      </section>



      <TariffsBlockCustom navigate={navigate} />

      <FooterCustom navigate={navigate} />
    </Box>
  );
};

export default LandingPage;

const tariffPlans = [
  {
    name: 'Free',
    price: '0 ₽',
    period: 'навсегда',
    features: ['Базовая статистика', '5 AI-разборов / мес', 'Каталог каналов'],
  },
  {
    name: 'Pro',
    price: '990 ₽',
    period: 'в месяц',
    features: ['Всё из Free', 'Безлимит AI-разборов', 'Контент-план на неделю', 'Сравнение до 5 каналов', 'Экспорт отчётов'],
    highlighted: true,
  },
  {
    name: 'Agency',
    price: '4 900 ₽',
    period: 'в месяц',
    features: ['Всё из Pro', 'До 50 каналов', 'API-доступ', 'Командный доступ'],
  }
];

const TariffsBlockCustom: React.FC<{ navigate: any }> = ({ navigate }) => {
  return (
    <section style={{ padding: '80px 0', backgroundColor: '#FFFFFF', borderTop: '1px solid #E9ECEF', borderBottom: '1px solid #E9ECEF' }}>
      <Container size="xl">
        <Title order={2} style={{ fontSize: '32px', fontWeight: 800, color: '#111', textAlign: 'center', marginBottom: '60px' }}>
          Тарифы
        </Title>

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing={32} style={{ alignItems: 'stretch' }}>
          {tariffPlans.map((tariff) => (
            <Card
              key={tariff.name}
              padding="xl"
              radius="lg"
              style={{
                backgroundColor: '#FFFFFF',
                border: tariff.highlighted ? '2px solid #229ED9' : '1px solid #E9ECEF',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'visible',
                boxShadow: tariff.highlighted ? '0 12px 24px rgba(34, 158, 217, 0.08)' : undefined,
              }}
            >
              {tariff.highlighted && (
                <div
                  style={{
                    position: 'absolute',
                    top: '-14px',
                    left: '80px',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#229ED9',
                    color: '#FFFFFF',
                    padding: '4px 14px',
                    borderRadius: '12px',
                    fontSize: '11px',
                    fontWeight: 800,
                    zIndex: 2,
                  }}
                >
                  Популярный
                </div>
              )}

              <Stack gap="md" style={{ flex: 1 }}>
                <Text style={{ fontSize: '14px', fontWeight: 800, color: '#111' }}>{tariff.name}</Text>

                <Stack gap={2}>
                  <Text style={{ fontSize: '34px', fontWeight: 800, color: '#111', lineHeight: 1.1 }}>
                    {tariff.price}
                  </Text>
                  <Text style={{ fontSize: '12px', color: '#A0AEC0' }}>
                    {tariff.period}
                  </Text>
                </Stack>

                <Stack gap="sm" mt="md" mb={tariff.highlighted ? 'xl' : undefined}>
                  {tariff.features.map((feat) => (
                    <Group key={feat} gap={8} wrap="nowrap" align="flex-start">
                      <Text style={{ fontSize: '12.5px', color: '#10B981', fontWeight: 650 }}>✓</Text>
                      <Text style={{ fontSize: '13px', color: '#4A5568' }}>{feat}</Text>
                    </Group>
                  ))}
                </Stack>
              </Stack>

              {tariff.highlighted && (
                <Button
                  size="md"
                  color="tgblue"
                  onClick={() => navigate('/channels')}
                  style={{
                    fontWeight: 700,
                    height: '44px',
                    borderRadius: '8px',
                    marginTop: 'auto',
                  }}
                >
                  Выбрать Pro
                </Button>
              )}
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </section>
  );
};

const FooterCustom: React.FC<{ navigate: any }> = ({ navigate }) => {
  return (
    <Box component="footer" style={{ backgroundColor: '#F8F9FB', padding: '60px 0', borderTop: '1px solid #E9ECEF' }}>
      <Container size="xl">
        <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing={40}>
          <Stack gap="md">
            <Group gap="xs">
              <ThemeIcon size={24} radius="xl" color="tgblue">
                <span style={{ fontSize: '11px', fontWeight: 800 }}>t</span>
              </ThemeIcon>
              <Text style={{ fontWeight: 800, fontSize: '16px', color: '#111' }}>tgpulse</Text>
            </Group>
            <Text style={{ fontSize: '13px', color: '#687588', lineHeight: 1.5, maxWidth: '240px' }}>
              Аналитика Telegram-каналов с искусственным интеллектом. Знайте о своём канале больше, чем вы сами.
            </Text>
          </Stack>

          <Stack gap="sm">
            <Text style={{ fontWeight: 800, fontSize: '14px', color: '#111' }}>Продукт</Text>
            <Text
              onClick={() => navigate('/channels')}
              style={{ fontSize: '13px', color: '#687588', cursor: 'pointer' }}
            >
              Каталог каналов
            </Text>
            <Text
              onClick={() => navigate('/collections')}
              style={{ fontSize: '13px', color: '#687588', cursor: 'pointer' }}
            >
              Подборки
            </Text>
          </Stack>

          <Stack gap="sm">
            <Text style={{ fontWeight: 800, fontSize: '14px', color: '#111' }}>Компания</Text>
            <Text
              onClick={() => navigate('/blog')}
              style={{ fontSize: '13px', color: '#687588', cursor: 'pointer' }}
            >
              Блог
            </Text>
            <Text
              onClick={() => navigate('/')}
              style={{ fontSize: '13px', color: '#687588', cursor: 'pointer' }}
            >
              О сервисе
            </Text>
          </Stack>

          <Stack gap="sm">
            <Text style={{ fontWeight: 800, fontSize: '14px', color: '#111' }}>Правовое</Text>
            <Text
              onClick={() => navigate('/legal')}
              style={{ fontSize: '13px', color: '#687588', cursor: 'pointer' }}
            >
              Конфиденциальность
            </Text>
            <Text
              onClick={() => navigate('/legal')}
              style={{ fontSize: '13px', color: '#687588', cursor: 'pointer' }}
            >
              Соглашение
            </Text>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
