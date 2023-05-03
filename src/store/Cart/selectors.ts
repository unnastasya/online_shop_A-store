import { ApplicationState } from "store";

export const cartSelector = (state: ApplicationState) => state.cart;

export const cartProductsSelector = (state: ApplicationState) => cartSelector(state).cartProducts;
export const cartDrawerIsOpenSelector = (state: ApplicationState) => cartSelector(state).cartDrawerOpen;
export const cartModalIsOpenSelector = (state: ApplicationState) => cartSelector(state).cartModalOpen;
export const cartLengthSelector = (state: ApplicationState) => cartSelector(state).cartLength;
export const totalSumSelector = (state: ApplicationState) => cartSelector(state).totalSum;
export const valueDeliverySelector = (state: ApplicationState) => cartSelector(state).valueDelivery;
export const messageModalIsOpenSelector = (state: ApplicationState) => cartSelector(state).messageModalIsOpen;
export const messageSelector = (state: ApplicationState) => cartSelector(state).message;
export const formDataSelector = (state: ApplicationState) => cartSelector(state).formData;
