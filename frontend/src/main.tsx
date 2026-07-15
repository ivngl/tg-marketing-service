import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import 'vite/modulepreload-polyfill'
import { createInertiaApp } from '@inertiajs/react'

document.addEventListener('DOMContentLoaded', () => {
  createInertiaApp({
    resolve: (name: string): any => {
      switch (name) {
        case 'Home':
          return import('./components/pages/Home.tsx');
        case 'Auth':
          return import('./components/pages/Auth.tsx');
        case 'ComparePages':
          return import('./components/pages/ComparePages.tsx');
        case 'CompareProducts':
          return import('./components/pages/CompareProducts.tsx');
        case 'MassParsing':
          return import('./components/pages/MassParsing.tsx');
        case 'PasswordRecovery':
          return import('./components/modals/PasswordRecovery.tsx');

        case 'Header':
          return import('./components/Layout/Header.tsx');
        case 'Layout':
          return import('./components/Layout/Layout.tsx');
        case 'FormRegistration':
          return import('./components/ui/FormRegistration.tsx');
        case 'Tooltip':
          return import('./components/ui/Tooltip.tsx');

        default: throw new Error(`Page ${name} not found`);
      }
    },
    setup({ el, App, props }) {
      const root = createRoot(el);
      root.render(
        <StrictMode>
          <App {...props} />
        </StrictMode>
      );
    },
  });
});
