import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./UI/RootLayout";
import ErrorPage from "./misc/Error";
import HomePage from "./misc/HomePage";
import CrewPage from "./misc/Crew";
import MakeAppointmentPage from "./patient/MakeAppointment";
import Visits from "./patient/Visits";
import RecommendationsPage from "./patient/Recommendations";
import LoginPage, {
  action as authAction,
}  from "./auth/LoginPage";

import EditProfilePage from "./patient/EditProfile";

import DetailVisitPast from "./patient/DetailVisitPast";
import DetailVisitUpcoming from "./patient/DetailVisitUpcoming";
import HomeDoctor from "./doctor/HomeDoctor";
import HistoryDoctor from "./doctor/HistoryDoctor";

import PatientData from "./reception/PatientData";
import EditDoctor from "./reception/EditDoctor";
import HomeReception from "./reception/HomeReception";
import VisitsReception from "./reception/VisitsReception";
import { checkAuthLoader, tokenLoader } from './util/auth';
import {action as logoutAction} from './auth/logout'
import {action as editAction} from './UI/edit_redirect'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: "root",
    loader: tokenLoader,
    children: [
      { index: true, element: <HomePage /> },
      { path: "logout", action: logoutAction},
      { path: "crew", element: <CrewPage /> },
      { path: "appointments-register", element: <MakeAppointmentPage />,loader: checkAuthLoader},
      { path: "appointments-register/:id", element: <MakeAppointmentPage />,loader: checkAuthLoader},
      { path: "visits", element: <Visits />,loader: checkAuthLoader  },
      { path: "visits/past/:id", element: <DetailVisitPast />,loader: checkAuthLoader  },
      { path: "visits/:id", element: <DetailVisitUpcoming />,loader: checkAuthLoader  },
      
      { path: "recommendations", element: <RecommendationsPage />,loader: checkAuthLoader  },
      { path: 'auth', element: <LoginPage />, action: authAction },
      { path: "edit", element: <EditProfilePage />,loader: checkAuthLoader, action: editAction  },

      { path: "doctor", element: <HomeDoctor />,loader: checkAuthLoader  },
      { path: "history", element: <HistoryDoctor />,loader: checkAuthLoader  },

      { path: "editdoctor", element: <EditDoctor />,loader: checkAuthLoader  },
      { path: "homereception", element: <HomeReception />,loader: checkAuthLoader  },
      { path: "visitsreception", element: <VisitsReception />,loader: checkAuthLoader  },
      { path: "patients", element: <PatientData />, loader: checkAuthLoader},
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
