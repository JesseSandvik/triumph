const Footer = ({ children, className, id }) => {
  return (
    <footer className={className} id={id}>
      {children}
    </footer>
  );
};

export default Footer;
