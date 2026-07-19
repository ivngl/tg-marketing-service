import { Button, Flex, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

export function SearchBar() {
  const navigate = useNavigate();

  return (
    <Flex gap="sm">
      <TextInput
        placeholder="Поиск канала по @username, названию или теме..."
        leftSection={<IconSearch size={16} />}
      />
      <Button radius="xl" onClick={() => navigate('/ai-cabinet')}>AI-разбор</Button>
    </Flex>

  );
}
