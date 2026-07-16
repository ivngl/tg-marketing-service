import React, { useState, useEffect } from 'react';
import { Menu, Burger, Group, Box, Stack, Anchor, Tooltip } from '@mantine/core';
import { IconUser } from '@tabler/icons-react';
import AppLink from '../ui/AppLink';
import classes from './Header.module.css';

const Header: React.FC = () => {
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { to: '/channels', label: 'Каталог каналов' },
    { to: '/compare', label: 'Сравнение' },
    { to: '/ai-cabinet', label: 'AI-кабинет' },
    { to: '/auth', label: 'Войти' },
  ];
  const profileMenuItems = [
    { to: '/profile', label: 'Профиль' },
    { to: '/settings', label: 'Настройки' },
    { to: '/auth', label: 'Выход' },
  ];

  const toggleProfileMenu = () => setProfileOpen(!isProfileOpen);
  const closeProfileMenu = () => setProfileOpen(false);
  const toggleMenu = () => setMenuOpen(!isMenuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeProfileMenu();
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <Box component="header" w="100%" className={classes.header}>
      <Group w="100%" maw={1280} mx="auto" px="md" justify="space-between">
        <AppLink to="/" variant="text" scheme="default" size="md">
          TG Pulse
        </AppLink>

        <Group visibleFrom="md" gap="lg">
          {menuItems.map(({ to, label }) => (
            <AppLink key={to} to={to} variant="text" scheme="default" onClick={closeMenu}>
              {label}
            </AppLink>
          ))}
        </Group>

        <Group gap="sm" hiddenFrom="md">
          <Tooltip label="Меню">
            <Burger opened={isMenuOpen} onClick={toggleMenu} size="sm" />
          </Tooltip>
          <Menu opened={isProfileOpen} onClose={closeProfileMenu}>
            <Menu.Target>
              <Tooltip label="Профиль">
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
