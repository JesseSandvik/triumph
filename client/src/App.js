import { useState } from "react";

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

  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username: </label>
        <input name='username' type='text' onChange={handleChange} />
        <label htmlFor='password'>Password: </label>
        <input name='password' type='password' onChange={handleChange} />
        <button type='submit'>Register</button>
      </form>
      {user ? JSON.stringify(user) : ""}
    </div>
  );
};

export default App;
