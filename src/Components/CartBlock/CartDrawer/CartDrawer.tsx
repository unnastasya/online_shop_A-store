import React from "react";
import { Drawer } from "@alfalab/core-components/drawer";
import { CartProducts } from "../components/CartProducts/CartProducts";
import { CartHeader } from "../components/CartHeader/CartHeader";
import { CartSumBlock } from "../components/CartSumBlock/CartSumBlock";
import { useAppDispatch, useAppSelector } from "store";
import { cartActions, cartDrawerIsOpenSelector } from "store/Cart";
import { CustomButton } from "@alfalab/core-components/custom-button";

import "./CartDrawer.css";

export function CartDrawer() {
	const dispatch = useAppDispatch();
	const open = useAppSelector(cartDrawerIsOpenSelector);

	const closeCart = () => {
		dispatch(cartActions.changeOpenDrawerCart());
	};

	const openCartModal = () => {
		dispatch(cartActions.changeOpenDrawerCart());
		dispatch(cartActions.changeOpenModalCart());
	};

	return (
		<Drawer
			open={open}
			onClose={closeCart}
			className="cart-drawer"
			data-testid="cart-drawer"
		>
			<CartHeader />
			<div className="cart-drawer__info">
				<CartProducts />
				<CartSumBlock />
				<CustomButton
					className="cart-drawer__button"
					onClick={openCartModal}
					block={true}
					backgroundColor="#000"
					color="#fff"
				>
					Дальше
				</CustomButton>
			</div>
		</Drawer>
	);
}
