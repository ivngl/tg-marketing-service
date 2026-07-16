import React from 'react';
import { Container, Title, Group, Box } from '@mantine/core';
import { AiDemoText } from './AiDemoText';
import { AiDemoWindow } from './AiDemoWindow';
import { useAiDemo } from '../model/useAiDemo';
import classes from './AiDemoBlock.module.css';

export const AiDemoBlock: React.FC = () => {
  const { data, activeButton, handleButtonClick } = useAiDemo();

  return (
    <section className={classes.section}>
      <Container px="md">
        <Group align="stretch" gap="xl" wrap="wrap">
          <Box className={classes.leftBox}>
            <Title order={2} mb="md">ИИ-помощник редактора</Title>
            <AiDemoText
              {...data}
              activeButton={activeButton}
              onButtonClick={handleButtonClick}
            />
          </Box>

          <Box className={classes.rightBox}>
            <AiDemoWindow demoTitle={data.demoTitle} />
          </Box>
        </Group>
      </Container>
    </section>
  );
};
