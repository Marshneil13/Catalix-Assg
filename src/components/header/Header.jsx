import React, { useEffect, useRef, useState } from "react";
import { InputAdornment, TextField } from "@mui/material";
// import InputAdornment from '@mui/material'
import personIcon from "../../assets/home-icons/Ellipse 49.png";
import bellIcon from "../../assets/home-icons/Bell.png";
import messageIcon from "../../assets/home-icons/Message circle.png";
import settingsIcon from "../../assets/home-icons/Settings.png";
// import { AccountCircle } from '@mui/icons-material'
import "./header.css";
import { CancelOutlined, Search } from "@mui/icons-material";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);
  const notificationRef = useRef(null);
  const [showMessages, setShowMessages] = useState(false);
  const messageRef = useRef(null);
  const [notifications, setNotifications] = useState(
    Math.floor(Math.random() * 21)
  );
  const [messages, setMessages] = useState(Math.floor(Math.random() * 21));

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      } else if (
        messageRef.current &&
        !messageRef.current.contains(event.target)
      ) {
        setShowMessages(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="header-container">
      <div className="header-container-left">
        <TextField
          id="outlined-basic-input-with-icon-textfield"
          label="Search"
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search style={{ color: "#539BBB" }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment>
                <CancelOutlined
                  style={{ color: "#539BBB", cursor: "pointer" }}
                  onClick={() => setSearchValue("")}
                />
              </InputAdornment>
            ),
          }}
          variant="outlined"
          placeholder="Search by profile, setting, artifact etc..."
          size="small"
          fullWidth
        />
      </div>
      <div className="header-container-right">
        <div
          className="header-icons"
          onClick={() => {
            setShowNotifications(!showNotifications);
            setShowMessages(false);
          }}
        >
          <img src={bellIcon} alt="" />
          {notifications !== 0 && <span>{notifications}</span>}
        </div>
        {showNotifications && (
          <Dropdown
            title={"notifications"}
            value={notifications}
            ref={notificationRef}
          />
        )}
        <div
          className="header-icons"
          onClick={() => {
            setShowMessages(!showMessages);
            setShowNotifications(false);
          }}
        >
          <img src={messageIcon} alt="" />
          {messages !== 0 && <span>{messages}</span>}
        </div>
        {showMessages && (
          <Dropdown title={"messages"} value={messages} ref={messageRef} />
        )}
        <div>
          <Link to={"/settings"}>
            <div className="header-icons">
              <img src={settingsIcon} alt="" />
            </div>
          </Link>
        </div>
        <div>
          <img src={personIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
