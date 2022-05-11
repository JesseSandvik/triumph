import { render, screen } from "@testing-library/react";
import Input from "../input/Input";

describe("InputLabel", () => {
  test("renders the InputLabel component", () => {
    render(
      <label htmlFor='test'>
        <input name='test' />
      </label>
    );

    expect(screen.getByLabelText("test")).toBeInTheDocument();
  });
});
