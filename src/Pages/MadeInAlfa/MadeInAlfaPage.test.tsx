import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { rest } from "msw";
import { store } from "store";
import { setupServer } from "msw/node";
import { MadeInAlfaPage } from "./MadeInAlfaPage";
import MadeInAlfaProducts from "data/products.json";

const server = setupServer(
	rest.get("http://qa-games.ru/astore/made-in-alfa", (reg, res, ctx) => {
		const data = MadeInAlfaProducts.products;
		return res(ctx.json(data));
	})
);

beforeAll(() => {
	server.listen();
});

describe("MadeInAlfa page", () => {
	it("renders with data", async () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<MadeInAlfaPage></MadeInAlfaPage>
				</BrowserRouter>
			</Provider>
		);
		await screen.findAllByTestId("products-block");

		expect(
			screen.getByTestId("products-block__products__0")
		).toBeInTheDocument();
		expect(screen.getByTestId("product_0")).toHaveTextContent(
			"Рюкзак «Для умных и свободных»"
		);
		expect(screen.getByTestId("product_1")).toHaveTextContent(
			"Футболка Для умных и свободных"
		);
		expect(screen.getByTestId("product_2")).toHaveTextContent(
			"Блокнот Для умных и свободных"
		);

		expect(screen.getByTestId("product_4")).toHaveTextContent("Экоручка");
	});

	it("renders spinner if data is loaded", () => {
		server.close();
		render(
			<Provider store={store}>
				<BrowserRouter>
					<MadeInAlfaPage></MadeInAlfaPage>
				</BrowserRouter>
			</Provider>
		);
		expect(screen.getByTestId("spinner")).toBeInTheDocument();
	});
});
