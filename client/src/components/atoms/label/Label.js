const Label = ({ children, className, htmlFor, id }) => (
  <label className={className} htmlFor={htmlFor} id={id}>
    {children}
  </label>
);

export default Label;
