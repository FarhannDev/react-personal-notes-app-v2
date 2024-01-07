import { createBrowserRouter } from 'react-router-dom';
import Root from '../root';
import HomePage from '../../pages/HomePage';
import NotesAddPage from '../../pages/NotesAddPage';
import NotesArchivePage from '../../pages/NotesArchivePage';
import NotesDetailPage from '../../pages/NotesDetailPage';
import NotesActivePage from '../../pages/NotesActivePage';
import NotesIndexPage from '../../pages/NotesIndexPage';
import PageNotFoundPage from '../../pages/PageNotFoundPage';
import LoginPage from '../../pages/auth/LoginPage';
import RegisterPage from '../../pages/auth/RegisterPage';
import UserProfilePage from '../../pages/UserProfilePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    // errorElement: <PageNotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        // errorElement: <PageNotFoundPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
      {
        path: 'user/profile',
        element: <UserProfilePage />,
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
      {
        path: '*',
        element: <PageNotFoundPage />,
      },
    ],
  },
]);

export { router };
