const Header = ({ children, className, id }) => {
  return (
    <header className={className} id={id}>
      {children}
    </header>
  );
};

export default Header;
