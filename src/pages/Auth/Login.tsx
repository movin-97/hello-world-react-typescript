import React from "react";

import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import * as Yup from "yup";
import { container } from "../../inversify.config";
import { AuthService } from "../../services/AuthService";

import { AuthRequestModel, AuthResponseModel } from "../../model";
import TextInput from "../../components/TextInput";

const Login: React.FC = () => {
  const initialValues: AuthRequestModel = {
    username: "kminchelle",
    password: "0lelplR",
  };
  let _service: AuthService = container.get(AuthService);

  let navigate = useNavigate(),
    dispatch = useDispatch();

  const onSubmit = (values: AuthRequestModel) => {
    _service
      .login(values)
      .then((response: AuthResponseModel) => {
        dispatch({
          type: "onAuthendication",
          payload: response,
        });

        navigate("/home", { replace: true });
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 w-100">
      <div className="card p-4 w-25">
        <form onSubmit={formik.handleSubmit}>
          <div className="modal-body">
            <TextInput
              label="Username"
              name="username"
              type="text"
              formik={formik}
            />
            <TextInput
              label="Password"
              name="password"
              type="password"
              formik={formik}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
