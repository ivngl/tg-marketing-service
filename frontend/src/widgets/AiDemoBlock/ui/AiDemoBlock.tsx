import React from 'react';
import { Container, Title, Group, Box } from '@mantine/core';
import { AiDemoText } from './AiDemoText';
import { AiDemoWindow } from './AiDemoWindow';
import { useAiDemo } from '../model/useAiDemo';

export const AiDemoBlock: React.FC = () => {
  const { data, activeButton, handleButtonClick } = useAiDemo();

  return (
    <section style={{ width: '100%', padding: 40 }}>
      <Container px="md">
        <Group align="stretch" gap="xl" wrap="wrap">
          <Box style={{ flex: '1 1 0', minWidth: 300 }}>
            <Title order={2} mb="md">ИИ-помощник редактора</Title>
            <AiDemoText
              {...data}
              activeButton={activeButton}
              onButtonClick={handleButtonClick}
            />
          </Box>

          <Box style={{ flex: '1 1 0', minWidth: 300, display: 'flex' }}>
            <AiDemoWindow demoTitle={data.demoTitle} />
          </Box>
        </Group>
      </Container>
    </section>
  );
};
