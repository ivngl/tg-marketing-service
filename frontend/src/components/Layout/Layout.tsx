import React, { useState } from 'react';
import { AppShell, Burger, Group, NavLink, Text, TextInput, ThemeIcon } from '@mantine/core';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  IconHome, IconLayoutGrid, IconChartBar, IconArrowsExchange,
  IconSparkles, IconBooks, IconNews, IconUser, IconSearch,
  IconSettings, IconLogout,
} from '@tabler/icons-react';

const navItems = [
  { label: 'Главная', path: '/', icon: IconHome },
  { label: 'Каталог каналов', path: '/channels', icon: IconLayoutGrid },
  { label: 'Дашборд', path: '/dashboard', icon: IconChartBar },
  { label: 'Сравнение', path: '/compare', icon: IconArrowsExchange },
  { label: 'AI-кабинет', path: '/ai-cabinet', icon: IconSparkles },
  { label: 'Подборки', path: '/collections', icon: IconBooks },
  { label: 'Блог', path: '/blog', icon: IconNews },
  { label: 'Профиль', path: '/profile', icon: IconUser },
];

const bottomItems = [
  { label: 'Настройки', path: '/settings', icon: IconSettings },
  { label: 'Выход', path: '/auth', icon: IconLogout },
];

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [navbarOpened, setNavbarOpened] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const renderItem = (item: typeof navItems[number]) => (
    <NavLink
      key={item.path}
      label={item.label}
      leftSection={
        <ThemeIcon variant="subtle" color={location.pathname === item.path ? 'tgblue' : 'gray'} size={32}>
          <item.icon size={18} />
        </ThemeIcon>
      }
      active={location.pathname === item.path}
      onClick={() => { navigate(item.path); setNavbarOpened(false); }}
      variant="subtle"
    />
  );

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 240, breakpoint: 'md', collapsed: { mobile: !navbarOpened } }}
      padding="md"
      mode="static"
    >
      <AppShell.Header style={{ borderBottom: '1px solid var(--mantine-color-gray-3)' }}>
        <Group h="100%" px="md" justify="space-between">
          <Group gap="sm">
            <Burger opened={navbarOpened} onClick={() => setNavbarOpened(!navbarOpened)} hiddenFrom="md" size="sm" />
            <Text fw={700} size="lg" style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
              TG Pulse
            </Text>
          </Group>
          <TextInput
            placeholder="Поиск каналов..."
            leftSection={<IconSearch size={16} />}
            w={300} hiddenFrom="sm" size="sm"
          />
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: 2 }}>
          {navItems.map(renderItem)}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {bottomItems.map(renderItem)}
        </div>
      </AppShell.Navbar>

      <AppShell.Main style={{ backgroundColor: 'var(--mantine-color-gray-0)' }}>
        {children}
      </AppShell.Main>
    </AppShell>
  );
};

export default Layout;
