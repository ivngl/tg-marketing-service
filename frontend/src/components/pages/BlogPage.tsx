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


const posts = [
  { id: 1, title: 'Как выбрать Telegram-канал для рекламы', date: '15 июля 2026', readTime: '5 мин', gradient: ['#229ED9', '#6741d9'] },
  { id: 2, title: 'Тренды Telegram-маркетинга в 2026', date: '12 июля 2026', readTime: '8 мин', gradient: ['#12b886', '#0ca678'] },
  { id: 3, title: 'AI-инструменты для блогеров', date: '10 июля 2026', readTime: '6 мин', gradient: ['#f76707', '#e8590c'] },
];

const BlogPage: React.FC = () => {
  return (
    <Box bg="gray.0" mih="100vh">
      <Container size="xl" py={40} px="md">
        <Title order={1} mb="lg">
          Блог
        </Title>

        <Card
          p={0}
          radius="lg"
          withBorder
          mb="lg"
          style={{ cursor: 'pointer', overflow: 'hidden' }}
        >
          <Box
            p="xl"
            style={{
              background: `linear-gradient(135deg, ${posts[0].gradient[0]}, ${posts[0].gradient[1]})`,
              color: '#fff',
              minHeight: 200,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}
          >
            <Title order={2} c="white" mb="xs">
              {posts[0].title}
            </Title>
            <Group gap="md">
              <Text size="sm" c="white" opacity={0.8}>
                {posts[0].date}
              </Text>
              <Text size="sm" c="white" opacity={0.8}>
                {posts[0].readTime} чтения
              </Text>
            </Group>
          </Box>
        </Card>

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
          {posts.slice(1).map((post) => (
            <Card key={post.id} p={0} radius="md" withBorder style={{ cursor: 'pointer', overflow: 'hidden' }}>
              <Box
                p="md"
                style={{
                  background: `linear-gradient(135deg, ${post.gradient[0]}, ${post.gradient[1]})`,
                  color: '#fff',
                  minHeight: 100,
                  display: 'flex',
                  alignItems: 'flex-end',
                }}
              >
                <Title order={4} c="white">
                  {post.title}
                </Title>
              </Box>
              <Box p="md">
                <Group gap="md">
                  <Text size="xs" c="dimmed">{post.date}</Text>
                  <Text size="xs" c="dimmed">{post.readTime} чтения</Text>
                </Group>
              </Box>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default BlogPage;
