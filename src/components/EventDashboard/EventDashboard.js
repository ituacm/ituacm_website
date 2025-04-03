import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import "./EventDashboard.css";

function EventDashboard() {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const eventRef = useRef(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/events/${eventId}`
        );
        setEvent(response.data);
        eventRef.current = response.data;
      } catch (error) {
        console.error("Error fetching event data:", error);
      }
    };

    fetchEvent();
  }, [eventId]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    // Yeni FormData nesnesi oluştur
    const formData = new FormData();

    // _id ve __v'yi çıkartarak nesneyi temizle
    const { _id, __v, image, newImageFile, ...eventData } = eventRef.current;

    // Form alanlarını FormData'ya ekle
    Object.keys(eventData).forEach((key) => {
      formData.append(key, eventData[key]);
    });

    // Yeni bir görsel seçilmişse dosya ekle
    if (newImageFile) {
      formData.append("photo", eventRef.current.newImageFile);
    }

    // Log form data for debugging
    for (let [key, value] of formData.entries()) {
      if (key === "photo") {
        console.log(`${key}: ${value.name}`); // Dosya adını yazdır
      } else {
        console.log(`${key}: ${value}`);
      }
    }
    try {
      await axios.put(`http://localhost:8080/events/${eventId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Event updated successfully!");
    } catch (error) {
      console.error("Error updating event:", error);
      alert("Failed to update event.");
    }
  };

  return (
    <div className="event-dashboard-container">
      {event ? (
        <div className="event-dashboard-form-wrapper">
          <form
            className="event-dashboard-form"
            onSubmit={handleUpdate} // Form submit işlemi handleUpdate ile yapılacak
          >
            <label className="event-dashboard-form-label">
              Title:
              <input
                className="event-dashboard-form-input"
                type="text"
                defaultValue={eventRef.current.title}
                onChange={(e) => (eventRef.current.title = e.target.value)}
              />
            </label>
            <br />
            <label className="event-dashboard-form-label">
              Description:
              <textarea
                className="event-dashboard-form-textarea"
                defaultValue={eventRef.current.description}
                onChange={(e) =>
                  (eventRef.current.description = e.target.value)
                }
              />
            </label>
            <br />
            <label className="event-dashboard-form-label">
              Image:
              <div className="event-dashboard-image-preview">
                <img
                  src={
                    eventRef.current.image.startsWith("http")
                      ? eventRef.current.image
                      : `http://localhost:8080/media/${eventRef.current.image}`
                  }
                  alt="Event"
                  className="event-dashboard-image"
                />
              </div>
              <input
                className="event-dashboard-form-input"
                type="text"
                defaultValue={eventRef.current.image}
                onChange={(e) => (eventRef.current.image = e.target.value)}
              />
            </label>
            <label className="event-dashboard-form-label">
              Upload New Image:
              <input
                className="event-dashboard-form-input"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    eventRef.current.newImageFile = file;
                  }
                }}
              />
            </label>
            <br />
            <label className="event-dashboard-form-label">
              Location:
              <input
                className="event-dashboard-form-input"
                type="text"
                defaultValue={eventRef.current.location}
                onChange={(e) => (eventRef.current.location = e.target.value)}
              />
            </label>
            <br />
            <label className="event-dashboard-form-label">
              Start Date and Time:
              <input
                className="event-dashboard-form-input"
                type="datetime-local"
                defaultValue={new Date(eventRef.current.start)
                  .toISOString()
                  .slice(0, 16)}
                onChange={(e) => (eventRef.current.start = e.target.value)}
              />
            </label>
            <br />
            <label className="event-dashboard-form-label">
              End Date and Time:
              <input
                className="event-dashboard-form-input"
                type="datetime-local"
                defaultValue={new Date(eventRef.current.end)
                  .toISOString()
                  .slice(0, 16)}
                onChange={(e) => (eventRef.current.end = e.target.value)}
              />
            </label>
            <br />
            <label className="event-dashboard-form-label">
              Registration Link:
              <input
                className="event-dashboard-form-input"
                type="text"
                defaultValue={eventRef.current.registrationLink}
                onChange={(e) =>
                  (eventRef.current.registrationLink = e.target.value)
                }
              />
            </label>
            <br />
            <button
              className="event-dashboard-form-submit-button"
              type="submit" // Form submit işlemi burada yapılacak
            >
              Save
            </button>
          </form>
        </div>
      ) : (
        <p className="event-dashboard-loading-message">
          Loading event details...
        </p>
      )}
      <button
        className="event-dashboard-back-button"
        onClick={() => window.history.back()}
      >
        Back
      </button>
    </div>
  );
}

export default EventDashboard;
