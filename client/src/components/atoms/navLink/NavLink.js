import { NavLink } from "react-router-dom";

const NavigationLink = ({ children, to }) => (
  <NavLink to={to}>{children}</NavLink>
);

export default NavigationLink;
