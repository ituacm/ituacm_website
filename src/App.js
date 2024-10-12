import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import EventsPage from "./pages/EventsPage/EventsPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import { eventsLoader } from "./loaders/eventsLoader";
import Layout from "./pages/layouts/Layout";
import CoursesPage from "./pages/CoursesPage/CoursesPage";
import CalendarPage from "./pages/CalendarPage/CalendarPage";
import { boardMembersLoader } from "./loaders/boardMembersLoader";
import AboutPage from "./pages/AboutPage/AboutPage";
import { coursesLoader } from "./loaders/coursesLoader";
import { calendarLoader } from "./loaders/calendarLoader";
import { homeLoader } from "./loaders/homeLoader";
import NotFoundPage from "./pages/404Page/NotFoundPage";
import AdminRedirect from "./pages/AdminRedirect/AdminRedirect";
import AdminLogin from "./components/AdminLogin/AdminLogin";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "", element: <HomePage />, loader: homeLoader },
        { path: "events", element: <EventsPage />, loader: eventsLoader },
        { path: "contact", element: <ContactPage /> },
        { path: "about", element: <AboutPage />, loader: boardMembersLoader },
        { path: "courses", element: <CoursesPage />, loader: coursesLoader },
        { path: "calendar", element: <CalendarPage />, loader: calendarLoader },
        {
          path: "admin",
          element: <AdminRedirect />,
          children: [
            {
              path: "dashboard",
              element: <AdminDashboard />,
            },
            { path: "login", element: <AdminLogin /> },
          ],
        },
        { path: "*", element: <NotFoundPage /> },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
