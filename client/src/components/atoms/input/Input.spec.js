import React from "react";
import { render, screen } from "@testing-library/react";
import Input from "./Input";

describe("<Input />", () => {
  test("renders the Input component", () => {
    render(<Input name='name' type='text' />);

    const input = screen.getByRole("textbox");

    expect(input).toBeInTheDocument();
  });
});
