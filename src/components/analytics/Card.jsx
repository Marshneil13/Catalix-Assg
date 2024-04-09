import React from "react";
import "./analytics.css";

const Card = ({ show, title, percentage, obj, text }) => {
  return (
    <div className={`card ${!show ? "hideCards" : "showCards"}`}>
      <div
        className={`card-icon ${
          obj.percentage > 50 ? "icon-green" : "icon-red"
        }`}
      >
        <p>⬤</p>
      </div>
      <div className="card-title">{title}</div>
      <div className="card-achieved">
        <p className="description">{text.achieved}</p>
        <p className="value">{obj.achieved}</p>
      </div>
      <div className="card-total">
        <p className="description">{text.total}</p>
        <p className="value">{obj.total}</p>
      </div>
      {percentage && (
        <div className="card-percentage">
          <p className="description">{text.percentage}</p>
          <p className="value">{Number(obj.percentage.toFixed(1))}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
