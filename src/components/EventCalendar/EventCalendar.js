import React, { useState } from "react";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import "react-big-calendar/lib/css/react-big-calendar.css";
import isoWeek from "dayjs/plugin/isoWeek";
import "./EventCalendar.css";
import EventCard from "../EventCard/EventCard";
import EventModal from "../Modals/EventModal/EventModal";
import { useSearchParams } from "react-router-dom";
import CourseModal from "../Modals/CourseModal/CourseModal";

dayjs.extend(isoWeek);

const localizer = dayjsLocalizer(dayjs);

function EventCalendar({ events, courses }) {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    console.log(event);
  };

  const [searchParams] = useSearchParams();
  const modalEvent = events.find(
    (event) => event.id.toString() === searchParams.get("id")
  );
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
          <EventCard event={selectedEvent} page={"calendar"} />
        </div>
      ) : (
        <div className="calendar-event-not-selected">
          <p>Select an event from calendar</p>
        </div>
      )}
      {modalEvent && modalEvent.subject && (
        <CourseModal
          course={courses.find((course) => modalEvent.courseId == course.id)}
        />
      )}
      {modalEvent && !modalEvent.subject && <EventModal event={modalEvent} />}
    </div>
  );
}

export default EventCalendar;
