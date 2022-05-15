const Form = ({ handleSubmit, children, ...props }) => {
  return (
    <form onSubmit={handleSubmit} {...props}>
      {children}
    </form>
  );
};

export default Form;
