import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ProductsBlock } from "./ProductsBlock";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "store";

import Products from "data/products.json";
import { ProductType } from "types/ProductType";

const dataMadeInAlfa = Products.products;
const dataYourDesign1: ProductType[] = [];
const dataYourDesign2: ProductType[] = [];
const dataYourDesign3: ProductType[] = [];

beforeAll(() => {
	for (let i = 0; i < 3; i++) {
		dataYourDesign1.push(Products.customProducts[i]);
	}

	for (let i = 3; i < 6; i++) {
		dataYourDesign2.push(Products.customProducts[i]);
	}

	for (let i = 6; i < 9; i++) {
		dataYourDesign3.push(Products.customProducts[i]);
	}
});
describe("ProductsBlock component", () => {
	it("renders with data MadeInAlfa", () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<ProductsBlock products={dataMadeInAlfa} id={0} />
				</BrowserRouter>
			</Provider>
		);

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

	it("renders with data YourDesign1", () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<ProductsBlock
						products={dataYourDesign1}
						title="Бархатные стикеры"
						subtitle="Тактильный антистресс"
						id={1}
					/>
				</BrowserRouter>
			</Provider>
		);

		expect(
			screen.getByTestId("products-block__products__1")
		).toBeInTheDocument();
		expect(
			screen.getByTestId("products-block__title__1")
		).toHaveTextContent("Бархатные стикеры");
		expect(
			screen.getByTestId("products-block__subtitle__1")
		).toHaveTextContent("Тактильный антистресс");
		expect(screen.getByTestId("product_5")).toHaveTextContent(
			"Худи с бархатными стикерами"
		);
		expect(screen.getByTestId("product_6")).toHaveTextContent(
			"Футболка с бархатными стикерами"
		);
		expect(screen.getByTestId("product_7")).toHaveTextContent(
			"Футболка оверсайз с бархатными стикерами"
		);
	});
	it("renders with data YourDesign2", () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<ProductsBlock
						products={dataYourDesign2}
						title="FLAT-стикеры"
						subtitle="Тема для обсуждения в любой компании"
						id={2}
					/>
				</BrowserRouter>
			</Provider>
		);

		expect(
			screen.getByTestId("products-block__products__2")
		).toBeInTheDocument();
		expect(
			screen.getByTestId("products-block__title__2")
		).toHaveTextContent("FLAT-стикеры");
		expect(
			screen.getByTestId("products-block__subtitle__2")
		).toHaveTextContent("Тема для обсуждения в любой компании");
		expect(screen.getByTestId("product_8")).toHaveTextContent(
			"Худи с FLAT-стикерами"
		);
		expect(screen.getByTestId("product_9")).toHaveTextContent(
			"Футболка с FLAT-стикерами"
		);
		expect(screen.getByTestId("product_10")).toHaveTextContent(
			"Футболка оверсайз с FLAT-стикерами"
		);
	});
	it("renders with data YourDesign3", () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<ProductsBlock
						products={dataYourDesign3}
						title="3D-стикеры"
						subtitle="Дизайн с эффектом объёмного градиента"
						id={3}
					/>
				</BrowserRouter>
			</Provider>
		);

		expect(
			screen.getByTestId("products-block__products__3")
		).toBeInTheDocument();
		expect(
			screen.getByTestId("products-block__title__3")
		).toHaveTextContent("3D-стикеры");
		expect(
			screen.getByTestId("products-block__subtitle__3")
		).toHaveTextContent("Дизайн с эффектом объёмного градиента");
		expect(screen.getByTestId("product_11")).toHaveTextContent(
			"Худи с 3D-стикерами"
		);
		expect(screen.getByTestId("product_12")).toHaveTextContent(
			"Футболка с 3D-стикерами"
		);
		expect(screen.getByTestId("product_13")).toHaveTextContent(
			"Футболка оверсайз с 3D-стикерами"
		);
	});
});
