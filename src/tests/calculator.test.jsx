import { render, screen, waitFor } from "@testing-library/react";
import Calculator from "../Calculator"
import { expect, test } from "vitest";
import userEvent from "@testing-library/user-event";


test("calculate addition", async () => {
  render(<Calculator />);

  // 1. Input(Type) first number
  const firstNumInput = screen.getByPlaceholderText("First number")
  userEvent.type(firstNumInput, "5");
  await waitFor(() => {
    expect(firstNumInput.value).toBe("5");
  });

  // 2. Click and select the operator
  const operatorSelect = screen.getByRole("combobox");
  userEvent.selectOptions(operatorSelect, "+");

  // 3. Input(Type) second number
  const secondNumInput = screen.getByPlaceholderText("Second number")
  userEvent.type(secondNumInput, "7");
  await waitFor(() => {
    expect(secondNumInput.value).toBe("7");
  });

  // 4. Click on the "=" button
  userEvent.click(screen.getByRole("button", { name: "="}));

  // 5. Read the value of result
  await waitFor(() =>
    expect(screen.getByPlaceholderText("Result").value).toBe("12")
  )

});