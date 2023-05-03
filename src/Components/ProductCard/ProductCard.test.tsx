import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ProductCard } from "./ProductCard";
import App from "App/App";
import { store } from "store";

describe("ProductsCard component", () => {
	it("renders product 1", async () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</Provider>
		);
		fireEvent.click(await screen.findByText("Сделано в Альфе"));
		fireEvent.click(await screen.findByTestId("productCard__1"));
		await screen.findByTestId("product-card");
		expect(screen.getByTestId("product-card__title")).toHaveTextContent(
			"Футболка Для умных и свободных"
		);
	});

	it("renders correctly", () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<ProductCard></ProductCard>
				</BrowserRouter>
			</Provider>
		);
		expect(screen.getByTestId("spinner")).toBeInTheDocument();
	});
});
