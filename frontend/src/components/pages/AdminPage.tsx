import React, { useState } from 'react';
import {
  Badge,
  Group,
  Select,
  Switch,
  Table,
  Tabs,
  Title,
} from '@mantine/core';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/Button';
import { BrandAvatar } from '@/components/ui/BrandAvatar';
import { SectionCard } from '@/components/ui/SectionCard';
import { PageShell } from '@/components/ui/PageShell';
import { IconPlus } from '@tabler/icons-react';

const categoryOptions = ['Технологии', 'Бизнес', 'Спорт', 'Криптовалюты', 'Маркетинг'];

interface ModerationItem {
  id: number;
  name: string;
  username: string;
  addedBy: string;
  date: string;
  category: string;
}

const moderationInitial: ModerationItem[] = [
  { id: 1, name: '@newtech', username: '@newtech', addedBy: 'user123', date: '2 часа назад', category: '' },
  { id: 2, name: '@sportnews', username: '@sportnews', addedBy: 'user456', date: '5 часов назад', category: '' },
];

const channels = [
  { id: 1, name: 'Tech News RU', username: '@technewsru', category: 'Технологии', verified: true, subscribers: 125000 },
  { id: 2, name: 'Crypto Talk', username: '@cryptotalk', category: 'Криптовалюты', verified: true, subscribers: 89000 },
  { id: 3, name: 'Marketing Hub', username: '@marketinghub', category: 'Маркетинг', verified: false, subscribers: 45000 },
];

const blogArticles = [
  { id: 1, title: 'Как выбрать Telegram-канал для рекламы', status: 'Опубликовано', date: '15 июля 2026' },
  { id: 2, title: 'Тренды Telegram-маркетинга в 2026', status: 'Опубликовано', date: '12 июля 2026' },
  { id: 3, title: 'AI-инструменты для блогеров', status: 'Черновик', date: '10 июля 2026' },
];

const collectionsData = [
  { id: 1, name: 'Лучшие IT-каналы', count: 12, status: 'Активна' },
  { id: 2, name: 'Криптовалюты', count: 8, status: 'Активна' },
  { id: 3, name: 'Маркетинг и продажи', count: 10, status: 'Архив' },
];

const AdminPage: React.FC = () => {
  const [moderation, setModeration] = useState<ModerationItem[]>(moderationInitial);

  const updateCategory = (id: number, category: string | null) => {
    setModeration((prev) =>
      prev.map((item) => (item.id === id ? { ...item, category: category ?? '' } : item))
    );
  };

  const approveItem = (id: number) => {
    setModeration((prev) => prev.filter((item) => item.id !== id));
  };

  const rejectItem = (id: number) => {
    setModeration((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <PageShell>
        <Title order={1} mb="xs">
          Админ-панель
        </Title>
        <Text color="dimmed" mb="lg">
          Только для администраторов сервиса
        </Text>

        <Tabs defaultValue="moderation">
          <Tabs.List mb="lg">
            <Tabs.Tab value="moderation">
              Модерация{' '}
              <Badge size="xs" ml="xs" variant="filled" color="red">
                {moderation.length}
              </Badge>
            </Tabs.Tab>
            <Tabs.Tab value="channels">Каналы и группы</Tabs.Tab>
            <Tabs.Tab value="blog">Статьи блога</Tabs.Tab>
            <Tabs.Tab value="collections">Подборки</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="moderation">
            <SectionCard title="Очередь модерации">
              <Table striped highlightOnHover>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>Канал</Table.Th>
                    <Table.Th>Добавил</Table.Th>
                    <Table.Th>Когда</Table.Th>
                    <Table.Th>Категория</Table.Th>
                    <Table.Th>Действия</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  {moderation.map((item) => (
                    <Table.Tr key={item.id}>
                      <Table.Td>
                        <Group gap="xs">
                          <BrandAvatar name={item.name} size={28} />
                          <div>
                            <Text size="sm" fw={600}>{item.name}</Text>
                            <Text size="xs" color="dimmed">{item.username}</Text>
                          </div>
                        </Group>
                      </Table.Td>
                      <Table.Td>{item.addedBy}</Table.Td>
                      <Table.Td c="dimmed">{item.date}</Table.Td>
                      <Table.Td>
                        <Select
                          placeholder="Выберите"
                          data={categoryOptions}
                          size="xs"
                          w={140}
                          value={item.category || null}
                          onChange={(val) => updateCategory(item.id, val)}
                        />
                      </Table.Td>
                      <Table.Td>
                        <Group gap="xs">
                          <Button
                            size="xs"
                            variant="filled"
                            color="green"
                            disabled={!item.category}
                            onClick={() => approveItem(item.id)}
                          >
                            Одобрить
                          </Button>
                          <Button
                            size="xs"
                            variant="light"
                            color="red"
                            onClick={() => rejectItem(item.id)}
                          >
                            Отклонить
                          </Button>
                        </Group>
                      </Table.Td>
                    </Table.Tr>
                  ))}
                  {moderation.length === 0 && (
                    <Table.Tr>
                      <Table.Td colSpan={5}>
                        <Text color="dimmed" ta="center" py="md">Очередь модерации пуста</Text>
                      </Table.Td>
                    </Table.Tr>
                  )}
                </Table.Tbody>
              </Table>
            </SectionCard>
          </Tabs.Panel>

          <Tabs.Panel value="channels">
            <SectionCard
              title="Каналы и группы"
              action={
                <Button size="sm" leftSection={<IconPlus size={14} />}>
                  Добавить канал
                </Button>
              }
            >
              <Table striped highlightOnHover>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>Канал</Table.Th>
                    <Table.Th>Категория</Table.Th>
                    <Table.Th>Верификация</Table.Th>
                    <Table.Th>Подписчики</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  {channels.map((ch) => (
                    <Table.Tr key={ch.id}>
                      <Table.Td>
                        <Group gap="xs">
                          <BrandAvatar name={ch.name} size={28} />
                          <div>
                            <Text size="sm" fw={600}>{ch.name}</Text>
                            <Text size="xs" color="dimmed">{ch.username}</Text>
                          </div>
                        </Group>
                      </Table.Td>
                      <Table.Td>
                        <Select
                          defaultValue={ch.category}
                          data={categoryOptions}
                          size="xs"
                          w={140}
                        />
                      </Table.Td>
                      <Table.Td>
                        <Switch defaultChecked={ch.verified} size="sm" />
                      </Table.Td>
                      <Table.Td>{new Intl.NumberFormat('ru-RU').format(ch.subscribers)}</Table.Td>
                    </Table.Tr>
                  ))}
                </Table.Tbody>
              </Table>
            </SectionCard>
          </Tabs.Panel>

          <Tabs.Panel value="blog">
            <SectionCard
              title="Статьи блога"
              action={
                <Button size="sm" leftSection={<IconPlus size={14} />}>
                  Новая статья
                </Button>
              }
            >
              <Table striped highlightOnHover>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>Заголовок</Table.Th>
                    <Table.Th>Статус</Table.Th>
                    <Table.Th>Дата</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  {blogArticles.map((article) => (
                    <Table.Tr key={article.id}>
                      <Table.Td fw={500}>{article.title}</Table.Td>
                      <Table.Td>
                        <Badge
                          size="sm"
                          variant="light"
                          color={article.status === 'Опубликовано' ? 'green' : 'gray'}
                        >
                          {article.status}
                        </Badge>
                      </Table.Td>
                      <Table.Td c="dimmed">{article.date}</Table.Td>
                    </Table.Tr>
                  ))}
                </Table.Tbody>
              </Table>
            </SectionCard>
          </Tabs.Panel>

          <Tabs.Panel value="collections">
            <SectionCard
              title="Подборки"
              action={
                <Button size="sm" leftSection={<IconPlus size={14} />}>
                  Новая подборка
                </Button>
              }
            >
              <Table striped highlightOnHover>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>Название</Table.Th>
                    <Table.Th>Каналов</Table.Th>
                    <Table.Th>Статус</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  {collectionsData.map((col) => (
                    <Table.Tr key={col.id}>
                      <Table.Td fw={500}>{col.name}</Table.Td>
                      <Table.Td>{col.count}</Table.Td>
                      <Table.Td>
                        <Badge
                          size="sm"
                          variant="light"
                          color={col.status === 'Активна' ? 'green' : 'gray'}
                        >
                          {col.status}
                        </Badge>
                      </Table.Td>
                    </Table.Tr>
                  ))}
                </Table.Tbody>
              </Table>
            </SectionCard>
          </Tabs.Panel>
        </Tabs>
      </PageShell>
  );
};

export default AdminPage;
