import React from "react";
import "./Label.css";

export function Label({ text = "text", color = "#0085ca" }) {
  const customStyle = {
    backgroundColor: color,
    color: "#fff",
  };
  return (
    <span className="label" style={customStyle}>
      {text}
    </span>
  );
}

export function TomorrowLabel() {
  return <Label text="Tomorrow" color="#ef3340" />;
}
export function TodayLabel() {
  return <Label text="Today" color="#a8ad00" />;
}
export function ThisWeekLabel() {
  return <Label text="This Week" color="#de7c00" />;
}
export function WorkshopLabel() {
  return <Label text="Workshop" color="#a8ad00" />;
}
export function LongtermCourseLabel() {
  return <Label text="Long Term Course" color="#0085ca" />;
}
