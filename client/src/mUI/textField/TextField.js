import { TextField } from "@mui/material";
import { useField } from "formik";

const TextFieldWrapper = ({ name, ...props }) => {
  const [field, meta] = useField(name);
  const configTextField = {
    ...field,
    ...props,
    variant: "outlined",
  };

  if (meta && meta.touched && meta.error) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  }
  return <TextField {...configTextField} />;
};

export default TextFieldWrapper;
