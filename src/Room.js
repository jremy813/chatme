import React from "react";
import "./Room.css";
import { Link, useParams } from "react-router-dom";
import db from "./firebase";

function Room({ key, id, name }) {
  return (
    <Link to={`/rooms/${id}`}>
      <div className="room">
        <h3>{name}</h3>
        <p>Latest chat....</p>
      </div>
    </Link>
  );
}

export default Room;
