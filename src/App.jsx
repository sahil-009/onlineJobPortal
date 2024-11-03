import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Layouts/AppLayout'
import LandingPage from './Pages/Landing'
import SavedJobs from './Pages/SavedJobs'
import MyJobs from './Pages/MyJobs'
import PostJob from './Pages/PostJob'
import JobPage from './Pages/Job'
import OnBoarding from './Pages/OnBoarding'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/Job/:id",
        element: <JobPage />,
      },
      {
        path: "/PostJob",
        element: <PostJob />,
      },
      {
        path: "/SavedJobs",
        element: <SavedJobs />,
      },
      {
        path: "/MyJobs",
        element: <MyJobs />,
      },
      {
        path: "/OnBoarding",
        element: <OnBoarding />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
