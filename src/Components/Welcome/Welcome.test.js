import { render, screen } from "@testing-library/react";
import Welcome from "./Welcome";
import userEvent from "@testing-library/user-event";
describe("Welcome", () => {
  test("renders hello World", () => {
    //Arrange
    render(<Welcome />);
    //Act
    const helloworld = screen.getByText("Hello World", { exact: false });
    //Assert
    expect(helloworld).toBeInTheDocument();
  });

  test("renders if button is not clicked", () => {
    //Arrange
    render(<Welcome />);
    //Act
    //Assert
    const goodmorning = screen.getByText("Good Morning", { exact: false });
    expect(goodmorning).toBeInTheDocument();
  });

  test("renders if button is clicked", () => {
    //Arrange
    render(<Welcome />);
    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    //Assert
    const changedText = screen.getByText("Good Bye", { exact: false });
    expect(changedText).toBeInTheDocument();
  });

  test("does not render 'Good Morning'", () => {
    //Arrange
    render(<Welcome />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    // const changedText = screen.getByText("Good Morning", { exact: false });
    // expect(changedText).not.toBeInTheDocument();

    const changedText = screen.queryByText("Good Morning", { exact: false });
    expect(changedText).toBeNull();
  });
});

/**
 * 3 A's
 * 1.Arrange :
 * 2.Act :
 * 3.Assert :
 *
 */
