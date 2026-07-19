import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React from 'react';
import { Footer } from './Footer';
import { NavBar } from './NavBar';
import { SearchBar } from './SearchBar';
import { Header } from './Header';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [opened, { close, toggle }] = useDisclosure(false);

  return (
    <AppShell
      padding={{ base: 'xs', sm: 'md' }}
      header={{ height: 60 }}
      navbar={{
        width: 260,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
    >

      <AppShell.Header>
        <Header opened={opened} onToggle={toggle} />
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <NavBar onClose={close} opened={opened} />
      </AppShell.Navbar>


      <AppShell.Main bg="gray.0" mih="100vh">
        <SearchBar />
        {children}
        <Footer />
      </AppShell.Main>

    </AppShell>
  );
};

export default Layout;
