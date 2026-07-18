import { Avatar, Burger, Button, Flex, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

interface SearchBarProps {
  opened: boolean;
  onToggle: () => void;
}

export function SearchBar({ opened, onToggle }: SearchBarProps) {
  const navigate = useNavigate();

  return (
    <Flex align="flex-start" px="md" py="sm" gap="sm">
      <Burger
        hiddenFrom="sm"
        opened={opened}
        onClick={onToggle}
      />
      <Flex align="center" gap="sm" wrap="wrap-reverse" style={{ flex: 1 }}>
        <Flex gap="sm" style={{ flex: 1 }}>
          <TextInput
            style={{ flex: 1, minWidth: 200, maxWidth: 420 }}
            placeholder="Поиск канала по @username, названию или теме..."
            leftSection={<IconSearch size={16} />}
          />
          <Button radius="xl" style={{ flexShrink: 0 }} onClick={() => navigate('/ai-cabinet')}>AI-разбор</Button>
        </Flex>
        <Flex gap="sm" style={{ marginLeft: 'auto', flexShrink: 0 }}>
          <Button variant="subtle" onClick={() => navigate('/auth')}>Войти</Button>
          <Avatar color="pink">M</Avatar>
        </Flex>
      </Flex>
    </Flex>
  );
}
