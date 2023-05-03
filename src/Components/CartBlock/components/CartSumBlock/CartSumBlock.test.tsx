import { render, screen } from "@testing-library/react";
import * as redux from "react-redux";
import "@testing-library/jest-dom/extend-expect";
import { CartSumBlock } from "./CartSumBlock";

jest.mock("react-redux");

const totalSum = 1799;

describe("Cart Sum component", () => {
	it("renders correctly", async () => {
		jest.spyOn(redux, "useSelector").mockReturnValue(totalSum);
		render(<CartSumBlock />);
		await expect(screen.getByTestId("cart-sum__text")).toHaveTextContent(
			"1799"
		);
	});
});
