import { CaseReducer, createSlice } from "@reduxjs/toolkit";

export type HeaderStateType = {
	openMenu: boolean;
};

const initialState: HeaderStateType = {
	openMenu: false,
};

const NAME = "header";

const changeOpenMenu: CaseReducer<HeaderStateType> = (state) => {
	state.openMenu = !state.openMenu;
};

export const { reducer: headerReducer, actions: headerActions } = createSlice({
	name: NAME,
	initialState,
	reducers: {
		changeOpenMenu,
	},
});
