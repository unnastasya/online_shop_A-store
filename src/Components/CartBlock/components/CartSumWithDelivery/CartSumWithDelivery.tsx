import React from "react";
import { Typography } from "@alfalab/core-components/typography";
import { useAppSelector } from "store";
import { totalSumSelector, valueDeliverySelector } from "store/Cart";

import "../CartSumBlock/CartSumBlock.css";

export function CartSumWithDelivery() {
	const totalSum = useAppSelector(totalSumSelector);
	const valueRadioGroup = useAppSelector(valueDeliverySelector);

	return (
		<div className="cart-sum">
			{valueRadioGroup === "Доставка по России — 350₽" && (
				<div>
					<Typography.Text
						tag="p"
						className="cart-sum__text14"
						data-testid="cart-sum__textSum"
					>
						Сумма: {totalSum} ₽
					</Typography.Text>
					<Typography.Text
						tag="p"
						className="cart-sum__text14"
						data-testid="cart-sum__textDelivery"
					>
						Доставка по России — 350₽: 350 ₽
					</Typography.Text>
					<Typography.Text
						tag="p"
						weight="bold"
						className="cart-sum__text16"
						data-testid="cart-sum__textTotalSum"
					>
						Итоговая сумма: {totalSum + 350} ₽
					</Typography.Text>
				</div>
			)}
			{valueRadioGroup === "Курьером по Москве — 300₽" && (
				<div>
					<Typography.Text
						tag="p"
						className="cart-sum__text14"
						data-testid="cart-sum__text"
					>
						Сумма: {totalSum} ₽
					</Typography.Text>
					<Typography.Text
						tag="p"
						className="cart-sum__text14"
						data-testid="cart-sum__text"
					>
						Курьером по Москве — 300₽: 300 ₽
					</Typography.Text>
					<Typography.Text
						tag="p"
						weight="bold"
						className="cart-sum__text16"
						data-testid="cart-sum__text"
					>
						Итоговая сумма: {totalSum + 300} ₽
					</Typography.Text>
				</div>
			)}
		</div>
	);
}
