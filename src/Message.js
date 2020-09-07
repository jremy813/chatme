import React, { useEffect, useState } from "react";
import "./Message.css";
import db from "./firebase";
import { useParams } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Message() {
  const [messages, setMessages] = useState([]);
  const { roomId } = useParams();
  const [{ user }] = useStateValue();

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [roomId]);

  console.log(messages);

  return (
    <>
      {messages.map((message) => (
        <div
          className={`message ${
            message.name === user.displayName && "message__reciever2"
          }`}
        >
          <div
            className={message.name === user.displayName && "message__reciever"}
          >
            <span>{message.name}</span>
            <p>{message.messages}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Message;
