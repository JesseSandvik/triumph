const InputWithLabel = (props) => {
  return (
    <div>
      <label htmlFor={props.name}>{props.name}</label>
      <input {...props} name={props.name} type={props.type} />
    </div>
  );
};

export default InputWithLabel;
