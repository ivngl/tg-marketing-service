import { TextInput, type TextInputProps } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

export function SearchInput({ placeholder = 'Поиск каналов...', ...props }: TextInputProps) {
  return (
    <TextInput
      leftSection={<IconSearch size={16} />}
      placeholder={placeholder}
      {...props}
    />
  );
}
