import { fireEvent, render, screen } from "@testing-library/react";
import { CartModalHeader } from "./CartModalHeader";
import * as redux from "react-redux";
import "@testing-library/jest-dom";

jest.mock("react-redux");

const mockedDisptch = jest.spyOn(redux, "useDispatch");

describe("CartModal Header component", () => {
	it("renders correctly", async () => {
		const dispatch = jest.fn();
		mockedDisptch.mockReturnValue(dispatch);
		render(<CartModalHeader />);

		await expect(
			screen.getByTestId("cart-modal__header__arrow")
		).toBeInTheDocument();
		await expect(
			screen.getByTestId("cart-modal__header__title")
		).toHaveTextContent("Ваш заказ");
		await expect(
			screen.getByTestId("cart-modal__header__close")
		).toBeInTheDocument();
	});

	it("close if click arrow", async () => {
		const dispatch = jest.fn();
		mockedDisptch.mockReturnValue(dispatch);
		render(<CartModalHeader />);

		fireEvent.click(screen.getByTestId("cart-modal__header__arrow"));
		expect(dispatch).toBeCalledTimes(1);
		await expect(
			screen.getByTestId("cart-modal__header__title")
		).toHaveTextContent("Ваш заказ");
		await expect(
			screen.getByTestId("cart-modal__header__close")
		).toBeInTheDocument();
	});
	it("close if click close", async () => {
		const dispatch = jest.fn();
		mockedDisptch.mockReturnValue(dispatch);
		render(<CartModalHeader />);

		await expect(
			screen.getByTestId("cart-modal__header__arrow")
		).toBeInTheDocument();
		await expect(
			screen.getByTestId("cart-modal__header__title")
		).toHaveTextContent("Ваш заказ");
		fireEvent.click(screen.getByTestId("cart-modal__header__close"));
		expect(dispatch).toBeCalledTimes(1);
	});
});
