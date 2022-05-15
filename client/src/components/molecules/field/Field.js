import Input from "../../atoms/input/Input";
import Label from "../../atoms/label/Label";

const Field = ({ error, name, label, type, ...props }) => {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} {...props} />
    </div>
  );
};

export default Field;
