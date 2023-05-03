import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ProductImage } from "./ProductImage";
import { store } from "store";

import Products from "data/products.json";

const dataYourDesign1 = Products.customProducts;
let preview = "http://qa-games.ru/astore/public/images/61646585.png";

describe("ProductsImage component", () => {
	it("renders with data", () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<ProductImage
						preview={
							"http://qa-games.ru/astore/public/images/61646585.png"
						}
						setPreview={(url) => {
							preview = url;
						}}
						url={dataYourDesign1[0].images[0]}
					></ProductImage>
				</BrowserRouter>
			</Provider>
		);

		expect(screen.getByTestId("product-image__block")).toBeInTheDocument();
		expect(screen.getByTestId("product-image__photo"));
	});
});
