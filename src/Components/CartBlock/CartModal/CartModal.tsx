import React from "react";
import { ModalDesktop } from "@alfalab/core-components/modal/desktop";
import { CartProducts } from "Components/CartBlock/components/CartProducts/CartProducts";
import { CartSumBlock } from "Components/CartBlock/components/CartSumBlock/CartSumBlock";
import { CartModalForm } from "Components/CartBlock/CartModal/CartModalForm/CartModalForm";
import { CartModalHeader } from "Components/CartBlock/CartModal/CartModalHeader/CartModalHeader";
import { CartSumWithDelivery } from "../components/CartSumWithDelivery/CartSumWithDelivery";
import { useAppDispatch, useAppSelector } from "store";
import {
	cartActions,
	cartModalIsOpenSelector,
	messageModalIsOpenSelector,
	messageSelector,
} from "store/Cart";

import "./CartModal.css";
import { Typography } from "@alfalab/core-components/typography";

export function CartModal() {
	const dispatch = useAppDispatch();
	const open = useAppSelector(cartModalIsOpenSelector);
	const openMessageModal = useAppSelector(messageModalIsOpenSelector);
	const message = useAppSelector(messageSelector);

	const handleModalOpen = () => {
		dispatch(cartActions.changeOpenModalCart());
	};

	const handleModalSuccess = () => {
		dispatch(cartActions.closeMessageModal());
	};

	return (
		<ModalDesktop
			open={open}
			onClose={handleModalOpen}
			fullscreen
			data-testid="cart-modal"
		>
			<ModalDesktop
				onClose={handleModalSuccess}
				open={openMessageModal || false}
				className="messageModal"
			>
				<ModalDesktop.Header hasCloser={true}></ModalDesktop.Header>
				<Typography.Text className="messageModal__text">
					{message}
				</Typography.Text>
			</ModalDesktop>
			<CartModalHeader />
			<div className="cart-modal__content">
				<div
					className="cart-modal__products"
					data-testid="cart-modal__products"
				>
					<CartProducts />
					<CartSumBlock />
					{window.innerWidth > 960 && <CartSumWithDelivery />}
				</div>
				<div className="cart-modal__form">
					<CartModalForm />
				</div>
			</div>
		</ModalDesktop>
	);
}
