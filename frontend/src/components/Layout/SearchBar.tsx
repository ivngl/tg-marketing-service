import { Avatar, Burger, Button, Group, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

interface SearchBarProps {
  opened: boolean;
  onToggle: () => void;
}

export function SearchBar({ opened, onToggle }: SearchBarProps) {
  return (
    <Group justify="space-between" px="md" py="sm">
      <Burger
        hiddenFrom="sm"
        opened={opened}
        onClick={onToggle}
      />

      <Group>
        <TextInput
          flex={1}
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
