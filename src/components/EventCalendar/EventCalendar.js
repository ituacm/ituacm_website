import React, { useState } from "react";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import "react-big-calendar/lib/css/react-big-calendar.css";
import isoWeek from "dayjs/plugin/isoWeek";
import "./EventCalendar.css";
import PostCard from "../EventCard/EventCard";

dayjs.extend(isoWeek);

const localizer = dayjsLocalizer(dayjs);

function EventCalendar({ events }) {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    console.log(event);
  };
  return (
    <div className="event-calendar-container">
      <Calendar
        localizer={localizer}
        events={events}
        defaultView="month"
        onSelectEvent={handleSelectEvent}
      />
      {selectedEvent ? (
        <div className="calendar-selected-event-details">
          <PostCard event={selectedEvent} />
        </div>
      ) : (
        <div className="calendar-event-not-selected">
          <p>Select an event from calendar</p>
        </div>
      )}
    </div>
  );
}

export default EventCalendar;
