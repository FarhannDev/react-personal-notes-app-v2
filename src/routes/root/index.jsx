import { createBrowserRouter } from 'react-router-dom';
import Root from '../root';
import HomePage from '../../pages/HomePage';
import AboutPage from '../../pages/AboutPage';
import PageNotFoundPage from '../../pages/PageNotFoundPage';
import NotesAddPage from '../../pages/NotesAddPage';
import NotesArchivePage from '../../pages/NotesArchivePage';
import NotesDetailPage from '../../pages/NotesDetailPage';
import NotesActivePage from '../../pages/NotesActivePage';
import NotesIndexPage from '../../pages/NotesIndexPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <PageNotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: '/notes',
        children: [
          { index: true, element: <NotesIndexPage /> },
          {
            path: ':noteId',
            caseSensitive: true,
            element: <NotesDetailPage />,
          },
          { path: 'new', element: <NotesAddPage /> },
          { path: 'archive', element: <NotesArchivePage /> },
          { path: 'active', element: <NotesActivePage /> },
        ],
      },
    ],
  },
]);

export { router };
