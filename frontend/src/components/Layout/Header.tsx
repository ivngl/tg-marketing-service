import { Avatar, Burger, Button, Flex, Text, Title } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
    opened: boolean;
    onToggle: () => void;
}

export function Header({ opened, onToggle }: HeaderProps) {
    const navigate = useNavigate();

    return (
        <Flex px="md" py="sm" gap=
            "sm" justify="space-between">
            <Burger
                hiddenFrom="sm"
                opened={opened}
                onClick={onToggle}
            />
            {!opened && (
                <Flex gap="sm" align="center">
                    <Avatar color="blue" radius="md">t</Avatar>
                    <Title order={3}>tgpulse</Title>
                </Flex>
            )}
            <Flex align="center" gap="sm" ml="auto">
                <Button variant="subtle" onClick={() => navigate('/auth')}>Войти</Button>
                <Text>Мария Л.</Text>
                <Avatar color="pink">M</Avatar>
            </Flex>

        </Flex>
    )

}