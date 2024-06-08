import React from "react";
import ReactDOMServer from "react-dom/server";
import CollapseSideBar from "../../components/CollapseSideBar/CollapseSideBar";
import "../ReminderNotification/ReminderNotification.css"; // Make sure you have the relevant styles in your CSS file
import SearchBar from "../../components/SearchBar/SearchBar";
import profilePicture from "../../Assets/Salad.png";
import NotificationContainer from "../../components/NotificationContainer/NotificationContainer";

function ReminderNotification() {
  return (
    <div className="App">
      <CollapseSideBar />
      <div className="top-section">
        <div className="greeting-section">
          <h1>Halo, Jane</h1>
          <p>Rekomendasi makanan untuk anda</p>
        </div>
        <div className="search-profile-section">
          <SearchBar></SearchBar>
          <img src={profilePicture} className="profile-picture"></img>
        </div>
      </div>
      <div>
        <NotificationContainer />
      </div>
    </div>
  );
}

export default ReminderNotification;
