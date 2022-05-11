import { render, screen } from "@testing-library/react";
import InputWithLabel from "./InputWithLabel";

describe("InputWithLabel", () => {
  test("renders the InputWithLabel component", () => {
    render(<InputWithLabel name='test' type='text' />);

    const input = screen.getByRole("textbox");

    expect(input).toBeInTheDocument();
  });
  test("InputWithLabel has class when class is passed as prop", () => {
    render(
      <InputWithLabel className='testing-classname' name='test' type='text' />
    );

    const inputWithLabel = screen.getByRole("textbox");

    expect(inputWithLabel).toHaveClass("testing-classname");
  });
});
