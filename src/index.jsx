import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider } from './app/appContext';
import Sidenav from './navigation/Sidenav';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <App />
      <Sidenav />
    </AppProvider>
  </React.StrictMode>,
);
