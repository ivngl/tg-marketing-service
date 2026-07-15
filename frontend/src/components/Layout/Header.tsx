import React, { useState, useEffect } from 'react';
import { Menu, Burger, Group, Box, Stack, Anchor, Text } from '@mantine/core';
import { IconMenu2, IconUser } from '@tabler/icons-react';
import Tooltip from '@/components/ui/Tooltip';
import AppLink from '../ui/AppLink';

const Header: React.FC = () => {
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { to: '/compare-pages', label: 'Сравнить две страницы' },
    { to: '/compare-products', label: 'Сравнить несколько товаров' },
    { to: '/mass-parsing', label: 'Массовый парсинг каталога' },
    { to: '/channels', label: 'Каталог каналов' },
    { to: '/auth', label: 'Войти' },
  ];
  const profileMenuItems = [
    { to: '/profile', label: 'Профиль' },
    { to: '/settings', label: 'Настройки' },
    { to: '/logout', label: 'Выход' },
  ];

  const toggleProfileMenu = () => setProfileOpen(!isProfileOpen);
  const closeProfileMenu = () => setProfileOpen(false);
  const toggleMenu = () => setMenuOpen(!isMenuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const profileMenu = document.getElementById('profile-menu');
      if (profileMenu && !profileMenu.contains(event.target as Node)) {
        closeProfileMenu();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeProfileMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <Box component="header" w="100%" style={{ borderBottom: '1px solid var(--mantine-color-gray-3)' }}>
      <Group w="100%" maw={1280} mx="auto" px="md" justify="space-between">
        <AppLink to="/" variant="text" scheme="default" fw={700} size="md">
          PriceAggregator — B2B Сравнение
        </AppLink>

        <Group visibleFrom="md" gap="lg">
          {menuItems.map(({ to, label }) => (
            <AppLink key={to} to={to} variant="text" scheme="default" onClick={closeMenu}>
              {label}
            </AppLink>
          ))}
        </Group>

        <Group gap="sm" hiddenFrom="md">
          <Tooltip text="Меню">
            <Burger opened={isMenuOpen} onClick={toggleMenu} size="sm" />
          </Tooltip>
          <Menu opened={isProfileOpen} onClose={closeProfileMenu}>
            <Menu.Target>
              <Tooltip text="Профиль">
                <Anchor component="button" onClick={toggleProfileMenu}>
                  <IconUser size={20} />
                </Anchor>
              </Tooltip>
            </Menu.Target>
            <Menu.Dropdown>
              {profileMenuItems.map(({ to, label }) => (
                <Menu.Item key={to} component={AppLink} to={to}>
                  {label}
                </Menu.Item>
              ))}
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Group>

      {isMenuOpen && (
        <Stack gap="xs" p="md" hiddenFrom="md" bg="gray.1">
          {menuItems.map(({ to, label }) => (
            <AppLink key={to} to={to} variant="text" scheme="default" onClick={closeMenu}>
              {label}
            </AppLink>
          ))}
        </Stack>
      )}
    </Box>
  );
};

export default Header;
