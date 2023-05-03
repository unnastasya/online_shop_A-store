import { ApplicationState } from "store";

export const ProductsSelector = (state: ApplicationState) => state.products;

export const MadeInAlfaProductsSelector = (state: ApplicationState) => ProductsSelector(state).productsMadeInAlfa;
export const YourDesingProductsSelector = (state: ApplicationState) => ProductsSelector(state).productYourDesign;
export const YourDesingProductsBlock1Selector = (state: ApplicationState) => ProductsSelector(state).productYourDesignBlock1;
export const YourDesingProductsBlock2Selector = (state: ApplicationState) => ProductsSelector(state).productYourDesignBlock2;
export const YourDesingProductsBlock3Selector = (state: ApplicationState) => ProductsSelector(state).productYourDesignBlock3;
export const productSelector = (state: ApplicationState) => ProductsSelector(state).product;
export const isLoadingSelector = (state: ApplicationState) => ProductsSelector(state).isLoading;
export const hasErrorSelector = (state: ApplicationState) => ProductsSelector(state).hasError;
export const requestDataSelector = (state: ApplicationState) => ProductsSelector(state).requestData;
