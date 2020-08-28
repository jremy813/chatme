import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Rooms from "./Rooms";
import Chat from "./Chat";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Rooms />
      <Chat />
    </div>
  );
}

export default App;
