// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { useAuth } from './hooks/useAuth';
import Navigation from './components/Navigation';
import PageNotFoundPage from './pages/PageNotFoundPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import HomePage from './pages/HomePage';
import UserProfilePage from './pages/UserProfilePage';
import NotesIndexPage from './pages/NotesIndexPage';
import NotesDetailPage from './pages/NotesDetailPage';
import NotesAddPage from './pages/NotesAddPage';
import NotesArchivePage from './pages/NotesArchivePage';
import NotesActivePage from './pages/NotesActivePage';

const App = () => {
  const { isAuthenticated, initializing } = useAuth();

  if (initializing) return null;

  return (
    <ThemeProvider>
      <Navigation name="Personal Notes" />
      <main>
        <Outlet />

        <Routes>
          {isAuthenticated ? (
            <Route>
              <Route path="/" element={<HomePage />} />

              <Route path="/notes">
                <Route index element={<NotesIndexPage />} />
                <Route path=":noteId" element={<NotesDetailPage />} />
                <Route path="new" element={<NotesAddPage />} />
                <Route path="active" element={<NotesActivePage />} />
                <Route path="archive" element={<NotesArchivePage />} />
              </Route>

              <Route path="/user" element={<UserProfilePage />}>
                <Route path="profile" element={<UserProfilePage />} />
              </Route>
            </Route>
          ) : (
            <Route index element={<Navigate to="/login" replace />} />
          )}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<PageNotFoundPage />} />
        </Routes>
      </main>
    </ThemeProvider>
  );
};

export default App;
