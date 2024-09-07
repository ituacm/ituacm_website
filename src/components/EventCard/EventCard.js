import React, { useState } from "react";
import "./EventCard.css";
import { IoCalendarSharp } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import {
  LongtermCourseLabel,
  ThisWeekLabel,
  TodayLabel,
  TomorrowLabel,
  WorkshopLabel,
} from "../Labels/Label";
import Modal from '../Modal/Modal'
import { useNavigate } from "react-router-dom";

function EventCard({ event }) {

  const navigate = useNavigate();
  function createSearchQuery() {
    navigate(`/events?id=${event.id}`);
  }

  return (

    <>
      <div className="eventcard-container" onClick={createSearchQuery} >
        <div className="eventcard-time-label">
          {(() => {
            const today = new Date();
            today.setHours(0, 0, 0, 0); // Saat, dakika, saniye sıfırla
            const todayTime = today.getTime(); // GetTime() kullanarak bugünün zamanını al

            const eventStart = new Date(event.start); // event.start'ı bozmamak için kopyasını oluştur
            eventStart.setHours(0, 0, 0, 0); // Saat, dakika, saniye sıfırla

            const timeDifference =
              (eventStart.getTime() - todayTime) / (1000 * 60 * 60 * 24); // Gün farkını hesapla

            if (timeDifference === 0) {
              return <TodayLabel />;
            } else if (timeDifference === 1) {
              return <TomorrowLabel />;
            } else if (timeDifference < 7 && timeDifference > 1) {
              return <ThisWeekLabel />;
            }
          })()}
        </div>
        <img src={event.image} className="eventcard-image" />
        <div className="eventcard-detail">
          <div className="eventcard-labels">
            {(() => {
              if (event.lectures) {
                if (event.isWorkshop) {
                  return <WorkshopLabel />;
                } else {
                  return <LongtermCourseLabel />;
                }
              }
            })()}
          </div>
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
    </>
  );
}

export default EventCard;
