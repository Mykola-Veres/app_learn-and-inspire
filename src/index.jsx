import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import 'normalize.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="app_learn-and-inspire">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
