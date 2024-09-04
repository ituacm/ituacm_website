import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import EventCard from "../../components/EventCard/EventCard";
import { useLoaderData } from "react-router-dom";
import EventCalendar from "../../components/Calendar/EventCalendar";
import "./EventsPage.css";

function EventsPage() {
  const [events, setEvents] = useState(useLoaderData());

  return (
    <div className="events-page-container">
      <EventCalendar events={events} />
    </div>
  );
}

export default EventsPage;
