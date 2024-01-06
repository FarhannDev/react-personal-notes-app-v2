/* eslint-disable no-unused-vars */
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/root/index';

// import Assets
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/index.css';
import './assets/styles/responsive.css';
import './assets/styles/dark-theme.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider
    router={router}
    future={{ v7_startTransition: true, v7_normalizeFormMethod: true }}
  />
);
