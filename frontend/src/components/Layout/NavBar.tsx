import { Avatar, Box, Button, Card, Group, NavLink, Progress, Stack, Text, ThemeIcon, Title } from '@mantine/core';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  IconHome, IconLayoutGrid, IconChartBar, IconArrowsExchange,
  IconSparkles, IconBooks, IconNews, IconUser,
  IconSettings,
} from '@tabler/icons-react';

const menu = [
  { label: 'Главная', path: '/', icon: IconHome },
  { label: 'Каталог каналов', path: '/channels', icon: IconLayoutGrid },
  { label: 'Подборки', path: '/collections', icon: IconBooks },
  { label: 'Дашборд канала', path: '/dashboard', icon: IconChartBar },
  { label: 'Сравнение', path: '/compare', icon: IconArrowsExchange },
  { label: 'AI-кабинет', path: '/ai-cabinet', icon: IconSparkles },
  { label: 'Блог', path: '/blog', icon: IconNews },
  { label: 'Личный кабинет', path: '/profile', icon: IconUser },
  { label: 'Админка', path: '/admin', icon: IconSettings },
];

interface NavBarProps {
  onClose?: () => void;
}

export function NavBar({ onClose }: NavBarProps) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Stack h="100%" justify="space-between">
      <Box>
        <Group mb="xl">
          <Avatar color="blue" radius="md">t</Avatar>
          <Title order={3}>tgpulse</Title>
        </Group>

        <Stack gap={4}>
          {menu.map((item) => {
            const active = location.pathname === item.path;
            return (
              <NavLink
                key={item.label}
                label={item.label}
                leftSection={
                  <ThemeIcon
                    variant={active ? 'filled' : 'light'}
                    radius="xl"
                    size="sm"
                  >
                    <item.icon size={16} />
                  </ThemeIcon>
                }
                active={active}
                onClick={() => {
                  navigate(item.path);
                  onClose?.();
                }}
              />
            );
          })}
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
  );
}
