import React, { useState } from "react";

const Period = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleButtonClick = (option) => {
    setSelectedOption(option);
  };
  return (
    <div className="period-container">
      <div className="period-button-container">
        <button
          style={{ backgroundColor: selectedOption === "today" && "#A2D2FC" }}
          onClick={() => handleButtonClick("today")}
        >
          Today
        </button>
        <button
          style={{
            backgroundColor: selectedOption === "yesterday" && "#A2D2FC",
          }}
          onClick={() => handleButtonClick("yesterday")}
        >
          Yesterday
        </button>
        <button
          style={{ backgroundColor: selectedOption === "week" && "#A2D2FC" }}
          onClick={() => handleButtonClick("week")}
        >
          Week
        </button>
        <button
          style={{ backgroundColor: selectedOption === "month" && "#A2D2FC" }}
          onClick={() => handleButtonClick("month")}
        >
          Month
        </button>
        <button
          style={{ backgroundColor: selectedOption === "quarter" && "#A2D2FC" }}
          onClick={() => handleButtonClick("quarter")}
        >
          Quarter
        </button>
        <button
          style={{ backgroundColor: selectedOption === "year" && "#A2D2FC" }}
          onClick={() => handleButtonClick("year")}
        >
          Year
        </button>
      </div>
      <div className="period-select-container">
        <select value={selectedOption} onChange={handleOptionChange}>
          <option value="" disabled>
            Select Period
          </option>
          <option value="today">Today</option>
          <option value="yesterday">Yesterday</option>
          <option value="week">Week</option>
          <option value="month">Month</option>
          <option value="quarter">Quarter</option>
          <option value="year">Year</option>
        </select>
      </div>
    </div>
  );
};

export default Period;
