import { useState } from "react";
import { Field, Formik, Form } from "formik";
import * as Yup from "yup";
import Button from "../../components/atoms/button/Button";
import Main from "../../components/organisms/main/Main";
import TextField from "../../mUI/textField/TextField";

import { initialFormState } from "./initialFormState";

const Registration = () => {
  const [error, setError] = useState(null);
  const [currentUser, setCurrentUser] = useState({});

  const handleSubmit = (values) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const options = {
      method: "POST",
      headers,
      body: JSON.stringify({ data: values }),
    };
    fetch("http://localhost:5000/register", options)
      .then((response) => response.json())
      .then((response) =>
        setCurrentUser((currentUser) => (currentUser = response.data))
      )
      .catch((err) => setError((error) => (error = err)));
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required(),
  });

  return (
    <Main>
      <Formik
        initialValues={initialFormState}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          handleSubmit(values);
          setSubmitting(false);
        }}
      >
        <Form>
          <Field as={TextField} label='username' name='username' type='text' />
          <Field
            as={TextField}
            label='password'
            name='password'
            type='password'
          />
          <Button type='submit'>sign up</Button>
        </Form>
      </Formik>
      {currentUser && JSON.stringify(currentUser)}
    </Main>
  );
};

export default Registration;
