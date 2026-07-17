import { Avatar, Burger, Button, Container, Group } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { SearchInput } from '../ui';

interface SearchBarProps {
  opened: boolean;
  onToggle: () => void;
}

export function SearchBar({ opened, onToggle }: SearchBarProps) {
  return (
    <Group justify="space-between" mb="xl">
      <Burger
        hiddenFrom="sm"
        opened={opened}
        onClick={onToggle}
      />

      <Group ml="auto">
        <SearchInput
          w={420}
          placeholder="Поиск канала по @username, названию или теме..."
          leftSection={<IconSearch size={16} />}
        />
        <Button radius="xl">AI-разбор</Button>
        <Button variant="subtle">Войти</Button>
        <Avatar color="pink">M</Avatar>
      </Group>
    </Group>
  );
}
