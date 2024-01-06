/* eslint-disable no-unused-vars */
import * as React from 'react';
import { useRoutes } from 'react-router-dom';

export default function App() {
  let element = useRoutes([
    {
      path: '/',
      element: <div>Halaman Utama</div>,
      children: [
        {
          path: 'messages',
          element: <div>Halaman Utama Message</div>,
        },
        { path: 'tasks', element: <div>Halaman Utama Task</div> },
      ],
    },
    { path: 'team', element: <div>Halaman Tentang Kami</div> },
  ]);

  return element;
}
