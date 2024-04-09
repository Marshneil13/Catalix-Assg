import React, { useState } from "react";
import Header from "../header/Header";
import "./analytics.css";
import { Add, ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import { Link } from "react-router-dom";
import trend1 from "../../assets/analytics-icons/Path 1.png";
import trend2 from "../../assets/analytics-icons/Path 2.png";
import trend3 from "../../assets/analytics-icons/Path 3.png";
import trend4 from "../../assets/analytics-icons/Path 4.png";
import data from "../../data/analytics.json";
import Card from "./Card";
import Myaccordion from "./Myaccordion"

const Analytics = () => {
  const [showGraphs, setShowGraphs] = useState(false);
  data.graphs[0].imgPath = trend1;
  data.graphs[1].imgPath = trend2;
  data.graphs[2].imgPath = trend3;
  data.graphs[3].imgPath = trend4;
  const [timeTotalState] = useState(Math.floor(Math.random() * 10) + 1);
  const [timeAchievedState] = useState(Math.floor(Math.random() * 10) + 1);
  const timeTotal = Math.max(timeAchievedState, timeTotalState);
  const timeAchieved = Math.min(timeAchievedState, timeTotalState);
  const [scopeTotalState] = useState(Math.floor(Math.random() * 4500) + 1);
  const [scopeAchievedState] = useState(Math.floor(Math.random() * 4500) + 1);
  const scopeTotal = Math.max(scopeAchievedState, scopeTotalState);
  const scopeAchieved = Math.min(scopeAchievedState, scopeTotalState);
  const [velocityRequiredState] = useState(
    Math.floor(Math.random() * 6200) + 1
  );
  const [velocityAverageState] = useState(Math.floor(Math.random() * 6200) + 1);
  const velocityRequired =
    Math.max(velocityRequiredState, velocityAverageState) / 10;
  const velocityAverage =
    Math.min(velocityRequiredState, velocityAverageState) / 10;
  data.cards[0].obj = {
    total: timeTotal,
    achieved: timeAchieved,
    percentage: (timeAchieved / timeTotal) * 100,
  };
  data.cards[1].obj = {
    total: scopeTotal,
    achieved: scopeAchieved,
    percentage: (scopeAchieved / scopeTotal) * 100,
  };
  data.cards[2].obj = {
    total: velocityRequired,
    achieved: velocityAverage,
    percentage: (velocityAverage / velocityRequired) * 100,
  };
  return (
    <div className="analytics-container">
      <Header />
      <div className="analytics-content">
        <div className="dashboard-buttons">
          <button
            id="create"
            className="create-button"
            onClick={() => setShowGraphs(true)}
          >
            <Add /> Create Report
          </button>
          <Link style={{ textDecoration: "none" }} to={"/activities"}>
            <button id="share">Share this Dashboard</button>
          </Link>

          <button id="select" disabled>
            Select Duration
          </button>
          <button id="compare" disabled>
            Compare with Duration
          </button>
        </div>
        <div className="graph-container">
          {data.graphs.map((graph) => (
            <div
              className={`graph ${!showGraphs ? "hideGraphs" : "showGraphs"}`}
              id={graph.id}
            >
              <img className="graph-image" src={graph.imgPath} alt="" />
              <p className="graph-title">{graph.title}</p>
              <p className="graph-about">{graph.about}</p>
              <p className="graph-value">
                {graph.changeValue}{" "}
                {graph.changePercentage.charAt(0) === "+" ? (
                  <ArrowDropUp />
                ) : (
                  <ArrowDropDown />
                )}
              </p>
              <p className="graph-percentage">{graph.changePercentage}</p>
              <p className="graph-currency">{graph.currency}</p>
            </div>
          ))}
        </div>
        <div className={`analytics-cards`}>
          {data.cards.map((item) => (
            <Card
              show={showGraphs}
              title={item.title}
              percentage={item.hasPercentage}
              obj={item.obj}
              text={item}
            />
          ))}
        </div>
        <div
          className={`analytics-table ${
            !showGraphs ? "hideTable" : "showTable"
          }`}
        >
          <Myaccordion/>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
