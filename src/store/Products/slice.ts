import { ProductType } from "types/ProductType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CaseReducer } from "@reduxjs/toolkit";

export type productYType = {
	id: number;
	title: string;
	description: string;
	products: ProductType[];
};

export type ProductStateType = {
	productsMadeInAlfa: ProductType[];
	productYourDesign: productYType[];
	productYourDesignBlock1: productYType;
	productYourDesignBlock2: productYType;
	productYourDesignBlock3: productYType;
	product: ProductType;
	isLoading: boolean;
	hasError: boolean;
	requestData: string;
};

const initialState: ProductStateType = {
	productsMadeInAlfa: [],
	productYourDesign: [],
	productYourDesignBlock1: {
		id: 0,
		title: "",
		description: "",
		products: [],
	},
	productYourDesignBlock2: {
		id: 0,
		title: "",
		description: "",
		products: [],
	},
	productYourDesignBlock3: {
		id: 0,
		title: "",
		description: "",
		products: [],
	},

	product: {
		id: 0,
		title: "",
		preview: "",
		images: [],
		description: "",
		price: 0,
		availability: true,
	},
	isLoading: false,
	hasError: false,
	requestData: "",
};
const NAME = "Products";

const requestMadeInAlfaProducts: CaseReducer<ProductStateType> = (state) => {
	state.isLoading = true;
	state.hasError = false;
};

const successMadeInAlfaProducts: CaseReducer<
	ProductStateType,
	PayloadAction<ProductType[]>
> = (state, { payload }) => {
	state.isLoading = false;
	state.hasError = false;
	state.productsMadeInAlfa = payload;
};

const requestYourDesignProducts: CaseReducer<ProductStateType> = (state) => {
	state.isLoading = true;
	state.hasError = false;
};

const successYourDesignProducts: CaseReducer<
	ProductStateType,
	PayloadAction<productYType[]>
> = (state, { payload }) => {
	state.isLoading = false;
	state.hasError = false;

	state.productYourDesignBlock1 = payload[0];
	state.productYourDesignBlock2 = payload[1];
	state.productYourDesignBlock3 = payload[2];
};

const requestProduct: CaseReducer<ProductStateType> = (state) => {
	state.isLoading = true;
	state.hasError = false;
};

const successProduct: CaseReducer<
	ProductStateType,
	PayloadAction<ProductType>
> = (state, { payload }) => {
	state.isLoading = false;
	state.hasError = false;
	state.product = payload;
};

const failure: CaseReducer<ProductStateType> = (state) => {
	state.isLoading = false;
	state.hasError = true;
};

const changeError: CaseReducer<ProductStateType> = (state) => {
	state.hasError = false;
};

const changeRequestsData: CaseReducer<
	ProductStateType,
	PayloadAction<string>
> = (state, { payload }) => {
	state.requestData = payload;
};

export const { actions: ProductsActions, reducer: ProductsReducer } =
	createSlice({
		name: NAME,
		initialState: initialState,
		reducers: {
			requestMadeInAlfaProducts,
			successMadeInAlfaProducts,
			requestYourDesignProducts,
			successYourDesignProducts,
			requestProduct,
			successProduct,
			failure,
			changeError,
			changeRequestsData,
		},
	});
