import React, { useState } from "react";
import "../../components/ProfileForm/ProfileForm.css"; // Importing the CSS for styling

const ProfileForm = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    nama: "Jane Ojeh",
    email: "janeojeh@gmail.com",
    umur: "30",
    kondisiKesehatan: "Maag",
  });

  const handleEditClick = () => {
    if (isEditing) {
      // Save the changes (this is where you might also handle saving to a server)
      console.log("Saved profile data:", profileData);
    }
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="Profile">
      {Object.entries(profileData).map(([key, value]) => (
        <div className="Profile-Field" key={key}>
          <div className="Profile-Label">
            <h1>
              {key.charAt(0).toUpperCase() +
                key.slice(1).replace(/([A-Z])/g, " $1")}
            </h1>
          </div>
          <div className="Profile-Colon">
            <h1>:</h1>
          </div>
          <div className={`Profile-Data ${isEditing ? "editing" : ""}`}>
            {isEditing ? (
              <h1>
                <input
                  type="text"
                  name={key}
                  value={value}
                  onChange={handleChange}
                  className="Profile-Input"
                />
              </h1>
            ) : (
              <h1>{value}</h1>
            )}
          </div>
        </div>
      ))}
      <div className="edit-profile-button-position">
        <button className="edit-profile-button" onClick={handleEditClick}>
          <h1>{isEditing ? "Simpan" : "Ubah"}</h1>
        </button>
      </div>
    </div>
  );
};

export default ProfileForm;
