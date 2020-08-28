import React from "react";
import "./Rooms.css";
import Room from "./Room.js";
import SearchIcon from "@material-ui/icons/Search";

function Rooms() {
  return (
    <div className="rooms">
      <div className="rooms__search">
        <div className="rooms__input">
          <SearchIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>

      <Room />
      <Room />
      <Room />
    </div>
  );
}

export default Rooms;
