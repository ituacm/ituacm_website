import React from "react";
import "./AboutPage.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useLoaderData } from "react-router-dom";
import AboutACM from "../../components/AboutACM/AboutACM";
import Board from "../../components/Board/Board";

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
      <AboutACM />
      <Board boardData={data} />
      <Footer />
    </div>
  );
}

export default AboutPage;
