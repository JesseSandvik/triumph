import React from "react";
import { render, screen } from "@testing-library/react";
import Form from "./Form";

describe("<Form />", () => {
  test("renders the <Form /> component", () => {
    render(<Form role='form'></Form>);

    const form = screen.getByRole("form");

    expect(form).toBeInTheDocument();
  });
  test("passes the class/className 'test-class' as a prop to the <Form /> component", () => {
    render(<Form className='test-class' role='form'></Form>);

    const form = screen.getByRole("form");

    expect(form).toHaveClass("test-class");
  });
  test("passes the id 'test-id' as a prop to the <Form /> component", () => {
    render(<Form id='test-id' role='form'></Form>);

    const form = screen.getByRole("form");

    expect(form).toHaveAttribute("id", "test-id");
  });
});
