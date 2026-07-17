import { Button, Container, Group, Stack, Text, Title } from "@mantine/core";

export default function NotFoundPage() {
  return (
    <Container py={40} px="md">
    <Stack align="center" gap="xs" py={80}>
      <Title
        order={1}
        c="blue"
        style={{
          fontSize: 120,
          lineHeight: 1,
          fontWeight: 700,
        }}
      >
        404
      </Title>

      <Title order={2}>Страница не найдена</Title>

      <Text c="dimmed" ta="center" maw={520}>
        Возможно, канал удалён или ссылка устарела. Попробуйте начать с
        главной или загляните в каталог.
      </Text>

      <Group mt="md">
        <Button radius="md">На главную</Button>
        <Button variant="default" radius="md">
          В каталог
        </Button>
      </Group>
    </Stack>
    </Container>
  );
}
