import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "store";
import { setupServer } from "msw/lib/node";
import { rest } from "msw";
import { ProductCardPage } from "./ProductCardPage";

import Products from "data/products.json";

const server__MadeInAlfaProduct = setupServer(
	rest.get("http://qa-games.ru/astore/product/", (reg, res, ctx) => {
		const data = Products.products[1];
		return res(ctx.json(data));
	})
);

const server__YourDesignProduct = setupServer(
	rest.get("http://qa-games.ru/astore/product/", (reg, res, ctx) => {
		const data = Products.customProducts[2];
		return res(ctx.json(data));
	})
);

describe("ProductsCard page", () => {
	it("renders with product, id = 1", async () => {
		server__MadeInAlfaProduct.listen();
		render(
			<Provider store={store}>
				<BrowserRouter>
					<ProductCardPage></ProductCardPage>
				</BrowserRouter>
			</Provider>
		);
		await screen.findByTestId("product-card");
		expect(screen.getByTestId("product-card__title")).toHaveTextContent(
			"Футболка Для умных и свободных"
		);
		server__MadeInAlfaProduct.close();
	});

	it("renders with product, id = 7", async () => {
		server__YourDesignProduct.listen();
		render(
			<Provider store={store}>
				<BrowserRouter>
					<ProductCardPage></ProductCardPage>
				</BrowserRouter>
			</Provider>
		);
		await screen.findByTestId("product-card");
		expect(screen.getByTestId("product-card__title")).toHaveTextContent(
			"Футболка оверсайз с бархатными стикерами"
		);
		server__YourDesignProduct.close();
	});

	it("renders spinner if product is loaded", () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<ProductCardPage></ProductCardPage>
				</BrowserRouter>
			</Provider>
		);
		expect(screen.getByTestId("spinner")).toBeInTheDocument();
	});
});
