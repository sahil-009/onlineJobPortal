import Header from '@/components/Header';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <div>
      <Header />
      <main className='min-h-screen container'>
        <Outlet />
      </main>
      <footer className="p-10 text-center bg-gray-800 mt-10 text-white">
        Made By sahil-009
      </footer>
    </div>
  );
}

export default AppLayout;
