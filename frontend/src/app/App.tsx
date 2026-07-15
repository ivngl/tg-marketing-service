import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import Layout from '@/components/Layout/Layout';
import { renderRoutes } from './routes';

const App: React.FC = () => {
  return (
    <MantineProvider>
      <Router>
        <Layout>
          {renderRoutes()}
        </Layout>
      </Router>
    </MantineProvider>
  );
};

export default App;
