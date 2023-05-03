import React from "react";
import { Typography } from "@alfalab/core-components/typography";
import { CloseMBlackIcon } from "@alfalab/icons/classic/dist/CloseMBlackIcon";
import { Link } from "react-router-dom";
import { useAppDispatch } from "store";
import { cartActions } from "store/Cart";
import { ProductsActions } from "store/Products";
import { Count } from "./Count/Count";

import "./OneCartProduct.css";
import { CartProductType } from "types/CartProductType";

interface OneCartProductProps {
	product: CartProductType;
}

export function OneCartProduct({ product }: OneCartProductProps) {
	const dispatch = useAppDispatch();

	const deleteProduct = () => {
		dispatch(cartActions.deleteProduct(product));
	};

	const closeModal = () => {
		dispatch(cartActions.changeOpenDrawerCart());
		dispatch(ProductsActions.changeRequestsData(String(product.id)));
		dispatch(ProductsActions.requestProduct());
	};

	return (
		<div
			className="one-cart-product"
			data-testid={`carts__product__${product.id}`}
		>
			<img
				src={product.photo}
				alt=""
				className="one-cart-product__photo"
			></img>
			<div className="one-cart-product__container">
				<div className="one-cart-product__info">
					<Link
						to={`/productCard/${product.id}`}
						className="one-cart-product__product-link"
						data-testid="one-cart-product__product-link"
						onClick={closeModal}
					>
						<Typography.Text
							weight="bold"
							className="one-cart-product__product-title"
						>
							{product.title}
						</Typography.Text>
					</Link>
					{product.color && (
						<Typography.Text
							className="one-cart-product__parameter"
							data-testid="cartProduct__color"
						>
							Цвет: {product.color}
						</Typography.Text>
					)}
					{product.size && (
						<Typography.Text className="one-cart-product__parameter">
							Размер: {product.size}
						</Typography.Text>
					)}
					{product.stickerNumber !== 0 && (
						<Typography.Text className="one-cart-product__parameter">
							Номер стикера: {product.stickerNumber}
						</Typography.Text>
					)}
					{product.model && (
						<Typography.Text
							className="one-cart-product__parameter"
							data-testid="cartProduct__model"
						>
							Модель: {product.model}
						</Typography.Text>
					)}
				</div>
				<div className="one-cart-product__count-block">
					<div className="one-cart-product__count">
						<Count product={product} />
					</div>
					<div className="one-cart-product__price">
						<Typography.Text weight="bold">
							{product.price} ₽{" "}
						</Typography.Text>
					</div>
				</div>
			</div>
			<div
				className="one-cart-product__delete"
				data-testid="cartProduct__delete"
				onClick={deleteProduct}
			>
				<CloseMBlackIcon />
			</div>
		</div>
	);
}
