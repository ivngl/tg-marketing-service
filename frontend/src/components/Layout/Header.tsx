import { Avatar, Burger, Button, Flex } from '@mantine/core';
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
                <Flex align="center" gap="sm" ml="auto">
                    <Button variant="subtle" onClick={() => navigate('/auth')}>Войти</Button>
                    <Avatar color="pink">M</Avatar>
                </Flex>

        </Flex>
    )

}