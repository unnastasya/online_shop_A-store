import { Input } from "@alfalab/core-components/input";
import React from "react";
import { Control, Controller } from "react-hook-form";
import { useAppSelector } from "store";
import { valueDeliverySelector } from "store/Cart";
import { IntlPhoneInput } from "@alfalab/core-components/intl-phone-input";
import { DataCartModalForm } from "types/DataCartModalForm";
import { Typography } from "@alfalab/core-components/typography";

import "../CartModalCheckbox/CartModalCheckbox.css";

interface CartModalFormInputProps {
	control: Control<DataCartModalForm>;
	type: "text" | "tel" | "email";
	label: string;
	id: string;
	placeholder?: string;
	errorsMessage?: string;
}

export function CartModalFormInput({
	label,
	control,
	id,
	type,
	placeholder,
	errorsMessage,
}: CartModalFormInputProps) {
	const valueRadioGroup = useAppSelector(valueDeliverySelector);

	if (
		(id === "address" &&
			valueRadioGroup === "Самовывоз (пр-т Андропова, 18 корп. 3)") ||
		id === "comment"
	) {
		return (
			<Controller
				name={id}
				control={control}
				render={({ field }) => (
					<label
						htmlFor={id}
						data-testid={`cart-modal__${id}__label`}
					>
						<Typography.Text weight="bold">{label}</Typography.Text>
						<Input
							data-testid={`cart-modal__${id}__input`}
							placeholder={placeholder}
							id={id}
							type={type}
							block
							{...field}
						></Input>
					</label>
				)}
			/>
		);
	} else if (id === "phone") {
		return (
			<Controller
				name={id}
				control={control}
				render={({ field }) => (
					<label
						htmlFor={id}
						data-testid={`cart-modal__${id}__label`}
					>
						<Typography.Text weight="bold">{label}</Typography.Text>

						<IntlPhoneInput
							dataTestId={`cart-modal__${id}__input`}
							data-testid={`cart-modal__${id}__input`}
							block={true}
							error={errorsMessage}
							placeholder="+7 700 000 00 00"
							defaultCountryIso2="RU"
							{...field}
						/>
					</label>
				)}
				rules={{ required: true }}
			/>
		);
	} else {
		return (
			<Controller
				name={id}
				control={control}
				render={({ field }) => (
					<label
						htmlFor={id}
						data-testid={`cart-modal__${id}__label`}
					>
						<Typography.Text weight="bold">{label}</Typography.Text>

						<>
							<Input
								data-testid={`cart-modal__${id}__input`}
								placeholder={placeholder}
								type={type}
								block
								error={errorsMessage}
								{...field}
							></Input>
						</>
					</label>
				)}
			/>
		);
	}
}
