import { useEffect, useState } from "react";
import Button from "../../atoms/button/Button";
import Field from "../../molecules/field/Field";
import Form from "../../molecules/form/Form";

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

  useEffect(() => {
    console.log(formData);
  }, [formData]);

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
    <div>
      <Form onSubmit={handleSubmit}>
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
      {currentUser && JSON.stringify(currentUser)}
    </div>
  );
};

export default Registration;
