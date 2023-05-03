import React from "react";
import { Button } from "@alfalab/core-components/button";
import { useForm } from "react-hook-form";
import { FormSelect } from "./FormSelect";
import { Space } from "@alfalab/core-components/space";
import { ProductType } from "types/ProductType";
import { useAppDispatch } from "store";
import { cartActions } from "store/Cart";
import { DataProductCardForm } from "types/DataProductsCardForm";
import { CartProductType } from "types/CartProductType";

interface FormProps {
	setPreview: (url: string) => void;
	product: ProductType;
}

export function Form({ product, setPreview }: FormProps) {
	const dispatch = useAppDispatch();

	const pushProduct = (product: CartProductType) => {
		dispatch(cartActions.pushProduct(product));
	};
	const { control, handleSubmit } = useForm<DataProductCardForm>({
		defaultValues: {
			id: 0,
			title: "",
			photo: "",
			price: 0,
			count: 1,
			model: product.models?.[0],
			color: product.colors?.[0],
			size: product.sizes?.[0],
			stickerNumber: product.stickerNumbers?.[0],
		},
	});
	const onSubmit = (data: DataProductCardForm) => {
		data = {
			...data,
			id: product.id,
			title: product.title,
			photo:
				typeof product.colors != "undefined" &&
				typeof data.color != "undefined"
					? product.images[product.colors?.indexOf(data.color)]
					: product.preview,
			price: product.price,
		};
		pushProduct(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Space size={10}>
				{product.colors && (
					<FormSelect
						setPreview={setPreview}
						product={product}
						optionArray={product.colors}
						control={control}
						title="цвет"
						name="color"
					></FormSelect>
				)}
				{product.sizes && (
					<FormSelect
						setPreview={setPreview}
						product={product}
						optionArray={product.sizes}
						control={control}
						title="размер"
						name="size"
					></FormSelect>
				)}
				{product.stickerNumbers && (
					<FormSelect
						setPreview={setPreview}
						product={product}
						optionArray={product.stickerNumbers}
						control={control}
						title="номер стикера"
						name="stickerNumber"
					></FormSelect>
				)}
				{product.models && (
					<FormSelect
						setPreview={setPreview}
						product={product}
						optionArray={product.models}
						control={control}
						title="модель"
						name="model"
						data-testId="product__model"
					></FormSelect>
				)}
				<Button
					type="submit"
					view="primary"
					data-testid="toCart_button"
				>
					В корзину
				</Button>
			</Space>
		</form>
	);
}
