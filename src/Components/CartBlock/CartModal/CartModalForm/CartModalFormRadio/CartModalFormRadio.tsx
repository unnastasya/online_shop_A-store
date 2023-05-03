import { Radio } from "@alfalab/core-components/radio";
import { RadioGroup } from "@alfalab/core-components/radio-group";
import { Typography } from "@alfalab/core-components/typography";
import React from "react";
import { Control, Controller } from "react-hook-form";
import { useAppDispatch } from "store";
import { cartActions } from "store/Cart";
import { DataCartModalForm } from "types/DataCartModalForm";
import { OptionsType } from "types/OptionsType";

interface CartModalFormSelectProps {
	options: OptionsType[];
	id: string;
	control: Control<DataCartModalForm>;
	label: string;
}

export function CartModalFormRadio({
	options,
	id,
	control,
	label,
}: CartModalFormSelectProps) {
	const dispatch = useAppDispatch();

	const onChangeDelivery = (payload?: string) => {
		dispatch(
			cartActions.ChangeValueDelivery(
				payload || "Самовывоз (пр-т Андропова, 18 корп. 3)"
			)
		);
	};

	return (
		<Controller
			name={id}
			control={control}
			render={({ field }) => (
				<label htmlFor={id} data-testid={`cart-modal__${id}__label`}>
					<Typography.Text weight="bold">{label}</Typography.Text>
					<RadioGroup direction="vertical" {...field}>
						{options.map(
							(option: { label: string; value: string }) => (
								<Radio
									label={option.label}
									value={option.value}
									key={option.value}
									onClick={(e) => {
										onChangeDelivery(e.currentTarget.value);
									}}
								/>
							)
						)}
					</RadioGroup>
				</label>
			)}
		/>
	);
}
