import { Avatar, Button, Group } from '@mantine/core';
import { IconSparkles } from '@tabler/icons-react';
import { SearchInput } from '../ui';

export function SearchBar() {
  return (
    <Group justify="flex-end" mb="xl">
      <SearchInput
        placeholder="Поиск канала по @username, названию или теме..."
        w={420}
      />
      <Button radius="xl" leftSection={<IconSparkles size={16} />}>
        AI-разбор
      </Button>
      <Button variant="subtle">Войти</Button>
      <Group gap={8}>
        <span style={{ fontWeight: 500 }}>Мария Л.</span>
        <Avatar color="pink">M</Avatar>
      </Group>
    </Group>
  );
}
