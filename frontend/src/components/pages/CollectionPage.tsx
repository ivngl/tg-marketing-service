import {
    Avatar,
    Card,
    Container,
    Grid,
    Group,
    Paper,
    SimpleGrid,
    Stack,
    Text,
    Title
} from "@mantine/core";
import {
    IconBook,
    IconChartBar,
    IconChevronLeft,
    IconFolder,
    IconLayoutDashboard,
    IconScale,
    IconSettings,
    IconSparkles,
    IconUsers
} from "@tabler/icons-react";

const sidebar = [
    { icon: IconFolder, label: "Главная" },
    { icon: IconBook, label: "Каталог каналов" },
    { icon: IconUsers, label: "Подборки", active: true },
    { icon: IconLayoutDashboard, label: "Дашборд канала" },
    { icon: IconScale, label: "Сравнение" },
    { icon: IconSparkles, label: "AI-кабинет" },
    { icon: IconBook, label: "Блог" },
    { icon: IconSettings, label: "Личный кабинет" },
    { icon: IconChartBar, label: "Админка" },
];

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


function ChannelCard(props: (typeof channels)[0]) {
    return (
        <Card
            withBorder
            shadow="xs"
            p="md"
        >
            <Group align="flex-start" mb="lg">
                <Avatar
                    radius="lg"
                    color="white"
                    style={{
                        background: props.color,
                        fontWeight: 700,
                    }}
                >
                    {props.initials}
                </Avatar>

                <Stack gap={0}>
                    <Text fw={700} size="lg">
                        {props.name}
                    </Text>

                    <Text size="sm" c="dimmed">
                        {props.username}
                    </Text>
                </Stack>
            </Group>

            <Grid gutter="md">
                <Grid.Col span={4}>
                    <Text size="xs" c="dimmed">
                        Подписчики
                    </Text>

                    <Text fw={700} size="xl">
                        {props.subs}
                    </Text>
                </Grid.Col>

                <Grid.Col span={4}>
                    <Text size="xs" c="dimmed">
                        ER
                    </Text>

                    <Text fw={700} c="green">
                        {props.er}
                    </Text>
                </Grid.Col>

                <Grid.Col span={4}>
                    <Text size="xs" c="dimmed" ta="right">
                        30д
                    </Text>

                    <Text fw={700} c="green" ta="right">
                        {props.growth}
                    </Text>
                </Grid.Col>
            </Grid>
        </Card>
    );
}

export default function CollectionPage() {
    return (
        <Container size="xl" py={40}>
            <Stack gap="xl">
                <Group gap={4}>
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
                        <ChannelCard
                            key={channel.name}
                            {...channel}
                        />
                    ))}
                </SimpleGrid>
            </Stack>
        </Container>




    );
}