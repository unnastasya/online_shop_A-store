import { fork } from "redux-saga/effects";
import { watchpostOrderSaga } from "./Cart/sagas";
import {
	watchMadeInAlfaProductsSaga,
	watchProductSaga,
	watchYProductsSaga,
} from "./Products";

export function* rootSaga() {
	yield fork(watchMadeInAlfaProductsSaga);
	yield fork(watchYProductsSaga);
	yield fork(watchProductSaga);
	yield fork(watchpostOrderSaga);
}
