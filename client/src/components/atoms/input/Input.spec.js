import React from "react";
import { render, screen } from "@testing-library/react";
import Input from "./Input";

describe("<Input />", () => {
  test("renders the Input component", () => {
    render(<Input />);

    const input = screen.getByRole("input", { name: /name/i });

    expect(input).toBeInTheDocument();
  });
});
