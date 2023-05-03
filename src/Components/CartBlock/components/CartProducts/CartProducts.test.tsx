import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { CartProducts } from "./CartProducts";
import * as redux from "react-redux";
import "@testing-library/jest-dom/extend-expect";
import { CartProductType } from "types/CartProductType";

jest.mock("react-redux");

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

const products2: CartProductType[] = [
	{
		count: 1,
		id: 3,
		model: "iPhone 14 Pro Max",
		photo: "http://qa-games.ru/astore/public/images/15932051.jpeg",
		price: 799,
		title: "Чехол с кардхолдером",
	},
	{
		color: "",
		count: 1,
		id: 2,
		model: "",
		photo: "http://qa-games.ru/astore/public/images/77117755.jpeg",
		price: 1499,
		size: "",
		stickerNumber: 0,
		title: "Блокнот Для умных и свободных",
	},
	{
		color: "white",
		count: 1,
		id: 9,
		model: "",
		photo: "http://qa-games.ru/astore/public/images/64963633.png",
		price: 1749,
		size: "L",
		stickerNumber: 1,
		title: "Футболка с FLAT-стикерами",
	},
];

describe("CartProducts component", () => {
	it("renders without products", async () => {
		jest.spyOn(redux, "useSelector").mockReturnValue([]);
		render(<CartProducts />);
		await expect(screen.getByTestId("cart-products")).toBeInTheDocument();
	});

	it("renders with 1 product", async () => {
		jest.spyOn(redux, "useSelector").mockReturnValue(products1);
		render(
			<BrowserRouter>
				<CartProducts />
			</BrowserRouter>
		);
		await expect(screen.getByTestId("cart-products")).toBeInTheDocument;
		expect(screen.getByTestId("carts__product__6")).toHaveTextContent(
			"Футболка с бархатными стикерами"
		);
	});

	it("renders with many products", async () => {
		jest.spyOn(redux, "useSelector").mockReturnValue(products2);
		render(
			<BrowserRouter>
				<CartProducts />
			</BrowserRouter>
		);
		await expect(screen.getByTestId("cart-products")).toBeInTheDocument;
		expect(screen.getByTestId("carts__product__3")).toHaveTextContent(
			"Чехол с кардхолдером"
		);
		expect(screen.getByTestId("carts__product__2")).toHaveTextContent(
			"Блокнот Для умных и свободных"
		);
		expect(screen.getByTestId("carts__product__9")).toHaveTextContent(
			"Футболка с FLAT-стикерами"
		);
	});
});
