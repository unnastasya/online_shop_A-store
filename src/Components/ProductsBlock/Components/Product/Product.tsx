import React from "react";
import { Typography } from "@alfalab/core-components/typography";
import { Link } from "react-router-dom";
import { ProductType } from "types/ProductType";

import "./Product.css";

interface ProductProps {
	product: ProductType;
	testid: string;
}

export function Product({ product, testid }: ProductProps) {
	return (
		<>
			{product.availability && (
				<Link
					to={`/productCard/${product.id}`}
					data-testid={testid}
					className="product_link"
				>
					<div className="product">
						<img
							className="product__photo"
							src={product.preview}
							alt={`product ${product.title}`}
						/>
						<Typography.Text
							className="product__text product__title"
							data-testid={`product_${product.id}`}
						>
							{product.title}
						</Typography.Text>
						<Typography.Text
							className="product__text product__price"
							weight="bold"
						>
							{product.price} ₽
						</Typography.Text>
					</div>
				</Link>
			)}
		</>
	);
}
