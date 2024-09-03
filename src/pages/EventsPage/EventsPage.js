import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import PostCard from "../../components/PostCard/PostCard";
import { useLoaderData } from "react-router-dom";

function EventsPage() {
  const [events, setEvents] = useState(useLoaderData());
  return (
    <div className="events-page-container">
      <Navbar />
      <PostCard
        image={"https://ari24.com/uploads/2021/11/617f04d38d31c.jpg"}
        title={"Tanışma Toplantısı"}
        description={"Relive the excitement of our recent hackathon."}
        startingDate={new Date()}
        // endingDate={"14-05-2024"}
        location={"Merkezi Derslik A13"}
        time={"13.00 pm"}
      />
      <Footer />
    </div>
  );
}

export default EventsPage;
