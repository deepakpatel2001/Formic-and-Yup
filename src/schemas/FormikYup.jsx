import React from "react";
import { Formik,  Form } from "formik";
import * as Yup from "yup"
import { TextField } from "./TextField";

const FormikYup = () =>{

  const storedData = window.localStorage.getItem("formData");

  const handleSubmit = (values, { setSubmitting }) => {
    window.localStorage.setItem("formData", JSON.stringify(values));
    setSubmitting(false);
  };

  const validate = Yup.object({
    firstName: Yup.string().min(2).max(25).required("* Name insertion is Necessary"),
    email: Yup.string().email().required("* Enter your mail"),
    password: Yup.string().min(6).required("* Enter your Password"),
    confirmPassword: Yup.string().required().oneOf([Yup.ref("password"), null], "* password must be match")
  })

  return (
    <Formik 
    initialValues={storedData ? JSON.parse(storedData) : {
        firstName: "", email: "", password: "", confirmPassword: ""
    }}
    validationSchema={validate}
    onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <div className="mainDiv">
          <h1>Welcome to Formik and Yup</h1>
          <Form className="formInfo">
            <TextField label="First Name" name="firstName" type="text"/>
            <TextField label="Email" name="email" type="text"/>
            <TextField label="Password" name="password" type="password"/>
            <TextField label="Confirm Password" name="confirmPassword" type="password"/>

            <button type="submit" className="btn" disabled={isSubmitting}>Submit</button>

          </Form>
        </div>
      )}
    </Formik>
    )
}

export default FormikYup;