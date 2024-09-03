import React from "react";
import "./PostCard.css";
import { IoCalendarSharp } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";

function PostCard({
  image,
  title,
  description,
  startingDate,
  endingDate,
  location,
  time,
}) {
  return (
    <div className="postcard-container">
      <img src={image} className="postcard-image" />
      <div className="postcard-detail">
        <h1 className="postcard-title">{title}</h1>
        <p className="postcard-description">{description}</p>
        <div className="postcard-detail-section">
          <IoCalendarSharp className="postcard-icon" />
          <p>
            {endingDate
              ? startingDate.toDateString() + "/" + endingDate
              : startingDate.toDateString()}
          </p>
        </div>
        <div className="postcard-detail-section">
          <FaRegClock className="postcard-icon" />
          <p>{time}</p>
        </div>
        <div className="postcard-detail-section">
          <MdLocationOn className="postcard-icon" />
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
