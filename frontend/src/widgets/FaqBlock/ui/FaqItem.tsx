import { Text, Box, Collapse, UnstyledButton } from '@mantine/core';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import type { FaqAccordionItemProps } from '../model/types';

export const FaqItem: React.FC<FaqAccordionItemProps> = ({
  question,
  answer,
  isOpen,
  onToggle,
}) => {
  return (
    <Box style={{ borderBottom: '1px solid var(--mantine-color-gray-2)' }}>
      <UnstyledButton
        onClick={onToggle}
        display="flex"
        style={{ alignItems: 'center', justifyContent: 'space-between' }}
        w="100%"
        ta="left"
        p="12px 16px"
        bg="white"
      >
        <Text fw={700} size="base">
          {question}
        </Text>
        {isOpen ? (
          <IconChevronUp size={16} color="var(--mantine-color-gray-7)" />
        ) : (
          <IconChevronDown size={16} color="var(--mantine-color-gray-7)" />
        )}
      </UnstyledButton>
      <Collapse expanded={isOpen} transitionDuration={200}>
        <Text
          size="md"
          px={16}
          pb={12}
          pt={4}
          color="dimmed"
          ta="left"
        >
          {answer}
        </Text>
      </Collapse>
    </Box>
  );
};
