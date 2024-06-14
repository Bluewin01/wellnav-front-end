import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../../components/ProfileForm/ProfileForm.css"; // Importing the CSS for styling

const ProfileForm = () => {
  const [isEditing, setIsEditing] = useState(false);
  const profileSchema = Yup.object().shape({
    nama: Yup.string().required("Nama is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    umur: Yup.number()
      .required("Umur is required")
      .positive("Must be positive")
      .integer("Must be an integer"),
  });

  const initialProfileData = {
    nama: "Jane Ojeh",
    email: "janeojeh@gmail.com",
    umur: "30",
    kondisiKesehatan: "Maag",
  };

  const handleEditClick = (formik) => {
    if (isEditing) {
      formik.validateForm().then((errors) => {
        if (Object.keys(errors).length === 0) {
          // Save the changes (this is where you might also handle saving to a server)
          console.log("Saved profile data:", formik.values);
          setIsEditing(false);
        }
      });
    } else {
      setIsEditing(true);
    }
  };

  return (
    <Formik
      initialValues={initialProfileData}
      validationSchema={profileSchema}
      onSubmit={(values) => {
        console.log("Saved profile data:", values);
        setIsEditing(false);
      }}
    >
      {({ values, handleChange, handleSubmit, validateForm }) => (
        <div className="Profile">
          <Form>
            {Object.entries(values).map(([key, value]) => (
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
                <div className="field-and-error-msg">
                  <div
                    className={`Profile-Data ${
                      isEditing && key !== "kondisiKesehatan" ? "editing" : ""
                    }`}
                    style={
                      key === "kondisiKesehatan"
                        ? { backgroundColor: "#F0DD98" }
                        : {}
                    }
                  >
                    {isEditing && key !== "kondisiKesehatan" ? (
                      <h1>
                        <Field
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
                  {isEditing && key !== "kondisiKesehatan" && (
                    <div className="Profile-Error">
                      <ErrorMessage name={key} component="div" />
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div className="edit-profile-button-position">
              <button
                type="button"
                className="edit-profile-button"
                onClick={() =>
                  handleEditClick({ values, handleSubmit, validateForm })
                }
              >
                <h1>{isEditing ? "Simpan" : "Ubah"}</h1>
              </button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default ProfileForm;
