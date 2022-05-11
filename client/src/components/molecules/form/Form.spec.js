import React from "react";
import { render, screen } from "@testing-library/react";
import Form from "./Form";

describe("Form", () => {
  test("renders the Form component", () => {
    render(<Form role='form'></Form>);

    const form = screen.getByRole("form");

    expect(form).toBeInTheDocument();
  });
});
