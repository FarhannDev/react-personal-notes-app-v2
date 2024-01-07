import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { ThemeProvider } from '../contexts/ThemeContext';
import { AuthProvider } from '../contexts/AuthContext';

export default function Root() {
  return (
    <>
      <ThemeProvider>
        <AuthProvider>
          {/* Tampilkan Menu Navigation */}
          <Navigation name="Personal Notes" />

          {/* Rendered Content Main */}
          <main>
            <Outlet />
          </main>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}
