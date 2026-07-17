import React, { useState } from 'react';
import { AppShell } from '@mantine/core';
import { SearchBar } from './SearchBar';
import { NavBar } from './NavBar';
import { Footer } from './Footer';
import classes from './Layout.module.css';

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
        {children}
        <Footer />
      </AppShell.Main>
    </AppShell>
  );
};

export default Layout;
