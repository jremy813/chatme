import React from "react";
import "./Chat.css";
import VideocamOutlinedIcon from "@material-ui/icons/VideocamOutlined";
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined";
import InsertEmoticonOutlinedIcon from "@material-ui/icons/InsertEmoticonOutlined";
import AttachmentOutlinedIcon from "@material-ui/icons/AttachmentOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";

function Chat() {
  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h3>Display Name</h3>
          <p>Active now</p>
        </div>
        <div className="chat__headerRight">
          <VideocamOutlinedIcon />
          <PhoneOutlinedIcon />
        </div>
      </div>
      <div className="chat__chatBox">
        <h1>hello</h1>
      </div>
      <div className="chat__input">
        <InsertEmoticonOutlinedIcon />
        <form>
          <input type="text" placeholder="Send message.." />
          <button type="submit"></button>
        </form>
        <AttachmentOutlinedIcon />
        <SendOutlinedIcon />
      </div>
    </div>
  );
}

export default Chat;