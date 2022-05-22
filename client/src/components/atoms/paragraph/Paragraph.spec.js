import { render, screen } from "@testing-library/react";
import Paragraph from "./Paragraph";

describe("<Paragraph />", () => {
  test("renders the <Paragraph /> component", () => {
    render(<Paragraph>testing</Paragraph>);

    const paragraph = screen.getByText("testing");

    expect(paragraph).toBeInTheDocument();
  });
  test('passes the class/className "test-class" as a prop to the <Paragraph /> component', () => {
    render(<Paragraph className='test-class'>testing</Paragraph>);

    const paragraph = screen.getByText("testing");

    expect(paragraph).toHaveClass("test-class");
  });
});
