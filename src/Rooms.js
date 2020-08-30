import React, { useState, useEffect } from "react";
import "./Rooms.css";
import Room from "./Room.js";
import SearchIcon from "@material-ui/icons/Search";
import db from "./firebase";
import { useParams } from "react-router-dom";

function Rooms() {
  const [rooms, setRooms] = useState([]);
  const [input, setInput] = useState("");

  const [roomName, setRoomName] = useState("");
  const { roomId } = useParams();

  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) =>
      setRooms(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    );
  }, []);

  const createRoom = (e) => {
    e.preventDefault();
    if (input) {
      //creates a new room if there is a value entered
      db.collection("rooms").add({
        name: input,
      });
    }
    setInput("");
  };

  return (
    <div className="rooms">
      <div className="rooms__search">
        <div className="rooms__input">
          <SearchIcon />
          <input type="text" placeholder="Search..." />
        </div>
        <div className="rooms__createRoom">
          <form>
            <label>+</label>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Create Room"
            />
            <button type="submit" onClick={createRoom}></button>
          </form>
        </div>
      </div>
      {rooms.map((room) => (
        <Room key={room.id} id={room.id} name={room.data.name} />
      ))}
    </div>
  );
}

export default Rooms;
