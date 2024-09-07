import React, { useEffect, useState } from "react";
import "./CalendarPage.css";
import { useLoaderData } from "react-router-dom";
import EventCalendar from "../../components/EventCalendar/EventCalendar";

function CalendarPage() {
  const [calendarData, setCalendarData] = useState(useLoaderData());
  const [calendarEvents, setCalendarEvents] = useState([]);
  useEffect(() => {
    setCalendarEvents((prevEvents) => [
      ...calendarData.events,
      ...calendarData.courses.flatMap((course) => course.lectures),
    ]);
  }, [calendarData]);
  return (
    <div className="calendar-page-container">
      <EventCalendar events={calendarEvents} />
    </div>
  );
}

export default CalendarPage;
