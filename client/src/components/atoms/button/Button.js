const Button = ({ children, className, disabled, id, onClick, type }) => (
  <button
    className={className}
    disabled={disabled}
    id={id}
    onClick={onClick}
    type={type}
  >
    {children}
  </button>
);

export default Button;
