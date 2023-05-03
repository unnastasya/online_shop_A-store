import { getMadeInAlfaProducts } from "api/products";
import { takeLatest, call, put, select } from "redux-saga/effects";
import { ProductType } from "types/ProductType";
import { requestDataSelector } from "./selectors";
import { ProductsActions, productYType } from "./slice";

function* getMadeInAlfaProductsSaga() {
	try {
		const products: ProductType[] = yield call(
			getMadeInAlfaProducts,
			"made-in-alfa"
		);
		yield put(ProductsActions.successMadeInAlfaProducts(products));
	} catch (e: any) {
		yield put(ProductsActions.failure());
	}
}

function* getYourDesignProductsSaga() {
	try {
		const products: productYType[] = yield call(
			getMadeInAlfaProducts,
			"your-design"
		);
		yield put(ProductsActions.successYourDesignProducts(products));
	} catch (e: any) {
		yield put(ProductsActions.failure());
	}
}

function* getProductsSaga() {
	try {
		const requestsData: string = yield select(requestDataSelector);

		const products: ProductType = yield call(
			getMadeInAlfaProducts,
			`product/${requestsData}`
		);
		yield put(ProductsActions.successProduct(products));
	} catch (e: any) {
		yield put(ProductsActions.failure());
	}
}
export function* watchMadeInAlfaProductsSaga() {
	yield takeLatest(
		ProductsActions.requestMadeInAlfaProducts.type,
		getMadeInAlfaProductsSaga
	);
}
export function* watchYProductsSaga() {
	yield takeLatest(
		ProductsActions.requestYourDesignProducts.type,
		getYourDesignProductsSaga
	);
}
export function* watchProductSaga() {
	yield takeLatest(ProductsActions.requestProduct.type, getProductsSaga);
}
