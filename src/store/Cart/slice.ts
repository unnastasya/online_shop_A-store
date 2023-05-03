import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartProductType } from "types/CartProductType";
import { DataCartModalForm } from "types/DataCartModalForm";
import {
	isEdentificalObjects,
	isEdentificalObjectsForPush,
} from "utils/isIdenticalObjects";

export type CartProductStateType = {
	cartProducts: CartProductType[];
	cartDrawerOpen: boolean;
	cartModalOpen: boolean;
	cartLength: number;
	totalSum: number;
	valueDelivery?: string;
	messageModalIsOpen?: boolean;
	message?: string;
	formData?: DataCartModalForm;
};

const initialState: CartProductStateType = {
	cartProducts: [],
	cartDrawerOpen: false,
	cartModalOpen: false,
	cartLength: 0,
	totalSum: 0,
	valueDelivery: "Доставка по России — 350₽",
	messageModalIsOpen: false,
	message: "",
};
const NAME = "cart";

export const pushProduct: CaseReducer<
	CartProductStateType,
	PayloadAction<CartProductType>
> = (state, { payload }) => {
	let flag = true;

	for (let i in state.cartProducts) {
		if (isEdentificalObjectsForPush(state.cartProducts[i], payload)) {
			state.cartProducts[i].count++;
			state.cartLength++;
			flag = false;
			break;
		}
	}
	if (flag) {
		state.cartProducts.push(payload);
		state.cartLength++;
	}
	state.totalSum += payload.price;
};

export const changeOpenDrawerCart: CaseReducer<CartProductStateType> = (
	state
) => {
	state.cartDrawerOpen = !state.cartDrawerOpen;
};

export const changeOpenModalCart: CaseReducer<CartProductStateType> = (
	state
) => {
	state.cartModalOpen = !state.cartModalOpen;
};

export const minusCount: CaseReducer<
	CartProductStateType,
	PayloadAction<CartProductType>
> = (state, { payload }) => {
	for (let i in state.cartProducts) {
		if (isEdentificalObjects(state.cartProducts[i], payload)) {
			if (state.cartProducts[i].count === 1) {
				state.cartProducts.splice(+i, 1);
			} else {
				state.cartProducts[i].count--;
			}

			if (state.cartLength > 1) {
				state.cartLength--;
			} else {
				state.cartLength--;
				state.cartDrawerOpen = false;
				state.cartModalOpen = false;
			}
			state.totalSum -= payload.price;

			break;
		}
	}
};

export const plusCount: CaseReducer<
	CartProductStateType,
	PayloadAction<CartProductType>
> = (state, { payload }) => {
	for (let i in state.cartProducts) {
		if (isEdentificalObjects(state.cartProducts[i], payload)) {
			state.cartProducts[i].count++;
			state.cartLength++;
			state.totalSum += payload.price;

			break;
		}
	}
};

export const deleteProduct: CaseReducer<
	CartProductStateType,
	PayloadAction<CartProductType>
> = (state, { payload }) => {
	for (let i in state.cartProducts) {
		if (
			Object.keys({ ...state.cartProducts[i], ...payload }).every(
				(key) => state.cartProducts[i][key] === payload[key]
			)
		) {
			state.cartProducts.splice(+i, 1);
			state.totalSum -= payload.price * payload.count;
			state.cartLength -= payload.count;
			if (state.cartLength === 0) {
				state.cartDrawerOpen = false;
				state.cartModalOpen = false;
			}
			break;
		}
	}
};

export const ChangeValueDelivery: CaseReducer<
	CartProductStateType,
	PayloadAction<string>
> = (state, payload) => {
	state.valueDelivery = payload.payload;
};

export const postOrder: CaseReducer = (state) => {};

export const changeMessage: CaseReducer<
	CartProductStateType,
	PayloadAction<string>
> = (state, payload) => {
	state.messageModalIsOpen = true;
	state.message = payload.payload;
};

export const closeMessageModal: CaseReducer<CartProductStateType> = (state) => {
	state.messageModalIsOpen = false;
	state.message = "";
};

export const pushFormData: CaseReducer<
	CartProductStateType,
	PayloadAction<DataCartModalForm>
> = (state, payload) => {
	state.formData = payload.payload;
};

export const { reducer: cartReducer, actions: cartActions } = createSlice({
	name: NAME,
	initialState,
	reducers: {
		pushProduct,
		changeOpenDrawerCart,
		changeOpenModalCart,
		minusCount,
		plusCount,
		deleteProduct,
		ChangeValueDelivery,
		changeMessage,
		closeMessageModal,
		postOrder,
		pushFormData,
	},
});
