import React from "react";
import { PaymentPlusMBlackIcon } from "@alfalab/icons/classic/dist/PaymentPlusMBlackIcon";
import { MinusMIcon } from "@alfalab/icons/glyph/dist/MinusMIcon";
import { Typography } from "@alfalab/core-components/typography";
import { useAppDispatch } from "store";
import { cartActions } from "store/Cart";

import "./Count.css";
import { CartProductType } from "types/CartProductType";

interface CountProps {
	product: CartProductType;
}

export function Count({ product }: CountProps) {
	const dispatch = useAppDispatch();

	const handleMinus = () => {
		dispatch(cartActions.minusCount(product));
	};

	const handlePlus = () => {
		dispatch(cartActions.plusCount(product));
	};

	return (
		<div className="count" data-testid="count">
			<MinusMIcon onClick={handleMinus} data-testid="minusCount" />
			<Typography.Text weight="bold" data-testid="count__text">
				{product.count}
			</Typography.Text>
			<PaymentPlusMBlackIcon
				onClick={handlePlus}
				data-testid="plusCount"
			/>
		</div>
	);
}
