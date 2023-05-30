import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./UI/RootLayout";
import ErrorPage from "./misc/Error";
import HomePage from "./misc/HomePage";
import CrewPage from "./misc/Crew";
import MakeAppointmentPage from "./patient/MakeAppointment";
import Visits from "./patient/Visits";
import RecommendationsPage from "./patient/Recommendations";
import LoginPage from "./auth/LoginPage";

import EditProfilePage from "./patient/EditProfile";

import DetailVisitPast from "./patient/DetailVisitPast";
import DetailVisitUpcoming from "./patient/DetailVisitUpcoming";
import HomeDoctor from "./doctor/HomeDoctor";
import HistoryDoctor from "./doctor/HistoryDoctor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: "root",
    children: [
      { index: true, element: <HomePage /> },
      { path: "crew", element: <CrewPage /> },
      { path: "appointments-register", element: <MakeAppointmentPage /> },
      { path: "visits", element: <Visits /> },
      { path: "visits/past/:id", element: <DetailVisitPast /> },
      { path: "visits/:id", element: <DetailVisitUpcoming /> },
      { path: "recommendations", element: <RecommendationsPage /> },
      { path: "auth/:id", element: <LoginPage /> },
      { path: "edit", element: <EditProfilePage /> },

      { path: "doctor", element: <HomeDoctor /> },
      { path: "history", element: <HistoryDoctor /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
