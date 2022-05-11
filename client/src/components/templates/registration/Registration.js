import { Fragment } from "react";
import Button from "../../atoms/button/Button";
import Form from "../../molecules/form/Form";
import Input from "../../atoms/input/Input";
import InputLabel from "../../atoms/inputLabel/InputLabel";
import InputWithLabel from "../../atoms/inputWithLabel/InputWithLabel";

const Registration = ({ formData, handleChange, handleSubmit }) => {
  return (
    <Fragment>
      <Form onSubmit={handleSubmit}>
        <InputWithLabel
          name='username'
          type='text'
          value={formData.username}
          onChange={handleChange}
        />
        <InputWithLabel name='password' type='password' />
        <Button type='submit'>Sign Up</Button>
      </Form>
    </Fragment>
  );
};

export default Registration;
