const Form = ({ children, className, id, onSubmit, role }) => {
  return (
    <form className={className} id={id} onSubmit={onSubmit} role={role}>
      {children}
    </form>
  );
};

export default Form;
