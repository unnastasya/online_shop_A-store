import React from "react";
import { Typography } from "@alfalab/core-components/typography";
import { Product } from "Components/ProductsBlock/Components/Product/Product";
import { ProductType } from "types/ProductType";
import { useAppSelector } from "store";
import { hasErrorSelector } from "store/Products";

import "./ProductsBlock.css";

interface ProductsBlockProps {
	title?: string;
	subtitle?: string;
	products: ProductType[];
	id?: number;
}

export function ProductsBlock({
	title,
	subtitle,
	products,
	id,
}: ProductsBlockProps) {
	const hasError: boolean = useAppSelector(hasErrorSelector);

	if (hasError) {
		throw Error("not products");
	}

	return (
		<div className="products-block" data-testid="products-block">
			{title && (
				<Typography.Title
					tag="h1"
					className="products-block__title products-block__title__red"
					weight="bold"
					data-testid={`products-block__title__${id}`}
				>
					{title}
				</Typography.Title>
			)}
			{subtitle && (
				<Typography.Text
					tag="div"
					className="products-block__subtitle"
					weight="medium"
					data-testid={`products-block__subtitle__${id}`}
				>
					{subtitle}
				</Typography.Text>
			)}
			<div
				className="products-block__products"
				data-testid={`products-block__products__${id}`}
			>
				{products.map((product: ProductType) => (
					<Product
						testid={`productCard__${product.id}`}
						key={product.id}
						product={product}
					/>
				))}
			</div>
		</div>
	);
}
