import { useEffect, useState } from "react";

import Registration from "./components/templates/registration/Registration";

const App = () => {
  const initialFormState = {
    username: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialFormState);
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
      .then((response) => setUser((user) => (user = response.data)));
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <div className='App'>
      <Registration
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {user ? JSON.stringify(user) : ""}
    </div>
  );
};

export default App;
