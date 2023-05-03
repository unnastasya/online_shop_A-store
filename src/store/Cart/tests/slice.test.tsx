import { cartActions, cartReducer } from "../slice";
import { CartProductStateDelivery, CartProductStateOpenDrawerCart, CartProductStateOpenModalCart, CartProductStateWithOneProduct, CartProductStateWithoutProducts, CartProductStateWithTwoProduct, product1 } from "./data";

describe("slice", () => {
	it("push new product in cart", () => {
		const action = cartActions.pushProduct(product1);
		const result = cartReducer(CartProductStateWithoutProducts, action);
		expect(result).toEqual(CartProductStateWithOneProduct);
	});

	it("push repeat product", () => {
		const action = cartActions.pushProduct(product1);
		const result = cartReducer(CartProductStateWithOneProduct, action);
		expect(result).toEqual(CartProductStateWithTwoProduct);
	});

	it("close cart drawer block", () => {
		const action = cartActions.changeOpenDrawerCart();
		const result = cartReducer(CartProductStateWithoutProducts, action);
		expect(result).toEqual(CartProductStateOpenDrawerCart);
	});

	it("close cart modal block", () => {
		const action = cartActions.changeOpenModalCart();
		const result = cartReducer(CartProductStateWithoutProducts, action);
		expect(result).toEqual(CartProductStateOpenModalCart);
	});

	it("minus count of product", () => {
		const action = cartActions.minusCount(product1);
		const result = cartReducer(CartProductStateWithOneProduct, action);
		expect(result).toEqual(CartProductStateWithoutProducts);
	});

	it("plus count of product", () => {
		const action = cartActions.plusCount(product1);
		const result = cartReducer(CartProductStateWithOneProduct, action);
		expect(result).toEqual(CartProductStateWithTwoProduct);
	});

	it("delete product from cart", () => {
		const action = cartActions.deleteProduct(product1);
		const result = cartReducer(CartProductStateWithOneProduct, action);
		expect(result).toEqual(CartProductStateWithoutProducts);
	});

	it("change status of delivery", () => {
		const action = cartActions.ChangeValueDelivery("Самовывоз (пр-т Андропова, 18 корп. 3)");
		const result = cartReducer(CartProductStateWithoutProducts, action);
		expect(result).toEqual(CartProductStateDelivery);
	});
});
