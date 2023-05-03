import { fireEvent, getByText, render, screen } from "@testing-library/react";
import * as redux from "react-redux";
import { CartModalForm } from "./CartModalForm";
import "@testing-library/jest-dom";
import { CartProductType } from "types/CartProductType";

jest.mock("react-redux");

const mockedDisptch = jest.spyOn(redux, "useDispatch");

const products1: CartProductType[] = [
	{
		color: "white",
		count: 1,
		id: 6,
		photo: "http://qa-games.ru/astore/public/images/61646585.png",
		price: 1799,
		title: "Футболка с бархатными стикерами",
	},
];

describe("CartModal component", () => {
	it("renders correctly", async () => {
		jest.spyOn(redux, "useSelector").mockReturnValue(products1);
		const dispatch = jest.fn();
		mockedDisptch.mockReturnValue(dispatch);
		render(<CartModalForm />);

		await expect(
			screen.getByTestId("cart-modal__form")
		).toBeInTheDocument();
		await expect(
			screen.getByTestId("cart-modal__name__label")
		).toHaveTextContent("ФИО");
		await expect(
			screen.getByTestId("cart-modal__email__label")
		).toHaveTextContent("e-mail");
		await expect(
			screen.getByTestId("cart-modal__phone__label")
		).toHaveTextContent("Телефон");
		await expect(
			screen.getByTestId("cart-modal__address__label")
		).toHaveTextContent(/Адрес/);
		await expect(
			screen.getByTestId("cart-modal__deliveryType__label")
		).toHaveTextContent("Доставка");
		await expect(
			screen.getByTestId("cart-modal__comment__label")
		).toHaveTextContent("Комментарий к заказу");
		await expect(
			screen.getByTestId("cart-modal__paymentType__label")
		).toHaveTextContent("Способ оплаты");
		await expect(
			screen.getByTestId("cart-modal__button")
		).toHaveTextContent("Далее");
	});

	it("no required field", async () => {
		jest.spyOn(redux, "useSelector").mockReturnValue(products1);
		const dispatch = jest.fn();
		mockedDisptch.mockReturnValue(dispatch);
		render(<CartModalForm />);

		await expect(
			screen.getByTestId("cart-modal__form")
		).toBeInTheDocument();
		const button = await screen.getByTestId("cart-modal__button");
		fireEvent.click(button);
		await screen.findAllByText(
			"Пожалуйста, заполните все обязательные поля"
		);
		await expect(screen.getByTestId("errorBlock")).toHaveTextContent(
			"Пожалуйста, заполните все обязательные поля"
		);
	});

	it("with invalid email", async () => {
		jest.spyOn(redux, "useSelector").mockReturnValue(products1);
		const dispatch = jest.fn();
		mockedDisptch.mockReturnValue(dispatch);
		const screen = render(<CartModalForm />);

		await screen.findByTestId("cart-modal__form");
		const input = screen.getByTestId("cart-modal__email__input");
		fireEvent.change(input, { target: { value: "randomemail" } });
		const button = await screen.getByTestId("cart-modal__button");
		fireEvent.click(button);
		await screen.findAllByText("Пожалуйста, введите корректный email");
		await expect(screen.getByTestId("errorBlock")).toHaveTextContent(
			"Пожалуйста, введите корректный email"
		);
	});
});
