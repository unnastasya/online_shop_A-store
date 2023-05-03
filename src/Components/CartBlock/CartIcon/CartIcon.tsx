import React from "react";
import { Circle } from "@alfalab/core-components/icon-view/circle";
import { SupermarketTrolleyMIcon } from "@alfalab/icons/glyph/dist/SupermarketTrolleyMIcon";
import { Tooltip } from "@alfalab/core-components/tooltip";
import { Typography } from "@alfalab/core-components/typography";
import { Addons } from "./Addons";
import { useAppDispatch, useAppSelector } from "store";
import { cartActions, totalSumSelector } from "store/Cart";

import "./CartIcon.css";

export function CartIcon() {
	const dispath = useAppDispatch();
	const sum = useAppSelector(totalSumSelector);

	const openCart = () => {
		dispath(cartActions.changeOpenDrawerCart());
	};

	return (
		<div onClick={openCart} className="cart-icon" data-testid="cart-icon">
			<Tooltip
				view="hint"
				position="right"
				trigger="hover"
				content={
					<div>
						<Typography.Text>= {sum} ₽</Typography.Text>
					</div>
				}
			>
				<Circle
					bottomAddons={<Addons />}
					size={80}
					backgroundColor={"#EF3124"}
					className="icon"
				>
					<SupermarketTrolleyMIcon color="white"></SupermarketTrolleyMIcon>
				</Circle>
			</Tooltip>
		</div>
	);
}
