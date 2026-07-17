import React, { useState } from 'react';
import { AppShell } from '@mantine/core';
import { SearchBar } from './SearchBar';
import { NavBar } from './NavBar';
import { Footer } from './Footer';
import classes from './Layout.module.css';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [navbarOpened, setNavbarOpened] = useState(false);

  return (
    <AppShell
      header={{ height: 72 }}
      navbar={{ width: 280, breakpoint: 'sm', collapsed: { mobile: !navbarOpened } }}
      padding="md"
      mode="static"
    >
      <AppShell.Header px="xl">
        <SearchBar
          navbarOpened={navbarOpened}
          onToggleNavbar={() => setNavbarOpened(!navbarOpened)}
        />
      </AppShell.Header>

      <AppShell.Navbar p="md" className={classes.navbar}>
        <NavBar onClose={() => setNavbarOpened(false)} />
      </AppShell.Navbar>

      <AppShell.Main className={classes.main}>
        {children}
        <Footer />
      </AppShell.Main>
    </AppShell>
  );
};

export default Layout;
