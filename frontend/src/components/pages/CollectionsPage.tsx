import React from 'react';
import {
  Box,
  Card,
  Container,
  Group,
  SimpleGrid,
  Text,
  Title,
} from '@mantine/core';
import { useNavigate } from 'react-router-dom';

const collections = [
  { id: 1, name: 'Лучшие IT-каналы', description: 'Подборка технологических каналов', curator: 'TG Pulse', count: 12, gradient: ['#229ED9', '#6741d9'], featured: true },
  { id: 2, name: 'Криптовалюты', description: 'Каналы о крипте и блокчейне', curator: 'TG Pulse', count: 8, gradient: ['#f76707', '#e8590c'], featured: false },
  { id: 3, name: 'Маркетинг и продажи', description: 'Каналы для маркетологов', curator: 'TG Pulse', count: 10, gradient: ['#12b886', '#0ca678'], featured: true },
  { id: 4, name: 'Бизнес и стартапы', description: 'Для предпринимателей', curator: 'TG Pulse', count: 6, gradient: ['#f783ac', '#e64980'], featured: false },
];

const CollectionsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box bg="gray.0" mih="100vh">
      <Container size="xl" py={40} px="md">
        <Title order={1} mb="lg">
          Подборки каналов
        </Title>
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
          {collections.map((col) => (
            <Card
              key={col.id}
              p={0}
              radius="md"
              withBorder
              style={{ cursor: 'pointer', overflow: 'hidden' }}
              onClick={() => navigate(`/collections/${col.id}`)}
            >
              <Box
                p="lg"
                style={{
                  background: `linear-gradient(135deg, ${col.gradient[0]}, ${col.gradient[1]})`,
                  color: '#fff',
                  minHeight: 120,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                }}
              >
                <Group justify="space-between" mb="xs">
                  <Title order={3} c="white">
                    {col.name}
                  </Title>
                  {col.featured && (
                    <Text size="xs" fw={600}>
                      ★ Редакция
                    </Text>
                  )}
                </Group>
              </Box>
              <Box p="md">
                <Text size="sm" c="dimmed" mb="xs">
                  {col.description}
                </Text>
                <Group justify="space-between">
                  <Text size="xs" c="dimmed">
                    Куратор: {col.curator}
                  </Text>
                  <Text size="xs" c="dimmed">
                    {col.count} каналов
                  </Text>
                </Group>
              </Box>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default CollectionsPage;
