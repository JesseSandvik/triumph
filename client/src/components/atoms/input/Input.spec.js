import { render, screen } from "@testing-library/react";
import Input from "./Input";

describe("<Input />", () => {
  test("renders the <Input /> component", () => {
    render(<Input type='text' />);

    const input = screen.getByRole("textbox");

    expect(input).toBeInTheDocument();
    expect(input).toHaveProperty("type", "text");
  });
});
