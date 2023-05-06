
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
import EditProfilePage from './patient/EditProfile' 
import RegisterPage from './auth/RegisterPage';
import DetailVisitPast from './patient/DetailVisitPast';
import DetailVisitUpcoming from './patient/DetailVisitUpcoming';

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
      { path: 'recommendations', element: <RecommendationsPage />},
      { path: 'auth', element: <LoginPage /> },
      { path: 'edit', element: <EditProfilePage /> },
    ],
  },
]);

function App() {

  return <RouterProvider router={router} />;
}

export default App;
