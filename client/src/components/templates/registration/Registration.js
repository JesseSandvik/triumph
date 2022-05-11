import { Fragment } from "react";
import Button from "../../atoms/button/Button";
import Form from "../../molecules/form/Form";
import InputWithLabel from "../../atoms/inputWithLabel/InputWithLabel";

const Registration = ({ formData, handleChange, handleSubmit }) => {
  return (
    <Fragment>
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
        <Button type='submit'>Sign Up</Button>
      </Form>
    </Fragment>
  );
};

export default Registration;
