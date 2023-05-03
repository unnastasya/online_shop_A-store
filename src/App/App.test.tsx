import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store } from "store";

describe("App component", () => {
	it("App renders", () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</Provider>
		);
		expect(screen.getByTestId("app")).toBeInTheDocument();
	});
});
