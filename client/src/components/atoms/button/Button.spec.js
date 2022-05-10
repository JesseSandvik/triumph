import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("<Button />", () => {
  test("renders the Button component", () => {
    render(<Button>Testing</Button>);

    const button = screen.getByRole("button", { name: /testing/i });

    expect(button).toBeInTheDocument();
  });
});
