import React from 'react';
import { Helmet } from 'react-helmet';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Helmet>
      <title>My Portifólio</title>
    </Helmet>
    <App />
  </React.StrictMode>
);