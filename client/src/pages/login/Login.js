import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Field, Formik, Form } from "formik";
import * as Yup from "yup";

import Button from "../../components/atoms/button/Button";
import Main from "../../components/organisms/main/Main";
import TextField from "../../mUI/textField/TextField";

import { initialFormState } from "./initialFormState";
import { setCredentials } from "../../features/auth/authSlice";
import { useLoginMutation } from "../../features/auth/authApiSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userRef = useRef();
  const errorRef = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading }] = useLoginMutation();
  const [errorMessage, setErrorMessage] = useState("");
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrorMessage((errorMessage) => (errorMessage = ""));
  }, [username, password]);

  const handleSubmit = async (values) => {
    try {
      const response = await login({ username, password }).unwrap();
      dispatch(setCredentials({ ...response, username }));
      setUsername((username) => (username = ""));
      setPassword((password) => (password = ""));
      navigate("/weclome");
    } catch (error) {
      if (!error?.response) {
        setErrorMessage(
          (errorMessage) => (errorMessage = "No Server Response")
        );
      } else if (error?.response?.status === 400) {
        setErrorMessage(
          (errorMessage) => (errorMessage = "Missing Username or Password")
        );
      } else if (error?.response?.status === 401) {
        setErrorMessage((errorMessage) => (errorMessage = "Unauthorized"));
      } else {
        setErrorMessage((errorMessage) => (errorMessage = "Login Failed"));
      }
      errorRef.current.focus();
    }
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required(),
  });

  if (isLoading) {
    return <p>Loading...</p>;
  } else {
    return (
      <Main>
        <Formik
          initialValues={{ username, password }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            handleSubmit(values);
            setSubmitting(false);
          }}
        >
          <Form>
            <Field
              as={TextField}
              label='username'
              name='username'
              type='text'
            />
            <Field
              as={TextField}
              label='password'
              name='password'
              type='password'
            />
            <Button type='submit'>sign up</Button>
          </Form>
        </Formik>
      </Main>
    );
  }
};

export default Login;
