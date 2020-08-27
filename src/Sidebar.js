import React from "react";
import "./Sidebar.css";
import Avatar from "@material-ui/core/Avatar";
import MessageOutlinedIcon from "@material-ui/icons/MessageOutlined";
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import InputOutlinedIcon from "@material-ui/icons/InputOutlined";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <Avatar />

        <MessageOutlinedIcon />
        <PhoneOutlinedIcon />
        <PersonOutlineOutlinedIcon />
        <NotificationsOutlinedIcon />
      </div>
      <div className="sidebar__bottom">
        <SettingsOutlinedIcon />
        <InputOutlinedIcon />
      </div>
    </div>
  );
}

export default Sidebar;
