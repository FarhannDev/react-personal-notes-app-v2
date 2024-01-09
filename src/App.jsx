// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { useAuth } from './hooks/useAuth';

// Kode ini untuk merender komponen yang dibutuhkan
const Login = React.lazy(() => import('./pages/auth/LoginPage'));
const Register = React.lazy(() => import('./pages/auth/RegisterPage'));
const ErrorNotFound = React.lazy(() => import('./pages/PageNotFoundPage'));
const Home = React.lazy(() => import('./pages/HomePage'));
const UserProfile = React.lazy(() => import('./pages/UserProfilePage'));
const NotesIndex = React.lazy(() => import('./pages/NotesIndexPage'));
const NotesArchive = React.lazy(() => import('./pages/NotesArchivePage'));
const NotesActive = React.lazy(() => import('./pages/NotesActivePage'));
const NotesAdd = React.lazy(() => import('./pages/NotesAddPage'));
const NotesDetail = React.lazy(() => import('./pages/NotesDetailPage'));

import { Navigation } from './components/LoadableComponent';

const App = () => {
  const { isAuthenticated, initializing } = useAuth();

  if (initializing) return null;

  return (
    <ThemeProvider>
      <LanguageProvider>
        <Navigation name="Personal Notes" />
        <main>
          <Outlet />

          <React.Suspense fallback={<div>Loading...</div>}>
            <Routes>
              {isAuthenticated !== null ? (
                <Route>
                  <Route path="/" element={<Home />} />

                  <Route path="/notes">
                    <Route index element={<NotesIndex />} />
                    <Route path=":noteId" element={<NotesDetail />} />
                    <Route path="new" element={<NotesAdd />} />
                    <Route path="active" element={<NotesActive />} />
                    <Route path="archive" element={<NotesArchive />} />
                  </Route>

                  <Route path="/user" element={<UserProfile />}>
                    <Route path="profile" element={<UserProfile />} />
                  </Route>
                </Route>
              ) : (
                <Route index element={<Navigate to="/login" replace />} />
              )}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<ErrorNotFound />} />
            </Routes>
          </React.Suspense>
        </main>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
