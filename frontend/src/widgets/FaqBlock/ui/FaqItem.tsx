import { Text, Box, Collapse, UnstyledButton } from '@mantine/core';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import type { FaqAccordionItemProps } from '../model/types';
import classes from './FaqItem.module.css';

export const FaqItem: React.FC<FaqAccordionItemProps> = ({
  question,
  answer,
  isOpen,
  onToggle,
}) => {
  return (
    <Box className={classes.item}>
      <UnstyledButton
        onClick={onToggle}
        className={classes.toggle}
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
