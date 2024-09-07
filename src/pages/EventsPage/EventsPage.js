import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import "./EventsPage.css";
import Events from "../../components/Events/Events";

function EventsPage() {
  const [events, setEvents] = useState(useLoaderData());
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="events-page-container">
      <Events events={events} />
    </div>
  );
}

export default EventsPage;
