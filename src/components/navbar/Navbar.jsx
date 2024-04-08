import React, { useState } from 'react'
import './navbar.css'
import { Link, useLocation } from 'react-router-dom'
import sidebarIcon from "../../assets/nav-icons/Sidebar Icon.png"
import mainLogo from "../../assets/nav-icons/Main Logo.png"
import shortLogo from "../../assets/nav-icons/Short Logo.png"
import homeLogo from "../../assets/nav-icons/Home.png"
import activityLogo from "../../assets/nav-icons/Timer.png"
import analyticsLogo from "../../assets/nav-icons/Chart.png"
import transformationLogo from "../../assets/nav-icons/Rocket.png"
import libraryLogo from "../../assets/nav-icons/Layers.png"
import logoutLogo from "../../assets/nav-icons/Logout.png"
import settingsLogo from "../../assets/nav-icons/Settings.png"

const Navbar = () => {

  const {pathname} = useLocation();
  // console.log("PATH", pathname);
  const [isExpanded, setIsExpanded] = useState(true);
  // console.log("IS EXPANDED", isExpanded);

  const navItems = [
    {
      title: "Home",
      logoSrc: homeLogo,
      path: "/",
    },
    {
      title: "Activities",
      logoSrc: activityLogo,
      path: "/activities",
    },
    {
      title: "Analytics",
      logoSrc: analyticsLogo,
      path: "/analytics",
    },
    {
      title: "Transformation",
      logoSrc: transformationLogo,
      path: "/transformation",
    },
    {
      title: "Library",
      logoSrc: libraryLogo,
      path: "/library",
    }
  ];

  const navBottoms = [
    {
      title: "Settings",
      logoSrc: settingsLogo,
      path: "/settings",
    },
    {
      title: "Logout",
      logoSrc: logoutLogo,
      path: "/logout",
    }
  ]
  
  return (
    <div className={`nav-container ${!isExpanded ? "hideNav": "showNav"}`}>
      <div className='nav-logo'>
        <button style={{cursor:"pointer"}} onClick={() => setIsExpanded(!isExpanded)}>
        <img src={sidebarIcon} alt="side-icon" width="40px" height="40px" className={`${!isExpanded && "rotateIcon"} revertIcon`}/>
        </button>
        {isExpanded ? (<img src={mainLogo} alt="main-logo" />) : (<img src={shortLogo} alt="main-logo" />)}
        
      </div>
      <div className={`nav-links ${!isExpanded ? "hideLinks": "showLinks"}`}>
          {navItems.map(item => (
            <Link to={item.path} className={`nav-items ${pathname===item.path && "active"}`} style={{textDecoration: 'none'}}>
            <img src={item.logoSrc} alt="icon" width="20px" height="20px"/>
            {isExpanded && (<p>{item.title}</p>)}
            </Link>
          ))}
      </div>
      <div className={`nav-bottoms ${!isExpanded ? "hideBottoms": "showBottoms"}`}>
      {navBottoms.map(item => (
            <Link to={item.path} className={`nav-items ${pathname===item.path && "active"}`} style={{textDecoration: 'none'}}>
            <img src={item.logoSrc} alt="icon" width="20px" height="20px"/>
            {isExpanded && (<p>{item.title}</p>)}
            </Link>
          ))}
      </div>
    </div>
  )
}

export default Navbar
