import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import * as redux from "react-redux";
import "@testing-library/jest-dom/extend-expect";
import { OneCartProduct } from "./OneCartProduct";
import { CartProductType } from "types/CartProductType";

jest.mock("react-redux");

const mockedDispatch = jest.spyOn(redux, "useDispatch");

const products1: CartProductType = {
	color: "white",
	count: 1,
	id: 6,
	photo: "http://qa-games.ru/astore/public/images/61646585.png",
	price: 1799,
	title: "Футболка с бархатными стикерами",
	stickerNumber: 0,
};

const products2: CartProductType = {
	count: 1,
	id: 3,
	model: "iPhone 14 Pro Max",
	photo: "http://qa-games.ru/astore/public/images/15932051.jpeg",
	price: 799,
	title: "Чехол с кардхолдером",
};

describe("OneProduct component", () => {
	it("renders with 1 product", async () => {
		render(
			<BrowserRouter>
				<OneCartProduct product={products1} />
			</BrowserRouter>
		);
		expect(screen.getByTestId("carts__product__6")).toHaveTextContent(
			"Футболка с бархатными стикерами"
		);
		expect(screen.getByTestId("cartProduct__color")).toHaveTextContent(
			"white"
		);
	});

	it("renders with many products", async () => {
		render(
			<BrowserRouter>
				<OneCartProduct product={products1} />
				<OneCartProduct product={products2} />
			</BrowserRouter>
		);
		expect(screen.getByTestId("carts__product__6")).toHaveTextContent(
			"Футболка с бархатными стикерами"
		);
		expect(screen.getByTestId("cartProduct__color")).toHaveTextContent(
			"white"
		);
		expect(screen.getByTestId("carts__product__3")).toHaveTextContent(
			"Чехол с кардхолдером"
		);
		expect(screen.getByTestId("cartProduct__model")).toHaveTextContent(
			"iPhone 14 Pro Max"
		);
	});

	it("delete product", async () => {
		const dispatch = jest.fn();
		mockedDispatch.mockReturnValue(dispatch);
		render(
			<BrowserRouter>
				<OneCartProduct product={products1} />
			</BrowserRouter>
		);
		await expect(
			screen.getByTestId("cartProduct__delete")
		).toBeInTheDocument();
		fireEvent.click(screen.getByTestId("cartProduct__delete"));
		await expect(dispatch).toBeCalledTimes(1);
	});

	it("go to product page", async () => {
		const dispatch = jest.fn();
		mockedDispatch.mockReturnValue(dispatch);
		render(
			<BrowserRouter>
				<OneCartProduct product={products1} />
			</BrowserRouter>
		);
		await expect(
			screen.getByTestId("one-cart-product__product-link")
		).toBeInTheDocument();
		fireEvent.click(screen.getByTestId("one-cart-product__product-link"));
		await expect(dispatch).toBeCalledTimes(3);
	});
});
