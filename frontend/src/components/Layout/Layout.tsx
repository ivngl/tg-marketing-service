import React, { useState } from 'react';
import { AppShell, Box } from '@mantine/core';
import { SearchBar } from './SearchBar';
import { NavBar } from './NavBar';
import { Footer } from './Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [opened, setOpened] = useState(false);

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
        <NavBar onClose={() => setOpened(false)} />
      </AppShell.Navbar>

      <AppShell.Main bg="#f5f7fb">
        <SearchBar opened={opened} onToggle={() => setOpened(!opened)} />
        <Box bg="gray.0" mih="100vh">
          {children}
        </Box>
        <Footer />
      </AppShell.Main>
    </AppShell>
  );
};

export default Layout;
