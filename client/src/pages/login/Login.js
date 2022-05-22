import { useEffect, useState } from "react";
import Button from "../../components/atoms/button/Button";
import Field from "../../components/molecules/field/Field";
import Form from "../../components/molecules/form/Form";
import NavLink from "../../components/atoms/navLink/NavLink";
import Paragraph from "../../components/atoms/paragraph/Paragraph";

import { initialFormState } from "./initialFormState";

const Login = () => {
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
    fetch("http://localhost:5000/auth", options)
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
        <Button type='submit'>login</Button>
      </Form>
      <Paragraph>Not a member?</Paragraph>
      <Paragraph>
        Sign up <NavLink to='/register'>here</NavLink>.
      </Paragraph>
    </div>
  );
};

export default Login;
