import React from "react";
import { Drawer } from "@alfalab/core-components/drawer";
import { IconButton } from "@alfalab/core-components/icon-button";
import { Circle } from "@alfalab/core-components/icon-view/circle";
import { Typography } from "@alfalab/core-components/typography";
import EmailMBlackIcon from "@alfalab/icons/classic/dist/EmailMBlackIcon";
import CrossHeavyMIcon from "@alfalab/icons/glyph/dist/CrossHeavyMIcon";
import PhoneMIcon from "@alfalab/icons/glyph/dist/PhoneMIcon";
import WhatsappMIcon from "@alfalab/icons/logotype/dist/WhatsappMIcon";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store";
import { headerActions, openMenuSelector } from "store/header";
import { Backdrop } from "../Backdrop/Backdrop";

import "./Menu.css";

export function Menu() {
	const dispatch = useAppDispatch();
	const openMenu = useAppSelector(openMenuSelector);

	const handleOpenMenu = () => {
		dispatch(headerActions.changeOpenMenu());
	};

	return (
		<Drawer
			Backdrop={Backdrop}
			open={openMenu}
			onClose={handleOpenMenu}
			className="menu"
		>
			<IconButton
				icon={CrossHeavyMIcon}
				onClick={handleOpenMenu}
				style={{ color: "white" }}
				className="menu__icon-cross"
			></IconButton>
			<div className="menu__links">
				<Link
					to="/made-in-alfa"
					className="menu__link"
					onClick={handleOpenMenu}
				>
					<Typography.Title
						tag="div"
						weight="bold"
						className="menu__text menu__text_white"
						style={{ marginTop: "10vh" }}
					>
						Сделано в Альфе
					</Typography.Title>
				</Link>
				<Link
					to="/your-design"
					className="menu__link"
					onClick={handleOpenMenu}
				>
					<Typography.Title
						tag="div"
						weight="bold"
						className="menu__text menu__text_white"
					>
						Свой дизайн
					</Typography.Title>
				</Link>
				<Link
					to="/contacts"
					className="menu__link"
					onClick={handleOpenMenu}
				>
					<Typography.Title
						tag="div"
						weight="bold"
						className="menu__text menu__text_white"
					>
						Контакты
					</Typography.Title>
				</Link>
			</div>
			<div className="menu__icons">
				<Typography.Text
					tag="div"
					weight="medium"
					className="menu__text menu__text_white"
				>
					Политика конфиденциальности и обработки персональных данных
				</Typography.Text>
				<Circle
					size={32}
					backgroundColor="white"
					className="menu__icon"
				>
					<EmailMBlackIcon color="#000000" />
				</Circle>
				<Circle
					size={32}
					backgroundColor="white"
					className="menu__icon"
				>
					<PhoneMIcon color="#000000" />
				</Circle>
				<Circle
					size={32}
					backgroundColor="white"
					className="menu__icon"
				>
					<WhatsappMIcon color="#000000" />
				</Circle>
			</div>
		</Drawer>
	);
}
