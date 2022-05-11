import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  test("renders the Button component", () => {
    render(<Button>Test</Button>);

    const button = screen.getByRole("button", { name: /test/i });

    expect(button).toBeInTheDocument();
  });
  test("Button component has class when class is passed as prop", () => {
    render(<Button className='testing-classname'>test</Button>);

    const button = screen.getByRole("button", { name: /test/i });

    expect(button).toHaveClass("testing-classname");
  });
});
