import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../SignInForm/SignInForm.css";

const SignUpForm = () => {
  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    console.log("Form data", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="form">
        <div className="input-group-signin">
          <Field
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            className="input-field"
          />
          <ErrorMessage name="username" component="div" className="error" />
        </div>

        <div className="input-group-signin">
          <Field
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="input-field"
          />
          <ErrorMessage name="password" component="div" className="error" />
        </div>

        <button type="submit" className="submit-button">
          <h1>Masuk</h1>
        </button>
        <div className="signup-link">
          <span>Belum punya akun?</span>
          <a href="/sign-up">Daftar</a>
        </div>
        <div className="login-methods">
          <div className="login-method"></div>
          <div className="login-method"></div>
          <div className="login-method"></div>
        </div>
      </Form>
    </Formik>
  );
};

export default SignUpForm;
