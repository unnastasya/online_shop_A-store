import React, { useEffect, useState } from "react";

import "./ProductImage.css";

interface ProductImageProps {
	url: string;
	preview: string;
	setPreview: (url: string) => void;
}

export function ProductImage({ url, preview, setPreview }: ProductImageProps) {
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		if (preview === url) setIsActive(true);
		else setIsActive(false);
	}, [url, preview]);

	const changePhoto = (url: string) => {
		setPreview(url);
	};

	return (
		<div
			className="product-image__block"
			data-testid="product-image__block"
		>
			{isActive ? (
				<img
					src={url}
					alt={`product`}
					className="product-image__photo product-image__photo__active"
					data-testid="product-image__photo"
					onClick={() => changePhoto(url)}
				></img>
			) : (
				<img
					src={url}
					alt={`product`}
					className="product-image__photo"
					data-testid="product-image__photo"
					onClick={() => changePhoto(url)}
				></img>
			)}
		</div>
	);
}
