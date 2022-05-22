import Input from "../../atoms/input/Input";
import Label from "../../atoms/label/Label";

const Field = ({ id, label, name, onChange, type, value }) => (
  <div>
    {label && <Label htmlFor={name}>{label}</Label>}
    <Input id={id} name={name} onChange={onChange} type={type} value={value} />
  </div>
);

export default Field;
