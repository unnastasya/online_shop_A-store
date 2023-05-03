import { Space } from "@alfalab/core-components/space";
import React from "react";
import { FieldErrors } from "react-hook-form";
import { DataCartModalForm } from "types/DataCartModalForm";

import "./ErrorsBlock.css";

interface ErrorsBlockProps {
	errors: FieldErrors<DataCartModalForm>;
}

export function ErrorsBlock({ errors }: ErrorsBlockProps) {
	return (
		<div className="cart-modal__errorsBlock" data-testid="errorBlock">
			<Space size={5}>
				<p data-testid="required-fields">
					Пожалуйста, заполните все обязательные поля
				</p>
				{errors.email?.message ===
					"Пожалуйста, введите корректный email" && (
					<p data-testid="notCorrectEmail">
						Пожалуйста, введите корректный email
					</p>
				)}
				{errors.phone?.message ===
					"Укажите, пожалуйста, корректный номер телефона" && (
					<p data-testid="notCorrectNumber">
						Укажите, пожалуйста, корректный номер телефона
					</p>
				)}
			</Space>
		</div>
	);
}
