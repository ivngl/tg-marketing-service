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
  IconBrain,
  IconChartBar,
  IconTrendingUp,
} from '@tabler/icons-react';
import { AiDemoBlock } from '@/widgets/AiDemoBlock/ui/AiDemoBlock';
import { ProcessStepsBlocks } from '@/widgets/ProcessStepsBlocks/ui/ProcessStepsBlocks';
import { TariffsBlock } from '@/widgets/TariffsBlock/ui/TariffsBlock';
import { FaqBlock } from '@/widgets/FaqBlock/ui/FaqBlock';

const stats = [
  { value: '2.4M', label: 'Каналов' },
  { value: '18 млрд', label: 'Постов' },
  { value: '120K', label: 'Авторов' },
];

const features = [
  { icon: IconBrain, title: 'AI-аналитика', description: 'Искусственный интеллект анализирует контент и даёт рекомендации' },
  { icon: IconChartBar, title: 'Статистика', description: 'Подробная статистика по подписчикам, охватам и вовлечённости' },
  { icon: IconTrendingUp, title: 'Рост', description: 'Отслеживайте динамику роста и сравнивайте с конкурентами' },
];

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <section style={{ backgroundColor: '#fff', padding: '60px 0' }}>
        <Container size="xl">
          <Group gap={60} align="center" wrap="wrap">
            <Stack style={{ flex: '1.05 1 0', minWidth: 320 }} gap="lg">
              <Badge variant="light" color="tgblue" size="lg" radius="xl">
                Аналитика Telegram с AI
              </Badge>
              <Title order={1} fw={800} style={{ fontSize: '44px', lineHeight: 1.2 }}>
                Telegram-аналитика
                <br />
                нового поколения
              </Title>
              <Text size="lg" c="dimmed" maw={480}>
                Анализируйте каналы, получайте AI-инсайты, сравнивайте с конкурентами
                и растите быстрее.
              </Text>
              <Group gap="md">
                <Button
                  size="lg"
                  variant="filled"
                  color="tgblue"
                  onClick={() => navigate('/channels')}
                >
                  Каталог каналов
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  color="tgblue"
                >
                  Добавить свой канал
                </Button>
              </Group>
              <Group gap="xl" mt="md">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <Text fw={700} size="xl">
                      {stat.value}
                    </Text>
                    <Text size="sm" c="dimmed">
                      {stat.label}
                    </Text>
                  </div>
                ))}
              </Group>
            </Stack>
            <Box style={{ flex: '0.95 1 0', minWidth: 300 }}>
              <AiDemoBlock />
            </Box>
          </Group>
        </Container>
      </section>

      <section style={{ padding: '60px 0' }}>
        <Container size="xl">
          <Title order={2} ta="center" mb="lg">
            Возможности платформы
          </Title>
          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
            {features.map((f) => (
              <Card key={f.title} p="lg" radius="md" withBorder>
                <ThemeIcon size={48} radius="md" variant="light" color="tgblue" mb="md">
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
      </section>

      <ProcessStepsBlocks />

      <section style={{ padding: '60px 0' }}>
        <TariffsBlock />
      </section>

      <section style={{ padding: '60px 0', backgroundColor: '#fff' }}>
        <FaqBlock />
      </section>

      <Box component="footer" p="xl" ta="center" c="dimmed" size="sm">
        <Text size="sm">
          TG Pulse — Аналитика Telegram-каналов с AI
        </Text>
      </Box>
    </Box>
  );
};

export default LandingPage;
