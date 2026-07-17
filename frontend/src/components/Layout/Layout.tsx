import React, { useState } from 'react';
import { Box, Burger, Grid, Overlay } from '@mantine/core';
import { SearchBar } from './SearchBar';
import { NavBar } from './NavBar';
import { Footer } from './Footer';
import classes from './Layout.module.css';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [opened, setOpened] = useState(false);

  return (
    <Grid gutter={0}>
      <Grid.Col span={{ base: 12, sm: 3 }} className={classes.sidebarWrapper}>
        <Box
          className={classes.sidebar}
          p="md"
          mod={{ opened }}
        >
          <NavBar onClose={() => setOpened(false)} />
        </Box>
        {opened && (
          <Overlay
            color="black"
            opacity={0.3}
            onClick={() => setOpened(false)}
            className={classes.overlay}
          />
        )}
      </Grid.Col>

      <Grid.Col span={{ base: 12, sm: 9 }} className={classes.right}>
        <Box visibleFrom="sm">
          <SearchBar />
        </Box>
        <Box hiddenFrom="sm" px="md" pt="md">
          <Burger opened={opened} onClick={() => setOpened(!opened)} />
        </Box>
        <div>{children}</div>
        <Footer />
      </Grid.Col>
    </Grid>
  );
};

export default Layout;
