import React from "react";
import { Divider } from "@alfalab/core-components/divider";
import { Space } from "@alfalab/core-components/space";
import { OneCartProduct } from "./OneCartProduct/OneCartProduct";
import { useAppSelector } from "store";
import { cartProductsSelector } from "store/Cart";
import { CartProductType } from "types/CartProductType";

export function CartProducts() {
	const products = useAppSelector(cartProductsSelector);

	return (
		<div className="cart-products" data-testid="cart-products">
			<Space size={25}>
				{products.map((product: CartProductType) => (
					<OneCartProduct product={product} key={product.id} />
				))}
			</Space>
			<Divider />
		</div>
	);
}
