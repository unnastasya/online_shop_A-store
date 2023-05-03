import { Typography } from "@alfalab/core-components/typography";
import React from "react";

import "./ContactsPage.css";
import { Map } from "./Map.jsx";
export function ContactsPage() {
	return (
		<div className="contacts-Page__container">
			<div className="contacts-Page" data-testid="contacts-page">
				<Typography.Title
					tag="h1"
					className="contacts-Page__title"
					weight="bold"
					data-testid="contacts-page__title"
				>
					Контакты
				</Typography.Title>

				<Typography.Text
					tag="div"
					className="contacts-Page__subtitle"
					weight="medium"
					data-testid="contacts-page__number"
				>
					+7 906 061 60 20 <br />
					info@alfabankstore.ru
				</Typography.Text>
				<Typography.Text
					tag="div"
					className="contacts-Page__subtitle"
					weight="medium"
					data-testid="contacts-page__address"
				>
					г. Москва, пр-т Андропова, 18 корп. 3
				</Typography.Text>
				<Typography.Text
					tag="div"
					className="contacts-Page__subtitle"
					weight="medium"
					data-testid="contacts-page__time"
				>
					пн-чт: <br />
					10:00—19:00 <br />
					пт: <br />
					10:00—17:30
				</Typography.Text>
				<Typography.Text
					tag="div"
					className="contacts-Page__subtitle"
					weight="medium"
					data-testid="contacts-page__pay"
				>
					Принимаем к оплате карты Visa, Mastercard, МИР.
				</Typography.Text>
				<Typography.Text
					tag="div"
					className="contacts-Page__link"
					weight="medium"
				>
					Политика конфиденциальности и обработки персональных данных
				</Typography.Text>
				<Map />
			</div>
		</div>
	);
}
