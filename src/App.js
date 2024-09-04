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

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/events", element: <EventsPage />, loader: eventsLoader },
    { path: "/contact", element: <ContactPage /> },
    { path: "/about", element: <AboutPage />, loader: boardLoader },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
