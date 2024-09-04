import React from "react";
import "./EventCard.css";
import { IoCalendarSharp } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";

function EventCard({ event }) {
  return (
    <div className="eventcard-container">
      <img src={event.image} className="eventcard-image" />
      <div className="eventcard-detail">
        <h1 className="eventcard-title">{event.title}</h1>
        <p className="eventcard-description">{event.description}</p>
        <div className="eventcard-detail-section">
          <IoCalendarSharp className="eventcard-icon" />
          <p>{event.start.toDateString()}</p>
        </div>
        <div className="eventcard-detail-section">
          <FaRegClock className="eventcard-icon" />
          {event.start.getMinutes() % 10 == 0 ? (
            <p>
              {event.start.getHours() + ":" + "0" + event.start.getMinutes()}
            </p>
          ) : (
            <p>{event.start.getHours() + ":" + event.start.getMinutes()}</p>
          )}
        </div>
        <div className="eventcard-detail-section">
          <MdLocationOn className="eventcard-icon" />
          <p>{event.location}</p>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
