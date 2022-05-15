import Input from "../../atoms/input/Input";
import Label from "../../atoms/label/Label";

const Field = ({ error, name, label, onChange, type, value, ...props }) => {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <Input
        name={name}
        onChange={onChange}
        type={type}
        value={value}
        {...props}
      />
    </div>
  );
};

export default Field;
