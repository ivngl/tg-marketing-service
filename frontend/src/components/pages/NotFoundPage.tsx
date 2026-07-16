import React from 'react';
import { Text, Box, Container, Group, Title, Button } from '@mantine/core';
import { brandGradient } from '@/app/constants';
import { useNavigate } from 'react-router-dom';
import classes from './NotFoundPage.module.css';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      bg="gray.0"
      mih="100vh"
      className={classes.page}
    >
      <Container size="sm" ta="center">
        <Title
          order={1}
          className={classes.title}
          style={{
            background: `linear-gradient(${brandGradient.deg}deg, ${brandGradient.from}, ${brandGradient.to})`,
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
