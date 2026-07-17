import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Title
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import CollectionCard from "../ui/CollectionCard";



const collections = [
  {
    id: 1,
    title: "Топ IT-каналов",
    description: "Технологии, разработка и цифровые продукты",
    author: "Редакция tgpulse",
    channels: 3,
    color: "#3B82F6",
    gradient: "linear-gradient(90deg,#2D9CDB,#5B3FD5)",
    editorial: true,
  },
  {
    id: 2,
    title: "Маркетинг и SMM",
    description: "Продвижение, реклама и контент",
    author: "Редакция tgpulse",
    channels: 1,
    color: "#EC4899",
    gradient: "linear-gradient(90deg,#F472B6,#DB2777)",
    editorial: true,
  },
  {
    id: 3,
    title: "Крипта без шума",
    description: "Аналитика рынка без хайпа",
    author: "@crypta_daily",
    channels: 1,
    color: "#F97316",
    gradient: "linear-gradient(90deg,#FB923C,#F97316)",
  },
  {
    id: 4,
    title: "Стартапы и венчур",
    description: "Истории, разборы и деньги",
    author: "Редакция tgpulse",
    channels: 2,
    color: "#22C55E",
    gradient: "linear-gradient(90deg,#4ADE80,#2FAE48)",
    editorial: true,
  },
  {
    id: 5,
    title: "Дизайн и продукт",
    description: "UX, UI и продуктовое мышление",
    author: "@design_kitchen",
    channels: 2,
    color: "#10B981",
    gradient: "linear-gradient(90deg,#34D399,#10B981)",
  },
  {
    id: 6,
    title: "Финансы и инвестиции",
    description: "Личные финансы и рынки",
    author: "Редакция tgpulse",
    channels: 2,
    color: "#06B6D4",
    gradient: "linear-gradient(90deg,#22C3EE,#1F9BB8)",
    editorial: true,
  },
];




export default function CollectionsPage() {
  const navigate = useNavigate();

  return (
    <Container size="xl" py={40}>
      <Stack gap="xl">
        <Box>
          <Title order={1}>
            Подборки каналов
          </Title>

          <Text c="dimmed" mt={4}>
            Готовые тематические списки от редакции и
            авторов
          </Text>
        </Box>

        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 3 }}
          spacing="lg"
        >
          {collections.map((collection) => (
            <CollectionCard
              key={collection.id}
              {...collection}
              onClick={() => navigate(`/collections/${collection.id}`)}
            />
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
}