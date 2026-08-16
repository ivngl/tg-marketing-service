import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from '@/pages/Home';
import Channels from '@/pages/Channels';
import DashboardPage from '@/pages/Dashboard';
import ComparePage from '@/pages/ComparePage';
import PostPage from '@/pages/PostPage';
import AICabinetPage from '@/pages/AICabinetPage';
import CollectionsPage from '@/pages/CollectionsPage';
import CollectionPage from '@/pages/CollectionPage';
import BlogPage from '@/pages/BlogPage';
import BlogPostPage from '@/pages/BlogPostPage';
import LegalPage from '@/pages/LegalPage';
import NotFoundPage from '@/pages/NotFoundPage';
import AdminPage from '@/pages/AdminPage';
import Auth from '@/pages/Auth';
import UserProfilePage from '@/pages/UserProfilePage';
import channelsCol from '@/fixtures/channelsCollection';

export const knownPaths = ['/', '/channels', '/dashboard', '/compare', '/post', '/ai-cabinet', '/collections', '/blog', '/legal', '/admin', '/auth', '/profile'];

const routes = [
  { path: '/', element: <LandingPage /> },
  { path: '/channels', element: <Channels channels={channelsCol} /> },
  { path: '/dashboard', element: <DashboardPage /> },
  { path: '/compare', element: <ComparePage /> },
  { path: '/post', element: <PostPage /> },
  { path: '/ai-cabinet', element: <AICabinetPage /> },
  { path: '/collections', element: <CollectionsPage /> },
  { path: '/collections/:id', element: <CollectionPage /> },
  { path: '/blog', element: <BlogPage /> },
  { path: '/blog/:slug', element: <BlogPostPage /> },
  { path: '/legal', element: <LegalPage /> },
  { path: '/admin', element: <AdminPage /> },
  { path: '/auth', element: <Auth /> },
  { path: '/profile', element: <UserProfilePage /> },
  { path: '*', element: <NotFoundPage /> },
];

export const renderRoutes = (): React.ReactNode => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={route.element}
        />
      ))}
    </Routes>
  );
};

export default routes;
