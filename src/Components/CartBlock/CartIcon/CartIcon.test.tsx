import { fireEvent, render, screen } from "@testing-library/react";
import * as redux from "react-redux";
import "@testing-library/jest-dom";
import { CartIcon } from "./CartIcon";

jest.mock("react-redux");

const mockedDisptch = jest.spyOn(redux, "useDispatch");

describe("Cart component", () => {
	it("renders without products", async () => {
		const dispatch = jest.fn();
		mockedDisptch.mockReturnValue(dispatch);
		render(<CartIcon />);

		await expect(screen.getByTestId("cart-icon")).toBeInTheDocument();
		fireEvent.click(screen.getByTestId("cart-icon"));
		await expect(dispatch).toBeCalledTimes(1);
	});
});
