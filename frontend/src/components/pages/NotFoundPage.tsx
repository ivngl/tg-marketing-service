import React from 'react';
import { Box, Container, Group, Text, Title } from '@mantine/core';
import { Button } from '@/components/ui/Button';
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
            background: 'linear-gradient(135deg, #229ED9, #6741d9)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: 1,
          }}
          mb="md"
        >
          404
        </Title>
        <Text size="lg" c="dimmed" mb="lg">
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
