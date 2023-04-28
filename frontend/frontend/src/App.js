import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './UI/RootLayout';
import ErrorPage from './misc/Error';
import HomePage from './misc/HomePage'
import CrewPage from './misc/Crew'
import MakeAppointmentPage from './patient/MakeAppointment'
import Visits from './patient/Visits'
import RecommendationsPage from './patient/Recommendations'
import LoginPage from './auth/LoginPage'
import DetailVisit from './patient/DetailVisit'
import RecommendationDetail from './patient/RecommendationDetail'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: 'root',
    children: [
      { index: true, element: <HomePage /> },
      { path: 'crew', element: <CrewPage /> },
      { path: 'appointments-register', element: <MakeAppointmentPage /> },
      { path: 'visits', element: <Visits />, children:[
        { path: ':id', element: <DetailVisit />}
      ] },
      { path: 'recommendations', element: <RecommendationsPage />, children:[
        { path: ':id', element: <RecommendationDetail />}
      ] },
      { path: 'auth', element: <LoginPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
