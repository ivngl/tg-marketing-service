import React from 'react';
import { Box, Container } from '@mantine/core';
import type { ContainerProps } from '@mantine/core';

interface PageShellProps {
  children: React.ReactNode;
  size?: ContainerProps['size'];
}

export const PageShell: React.FC<PageShellProps> = ({ children, size = 'xl' }) => {
  return (
    <Box bg="gray.0" mih="100vh">
      <Container size={size} py={40} px="md">
        {children}
      </Container>
    </Box>
  );
};
