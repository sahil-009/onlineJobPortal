import './App.css';
import { ThemeProvider } from "@/components/theme-provider";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './Layouts/AppLayout';
import LandingPage from './Pages/Landing';
import SavedJobs from './Pages/SavedJobs';
import MyJobs from './Pages/MyJobs';
import PostJob from './Pages/PostJob';
import JobPage from './Pages/Job';
import OnBoarding from './Pages/OnBoarding';

// Define your router configuration
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/job/:id", element: <JobPage /> },  // Use lowercase for consistency
      { path: "/post-job", element: <PostJob /> },
      { path: "/saved-jobs", element: <SavedJobs /> },
      { path: "/my-jobs", element: <MyJobs /> },
      { path: "/onboarding", element: <OnBoarding /> }, // Use lowercase for consistency
    ],
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
