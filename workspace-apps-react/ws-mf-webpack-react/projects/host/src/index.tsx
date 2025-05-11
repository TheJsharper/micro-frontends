import ReactDom from 'react-dom/client';
import React from 'react';
import { App } from './App';
import { AppProvider } from './contexts/AppContext';
ReactDom.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>);    