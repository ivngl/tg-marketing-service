import {
  Badge,
  Box,
  Card,
  Container,
  Grid,
  SimpleGrid,
  Stack,
  Text,
  Title
} from "@mantine/core";
import { useNavigate } from "react-router-dom";

const articles = [
  {
    id: "er-err-i-ohvat",
    title: "ER, ERR и охват: какие метрики Telegram реально важны",
    category: "Аналитика",
    color: "#2D9CDB",
    date: "21 июня 2026",
    time: "8 мин",
  },
  {
    id: "kak-vybrat-kanal-dlya-reklamy",
    title: "Как выбрать канал для рекламы и не слить бюджет",
    category: "Реклама",
    color: "#27AE60",
    date: "14 июня 2026",
    time: "5 мин",
  },
  {
    id: "luchshee-vremya-dlya-postov",
    title: "Лучшее время для постов: миф или реальность",
    category: "Практика",
    color: "#F97316",
    date: "7 июня 2026",
    time: "4 мин",
  },
];



function SmallArticle({
  color,
  category,
  title,
  date,
  time,
  onClick,
}: {
  color: string;
  category: string;
  title: string;
  date: string;
  time: string;
  onClick?: () => void;
}) {
  return (
    <Card withBorder radius="lg" padding={0} overflow="hidden" onClick={onClick} style={{ cursor: 'pointer' }}>
      <Box h={150} bg={color} />

      <Stack p="md" gap="xs">
        <Badge variant="light" w="fit-content">
          {category}
        </Badge>

        <Text fw={700} size="lg">
          {title}
        </Text>

        <Text c="dimmed" size="sm">
          Небольшое описание статьи в несколько строк.
        </Text>

        <Text size="xs" c="dimmed">
          {date} • {time}
        </Text>
      </Stack>
    </Card>
  );
}

export default function BlogPage() {
  const navigate = useNavigate();

  return (
    <Container py={40} px="md">
      <Stack gap="xl">
        <Box>
          <Title order={1}>Блог</Title>
          <Text c="dimmed">
            Как расти в Telegram: данные, AI и практика
          </Text>
        </Box>

          <Card withBorder padding={0} onClick={() => navigate('/blog/kak-ai-pomogaet-avtoram')} style={{ cursor: 'pointer' }}>
            <Grid gutter={0}>
              <Grid.Col span={{ base: 12, md: 7 }}>
                <Box
                  h={320}
                  style={{
                    background:
                      "linear-gradient(135deg,#6D28D9,#22A6F2)",
                  }}
                />
              </Grid.Col>

              <Grid.Col span={{ base: 12, md: 5 }}>
                <Stack p="xl" justify="center" h="100%">
                  <Badge w="fit-content">AI</Badge>

                  <Title order={2}>
                    Как AI помогает авторам расти в 2 раза быстрее
                  </Title>

                  <Text c="dimmed">
                    Разбираем, как рекомендательные модели
                    подсказывают удачные темы постов и экономят
                    часы на планировании.
                  </Text>

                  <Text size="sm" c="dimmed">
                    28 июня 2026 • 6 мин
                  </Text>
                </Stack>
              </Grid.Col>
            </Grid>
          </Card>

        <SimpleGrid cols={{ base: 1, md: 3 }}>
          {articles.map((article) => (
            <SmallArticle key={article.id} {...article} onClick={() => navigate(`/blog/${article.id}`)} />
          ))}
        </SimpleGrid>
      </Stack>
    </Container>


  );
}