import { Avatar, Burger, Button, Group } from '@mantine/core';
import { IconSparkles } from '@tabler/icons-react';
import { SearchInput } from '../ui';

interface SearchBarProps {
  navbarOpened: boolean;
  onToggleNavbar: () => void;
}

export function SearchBar({ navbarOpened, onToggleNavbar }: SearchBarProps) {
  return (
    <Group h="100%" justify="space-between">
      <Group gap="sm">
        <Burger opened={navbarOpened} onClick={onToggleNavbar} hiddenFrom="md" size="sm" />
        <SearchInput
          placeholder="Поиск канала по @username, названию или теме..."
          w={520}
        />
      </Group>

      <Group>
        <Button radius="xl" leftSection={<IconSparkles size={16} />}>
          AI-разбор
        </Button>

        <Button variant="subtle">Войти</Button>

        <Group gap={8}>
          <span style={{ fontWeight: 500 }}>Мария Л.</span>
          <Avatar color="pink">M</Avatar>
        </Group>
      </Group>
    </Group>
  );
}
