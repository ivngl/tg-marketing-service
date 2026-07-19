import React from 'react';
import { AppShell, Box } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { SearchBar } from './SearchBar';
import { NavBar } from './NavBar';
import { Footer } from './Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [opened, { close, toggle }] = useDisclosure(false);

  return (
    <AppShell
      padding="md"
      navbar={{
        width: 260,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
    >
      <AppShell.Navbar p="md">
        <NavBar onClose={close} />
      </AppShell.Navbar>

      <AppShell.Main bg="#f5f7fb">
        <SearchBar opened={opened} onToggle={toggle} />
        <Box bg="gray.0" mih="100vh">
          {children}
        </Box>
        <Footer />
      </AppShell.Main>
    </AppShell>
  );
};

export default Layout;
