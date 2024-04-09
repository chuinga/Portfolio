// Import React and ReactDOM for rendering
import React from 'react';
import ReactDOM from 'react-dom/client';

// Routing functionalities
import { BrowserRouter } from 'react-router-dom';

// Main app component
import App from './App';

// Internationalization
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

// Styles
import './index.css';

// Get the root element
const root = document.getElementById('root');

// Ensure the root element exists before rendering the app
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <I18nextProvider i18n={i18next}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </I18nextProvider>
    </React.StrictMode>
  );
} else {
  console.error('Failed to find the root element. Make sure your HTML file has an element with the id "root".');
}
