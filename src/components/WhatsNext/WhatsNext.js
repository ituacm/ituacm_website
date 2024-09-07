import React, { useEffect, useState } from "react";
import "./WhatsNext.css";
import EventCard from "../EventCard/EventCard";
import { Link } from "react-router-dom";

function WhatsNext({ events }) {
  const [whatsNextEvents, setWhatsNextEvents] = useState([]);

  useEffect(() => {
    const combinedEvents = [...events.events, ...events.courses].filter(
      (event) => new Date() < event.start
    );

    const sortedEvents = combinedEvents.sort((a, b) => a.start - b.start);

    setWhatsNextEvents(sortedEvents.slice(0, 3));
  }, [events]);

  return (
    <div className="whats-next-container">
      <div className="whats-next">
        <h1 className="whats-next-header">What's Next in ITUACM</h1>
        <div className="whats-next-events">
          {whatsNextEvents.map((event, index) => {
            return (
              <div key={index} className="whats-next-event">
                <EventCard event={event} />
              </div>
            );
          })}
        </div>
        <Link
          to={"/calendar"}
          className="primary-button whats-next-see-more-button"
        >
          See all
        </Link>
      </div>
    </div>
  );
}

export default WhatsNext;
