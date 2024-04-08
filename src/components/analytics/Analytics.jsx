import React, { useState } from 'react'
import Header from '../header/Header'
import "./analytics.css"
import { Add, ArrowDropDown, ArrowDropUp } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import trend1 from "../../assets/analytics-icons/Path 1.png"
import trend2 from "../../assets/analytics-icons/Path 2.png"
import trend3 from "../../assets/analytics-icons/Path 3.png"
import trend4 from "../../assets/analytics-icons/Path 4.png"
import data from "../../data/analytics.json"

const Analytics = () => {
  const [showGraphs, setShowGraphs] = useState(false);
  data.graphs[0].imgPath = trend1;
  data.graphs[1].imgPath = trend2;
  data.graphs[2].imgPath = trend3;
  data.graphs[3].imgPath = trend4;
  return (
    <div className='analytics-container'>
      <Header/>
    <div className='analytics-content'>
      <div className="dashboard-buttons">
      <button id='create' className='create-button' onClick={() => setShowGraphs(true)}><Add/> Create Report</button>
        <Link style={{textDecoration:"none"}} to={"/activities"}><button id='share'>Share this Dashboard</button></Link>
        
        <button id='select' disabled>Select Duration</button>
        <button id='compare' disabled>Compare with Duration</button>
      </div>
      <div className='graph-container'>
        {data.graphs.map(graph => (
          <div className={`graph ${!showGraphs ? "hideGraphs": "showGraphs"}`} id={graph.id}>
          <img className="graph-image" src={graph.imgPath} alt="" />
          <p className='graph-title'>{graph.title}</p>
          <p className='graph-about'>{graph.about}</p>
          <p className="graph-value">
            {graph.changeValue} {graph.changePercentage.charAt(0)==='+'? <ArrowDropUp/> : <ArrowDropDown/>}
            </p>
          <p className="graph-percentage">{graph.changePercentage}</p>
          <p className='graph-currency'>{graph.currency}</p>
        </div>
        ))}
        
      </div>
    </div>
    </div>
  )
}

export default Analytics
