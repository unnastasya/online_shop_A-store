import { fireEvent, render, screen } from "@testing-library/react";
import { CartHeader } from "./CartHeader";
import * as redux from "react-redux";
import "@testing-library/jest-dom";

jest.mock("react-redux");

const mockedDisptch = jest.spyOn(redux, "useDispatch");

describe("Cart Header component", () => {
	it("renders correctly", async () => {
		const dispatch = jest.fn();
		mockedDisptch.mockReturnValue(dispatch);
		render(<CartHeader />);

		await expect(
			screen.getByTestId("cart-header__arrow")
		).toBeInTheDocument();
		await expect(
			screen.getByTestId("cart-header__title")
		).toHaveTextContent("Ваш заказ");
		await expect(
			screen.getByTestId("cart-header__close")
		).toBeInTheDocument();
	});

	it("close if click arrow", async () => {
		const dispatch = jest.fn();
		mockedDisptch.mockReturnValue(dispatch);
		render(<CartHeader />);

		fireEvent.click(screen.getByTestId("cart-header__arrow"));
		expect(dispatch).toBeCalledTimes(1);
		await expect(
			screen.getByTestId("cart-header__title")
		).toHaveTextContent("Ваш заказ");
		await expect(
			screen.getByTestId("cart-header__close")
		).toBeInTheDocument();
	});
	it("close if click close", async () => {
		const dispatch = jest.fn();
		mockedDisptch.mockReturnValue(dispatch);
		render(<CartHeader />);

		await expect(
			screen.getByTestId("cart-header__arrow")
		).toBeInTheDocument();
		await expect(
			screen.getByTestId("cart-header__title")
		).toHaveTextContent("Ваш заказ");
		fireEvent.click(screen.getByTestId("cart-header__close"));
		expect(dispatch).toBeCalledTimes(1);
	});
});
