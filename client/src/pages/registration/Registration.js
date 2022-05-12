import { useState } from "react";
import Button from "../../components/atoms/button/Button";
import Form from "../../components/molecules/form/Form";
import InputWithLabel from "../../components/atoms/inputWithLabel/InputWithLabel";

import { initialFormState } from "../../forms/registration/initialFormState";

const RegistrationPage = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [error, setError] = useState(null);
  const [user, setUser] = useState({});

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
      .then((response) => setUser((user) => (user = response.data)))
      .then(() => setFormData((formData) => (formData = initialFormState)))
      .catch((err) => setError((error) => (error = err)));
  };

  return (
    <main>
      <Form onSubmit={handleSubmit}>
        <InputWithLabel
          name='username'
          type='text'
          onChange={handleChange}
          value={formData.username}
        />
        <InputWithLabel
          name='password'
          type='password'
          onChange={handleChange}
          value={formData.password}
        />
        <Button type='submit'>sign up</Button>
      </Form>
      {user && JSON.stringify(user)}
    </main>
  );
};

export default RegistrationPage;
