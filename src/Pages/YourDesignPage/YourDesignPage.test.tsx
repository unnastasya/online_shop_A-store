import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import YourDesignProducts from "data/groups.json";
import { YourDesignPage } from "./YourDesignPage";
import { rest } from "msw";
import { store } from "store";
import { setupServer } from "msw/node";

const server = setupServer(
	rest.get("http://qa-games.ru/astore/your-design", (reg, res, ctx) => {
		const data = YourDesignProducts.groups;
		return res(ctx.json(data));
	})
);

beforeAll(() => {
	server.listen();
});

describe("YourDesign page", () => {
	it("renders with data", async () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<YourDesignPage></YourDesignPage>
				</BrowserRouter>
			</Provider>
		);
		await screen.findAllByTestId("products-block");

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

		expect(
			screen.getByTestId("products-block__title__2")
		).toHaveTextContent("FLAT-стикеры");
		expect(
			screen.getByTestId("products-block__subtitle__2")
		).toHaveTextContent("Тема для обсуждения в любой компании");

		expect(
			screen.getByTestId("products-block__title__3")
		).toHaveTextContent("3D-стикеры");
		expect(
			screen.getByTestId("products-block__subtitle__3")
		).toHaveTextContent("Дизайн с эффектом объёмного градиента");
	});

	it("renders spinner", () => {
		server.close();
		render(
			<Provider store={store}>
				<BrowserRouter>
					<YourDesignPage></YourDesignPage>
				</BrowserRouter>
			</Provider>
		);
		expect(screen.getByTestId("spinner")).toBeInTheDocument();
	});
});
