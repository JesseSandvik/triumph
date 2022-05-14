import { Input, Label } from "components";

const Field = ({ error, name, label, type, ...props }) => {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} {...props} />
    </div>
  );
};

export default Field;
