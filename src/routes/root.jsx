import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { ThemeProvider } from '../contexts/ThemeContext';

export default function Root() {
  return (
    <>
      <ThemeProvider>
        {/* Tampilkan Menu Navigation */}
        <Navigation name="Personal Notes" />

        {/* Rendered Content Main */}
        <main>
          <Outlet />
        </main>
      </ThemeProvider>
    </>
  );
}
