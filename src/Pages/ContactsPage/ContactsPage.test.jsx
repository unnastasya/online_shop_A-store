import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "store";
import { ContactsPage } from "./ContactsPage";
import "@testing-library/jest-dom";

describe("ContactsPage component", () => {
	it("renders correctly", async () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<ContactsPage />
				</BrowserRouter>
			</Provider>
		);
		await screen.findByTestId("contacts-page");
		expect(screen.getByTestId("contacts-page__title")).toHaveTextContent(
			"Контакты"
		);
		expect(screen.getByTestId("contacts-page__number")).toHaveTextContent(
			"+7 906 061 60 20"
		);
		expect(screen.getByTestId("contacts-page__address")).toHaveTextContent(
			"г. Москва, пр-т Андропова, 18 корп. 3"
		);
		expect(screen.getByTestId("contacts-page__time")).toHaveTextContent(
			"пн-чт: 10:00—19:00 пт: 10:00—17:30"
		);
		expect(screen.getByTestId("contacts-page__pay")).toHaveTextContent(
			"Принимаем к оплате карты Visa, Mastercard, МИР."
		);
		expect(screen.getByTestId("map")).toBeInTheDocument();
	});
});
