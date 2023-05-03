import { fireEvent, render, screen } from "@testing-library/react";
import * as redux from "react-redux";
import "@testing-library/jest-dom";
import { Count } from "./Count";
import { CartProductType } from "types/CartProductType";

jest.mock("react-redux");

const mockedDisptch = jest.spyOn(redux, "useDispatch");

const product1: CartProductType = {
	color: "white",
	count: 1,
	id: 6,
	photo: "http://qa-games.ru/astore/public/images/61646585.png",
	price: 1799,
	title: "Футболка с бархатными стикерами",
};

describe("Count component", () => {
	it("renders correctly", async () => {
		const dispatch = jest.fn();
		mockedDisptch.mockReturnValue(dispatch);
		render(<Count product={product1} />);

		await expect(screen.getByTestId("minusCount")).toBeInTheDocument();
		await expect(screen.getByTestId("count__text")).toHaveTextContent("1");
		await expect(screen.getByTestId("plusCount")).toBeInTheDocument();
	});

	it("click plus", async () => {
		const dispatch = jest.fn();
		mockedDisptch.mockReturnValue(dispatch);
		render(<Count product={product1} />);

		fireEvent.click(screen.getByTestId("minusCount"));
		expect(dispatch).toBeCalledTimes(1);
		await expect(screen.getByTestId("count__text")).toHaveTextContent("1");
		await expect(screen.getByTestId("plusCount")).toBeInTheDocument();
	});
	it("click minus", async () => {
		const dispatch = jest.fn();
		mockedDisptch.mockReturnValue(dispatch);
		render(<Count product={product1} />);

		await expect(screen.getByTestId("minusCount")).toBeInTheDocument();
		await expect(screen.getByTestId("count__text")).toHaveTextContent("1");
		fireEvent.click(screen.getByTestId("plusCount"));
		expect(dispatch).toBeCalledTimes(1);
	});
});
