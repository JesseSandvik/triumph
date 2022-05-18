const Label = ({ children, className, htmlFor, id }) => {
  return (
    <label className={className} htmlFor={htmlFor} id={id}>
      {children}
    </label>
  );
};

export default Label;
