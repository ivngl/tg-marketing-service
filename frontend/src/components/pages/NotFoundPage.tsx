import React from 'react';
import { Box, Container, Group, Title } from '@mantine/core';
import { Text } from '@/components/ui/Text';
import { Button } from '@mantine/core';
import { brandGradient } from '@/app/constants';
import { useNavigate } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      bg="gray.0"
      mih="100vh"
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <Container size="sm" ta="center">
        <Title
          order={1}
          style={{
            fontSize: '120px',
            fontWeight: 800,
            background: `linear-gradient(${brandGradient.deg}deg, ${brandGradient.from}, ${brandGradient.to})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: 1,
          }}
          mb="md"
        >
          404
        </Title>
        <Text size="lg" color="dimmed" mb="lg">
          Страница не найдена
        </Text>
        <Group justify="center" gap="md">
          <Button variant="filled" color="tgblue" onClick={() => navigate('/')}>
            На главную
          </Button>
          <Button variant="outline" color="tgblue" onClick={() => navigate('/channels')}>
            В каталог
          </Button>
        </Group>
      </Container>
    </Box>
  );
};

export default NotFoundPage;
