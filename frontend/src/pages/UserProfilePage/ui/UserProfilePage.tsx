import React from 'react';
import {
  Badge,
  Box,
  Card,
  Group,
  SimpleGrid,
  Switch,
  Stack,
  Title,
} from '@mantine/core';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/Button';
import { BrandAvatar } from '@/components/ui/BrandAvatar';
import { SectionCard } from '@/components/ui/SectionCard';
import { IconEdit, IconLogout, IconPlus } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

const UserProfilePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box bg="gray.0" mih="100vh">
      <Box p="md" maw={960} mx="auto">
        <Box mb="md">
          <Title order={2}>Личный кабинет</Title>
          <Text color="dimmed">Управление аккаунтом и подпиской</Text>
        </Box>
        <SimpleGrid cols={{ base: 1, md: 2 }}>
          <Card withBorder p="lg" radius="md">
            <Title order={3} mb="md">Профиль</Title>
            <Group gap="md" mb="lg">
              <BrandAvatar name="Алексей Иванов" size={58} />
              <div>
                <Title order={4}>Алексей Иванов</Title>
                <Text size="sm" color="dimmed">alexey@example.com</Text>
              </div>
            </Group>
            <Group gap="sm">
              <Button size="sm" variant="light" color="tgblue" leftSection={<IconEdit size={14} />}>
                Редактировать
              </Button>
              <Button
                size="sm"
                variant="light"
                color="red"
                leftSection={<IconLogout size={14} />}
                onClick={() => navigate('/auth')}
              >
                Выйти
              </Button>
            </Group>
          </Card>

          <SectionCard
            title="Подписка"
            action={<Badge size="lg" variant="light" color="gray">Free</Badge>}
          >
            <Card p="md" radius="md" style={{ backgroundColor: 'var(--mantine-color-tgblue-0)' }} mb="md">
              <Text size="sm" fw={600} mb="xs">Получите больше возможностей</Text>
              <Text size="xs" color="dimmed" mb="sm">AI-инсайты, сравнение каналов, экспорт данных</Text>
              <Button size="sm" variant="filled" color="tgblue" onClick={() => navigate('/')}>
                Перейти на Pro
              </Button>
            </Card>
            <Button size="sm" variant="subtle" color="tgblue">
              История платежей
            </Button>
          </SectionCard>
        </SimpleGrid>

        <SimpleGrid cols={{ base: 1, md: 2 }} mt="lg">
          <SectionCard
            title="Мои каналы и группы"
            action={
              <Button size="xs" variant="light" color="tgblue" leftSection={<IconPlus size={12} />}>
                Добавить
              </Button>
            }
          >
            <Text color="dimmed" size="sm">У вас пока нет добавленных каналов</Text>
          </SectionCard>

          <SectionCard title="Уведомления">
            <Stack gap="md">
              <Group justify="space-between">
                <Text size="sm">Email-уведомления</Text>
                <Switch size="sm" defaultChecked />
              </Group>
              <Group justify="space-between">
                <Text size="sm">AI-рекомендации</Text>
                <Switch size="sm" defaultChecked />
              </Group>
              <Group justify="space-between">
                <Text size="sm">Обновления тарифов</Text>
                <Switch size="sm" />
              </Group>
            </Stack>
          </SectionCard>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default UserProfilePage;
