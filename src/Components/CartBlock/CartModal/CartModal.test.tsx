import { render, screen } from "@testing-library/react";
import { CartModal } from "./CartModal";
import * as redux from "react-redux";
import * as cartSelctors from "../../../store/Cart/selectors";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
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
		jest.spyOn(redux, "useSelector").mockReturnValue([true]);
		jest.spyOn(cartSelctors, "cartProductsSelector").mockReturnValue(
			products1
		);
		const dispatch = jest.fn();
		mockedDisptch.mockReturnValue(dispatch);
		render(
			<BrowserRouter>
				<CartModal />
			</BrowserRouter>
		);
		await expect(
			screen.getByTestId("cart-modal__header")
		).toBeInTheDocument();
		await expect(screen.getByTestId("cart-products")).toBeInTheDocument();
		await expect(screen.getByTestId("cart-sum")).toBeInTheDocument();
		await expect(
			screen.getByTestId("cart-modal__form")
		).toBeInTheDocument();
	});
});
