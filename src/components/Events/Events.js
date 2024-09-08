import React, { useEffect, useState } from "react";
import "./Events.css";
import EventCard from "../EventCard/EventCard";
import { useSearchParams } from "react-router-dom";
import Modal from "../Modal/Modal";
import EventModal from "../Modals/EventModal/EventModal";

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

  const [searchParams] = useSearchParams();
  const modalEvent = events.find(
    (event) => event.id.toString() === searchParams.get("id")
  );
  useEffect(() => {
    modalEvent
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");
  }, [modalEvent]);

  return (
    <>
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
        <button
          className="primary-button events-show-button"
          onClick={toggleShowMoreEvents}
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>

      {modalEvent && <EventModal event={modalEvent} />}
    </>
  );
}

export default Events;
