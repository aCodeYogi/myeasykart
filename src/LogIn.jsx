import { withFormik } from "formik";
import React from "react";
import Button from "./Button";
import * as Yup from "yup";

import Input from "./Input";
import axios from "axios";
import { withUser, withAlert } from "./withProvider";

function callLoginApi(values, bag) {
  axios
    .post("https://myeasykart.codeyogi.io/login", {
      email: values.email,
      password: values.myPassword,
    })
    .then((response) => {
      const { user, token } = response.data;
      localStorage.setItem("token", token);
      bag.props.setUser(user);
    })
    .catch(() => {
      bag.props.setAlert({
        type: "error",
        message: "Invalid Credentials " + values.myPassword,
      });
    });
}

const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  myPassword: Yup.string().min(6).max(12).required(),
});

const initialValues = {
  email: "",
  myPassword: "",
};

export function Login({
  handleSubmit,
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
}) {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col p-5 bg-white rounded-md shadow-md w-96"
      >
        <h1 className="self-center mb-4 text-2xl font-bold">
          Login to CodeYogi
        </h1>
        <Input
          values={values.email}
          error={errors.email}
          touched={touched.email}
          onChange={handleChange}
          onBlur={handleBlur}
          label="Email address"
          id="email-address"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Email or Username"
          className="rounded-b-none"
        />
        <Input
          values={values.myPassword}
          error={errors.myPassword}
          touched={touched.myPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          label="Password"
          id="xyz"
          name="myPassword"
          type="password"
          required
          autoComplete="current-password"
          placeholder="Password"
          className="rounded-t-none"
        />
        <Button type="sumbit" className="self-end mt-3">
          Login
        </Button>
      </form>
    </div>
  );
}

const FormikLogin = withFormik({
  validationSchema: schema,
  initialValues: initialValues,
  handleSubmit: callLoginApi,
})(Login);

export default withAlert(withUser(FormikLogin));

// /login
// Don't have an account? <Link>signup</Link>

// /signup
// full name
// email
// username
// password
// confirm password

// Already have an account? Login

// /forgot-password
// Email
// Request password reset button
// back to login
