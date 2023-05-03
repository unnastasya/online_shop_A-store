import React from "react";
import { Divider } from "@alfalab/core-components/divider";
import { Typography } from "@alfalab/core-components/typography";
import ArrowBackMBlackIcon from "@alfalab/icons/classic/dist/ArrowBackMBlackIcon";
import CloseMBlackIcon from "@alfalab/icons/classic/dist/CloseMBlackIcon";
import { useAppDispatch } from "store";
import { cartActions } from "store/Cart";

import "./CartModalHeader.css";

export function CartModalHeader() {
	const dispatch = useAppDispatch();

	const handleModalOpen = () => {
		dispatch(cartActions.changeOpenModalCart());
	};

	return (
		<div
			className="cart-modal__header__container"
			data-testid="cart-modal__header"
		>
			<div className="cart-modal__header">
				<ArrowBackMBlackIcon
					onClick={handleModalOpen}
					data-testid="cart-modal__header__arrow"
				/>
				<Typography.Title
					tag="div"
					weight="bold"
					className="cart-modal__header__title"
					data-testid="cart-modal__header__title"
				>
					Ваш заказ
				</Typography.Title>
				<CloseMBlackIcon
					onClick={handleModalOpen}
					data-testid="cart-modal__header__close"
				/>
			</div>
			<Divider />
		</div>
	);
}
