import React from "react";
import './AboutPage.css'
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useLoaderData } from "react-router-dom";
import BoardMember from "../../components/BoardMember/BoardMember";

export async function loader() {
  const url = 'https://66b9a5b1fa763ff550f8f787.mockapi.io/ituacm-website-ekibi/board_members'
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

        <span className="about-container-title">About Us</span>
        <div className="about-intro">
          <span className='about-intro-text'>
            I’ve sailed the seven seas, and you’re the sleekest schooner I’ve ever sighted. Come show me how ye bury yer treasure, lad! Not all treasure is silver and gold If ye thinks he be ready to sail a beauty, ye better be willin’ to sink with her. Right from the Voyage og Noah, surviving was by sailing. Avast ye! and sail against the tides. Land was created to provide a place for boats to visit. My mom would not let me see the pirate movie because it was rated rrrrr.
          </span>
          <img src={'https://picsum.photos/200'} />
        </div>

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
