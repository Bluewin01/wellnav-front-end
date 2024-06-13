import React from "react";
import "../ProfileHeader/ProfileHeader.css";
import profilePicture from "../../Assets/Profile.png";
import profileImage from "../../Assets/ProfileImage.png"; // Replace with the actual path of your sample image

const ProfileHeader = () => {
  return (
    <div className="container-profile-position">
      <div className="container-profile">
        <div className="edit-profile-picture">
          <img
            src={profilePicture}
            alt="Profile"
            className="profile-picture-edit"
          />
          <button className="button">
            <h1>Ubah Foto</h1>
          </button>
        </div>
        <div className="greeting-and-image">
          <div className="profile-greeting">
            <h1>Jane Ojeh</h1>
            <p>Selamat datang di profile.</p>
          </div>

          <img src={profileImage} alt="Sample" className="sample-image" />
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
