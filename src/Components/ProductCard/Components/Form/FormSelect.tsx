import React, { useMemo, useState } from "react";
import { Select } from "@alfalab/core-components/select";
import { Typography } from "@alfalab/core-components/typography";
import { Control, Controller } from "react-hook-form";
import { ProductType } from "types/ProductType";
import { DataProductCardForm } from "types/DataProductsCardForm";

interface FormSelectProps {
	setPreview: (url: string) => void;
	product: ProductType;
	optionArray: string[] | number[];
	control: Control<DataProductCardForm>;
	title: string;
	name: string;
}

export function FormSelect({
	setPreview,
	product,
	optionArray,
	control,
	title,
	name,
}: FormSelectProps) {
	const options = useMemo<{ key: string; content: string | number }[]>(() => {
		let arr: { key: string; content: string | number }[] = [];
		for (let i = 0; i < optionArray.length; i++) {
			arr.push({ key: String(i), content: optionArray[i] });
		}
		return arr;
	}, [optionArray]);

	const [selected, setSelected] = useState<string>(options[0].key);

	const handleChange = (selected?: string) => {
		setSelected(selected || "");
	};

	const changePhoto = (id: string) => {
		setPreview(product.images[+id]);
	};

	if (optionArray.length === 0) {
		return null;
	}

	return (
		<div>
			<Typography.Text tag="div" className="product-card__text">
				{title}
			</Typography.Text>
			<Controller
				name={name}
				control={control}
				render={({ field }) => (
					<Select
						multiple={false}
						selected={selected}
						options={options}
						placeholder={title}
						size="s"
						{...field}
						onChange={(e) => {
							field.onChange(e.selected?.content);
							handleChange(e.selected?.key);
							if (name === "color") {
								changePhoto(e.selected?.key || "");
							}
						}}
					/>
				)}
			/>
		</div>
	);
}
