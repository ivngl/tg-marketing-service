import { useDisclosure } from "@mantine/hooks";
import {
  AppShell,
  Avatar,
  Box,
  Burger,
  Button,
  Group,
  NavLink,
  Stack,
  Text,
  Grid,
  TextInput,
  Container,
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

const sidebar = [
  { label: "Главная", icon: IconHome },
  { label: "Каталог каналов", icon: IconLayoutGrid },
  { label: "Подборки", icon: IconBookmarks },
  { label: "Дашборд канала", icon: IconChartBar },
  { label: "Сравнение", icon: IconArrowsDiff },
  { label: "AI-кабинет", icon: IconSparkles },
  { label: "Блог", icon: IconArticle },
  { label: "Личный кабинет", icon: IconUser },
  { label: "Админка", icon: IconSettings, active: true },
];

export default function Layout() {
  const [opened, { toggle }] = useDisclosure(false);

  return (


<Grid gutter={0}>
  <Grid.Col span={{ base: 12, sm: 3 }}>
    {/* Sidebar */}
  </Grid.Col>

  <Grid.Col span={{ base: 12, sm: 9 }}>
    <Group justify="flex-end" mb="xl">
      <TextInput w={420} />
      <Button>AI-разбор</Button>
      <Button variant="subtle">Войти</Button>
      <Avatar>M</Avatar>
    </Group>

    {/* Page */}
  </Grid.Col>
</Grid>


  );
}
