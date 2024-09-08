import React from "react";
import { useNavigate } from "react-router-dom";
import "./EventModal.css";
import { IoCalendarSharp } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

function EventModal({ event }) {
  const navigate = useNavigate();
  const clearModal = () => {
    navigate({
      pathname: window.location.pathname,
    });
  };
  return (
    <div className="event-modal-container">
      <div className="event-modal-overlay" onClick={clearModal}></div>
      <div className="event-modal-content">
        <div className="event-modal-content-left">
          <img src={event.image} className="event-modal-photo" />
        </div>
        <div className="event-modal-content-right">
          <div className="event-modal-content-right-top">
            <h1 className="event-modal-title">{event.title}</h1>
            <p className="event-modal-description">{event.description}</p>
            <p className="event-modal-text">{event.content}</p>
            <div className="event-modal-details">
              <div className="event-modal-detail-section">
                <IoCalendarSharp className="event-modal-icon" />
                <p>{event.start.toDateString()}</p>
              </div>
              <div className="event-modal-detail-section">
                <FaRegClock className="event-modal-icon" />
                {event.start.getMinutes() % 10 == 0 ? (
                  <p>
                    {event.start.getHours() +
                      ":" +
                      "0" +
                      event.start.getMinutes()}
                  </p>
                ) : (
                  <p>
                    {event.start.getHours() + ":" + event.start.getMinutes()}
                  </p>
                )}
              </div>
              <div className="event-modal-detail-section">
                <MdLocationOn className="event-modal-icon" />
                <p>{event.location}</p>
              </div>
            </div>
          </div>
          <a
            target="_blank"
            href="https://docs.google.com/forms/d/1w4bAkhqatXXPSXyMjv_jzYFv9eZU2h0hLvLjhFA2yVc/viewform?edit_requested=true"
            className="primary-button"
          >
            Join this event
          </a>
        </div>
      </div>
    </div>
  );
}

export default EventModal;
