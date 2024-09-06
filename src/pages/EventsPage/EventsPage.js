import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import EventCard from "../../components/EventCard/EventCard";
import { useLoaderData } from "react-router-dom";
import EventCalendar from "../../components/EventCalendar/EventCalendar";
import "./EventsPage.css";
import Events from "../../components/Events/Events";

function EventsPage() {
  const [events, setEvents] = useState(useLoaderData());

  return (
    <div className="events-page-container">
      <Events events={events} />
    </div>
  );
}

export default EventsPage;
