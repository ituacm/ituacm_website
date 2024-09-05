import React, { useState } from "react";
import "./Events.css";
import EventCard from "../EventCard/EventCard";

function Events({ events }) {
  const defaultVisibleEventCount = 8;
  const [visibleEvents, setVisibleEvents] = useState(defaultVisibleEventCount);
  const [showMore, setShowMore] = useState(false);
  const toggleShowMoreEvents = () => {
    if (!showMore) {
      setVisibleEvents(events.length);
    } else {
      setVisibleEvents(defaultVisibleEventCount);
    }
    setShowMore(!showMore);
  };
  return (
    <div className="events-container">
      <div className="events">
        {events
          .sort((a, b) => b.start - a.start)
          .slice(0, visibleEvents)
          .map((event, index) => {
            return (
              <div key={index} className="event">
                <EventCard event={event} />
              </div>
            );
          })}
      </div>
      <button className="primary-button" onClick={toggleShowMoreEvents}>
        {showMore ? "Show Less" : "Show More"}
      </button>
    </div>
  );
}

export default Events;
