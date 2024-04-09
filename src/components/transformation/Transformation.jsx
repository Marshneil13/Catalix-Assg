import React, { useState } from 'react'
import Header from '../header/Header'
import data from "../../data/transformation.json"
import "./transformation.css"
import timeLogo from "../../assets/transformation-icons/Time Circle.png"
import arrowLogo from "../../assets/transformation-icons/Arrow 3.png"
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const Transformation = () => {
  const [approveActive] = useState(Math.floor(Math.random() * 3)+1);
  const [approveWait] = useState(Math.floor(Math.random() * 3)+1);
  const [createActive] = useState(Math.floor(Math.random() * 5)+1);
  const [createWait] = useState(Math.floor(Math.random() * 3)+1);
  const [reviewActive] = useState(Math.floor(Math.random() * 2)+1);
  const [reviewWait] = useState(Math.floor(Math.random() * 2)+1);
  const [editActive] = useState(Math.floor(Math.random() * 2)+1);
  const [editWait] = useState(Math.floor(Math.random() * 6)+1);
  const [finalizeActive] = useState(Math.floor(Math.random() * 3)+1);
  const [finalizeWait] = useState(0);
  const daysAndWeeksCount = [
    {
      active:approveActive,
      wait:approveWait*7
    },
    {
      active:createActive,
      wait:createWait*7
    },
    {
      active:reviewActive,
      wait:reviewWait*7
    },
    {
      active:editActive,
      wait:editWait
    },
    {
      active:finalizeActive,
      wait:finalizeWait
    },
  ];
  const reducer = (accumulator, currentValue) => {
    return {
        active: accumulator.active + currentValue.active,
        wait: accumulator.wait + currentValue.wait
    };
};

const initialValue = { active: 0, wait: 0 };

const activeSum = daysAndWeeksCount.reduce(reducer, initialValue).active;
const waitSum = daysAndWeeksCount.reduce(reducer, initialValue).wait;
console.log("ACTIVE SUM", activeSum);
console.log("WAIT SUM", waitSum);

  const handleSave = () => {
    toast.info("Data has been saved to Library", {
      position: "top-right"
    });
  }
  const handleRefresh = () => {
    window.location.reload();
  }
  return (
    <div className='transformation-container'>
      <Header />
      <div className="transformation-content">
        <div className="flowchart">
          {data.flowchart.map(item => (
            <div className='flow-container'>
            <div className='flow-item'>
              <p>{item.text}</p>
            </div>
            { item.hasTrailArrow && (
            <div className='flow-trend'>
            <img src={arrowLogo} alt="" />
            <img src={timeLogo} alt="" />
            <img src={arrowLogo} alt="" />
            </div>)}
            </div>
          ))}
        </div>
        <div className='active-time-container'>
          <span>Active Time</span>
          <div className='active-time-div'>
            {data.flowchart.map((item,index) => (
              <p>{daysAndWeeksCount[index].active} {item.activeTime}</p>
            ))}
          </div>
        </div>
        <div className='wait-time-container'>
          <span>Wait Time</span>
          <div className='wait-time-div'>
            {data.flowchart.map((item,index) => {
              if(item.hasTrailArrow){
                return <p className='wait-time-para'>{daysAndWeeksCount[index].wait>=7? daysAndWeeksCount[index].wait/7: daysAndWeeksCount[index].wait} {item.waitTime}</p>
              }
            })}
          </div>
        </div>
        <div className="time-frame-container">
          <p>Flow time = {activeSum + waitSum}</p>
          <p>Total Active time = {activeSum}</p>
          <p>Total Wait time = {waitSum}</p>
        </div>
        <div className='button-container'>
        <button onClick={handleSave}>Save</button>
        <ToastContainer />
        <button onClick={handleRefresh}>Refresh</button>
        </div>
      </div>
    </div>
  )
}

export default Transformation
