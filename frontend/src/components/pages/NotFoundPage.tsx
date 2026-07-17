import {
  AppShell,
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Divider,
  Group,
  NavLink,
  Paper,
  Progress,
  ScrollArea,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  ThemeIcon,
  Title,
} from "@mantine/core";
import {
  IconHome,
  IconLayoutGrid,
  IconBookmarks,
  IconChartBar,
  IconArrowsDiff,
  IconSparkles,
  IconArticle,
  IconUser,
  IconSettings,
  IconSearch,
} from "@tabler/icons-react";

const menu = [
  { label: "Главная", icon: IconHome },
  { label: "Каталог каналов", icon: IconLayoutGrid },
  { label: "Подборки", icon: IconBookmarks },
  { label: "Дашборд канала", icon: IconChartBar },
  { label: "Сравнение", icon: IconArrowsDiff },
  { label: "AI-кабинет", icon: IconSparkles, active: true },
  { label: "Блог", icon: IconArticle },
  { label: "Личный кабинет", icon: IconUser },
  { label: "Админка", icon: IconSettings },
];

export default function NotFoundPage() {
  return (
    <AppShell
      padding={0}
      navbar={{
        width: 280,
        breakpoint: "sm",
      }}
      header={{
        height: 72,
      }}
    >
      <AppShell.Navbar p="md">
        <Stack h="100%" justify="space-between">
          <Box>
            <Group mb="xl">
              <Avatar color="blue" radius="md">
                t
              </Avatar>
              <Title order={3}>tgpulse</Title>
            </Group>

            <Stack gap={4}>
              {menu.map((item) => (
                <NavLink
                  key={item.label}
                  label={item.label}
                  leftSection={
                    <ThemeIcon
                      variant={item.active ? "filled" : "light"}
                      radius="xl"
                      size="sm"
                    >
                      <item.icon size={16} />
                    </ThemeIcon>
                  }
                  active={item.active}
                />
              ))}
            </Stack>
          </Box>

          <Card withBorder radius="lg">
            <Stack gap="xs">
              <Text fw={700}>Тариф Free</Text>

              <Text size="sm" c="dimmed">
                3 из 15 AI-разборов в этом месяце
              </Text>

              <Progress value={20} radius="xl" />

              <Button fullWidth radius="md">
                Улучшить тариф
              </Button>
            </Stack>
          </Card>
        </Stack>
      </AppShell.Navbar>

      <AppShell.Header px="xl">
        <Group h="100%" justify="space-between">
          <TextInput
            leftSection={<IconSearch size={16} />}
            placeholder="Поиск канала по @username, названию или теме..."
            w={520}
          />

          <Group>
            <Button radius="xl" leftSection={<IconSparkles size={16} />}>
              AI-разбор
            </Button>

            <Button variant="subtle">Войти</Button>

            <Group gap={8}>
              <Text fw={500}>Мария Л.</Text>
              <Avatar color="pink">M</Avatar>
            </Group>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Main bg="#f5f7fb">
        <ScrollArea h="calc(100vh - 72px)">
          <Paper
            radius={0}
            style={{
              minHeight: 520,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Stack align="center" gap="xs">
              <Title
                order={1}
                c="blue"
                style={{
                  fontSize: 120,
                  lineHeight: 1,
                  fontWeight: 700,
                }}
              >
                404
              </Title>

              <Title order={2}>Страница не найдена</Title>

              <Text c="dimmed" ta="center" maw={520}>
                Возможно, канал удалён или ссылка устарела. Попробуйте начать с
                главной или загляните в каталог.
              </Text>

              <Group mt="md">
                <Button radius="md">На главную</Button>

                <Button variant="default" radius="md">
                  В каталог
                </Button>
              </Group>
            </Stack>
          </Paper>

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
        </ScrollArea>
      </AppShell.Main>
    </AppShell>
  );
}
