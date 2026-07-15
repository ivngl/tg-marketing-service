import React from 'react';
import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Container,
  Group,
  Select,
  Switch,
  Table,
  Tabs,
  Text,
  Title,
} from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';

const moderationQueue = [
  { id: 1, name: '@newtech', username: '@newtech', addedBy: 'user123', date: '2 часа назад', category: '' },
  { id: 2, name: '@sportnews', username: '@sportnews', addedBy: 'user456', date: '5 часов назад', category: '' },
];

const channels = [
  { id: 1, name: 'Tech News RU', username: '@technewsru', category: 'Технологии', verified: true, subscribers: 125000 },
  { id: 2, name: 'Crypto Talk', username: '@cryptotalk', category: 'Криптовалюты', verified: true, subscribers: 89000 },
  { id: 3, name: 'Marketing Hub', username: '@marketinghub', category: 'Маркетинг', verified: false, subscribers: 45000 },
];

const AdminPage: React.FC = () => {
  return (
    <Box bg="gray.0" mih="100vh">
      <Container size="xl" py={40} px="md">
        <Title order={1} mb="xs">
          Админ-панель
        </Title>
        <Text c="dimmed" mb="lg">
          Только для администраторов сервиса
        </Text>

        <Tabs defaultValue="moderation">
          <Tabs.List mb="lg">
            <Tabs.Tab value="moderation">
              Модерация{' '}
              <Badge size="xs" ml="xs" variant="filled" color="red">
                {moderationQueue.length}
              </Badge>
            </Tabs.Tab>
            <Tabs.Tab value="channels">Каналы и группы</Tabs.Tab>
            <Tabs.Tab value="blog">Статьи блога</Tabs.Tab>
            <Tabs.Tab value="collections">Подборки</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="moderation">
            <Card withBorder p="lg" radius="md">
              <Title order={3} mb="md">
                Очередь модерации
              </Title>
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
                  {moderationQueue.map((item) => (
                    <Table.Tr key={item.id}>
                      <Table.Td>
                        <Group gap="xs">
                          <Avatar size={28} radius="xl" variant="gradient" gradient={{ from: '#229ED9', to: '#6741d9' }}>
                            {item.name[1]?.toUpperCase()}
                          </Avatar>
                          <div>
                            <Text size="sm" fw={600}>{item.name}</Text>
                            <Text size="xs" c="dimmed">{item.username}</Text>
                          </div>
                        </Group>
                      </Table.Td>
                      <Table.Td>{item.addedBy}</Table.Td>
                      <Table.Td c="dimmed">{item.date}</Table.Td>
                      <Table.Td>
                        <Select
                          placeholder="Выберите"
                          data={['Технологии', 'Бизнес', 'Спорт', 'Криптовалюты', 'Маркетинг']}
                          size="xs"
                          w={140}
                        />
                      </Table.Td>
                      <Table.Td>
                        <Group gap="xs">
                          <Button size="xs" variant="filled" color="green" disabled={!item.category}>
                            Одобрить
                          </Button>
                          <Button size="xs" variant="light" color="red">
                            Отклонить
                          </Button>
                        </Group>
                      </Table.Td>
                    </Table.Tr>
                  ))}
                </Table.Tbody>
              </Table>
            </Card>
          </Tabs.Panel>

          <Tabs.Panel value="channels">
            <Card withBorder p="lg" radius="md">
              <Group justify="space-between" mb="md">
                <Title order={3}>Каналы и группы</Title>
                <Button size="sm" leftSection={<IconPlus size={14} />}>
                  Добавить канал
                </Button>
              </Group>
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
                          <Avatar size={28} radius="xl" variant="gradient" gradient={{ from: '#229ED9', to: '#6741d9' }}>
                            {ch.name[0]}
                          </Avatar>
                          <div>
                            <Text size="sm" fw={600}>{ch.name}</Text>
                            <Text size="xs" c="dimmed">{ch.username}</Text>
                          </div>
                        </Group>
                      </Table.Td>
                      <Table.Td>
                        <Select
                          defaultValue={ch.category}
                          data={['Технологии', 'Бизнес', 'Спорт', 'Криптовалюты', 'Маркетинг']}
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
            </Card>
          </Tabs.Panel>

          <Tabs.Panel value="blog">
            <Card withBorder p="lg" radius="md">
              <Group justify="space-between" mb="md">
                <Title order={3}>Статьи блога</Title>
                <Button size="sm" leftSection={<IconPlus size={14} />}>
                  Новая статья
                </Button>
              </Group>
              <Text c="dimmed">Статьи блога будут отображаться здесь.</Text>
            </Card>
          </Tabs.Panel>

          <Tabs.Panel value="collections">
            <Card withBorder p="lg" radius="md">
              <Group justify="space-between" mb="md">
                <Title order={3}>Подборки</Title>
                <Button size="sm" leftSection={<IconPlus size={14} />}>
                  Новая подборка
                </Button>
              </Group>
              <Text c="dimmed">Подборки каналов будут отображаться здесь.</Text>
            </Card>
          </Tabs.Panel>
        </Tabs>
      </Container>
    </Box>
  );
};

export default AdminPage;
