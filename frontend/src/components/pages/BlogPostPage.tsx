import {
    Anchor,
    Box,
    Breadcrumbs,
    Button,
    Card,
    Container,
    Group,
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

const menu = [
    { icon: IconFolder, label: "Главная" },
    { icon: IconBook, label: "Каталог каналов" },
    { icon: IconUsers, label: "Подборки" },
    { icon: IconLayoutDashboard, label: "Дашборд канала" },
    { icon: IconScale, label: "Сравнение" },
    { icon: IconSparkles, label: "AI-кабинет" },
    { icon: IconBook, label: "Блог", active: true },
    { icon: IconSettings, label: "Личный кабинет" },
    { icon: IconChartBar, label: "Админка" },
];


export default function BlogPostPage() {
    return (
        <Container size="md" py={48}>
            <Stack gap="xl">
                <Breadcrumbs separator="">
                    <Anchor
                        c="dimmed"
                        underline="never"
                        size="sm"
                    >
                        <Group gap={4}>
                            <IconChevronLeft size={14} />
                            <span>Все статьи</span>
                        </Group>
                    </Anchor>

                    <Text size="sm" c="blue" fw={600}>
                        AI
                    </Text>
                </Breadcrumbs>

                <Stack gap={6}>
                    <Title order={1} maw={760}>
                        Как AI помогает авторам расти в 2 раза быстрее
                    </Title>

                    <Text c="dimmed">
                        28 июня 2026 • 6 мин чтения
                    </Text>
                </Stack>

                <Box
                    h={380}
                    style={{
                        borderRadius: 20,
                        background:
                            "linear-gradient(135deg,#6D28D9,#2D9CDB)",
                    }}
                />

                <Stack gap="lg">
                    <Text size="lg" lh={1.8}>
                        Это демонстрационная статья блога tgpulse.
                        Здесь мы подробно разбираем тему и
                        показываем, как сервис помогает авторам
                        принимать решения на основе данных, а не
                        интуиции.
                    </Text>

                    <Text size="lg" lh={1.8}>
                        Ключевая идея: смотреть не на абсолютные
                        цифры, а на динамику и вовлечённость.
                        AI-модель сервиса подсказывает, какие
                        форматы и темы работают именно у вашей
                        аудитории.
                    </Text>

                    <Text size="lg" lh={1.8}>
                        В следующих материалах разберём конкретные
                        кейсы и покажем, как за месяц вырастить
                        охват без накруток и агрессивной рекламы.
                    </Text>
                </Stack>

                <Card
                    withBorder
                    radius="xl"
                    bg="blue.0"
                    p="lg"
                >
                    <Group justify="space-between" align="center">
                        <Stack gap={4}>
                            <Text fw={700} size="lg">
                                Хотите так же для своего канала?
                            </Text>

                            <Text c="dimmed">
                                AI-разбор покажет, о чём писать дальше
                            </Text>
                        </Stack>

                        <Button radius="md">
                            Разобрать канал
                        </Button>
                    </Group>
                </Card>
            </Stack>
        </Container>
    );
}