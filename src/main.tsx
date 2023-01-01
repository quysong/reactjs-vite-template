import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import ErrorBoundary from './components/errorBoundary/ErrorBoundary';

import App from './App';

createRoot(document.getElementById('app') as HTMLElement).render(
  <StrictMode>
    <Router basename="">
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Router>
  </StrictMode>
);
