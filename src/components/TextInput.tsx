import React, { ReactNode, useState, useEffect } from "react";

import ErrorMessage from "./ErrorMessage";

interface Props {
  label: string;
  type: string;
  name: string;
  formik?: any;
  id:string
}

const TextInput: React.FC<Props> = ({ label, type, name, formik,id }) => {
  return (
    <div className="mb-3">
      <label className="d-block form-label text-start text-muted">
        {label}
      </label>
      <input
        type={type}
        className="form-control"
        name={name}
        placeholder={name}
        id={id}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
      />
      <ErrorMessage name={name} formik={formik} />
    </div>
  );
};
export default TextInput;