import React from 'react';
import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Group,
  SimpleGrid,
  Switch,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { IconEdit, IconLogout, IconPlus } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

const UserProfilePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box bg="gray.0" mih="100vh">
      <Box p="md" maw={960} mx="auto">
        <Box mb="md">
          <Title order={2}>Личный кабинет</Title>
          <Text c="dimmed">Управление аккаунтом и подпиской</Text>
        </Box>
        <SimpleGrid cols={{ base: 1, md: 2 }}>
          <Card withBorder p="lg" radius="md">
            <Title order={3} mb="md">Профиль</Title>
            <Group gap="md" mb="lg">
              <Avatar size={58} radius="xl" variant="gradient" gradient={{ from: '#229ED9', to: '#6741d9' }}>
                АИ
              </Avatar>
              <div>
                <Title order={4}>Алексей Иванов</Title>
                <Text size="sm" c="dimmed">alexey@example.com</Text>
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

          <Card withBorder p="lg" radius="md">
            <Group justify="space-between" mb="md">
              <Title order={3}>Подписка</Title>
              <Badge size="lg" variant="light" color="gray">Free</Badge>
            </Group>
            <Card p="md" radius="md" style={{ backgroundColor: 'var(--mantine-color-tgblue-0)' }} mb="md">
              <Text size="sm" fw={600} mb="xs">Получите больше возможностей</Text>
              <Text size="xs" c="dimmed" mb="sm">AI-инсайты, сравнение каналов, экспорт данных</Text>
              <Button size="sm" variant="filled" color="tgblue" onClick={() => navigate('/')}>
                Перейти на Pro
              </Button>
            </Card>
            <Button size="sm" variant="subtle" color="tgblue">
              История платежей
            </Button>
          </Card>
        </SimpleGrid>

        <SimpleGrid cols={{ base: 1, md: 2 }} mt="lg">
          <Card withBorder p="lg" radius="md">
            <Group justify="space-between" mb="md">
              <Title order={3}>Мои каналы и группы</Title>
              <Button size="xs" variant="light" color="tgblue" leftSection={<IconPlus size={12} />}>
                Добавить
              </Button>
            </Group>
            <Text c="dimmed" size="sm">У вас пока нет добавленных каналов</Text>
          </Card>

          <Card withBorder p="lg" radius="md">
            <Title order={3} mb="md">Уведомления</Title>
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
          </Card>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default UserProfilePage;
