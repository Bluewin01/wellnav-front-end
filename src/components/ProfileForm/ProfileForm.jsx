import React from "react";
import "../../components/ProfileForm/ProfileForm.css"; // Importing the CSS for styling

const ProfileForm = () => {
  return (
    <div className="Profile">
      <div className="Profile-Field">
        <div className="Profile-Label">
          <h1>Nama</h1>
        </div>
        <div className="Profile-Colon">
          <h1>:</h1>
        </div>
        <div className="Profile-Data">
          <h1>Jane Doe</h1>
        </div>
      </div>
      <div className="Profile-Field">
        <div className="Profile-Label">
          <h1>Email</h1>
        </div>
        <div className="Profile-Colon">
          <h1>:</h1>
        </div>
        <div className="Profile-Data">
          <h1>jane.doe@example.com</h1>
        </div>
      </div>
      <div className="Profile-Field">
        <div className="Profile-Label">
          <h1>Umur</h1>
        </div>
        <div className="Profile-Colon">
          <h1>:</h1>
        </div>
        <div className="Profile-Data">
          <h1>30</h1>
        </div>
      </div>
      <div className="Profile-Field">
        <div className="Profile-Label">
          <h1>Kondisi Kesehatan</h1>
        </div>
        <div className="Profile-Colon">
          <h1>:</h1>
        </div>
        <div className="Profile-Data">
          <h1>Maag</h1>
        </div>
      </div>
      <div className="edit-profile-button-position">
        <button className="edit-profile-button">
          <h1>Ubah</h1>
        </button>
      </div>
    </div>
  );
};

export default ProfileForm;
