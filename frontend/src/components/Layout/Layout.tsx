import React, { useState } from 'react';
import { AppShell, Burger, Group, Text, TextInput, ThemeIcon, UnstyledButton } from '@mantine/core';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  IconHome,
  IconLayoutGrid,
  IconChartBar,
  IconArrowsExchange,
  IconSparkles,
  IconBooks,
  IconNews,
  IconUser,
  IconSearch,
  IconSettings,
  IconLogout,
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

interface NavItemProps {
  label: string;
  path: string;
  icon: React.FC<{ size: number }>;
  active: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ label, icon: Icon, active, onClick }) => (
  <UnstyledButton
    onClick={onClick}
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '8px 12px',
      borderRadius: '8px',
      width: '100%',
      backgroundColor: active ? 'var(--mantine-color-blue-0)' : 'transparent',
      color: active ? 'var(--mantine-color-tgblue-6)' : 'var(--mantine-color-gray-6)',
      fontWeight: active ? 600 : 400,
      transition: 'background-color 150ms, color 150ms',
    }}
    onMouseEnter={(e) => {
      if (!active) e.currentTarget.style.backgroundColor = 'var(--mantine-color-gray-0)';
    }}
    onMouseLeave={(e) => {
      if (!active) e.currentTarget.style.backgroundColor = 'transparent';
    }}
  >
    <ThemeIcon variant="subtle" color={active ? 'tgblue' : 'gray'} size={32}>
      <Icon size={18} />
    </ThemeIcon>
    <Text size="sm" fw={active ? 600 : 400}>
      {label}
    </Text>
  </UnstyledButton>
);

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [navbarOpened, setNavbarOpened] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 240,
        breakpoint: 'md',
        collapsed: { mobile: !navbarOpened },
      }}
      padding="md"
      mode="static"
    >
      <AppShell.Header style={{ borderBottom: '1px solid var(--mantine-color-gray-3)' }}>
        <Group h="100%" px="md" justify="space-between">
          <Group gap="sm">
            <Burger
              opened={navbarOpened}
              onClick={() => setNavbarOpened(!navbarOpened)}
              hiddenFrom="md"
              size="sm"
            />
            <Text
              fw={700}
              size="lg"
              style={{ cursor: 'pointer' }}
              onClick={() => navigate('/')}
            >
              TG Pulse
            </Text>
          </Group>
          <TextInput
            placeholder="Поиск каналов..."
            leftSection={<IconSearch size={16} />}
            w={300}
            hiddenFrom="sm"
            size="sm"
          />
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: 4 }}>
          {navItems.map((item) => (
            <NavItem
              key={item.path}
              {...item}
              active={location.pathname === item.path}
              onClick={() => {
                navigate(item.path);
                setNavbarOpened(false);
              }}
            />
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {bottomItems.map((item) => (
            <NavItem
              key={item.path}
              {...item}
              active={location.pathname === item.path}
              onClick={() => {
                navigate(item.path);
                setNavbarOpened(false);
              }}
            />
          ))}
        </div>
      </AppShell.Navbar>

      <AppShell.Main style={{ backgroundColor: 'var(--mantine-color-gray-0)' }}>
        {children}
      </AppShell.Main>
    </AppShell>
  );
};

export default Layout;
