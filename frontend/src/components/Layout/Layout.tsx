import React, { useState } from 'react';
import { Grid } from '@mantine/core';
import { SearchBar } from './SearchBar';
import { NavBar } from './NavBar';
import { Footer } from './Footer';
import classes from './Layout.module.css';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Grid gutter={0}>
      <Grid.Col span={{ base: 12, sm: 3 }}>
        <NavBar />
      </Grid.Col>

      <Grid.Col span={{ base: 12, sm: 9 }} className={classes.right}>
        <SearchBar />
        <div>{children}</div>
        <Footer />
      </Grid.Col>
    </Grid>
  );
};

export default Layout;
