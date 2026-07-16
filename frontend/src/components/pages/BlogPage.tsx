import React from 'react';
import {
  Box,
  Group,
  SimpleGrid,
  Title,
} from '@mantine/core';
import { Text } from '@/components/ui/Text';
import { PageShell } from '@/components/ui/PageShell';
import { GradientCard } from '@/components/ui/GradientCard';


const posts = [
  { id: 1, title: 'Как выбрать Telegram-канал для рекламы', date: '15 июля 2026', readTime: '5 мин', gradient: ['#229ED9', '#6741d9'] as [string, string] },
  { id: 2, title: 'Тренды Telegram-маркетинга в 2026', date: '12 июля 2026', readTime: '8 мин', gradient: ['#12b886', '#0ca678'] as [string, string] },
  { id: 3, title: 'AI-инструменты для блогеров', date: '10 июля 2026', readTime: '6 мин', gradient: ['#f76707', '#e8590c'] as [string, string] },
];

const BlogPage: React.FC = () => {
  return (
    <PageShell>
        <Title order={1} mb="lg">
          Блог
        </Title>

        <Box mb="lg">
          <GradientCard
            gradient={posts[0].gradient}
            title={posts[0].title}
            titleOrder={2}
            radius="lg"
            minHeight={200}
            content={
              <Group gap="md">
                <Text size="sm" c="white" opacity={0.8}>{posts[0].date}</Text>
                <Text size="sm" c="white" opacity={0.8}>{posts[0].readTime} чтения</Text>
              </Group>
            }
          />
        </Box>

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
          {posts.slice(1).map((post) => (
            <GradientCard
              key={post.id}
              gradient={post.gradient}
              title={post.title}
              titleOrder={4}
              minHeight={100}
              meta={
                <>
                  <Text size="xs" variant="dimmed">{post.date}</Text>
                  <Text size="xs" variant="dimmed">{post.readTime} чтения</Text>
                </>
              }
            />
          ))}
        </SimpleGrid>
      </PageShell>
  );
};

export default BlogPage;
