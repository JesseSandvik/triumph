import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("<Button />", () => {
  test("renders the <Button /> component", () => {
    render(<Button>testing</Button>);

    const button = screen.getByRole("button", { name: /testing/i });

    expect(button).toBeInTheDocument();
  });
  test('passes the class/className "test-class" as a prop to the <Button /> component', () => {
    render(<Button className='test-class'>testing</Button>);

    const button = screen.getByRole("button", { name: /testing/i });

    expect(button).toHaveClass("test-class");
  });
  test('passes the "disabled" prop to the <Button /> component', () => {
    render(<Button disabled>testing</Button>);

    const button = screen.getByRole("button", { name: /testing/i });

    expect(button).toBeDisabled();
  });
  test('passes the type "submit" to the <Button /> component', () => {
    render(<Button type='submit'>testing</Button>);

    const button = screen.getByRole("button", { name: /testing/i });

    expect(button).toHaveProperty("type", "submit");
  });
});
