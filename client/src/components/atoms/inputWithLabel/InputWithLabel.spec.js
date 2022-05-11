import { render, screen } from "@testing-library/react";
import InputWithLabel from "./InputWithLabel";

describe("InputWithLabel", () => {
  test("renders the InputWithLabel component", () => {
    render(<InputWithLabel name='test' type='text' />);

    const input = screen.getByRole("textbox");

    expect(input).toBeInTheDocument();
  });
});
