// import dependencies
import React from "react";
// import react-testing methods
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect";
import Math from "./../Math";

// wrap all tests in 1 describe block
// add another test
test("loads and displays greeting", async () => {
  // Arrange
  const { container, debug } = render(
    <Math num1={19} operator="+" num2={341} />
  );
  //   debug();
  // Act - user is not interacting with this
  // Assert
  // For mor on matchers see jest documentation & https://github.com/testing-library/jest-dom
  expect(container).toContainHTML(`<span>False</span>`);
});
