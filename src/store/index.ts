import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { headerReducer } from "./header";
import { ProductsReducer } from "./Products";
import { rootSaga } from "./root-saga";
import createSagaMiddleware from "redux-saga";
import { cartReducer } from "./Cart";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
	key: "root",
	storage,
};

const rootReducer = combineReducers({
	header: headerReducer,
	products: ProductsReducer,
	cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = configureStore({
	reducer: persistedReducer,
	devTools: true,
	middleware: middlewares,
});

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor, sagaMiddleware };

export type ApplicationState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<ApplicationState> =
	useSelector;
