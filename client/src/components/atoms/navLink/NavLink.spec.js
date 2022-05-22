import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import NavLink from "./NavLink";

describe("<NavLink />", () => {
  test("renders the <NavLink /> component", () => {
    render(
      <Router>
        <NavLink to={"/testing"}>testing</NavLink>
      </Router>
    );

    const navLink = screen.getByRole("link", { name: /testing/i });

    expect(navLink).toBeInTheDocument();
  });
});
