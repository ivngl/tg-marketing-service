import { Avatar, Badge, Divider, Group, Paper, SimpleGrid, Stack, Text, Title } from '@mantine/core';

export function Footer() {
  return (
    <>
      <Divider />

      <Paper bg="white" p={48}>
        <SimpleGrid cols={4}>
          <Stack gap={6}>
            <Group>
              <Avatar color="blue">t</Avatar>
              <Title order={4}>tgpulse</Title>
            </Group>

            <Text size="sm" c="dimmed">
              Аналитика Telegram-каналов с искусственным интеллектом.
              Знайте о своём канале больше, чем вы сами.
            </Text>
          </Stack>

          <Stack gap={8}>
            <Text fw={700}>Продукт</Text>
            <Text c="dimmed">Каталог каналов</Text>
            <Text c="dimmed">Подборки</Text>
            <Text c="dimmed">Сравнение</Text>
            <Text c="dimmed">AI-кабинет</Text>
          </Stack>

          <Stack gap={8}>
            <Text fw={700}>Компания</Text>
            <Text c="dimmed">Блог</Text>
            <Text c="dimmed">О сервисе</Text>
            <Text c="dimmed">Регистрация</Text>
            <Text c="dimmed">Войти</Text>
          </Stack>

          <Stack gap={8}>
            <Text fw={700}>Правовое</Text>
            <Text c="dimmed">Конфиденциальность</Text>
            <Text c="dimmed">Соглашение</Text>
            <Text c="dimmed">Публичная оферта</Text>
          </Stack>
        </SimpleGrid>

        <Group justify="space-between" mt={48}>
          <Text size="sm" c="dimmed">
            © 2026 tgpulse · Прототип
          </Text>

          <Badge variant="light">Пример страницы 404 →</Badge>
        </Group>
      </Paper>
    </>
  );
}
