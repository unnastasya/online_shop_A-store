import { postOrder } from "api/order";
import { takeLatest, call, put, select } from "redux-saga/effects";
import { DataCartModalForm } from "types/DataCartModalForm";
import { formDataSelector } from "./selectors";
import { cartActions } from "./slice";

function* postOrderSaga() {
	try {
		const data: DataCartModalForm = yield select(formDataSelector);
		yield call(postOrder, data);
		yield put(cartActions.changeMessage("Заказ успешно сформирован"));
	} catch (e: any) {
		yield put(cartActions.changeMessage("Ошибка. Попробуйте еще раз"));
	}
}

export function* watchpostOrderSaga() {
	yield takeLatest(cartActions.postOrder.type, postOrderSaga);
}
