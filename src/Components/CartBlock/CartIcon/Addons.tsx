import { Typography } from "@alfalab/core-components/typography";
import React from "react";
import { useAppSelector } from "store";
import { cartLengthSelector } from "store/Cart";

import "./CartIcon.css";

export function Addons() {
	const count = useAppSelector(cartLengthSelector);

	return (
		<div className="cart-icon__addons">
			<Typography.Text tag="p" weight="bold" className="cart-icon__text">
				{count}
			</Typography.Text>
		</div>
	);
}
