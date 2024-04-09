import React, { forwardRef } from "react";
import "./header.css";

const Dropdown = forwardRef(function Dropdown(props, ref) {
  const { title, value } = props;
  return (
    <div className={`dropdown-div-${title}`} ref={ref}>
      <p>
        You have{" "}
        <span style={{ color: "yellow", fontWeight: "bold" }}>
          {value > 0 ? value : "no"}
        </span>{" "}
        unread {title}
      </p>
    </div>
  );
});

export default Dropdown;
