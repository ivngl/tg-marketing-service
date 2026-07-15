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

export const UserProfilePage: React.FC = () => (
  <Box p="md" style={{ textAlign: 'left' }}>
    <Box mb="md">
      <Title order={1} size="h2" fw={700} mb={4}>
        Личный кабинет
      </Title>
      <Text size="xl" c="dimmed" mb="md">
        Управление аккаунтом и подпиской
      </Text>
    </Box>

    <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
      <Card withBorder p="lg" radius="md">
        <Group mb="md">
          <Avatar size={58} radius="xl" color="blue" variant="gradient">
            U
          </Avatar>
          <Box>
            <Title order={3} size="h4" fw={700}>
              Имя пользователя
            </Title>
            <Text size="sm" c="dimmed">
              user@example.com
            </Text>
          </Box>
        </Group>
        <Group gap="sm">
          <Button
            variant="light"
            size="compact-sm"
            leftSection={<IconEdit size={14} />}
          >
            Редактировать
          </Button>
          <Button
            variant="subtle"
            color="red"
            size="compact-sm"
            leftSection={<IconLogout size={14} />}
          >
            Выйти
          </Button>
        </Group>
      </Card>

      <Card withBorder p="lg" radius="md">
        <Group justify="space-between" mb="md">
          <Title order={3} size="h4" fw={700}>
            Подписка
          </Title>
          <Badge color="blue" variant="light">
            Free
          </Badge>
        </Group>
        <Card
          p="md"
          radius="md"
          style={{ backgroundColor: 'var(--mantine-color-blue-light)' }}
        >
          <Text size="sm" fw={600} mb={4}>
            Получите больше возможностей
          </Text>
          <Text size="xs" c="dimmed" mb="sm">
            Перейдите на Pro для полного доступа к аналитике и AI-инсайтам
          </Text>
          <Button size="compact-sm" variant="filled">
            Перейти на Pro
          </Button>
        </Card>
        <Button variant="subtle" size="compact-sm" mt="sm">
          История платежей
        </Button>
      </Card>
    </SimpleGrid>

    <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg" mt="lg">
      <Card withBorder p="lg" radius="md">
        <Group justify="space-between" mb="md">
          <Title order={3} size="h4" fw={700}>
            Мои каналы и группы
          </Title>
          <Button
            size="compact-sm"
            variant="light"
            leftSection={<IconPlus size={14} />}
          >
            Добавить
          </Button>
        </Group>
        <Text size="sm" c="dimmed">
          У вас пока нет добавленных каналов
        </Text>
      </Card>

      <Card withBorder p="lg" radius="md">
        <Title order={3} size="h4" fw={700} mb="md">
          Уведомления
        </Title>
        <Stack gap="md">
          <Switch label="Email-уведомления о статистике" />
          <Switch label="Новые AI-рекомендации" />
          <Switch label="Обновления тарифа" />
        </Stack>
      </Card>
    </SimpleGrid>
  </Box>
);
