import { Button, Flex, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

export function SearchBar() {
  const navigate = useNavigate();

  return (
    <Flex p="sm" gap="sm" my="lg">
      <TextInput
        w="100%"
        maw="420"
        placeholder="Поиск канала по @username, названию или теме..."
        leftSection={<IconSearch size={16} />}
      />
      <Button radius="xl" style={{ flexShrink: 0 }} onClick={() => navigate('/ai-cabinet')}>AI-разбор</Button>
    </Flex>

  );
}
