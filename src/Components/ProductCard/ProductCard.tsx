import React, { useCallback, useEffect, useState } from "react";
import { Space } from "@alfalab/core-components/space";
import { Typography } from "@alfalab/core-components/typography";
import { Form } from "./Components/Form/Form";
import { ProductImage } from "./Components/ProductImage/ProductImage";
import { useAppDispatch, useAppSelector } from "store";
import {
	hasErrorSelector,
	isLoadingSelector,
	ProductsActions,
	productSelector,
} from "store/Products";
import { Spinner } from "@alfalab/core-components/spinner";
import { useParams } from "react-router-dom";

import "./ProductCard.css";

export function ProductCard() {
	const dispatch = useAppDispatch();
	const product = useAppSelector(productSelector);
	const isLoading = useAppSelector(isLoadingSelector);
	const hasError: boolean = useAppSelector(hasErrorSelector);
	const [preview, setPreview] = useState("");
	const images = product.images;
	const prodId = useParams<{ id: string }>().id;

	const changeSettings = () => {
		dispatch(ProductsActions.changeRequestsData(prodId || ""));
	};

	const fetchProduct = useCallback(() => {
		dispatch(ProductsActions.requestProduct());
	}, [dispatch]);

	useEffect(() => {
		setPreview(product.preview);
	}, [product]);

	useEffect(() => {
		changeSettings();
		fetchProduct();
	}, [dispatch, fetchProduct]);

	if (hasError) {
		throw Error("error");
	}

	if (isLoading) {
		return (
			<div className="product-card" data-testid="spinner">
				<Spinner visible={true} className="spinner"></Spinner>
			</div>
		);
	}

	return (
		<div className="product-card" data-testid="product-card">
			<div
				className="product-card__gallery"
				data-testid="product-card__gallery"
			>
				<img
					src={preview}
					alt="made in alfa"
					className="product-card__preview"
					data-testid="product-card__preview"
				/>
				<div className="product-card__image">
					{images.map((url: string) => (
						<ProductImage
							key={Math.random()}
							preview={preview}
							setPreview={setPreview}
							url={url}
							data-testid="product-card__image"
						></ProductImage>
					))}
				</div>
			</div>
			<div
				className="product-card__info"
				data-testid="product-card__info"
			>
				<Space direction="vertical" size={15}>
					<Typography.Title
						tag="div"
						className="product-card__text"
						data-testid="product-card__title"
					>
						{product.title}
					</Typography.Title>
					<Typography.Text
						tag="div"
						weight="bold"
						className="product-card__text"
						data-testid="product-card__price"
					>
						{product.price} ₽
					</Typography.Text>

					<Form
						product={product}
						setPreview={setPreview}
						data-testid="product-card__form"
					></Form>
					<Typography.Text
						tag="div"
						className="product-card__text"
						data-testid="product-card__description"
					>
						{product.description}
					</Typography.Text>
				</Space>
			</div>
		</div>
	);
}
