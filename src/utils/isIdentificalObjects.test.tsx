import { isEdentificalObjects } from "./isIdenticalObjects";
import { isEdentificalObjectsForPush } from "./isIdenticalObjects";

describe("isEdentificalObjects function", () => {
	test("to egual true", () => {
		expect(
			isEdentificalObjects(
				{ id: 0, count: 1, title: "Notebook", photo: "", price: 100 },
				{ id: 0, count: 1, title: "Notebook", photo: "", price: 100 }
			)
		).toBe(true);
	});

	test("to egual false", () => {
		expect(
			isEdentificalObjects(
				{ id: 0, count: 1, title: "Notebook", photo: "", price: 100 },
				{ id: 0, count: 1, title: "t-shirt", photo: "", price: 100 }
			)
		).toBe(false);
	});
});

describe("isEdentificalObjectsForPush function", () => {
	test("to Equal true", () => {
		expect(
			isEdentificalObjectsForPush(
				{ id: 0, count: 2, title: "Notebook", photo: "", price: 100 },
				{ id: 0, count: 2, title: "Notebook", photo: "", price: 100 }
			)
		).toBe(true);
	});

	test("to Equal true", () => {
		expect(
			isEdentificalObjectsForPush(
				{ id: 0, count: 3, title: "Notebook", photo: "", price: 100 },
				{ id: 0, count: 4, title: "Notebook", photo: "", price: 100 }
			)
		).toBe(true);
	});

	test("to Equal false", () => {
		expect(
			isEdentificalObjectsForPush(
				{ id: 0, count: 2, title: "Notebook", photo: "", price: 100 },
				{ id: 0, count: 2, title: "t-shirt", photo: "", price: 100 }
			)
		).toBe(false);
	});
});
