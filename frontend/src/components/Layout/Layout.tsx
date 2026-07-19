import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React from 'react';
import { useLocation, matchPath } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';
import { NavBar } from './NavBar';
import { SearchBar } from '@/components/ui/SearchBar';
import { knownPaths } from '@/app/routes/routes';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [opened, { close, toggle }] = useDisclosure(false);
  const { pathname } = useLocation();
  const showSearchBar = pathname !== '/auth' && knownPaths.some((p) => matchPath(p, pathname));

  return (
    <AppShell
      padding={{ base: 'xs', sm: 'md' }}
      py={{ base: 0}}
      header={{ height: '100px' }}
      navbar={{
        width: 260,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
    >
      <AppShell.Header>
        <Header opened={opened} onToggle={toggle} />
        {showSearchBar && <SearchBar />}
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <NavBar onClose={close} />
      </AppShell.Navbar>

      <AppShell.Main bg="gray.0" mih="100vh">
        {children}
        <Footer />
      </AppShell.Main>
    </AppShell>
  );
};

export default Layout;
