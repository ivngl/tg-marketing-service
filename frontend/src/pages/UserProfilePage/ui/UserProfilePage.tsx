import React from 'react';
import {
  Badge,
  Box,
  Button,
  Card,
  Group,
  SimpleGrid,
  Stack,
  Switch,
  Text,
  Title,
} from '@mantine/core';;
import { BrandAvatar } from '@/components/ui/BrandAvatar';
import { SectionCard } from '@/components/ui/SectionCard';
import { IconEdit, IconLogout, IconPlus } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import classes from './UserProfilePage.module.css';

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
              <BrandAvatar name="Алексей Иванов" size={58} />
              <div>
                <Title order={4}>Алексей Иванов</Title>
                <Text size="sm" c="dimmed">alexey@example.com</Text>
              </div>
            </Group>
            <Group gap="sm">
              <Button size="sm" color="tgblue" leftSection={<IconEdit size={14} />}>
                Редактировать
              </Button>
              <Button
                size="sm"

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
            action={<Badge size="lg" color="gray">Free</Badge>}
          >
            <Card p="md" radius="md" className={classes.tintedCard} mb="md">
              <Text size="sm" fw={600} mb="xs">Получите больше возможностей</Text>
              <Text size="xs" c="dimmed" mb="sm">AI-инсайты, сравнение каналов, экспорт данных</Text>
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
              <Button size="xs" color="tgblue" leftSection={<IconPlus size={12} />}>
                Добавить
              </Button>
            }
          >
            <Text c="dimmed" size="sm">У вас пока нет добавленных каналов</Text>
          </SectionCard>

          <SectionCard title="Уведомления">
            <Stack>
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
