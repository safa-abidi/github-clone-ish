import { render, fireEvent, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("should render button with custom borderRadius", () => {
    const borderRadius = "5px";
    render(
      <Button borderRadius={borderRadius} onClick={() => {}}>
        Test Button
      </Button>
    );
    const button = screen.getByRole("button");
    expect(button).toHaveStyle(`border-radius: ${borderRadius}`);
  });

  it("should call onClick function when button is clicked", () => {
    const onClickMock = jest.fn();
    render(
      <Button onClick={onClickMock}>Test Button</Button>
    );
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalled();
  });

  it("should render button with child content", () => {
    const buttonText = "Test Button";
    render(
      <Button onClick={() => {}}>{buttonText}</Button>
    );
    const button = screen.getByText(buttonText);
    expect(button).toBeInTheDocument();
  });
});
