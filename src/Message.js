import React from "react";
import "./Message.css";

function Message() {
  return (
    <div className={`message ${true && "message__reciever2"}`}>
      <div className={true && "message__reciever"}>
        <span>username</span>
        <p>I sent a message</p>
      </div>
    </div>
  );
}

export default Message;
