import { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import Button from "../../components/atoms/button/Button";
import Field from "../../components/molecules/field/Field";
import Main from "../../components/organisms/main/Main";

import { initialFormState } from "./initialFormState";

const Registration = () => {
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState(initialFormState);
  const [currentUser, setCurrentUser] = useState({});

  const handleChange = ({ target }) => {
    setFormData(
      (formData) =>
        (formData = {
          ...formData,
          [target.name]: target.value,
        })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const options = {
      method: "POST",
      headers,
      body: JSON.stringify({ data: formData }),
    };
    fetch("http://localhost:5000/register", options)
      .then((response) => response.json())
      .then((response) =>
        setCurrentUser((currentUser) => (currentUser = response.data))
      )
      .then(() => setFormData((formData) => (formData = initialFormState)))
      .catch((err) => setError((error) => (error = err)));
  };

  return (
    <Main>
      <Formik initialValues={initialFormState} onSubmit={async (values) => {}}>
        <Form>
          <Field
            label='username: '
            name='username'
            onChange={handleChange}
            type='text'
            value={formData.username ? formData.username : ""}
          />
          <Field
            label='password: '
            name='password'
            onChange={handleChange}
            type='password'
            value={formData.password ? formData.password : ""}
          />
          <Button type='submit'>sign up</Button>
        </Form>
      </Formik>
      {currentUser && JSON.stringify(currentUser)}
    </Main>
  );
};

export default Registration;
