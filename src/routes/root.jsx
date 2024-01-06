import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';

export default function Root() {
  return (
    <>
      {/* Tampilkan Menu Navigation */}
      <Navigation name="Personal Notes" />

      {/* Rendered Content Main */}
      <main>
        <Outlet />
      </main>
    </>
  );
}
