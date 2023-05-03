export const updateLocalStorage = (state: any) => {
	localStorage.setItem("products", JSON.stringify(state.cartProducts));
	localStorage.setItem("cartLength", JSON.stringify(state.cartLength));
	localStorage.setItem("cartSum", JSON.stringify(state.totalSum));
};
