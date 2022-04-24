import React, { useState } from "react";
import { SignUpContainer } from './style';
import { Formik, Field, Form } from 'formik';
import TextField from "../../Components/TextField";
import Segment from "../../Components/Segment";
import { handleSignUp } from "../../utils/handleAPI";

const SignUp = () => {

  const [formHeading, setFormHeading] = useState("Create Your Fan Account");
  const [selectedType, setSelectedType] = useState("Fan SignUp");

  const initialValues = {
    first_name:"",
    last_name:"",
    username:"",
    email:"",
    password:"",
    termsAndCondition:true,
  };
  const [formData, setFormData] = useState(initialValues);

  const validateForm = (values) => {
    const errors = {};
    if (!values.first_name) {
      errors.first_name = 'First name is required';
    }
    if (!values.last_name) {
      errors.last_name = 'First name is required';
    }
    if (!values.username) {
      errors.username = 'First name is required';
    }
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.password) {
      errors.password = 'Password is required';
    } else if(values.password.length < 8){
      errors.password = "Password must be 8 characters";
    }
    if (!values.termsAndCondition) {
      errors.termsAndCondition = 'You must agree with the terms and conditions';
    }
    return errors;
  };

  const handleSegmentSelect = (value) => {
    setSelectedType(value);
    if (value === "Fan SignUp"){
      setFormHeading("Create Your Fan Account");
    } else {
      setFormHeading("Create Your Talent Account");
    }
    setFormData(initialValues);
  };

  const handleFormSubmit = (values, {
    setSubmitting,
    resetForm,
  }) => {
    handleSignUp(values, selectedType).then((response) => {
      setSubmitting(false);
      resetForm({
        values:{
          first_name:"",
          last_name:"",
          username:"",
          email:"",
          password:"",
          termsAndCondition:true,
        }
      });
      alert("SignUp successfully!");
    }).catch((error) => {
      alert("SignUp failed!")
    });
  };

  return(
    <SignUpContainer className="container">
      <Segment
      data={["Fan SignUp", "Talent SignUp"]}
      selectedValue={selectedType}
      onSelect={handleSegmentSelect}
      />
      <h3 className="text-lg-center mt-3" >{formHeading}</h3>
      <Formik
        initialValues={formData}
        onSubmit={handleFormSubmit}
        validate={validateForm}
      >
        {(formik, isSubmitting) => (
          <Form>
            <TextField
            name="first_name"
            label="First name"
            formik={formik}
            />
            <TextField
              name="last_name"
              label="Last name"
              formik={formik}
            />
            <TextField
              name="username"
              label="Username"
              formik={formik}
            />
            <TextField
              name="email"
              label="Email"
              type="email"
              formik={formik}
            />

            <TextField
              name="password"
              label="Password"
              type="password"
              formik={formik}
            />

            <div className="form-check d-flex justify-content-center">
              <div>
                <label htmlFor="termsAndCondition">I agree to the <span className="terms-condition" >Terms and Conditions</span></label>
                <Field
                  className={(formik.touched.email && formik.errors.email) ? 'form-check-input is-invalid' : 'form-check-input'}
                  name="termsAndCondition"
                  type="checkbox" />
                {formik.touched.termsAndCondition && formik.errors.termsAndCondition ? (
                  <div className="invalid-feedback">{formik.errors.termsAndCondition}</div>
                ) : null}
              </div>
            </div>

            <div className="form-group d-flex justify-content-center">
              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>{isSubmitting ? "Please wait..." : "Sign Up"}</button>
            </div>
          </Form>
        )}
      </Formik>
    </SignUpContainer>
  );
};

export default SignUp;