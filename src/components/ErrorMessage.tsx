import React, { ReactNode, useState, useEffect } from "react";

interface Props {
  formik: any;
  name: string;
}

const ErrorMessage: React.FC<Props> = ({ formik, name }) => {
  return (
    <div>
      {formik.touched[name] && formik.errors[name] ? (
        <div className="text-start text-danger">{formik.errors[name]}</div>
      ) : null}
    </div>
  );
};

export default ErrorMessage;