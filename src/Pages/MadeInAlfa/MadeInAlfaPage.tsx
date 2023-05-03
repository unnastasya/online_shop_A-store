import { Spinner } from "@alfalab/core-components/spinner";
import { Typography } from "@alfalab/core-components/typography";
import { ProductsBlock } from "Components/ProductsBlock/ProductsBlock";

import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "store";
import {
	isLoadingSelector,
	MadeInAlfaProductsSelector,
	ProductsActions,
} from "store/Products";
import { ProductType } from "types/ProductType";

import "./MadeInAlfaPage.css";

export function MadeInAlfaPage() {
	const dispatch = useAppDispatch();
	const products: ProductType[] = useAppSelector(MadeInAlfaProductsSelector);
	const isLoading: boolean = useAppSelector(isLoadingSelector);

	const fetchProductsM = useCallback(() => {
		dispatch(ProductsActions.requestMadeInAlfaProducts());
	}, [dispatch]);

	useEffect(() => {
		fetchProductsM();
	}, [dispatch, fetchProductsM]);

	if (isLoading) {
		return (
			<div data-testid="spinner">
				<Spinner visible={true} className="spinner"></Spinner>
			</div>
		);
	}

	return (
		<div className="madeInALfa-Page__container">
			<div className="madeInALfa-Page">
				<Typography.Title
					tag="h1"
					className="madeInALfa-Page__title"
					weight="bold"
				>
					Сделано в Альфе
				</Typography.Title>
				<Typography.Text
					tag="div"
					className="madeInALfa-Page__subtitle"
					weight="medium"
				>
					Хотим каждую из этих вещей! Себе, родным и друзьям
				</Typography.Text>
				<ProductsBlock products={products} id={0}></ProductsBlock>
			</div>
		</div>
	);
}
