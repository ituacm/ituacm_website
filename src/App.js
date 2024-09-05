import "./App.css";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import EventsPage from "./pages/EventsPage/EventsPage";
import AboutPage, { loader as boardLoader } from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import { eventsLoader } from "./loaders/eventsLoader";
import Layout from "./layouts/Layout";
import CoursesPage from "./pages/CoursesPage/CoursesPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "", element: <HomePage /> },
        { path: "events", element: <EventsPage />, loader: eventsLoader },
        { path: "contact", element: <ContactPage /> },
        { path: "about", element: <AboutPage />, loader: boardLoader },
        { path: "courses", element: <CoursesPage /> },
        { path: "calendar", element: <CalendarPage /> },
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
