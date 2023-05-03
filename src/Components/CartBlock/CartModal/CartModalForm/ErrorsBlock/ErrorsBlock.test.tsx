import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ErrorsBlock } from "./ErrorsBlock";

const errors = {
	email: {
		type: "",
		message: "Пожалуйста, введите корректный email",
	},
	name: {
		type: "",
		message: "Пожалуйста, заполните все обязательные поля",
	},
	phone: {
		type: "",
		message: "Укажите, пожалуйста, корректный номер телефона",
	},
};

describe("ErrorsBlock component", () => {
	it("renders correctly", async () => {
		render(<ErrorsBlock errors={errors} />);

		await expect(screen.getByTestId("required-fields")).toHaveTextContent(
			"Пожалуйста, заполните все обязательные поля"
		);
		await expect(screen.getByTestId("notCorrectEmail")).toHaveTextContent(
			"Пожалуйста, введите корректный email"
		);
		await expect(screen.getByTestId("notCorrectNumber")).toHaveTextContent(
			"Укажите, пожалуйста, корректный номер телефона"
		);
	});
});
