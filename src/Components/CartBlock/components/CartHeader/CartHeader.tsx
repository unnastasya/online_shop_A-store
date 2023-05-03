import React from "react";
import { Divider } from "@alfalab/core-components/divider";
import { Typography } from "@alfalab/core-components/typography";
import CloseMBlackIcon from "@alfalab/icons/classic/dist/CloseMBlackIcon";
import { ArrowBackMBlackIcon } from "@alfalab/icons/classic/dist/ArrowBackMBlackIcon";
import { useAppDispatch } from "store";
import { cartActions } from "store/Cart";

import "./CartHeader.css";

export function CartHeader() {
	const dispatch = useAppDispatch();

	const closeCart = () => {
		dispatch(cartActions.changeOpenDrawerCart());
	};

	return (
		<div className="cart-header__container" data-testid="cart__header">
			<div className="cart-header">
				<ArrowBackMBlackIcon
					onClick={closeCart}
					data-testid="cart-header__arrow"
				/>
				<Typography.Title
					tag="div"
					weight="bold"
					className="cart-header__title"
					data-testid="cart-header__title"
				>
					Ваш заказ
				</Typography.Title>
				<CloseMBlackIcon
					onClick={closeCart}
					data-testid="cart-header__close"
				/>
			</div>
			<Divider />
		</div>
	);
}
