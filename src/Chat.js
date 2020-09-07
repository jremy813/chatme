import React, { useState } from "react";
import "./Chat.css";
import VideocamOutlinedIcon from "@material-ui/icons/VideocamOutlined";
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined";
import InsertEmoticonOutlinedIcon from "@material-ui/icons/InsertEmoticonOutlined";
import AttachmentOutlinedIcon from "@material-ui/icons/AttachmentOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import Message from "./Message";
import db from "./firebase";
import { useStateValue } from "./StateProvider";
import { useParams } from "react-router-dom";
import firebase from "firebase";

function Chat() {
  const [input, setInput] = useState("");
  const [{ user }] = useStateValue();
  const { roomId } = useParams();

  const sendMessage = (e) => {
    e.preventDefault();
    if (roomId) {
      db.collection("rooms").doc(roomId).collection("messages").add({
        messages: input,
        name: user.displayName,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }

    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h3>{user.displayName}</h3>
          <p>Active now</p>
        </div>
        <div className="chat__headerRight">
          <VideocamOutlinedIcon />
          <PhoneOutlinedIcon />
        </div>
      </div>
      <div className="chat__chatBox">
        <Message />
      </div>
      <div className="chat__input">
        <InsertEmoticonOutlinedIcon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Send message.."
          />
          <button onClick={sendMessage} type="submit"></button>
        </form>
        <AttachmentOutlinedIcon />
        <SendOutlinedIcon />
      </div>
    </div>
  );
}

export default Chat;
