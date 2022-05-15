import { render, screen } from "@testing-library/react";
import Field from "./Field";

describe("<Field />", () => {
  test("renders the <Field /> component", () => {
    render(<Field name='testing' label='test' />);

    const field = screen.getByRole("textbox");

    expect(field).toBeInTheDocument();
  });
});
