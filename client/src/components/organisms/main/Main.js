const Main = ({ children, className, id }) => {
  return (
    <main className={className} id={id}>
      {children}
    </main>
  );
};

export default Main;
