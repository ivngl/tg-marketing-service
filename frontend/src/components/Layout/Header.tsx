import { Avatar, Burger, Button, Flex, Text, Title, Box } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { SearchBar } from '../ui/SearchBar';

interface HeaderProps {
    opened: boolean;
    onToggle: () => void;
    showSearchBar?: boolean;
}

export function Header({ opened, onToggle, showSearchBar = true }: HeaderProps) {
    const navigate = useNavigate();

    return (
        <Flex px="md" py="sm" gap="sm" align="center" wrap="wrap-reverse">
            <Burger
                hiddenFrom="sm"
                opened={opened}
                onClick={onToggle}
            />
            <Flex gap="sm" align="center">
                <Avatar color="blue" radius="md">t</Avatar>
                <Title order={3}>tgpulse</Title>
            </Flex>
            {showSearchBar && (
              <Box style={{ flex: '1 1 0', minWidth: 200 }}>
                <SearchBar />
              </Box>
            )}
            <Flex align="center" gap="sm" ml="auto" style={{ flexShrink: 0 }}>
                <Button variant="subtle" onClick={() => navigate('/auth')}>Войти</Button>
                <Text>Мария Л.</Text>
                <Avatar color="pink">M</Avatar>
            </Flex>
        </Flex>
    )

}