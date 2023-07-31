import React from "react";
import "./topbar.css";
import { Person, Search, Chat, Notifications } from "@mui/icons-material";

function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <spam className="logo">Social World</spam>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friends, post and video."
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <spam className="topbarLink">Homepage</spam>
          <spam className="topbarLink">Timeline</spam>
        </div>
        <div className="topbarIcon">
          <div className="topbarIconItem">
            <Person />
            <spam className="topbarIconbadge">1</spam>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <spam className="topbarIconbadge">3</spam>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <spam className="topbarIconbadge">4</spam>
          </div>
        </div>
        <img
          src="../assets/anime-boy.jpg"
          alt="anime-boy"
          className="topbarImage"
        />
      </div>
    </div>
  );
}

export default Topbar;
