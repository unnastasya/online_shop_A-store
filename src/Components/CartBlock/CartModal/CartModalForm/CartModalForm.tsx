import React from "react";
import { Space } from "@alfalab/core-components/space";
import { CustomButton } from "@alfalab/core-components/custom-button";
import { CartSumWithDelivery } from "Components/CartBlock/components/CartSumWithDelivery/CartSumWithDelivery";
import { CartModalFormInput } from "./CartModalFormInput/CartModalFormInput";
import { CartModalFormRadio } from "./CartModalFormRadio/CartModalFormRadio";
import { CartModalCheckbox } from "./CartModalCheckbox/CartModalCheckbox";
import { ErrorsBlock } from "./ErrorsBlock/ErrorsBlock";
import { useAppDispatch, useAppSelector } from "store";
import { cartActions, valueDeliverySelector } from "store/Cart";
import { cartProductsSelector } from "store/Cart";
import { useForm } from "react-hook-form";
import { optionsOfPay, optionsOfDelivery } from "data/options";
import { DataCartModalForm } from "types/DataCartModalForm";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import "./CartModalForm.css";

export function CartModalForm() {
	const dispatch = useAppDispatch();
	const order = useAppSelector(cartProductsSelector);
	const valueDelivery = useAppSelector(valueDeliverySelector);

	const phoneRegExp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){11}(\s*)?$/;
	const SignupSchema = Yup.object().shape({
		name: Yup.string().required(
			"Пожалуйста, заполните все обязательные поля"
		),
		email: Yup.string()
			.email("Пожалуйста, введите корректный email")
			.required("Пожалуйста, заполните все обязательные поля"),
		phone: Yup.string()
			.required("Пожалуйста, заполните все обязательные поля")
			.matches(
				phoneRegExp,
				"Укажите, пожалуйста, корректный номер телефона"
			),
		address:
			valueDelivery === "Самовывоз (пр-т Андропова, 18 корп. 3)"
				? Yup.string()
				: Yup.string().required(
						"Пожалуйста, заполните все обязательные поля"
				  ),
		deliveryType: Yup.string()
			.required("Укажите способ доставки")
			.oneOf([
				"Доставка по России — 350₽",
				"Курьером по Москве — 300₽",
				"Самовывоз (пр-т Андропова, 18 корп. 3)",
			]),
		policy: Yup.bool().oneOf(
			[true],
			"Пожалуйста, заполните все обязательные поля"
		),
		paymentType: Yup.string()
			.required("Укажите способ оплаты")
			.oneOf(["Банковская карта"]),
	});

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<DataCartModalForm>({
		defaultValues: {
			name: "",
			email: "",
			phone: "",
			address: "",
			deliveryType: "Доставка по России — 350₽",
			comment: "",
			paymentType: "Банковская карта",
			policy: false,
			products: [],
		},
		resolver: yupResolver(SignupSchema),
	});

	const onSubmit = (data: DataCartModalForm) => {
		data = {
			...data,
			order: order,
		};
		dispatch(cartActions.pushFormData(data));
		dispatch(cartActions.postOrder());
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} data-testid="cart-modal__form">
			<Space size={30} fullWidth>
				<CartModalFormInput
					control={control}
					type="text"
					label="ФИО"
					id="name"
					placeholder="Фамилия Имя Отчество"
					errorsMessage={errors.name?.message}
				/>
				<CartModalFormInput
					control={control}
					type="email"
					label="e-mail"
					id="email"
					placeholder="example@site.ru"
					errorsMessage={errors.email?.message}
				/>
				<CartModalFormInput
					control={control}
					type="tel"
					label="Телефон"
					id="phone"
					placeholder="+7 000 000 00 00"
					errorsMessage={errors.phone?.message}
				/>
				<CartModalFormInput
					control={control}
					type="text"
					label="Адрес (если вы выбрали самовывоз — оставьте поле пустым)"
					id="address"
					placeholder="Индекс, город, улица. дом, квартира"
					errorsMessage={errors.address?.message}
				/>
				<CartModalFormRadio
					label="Доставка"
					options={optionsOfDelivery}
					id="deliveryType"
					control={control}
				/>
				<CartModalCheckbox
					errorMessage={errors.policy?.message}
					control={control}
				/>
				<CartModalFormInput
					control={control}
					type="text"
					label="Комментарий к заказу"
					id="comment"
				/>
				<CartModalFormRadio
					label="Способ оплаты"
					options={optionsOfPay}
					id="paymentType"
					control={control}
				/>
				{window.innerWidth <= 960 && <CartSumWithDelivery />}
				{!(Object.keys(errors).length === 0) && (
					<ErrorsBlock errors={errors} />
				)}
				<CustomButton
					block
					type="submit"
					backgroundColor="#000"
					color="#fff"
					className="cart-modal__button"
					data-testid="cart-modal__button"
				>
					Далее
				</CustomButton>
			</Space>
		</form>
	);
}
