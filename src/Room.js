import React from "react";
import "./Room.css";

function Room({ key, id, name }) {
  return (
    <div className="room">
      <h3>{name}</h3>
      <p>Latest chat....</p>
    </div>
  );
}

export default Room;
