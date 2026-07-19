import CollectionChannelCard from "@/components/ui/CollectionChannelCard";
import {
    Container,
    Group,
    Paper,
    SimpleGrid,
    Stack,
    Text,
    Title
} from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { SearchBar } from '@/components/ui/SearchBar';

const channels = [
    {
        initials: "PR",
        color: "#3B82F6",
        name: "Product Radar",
        username: "@product_radar",
        subs: "142K",
        er: "26.9%",
        growth: "+2 480",
    },
    {
        initials: "AI",
        color: "#7C3AED",
        name: "Тренды AI",
        username: "@ai_trends",
        subs: "98.3K",
        er: "29.5%",
        growth: "+4 300",
    },
    {
        initials: "KH",
        color: "#4F6EF7",
        name: "Код на ночь",
        username: "@night_code",
        subs: "47.8K",
        er: "33.2%",
        growth: "+610",
    },
];


export default function CollectionPage() {
    const navigate = useNavigate();

    return (<>
        <SearchBar />
        <Container size="xl" py={40}>
            <Stack gap="xl">
                <Group gap={4} style={{ cursor: 'pointer' }} onClick={() => navigate('/collections')}>
                    <IconChevronLeft
                        size={14}
                        color="gray"
                    />

                    <Text size="sm" c="dimmed">
                        Все подборки
                    </Text>
                </Group>

                <Paper
                    p={32}
                    style={{
                        background:
                            "linear-gradient(90deg,#2D9CDB,#6D28D9)",
                    }}
                >
                    <Stack gap="sm">
                        <Title order={1} c="white">
                            Топ IT-каналов
                        </Title>

                        <Text c="rgba(255,255,255,.9)">
                            Технологии, разработка и цифровые
                            продукты
                        </Text>

                        <Text
                            c="rgba(255,255,255,.8)"
                            fw={600}
                        >
                            3 канала
                        </Text>
                    </Stack>
                </Paper>

                <SimpleGrid
                    cols={{ base: 1, md: 3 }}
                    spacing="lg"
                >
                    {channels.map((channel) => (
                        <CollectionChannelCard
                            key={channel.name}
                            {...channel}
                        />
                    ))}
                </SimpleGrid>
            </Stack>
        </Container>
    </>
    );
}