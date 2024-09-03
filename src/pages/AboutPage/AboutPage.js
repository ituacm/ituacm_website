import React from "react";
import "./AboutPage.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useLoaderData } from "react-router-dom";
import BoardMember from "../../components/BoardMember/BoardMember";

export async function loader() {
  const url =
    "https://66b9a5b1fa763ff550f8f787.mockapi.io/ituacm-website-ekibi/board_members";
  try {
    const response = await fetch(url);
    const data = response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

function AboutPage() {
  const data = useLoaderData();

  return (
    <div className="about-page-container">
      <Navbar />
      <div className="about-container">
        <div className="about-board-container">
          <span className="about-board-container-title">Our Board</span>
          <div className="about-board-row first-row">
            <BoardMember member={data[0]} />
            <BoardMember member={data[1]} />
            <BoardMember member={data[2]} />
          </div>
          <div className="about-board-row second-row">
            <BoardMember member={data[3]} />
            <BoardMember member={data[4]} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutPage;
