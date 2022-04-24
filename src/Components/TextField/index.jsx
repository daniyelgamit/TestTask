import React from "react";
import { Field } from "formik";
import { TextFieldContainer } from "./style";

const TextField = ({
  label= "",
  type="text",
  props,
  formik,
  name,
}) => {

  return(
    <TextFieldContainer className="form-group">
      <label htmlFor="first_name">{label}</label>
      <Field
        name={name}
        className={(formik?.touched[name] && formik?.errors[name]) ? 'form-control is-invalid' : 'form-control'}
        type={type}
        {...props}
      />
      {formik.touched[name] && formik.errors[name] ? (
        <div className="invalid-feedback">{formik.errors[name]}</div>
      ) : null}
    </TextFieldContainer>
  );
};

export default TextField;