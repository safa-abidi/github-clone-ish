import { render, screen, fireEvent } from "@testing-library/react";
import NavBar from "./Navbar";
import { BrowserRouter } from "react-router-dom";

describe("NavBar", () => {
  it("should toggle the navigation menu when the hamburger button is clicked", () => {
    render(
      <BrowserRouter basename="/">
        <NavBar />
      </BrowserRouter>
    );

    const hamburgerButton = screen.getByRole("button");
    const navigationMenu = screen.getByTestId("navigation-menu");

    expect(navigationMenu).not.toHaveClass("expanded");

    fireEvent.click(hamburgerButton);
    expect(navigationMenu).toHaveClass("expanded");

    fireEvent.click(hamburgerButton);
    expect(navigationMenu).not.toHaveClass("expanded");
  });
});
