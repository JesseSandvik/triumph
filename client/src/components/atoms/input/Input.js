const Input = ({ id, name, onChange, type, value }) => {
  return (
    <input id={id} name={name} onChange={onChange} type={type} value={value} />
  );
};

export default Input;
