import React from "react";
import { Typography } from "@alfalab/core-components/typography";
import { useAppSelector } from "store";
import { totalSumSelector } from "store/Cart";

import "./CartSumBlock.css";

export function CartSumBlock() {
	const totalSum = useAppSelector(totalSumSelector);

	return (
		<div className="cart-sum" data-testid="cart-sum">
			<Typography.Text
				tag="p"
				weight="bold"
				className="cart-sum__text16"
				data-testid="cart-sum__text"
			>
				Сумма: {totalSum} ₽
			</Typography.Text>
		</div>
	);
}
