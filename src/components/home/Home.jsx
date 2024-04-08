import React from "react";
import Header from "../header/Header";
import "./home.css";
import data from "../../data/home1.json";
import Carousel from "../carousel/Carousel";
import videoIcon from "../../assets/home-icons/Video thumbnail.png"

const Home = () => {
  // console.log("HOME DATA", data);
  const slides = data.slides;
  return (
    <div className="home-container">
      <Header />

      <div className="home-content">
        <div className="left-content">
          <h2>{data["left-content"].heading}</h2>
          <p>{data["left-content"].paragraph}</p>

          <div className="carousel-container">
            <Carousel slides={slides}/>
          </div>
        </div>
        <div className="right-content">
        <h2>{data["right-content"].heading}</h2>
          <p>{data["right-content"].paragraph}</p>
          
          <img src={videoIcon} alt="" style={{borderRadius: "15.882px"}} className="video"/>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
