import { Spinner } from "@alfalab/core-components/spinner";
import { Typography } from "@alfalab/core-components/typography";
import { ProductsBlock } from "Components/ProductsBlock/ProductsBlock";

import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "store";
import {
	isLoadingSelector,
	ProductsActions,
	productYType,
	YourDesingProductsBlock1Selector,
	YourDesingProductsBlock2Selector,
	YourDesingProductsBlock3Selector,
} from "store/Products";

import "./YourDesignPage.css";

export function YourDesignPage() {
	const dispatch = useAppDispatch();
	const products1: productYType = useAppSelector(
		YourDesingProductsBlock1Selector
	);
	const products2: productYType = useAppSelector(
		YourDesingProductsBlock2Selector
	);
	const products3: productYType = useAppSelector(
		YourDesingProductsBlock3Selector
	);
	const isLoading: boolean = useAppSelector(isLoadingSelector);

	const fetchProductsY = useCallback(() => {
		dispatch(ProductsActions.requestYourDesignProducts());
	}, [dispatch]);

	useEffect(() => {
		fetchProductsY();
	}, [dispatch, fetchProductsY]);

	if (isLoading) {
		return (
			<div data-testid="spinner">
				<Spinner visible={true} className="spinner"></Spinner>
			</div>
		);
	}

	return (
		<div className="yourDesign-Page__container">
			<div className="yourDesign-Page">
				<Typography.Title
					tag="h1"
					className="yourDesign-Page__title"
					weight="bold"
				>
					Свой дизайн
				</Typography.Title>
				<Typography.Text
					tag="div"
					className="yourDesign-Page__subtitle"
					weight="medium"
				>
					Выберите вещь, а затем — цвет, размер и стикер.
					<br />
					Перенесём стикер на вещь как на фото
				</Typography.Text>
				<ProductsBlock
					title={products1.title}
					subtitle={products1.description}
					products={products1.products}
					id={1}
				></ProductsBlock>
				<ProductsBlock
					title={products2.title}
					subtitle={products2.description}
					products={products2.products}
					id={2}
				></ProductsBlock>
				<ProductsBlock
					title={products3.title}
					subtitle={products3.description}
					products={products3.products}
					id={3}
				></ProductsBlock>
			</div>
		</div>
	);
}
