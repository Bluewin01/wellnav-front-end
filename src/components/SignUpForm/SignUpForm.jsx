import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../SignUpForm/SignUpForm.css";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const navigate = useNavigate();

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    age: "",
    healthCondition: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
    age: Yup.number()
      .required("Required")
      .positive("Invalid age")
      .integer("Invalid age"),
    healthCondition: Yup.string().required("Required"),
  });

  const onSubmit = (values, { setSubmitting }) => {
    console.log("Form data", values);
    // Simulate a successful submission and navigate to sign-in page
    navigate("/sign-in");
    setSubmitting(false);
  };

  const navigateToSignIn = () => {
    navigate("/sign-in");
  };

  const healthConditions = [
    "Tidak Ada",
    "GERD",
    "Diabetes",
    "Asam Urat",
    "Darah tinggi",
  ];

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="form">
          <div className="input-row">
            <div className="input-group-signup">
              <Field
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                className="input-field"
              />
              <ErrorMessage name="username" component="div" className="error" />
            </div>
            <div className="input-group-signup">
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="input-field"
              />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
          </div>
          <div className="input-row">
            <div className="input-group-signup">
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="input-field"
              />
              <ErrorMessage name="password" component="div" className="error" />
            </div>
            <div className="input-group-signup">
              <Field
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Konfirmasi Password"
                className="input-field"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="error"
              />
            </div>
          </div>
          <div className="input-row">
            <div className="input-group-signup">
              <Field
                type="text"
                id="age"
                name="age"
                placeholder="Umur"
                className="input-field"
              />
              <ErrorMessage name="age" component="div" className="error" />
            </div>
            <div className="input-group-signup">
              <Field
                as="select"
                id="healthCondition"
                name="healthCondition"
                className="input-field"
              >
                <option value="" disabled>
                  Pilih kondisi kesehatan
                </option>
                {healthConditions.map((condition) => (
                  <option key={condition} value={condition}>
                    {condition}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="healthCondition"
                component="div"
                className="error"
              />
            </div>
          </div>
          <button
            type="submit"
            className="submit-button"
            disabled={isSubmitting}
          >
            <h1>Daftar</h1>
          </button>
          <div className="signin-link">
            <span>Sudah punya akun?</span>
            <button
              type="button"
              className="link-button"
              onClick={navigateToSignIn}
            >
              Masuk
            </button>
          </div>
          <div className="login-methods">
            <div className="login-method"></div>
            <div className="login-method"></div>
            <div className="login-method"></div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
