import React from "react";
import { Checkbox } from "@alfalab/core-components/checkbox";
import { Control, Controller } from "react-hook-form";

import "./CartModalCheckbox.css";
import { DataCartModalForm } from "types/DataCartModalForm";

interface CartModalCheckboxProps {
	control: Control<DataCartModalForm>;
	errorMessage?: string;
}

export function CartModalCheckbox({
	control,
	errorMessage,
}: CartModalCheckboxProps) {
	return (
		<Controller
			name="policy"
			control={control}
			render={({ field }) => (
				<div
					className={`cart-modal__checkbox__error__${Boolean(errorMessage)}`}
				>
					<Checkbox
						id="policy"
						error={errorMessage}
						checked={field.value}
						label="Согласен с политикой конфиденциальности и обработки персональных данных"
						{...field}
						value="policy"
					/>
				</div>
			)}
		></Controller>
	);
}
