import React from 'react';
import Header from './Header';
import { Box } from '@mantine/core';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box>
      <Header />
      <Box component="main" w="100%">
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
