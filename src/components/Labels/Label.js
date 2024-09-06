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

// Diğer standart etiketler:
export function ThisWeekLabel() {
  return <Label text="This Week" color="#ff5722" />;
}

export function WorkshopLabel() {
  return <Label text="Workshop" color="#4caf50" />;
}
