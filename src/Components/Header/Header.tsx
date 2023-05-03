import React from "react";
import { Typography } from "@alfalab/core-components/typography";
import { Link } from "react-router-dom";
import { useAppDispatch } from "store";
import { headerActions } from "store/header";

import "./Header.css";
import { Menu } from "./Menu/Menu";
import { ProductsActions } from "store/Products";

export function Header() {
	const dispatch = useAppDispatch();

	const handleOpenMenu = () => {
		dispatch(headerActions.changeOpenMenu());
	};

	const handleClick = () => {
		dispatch(ProductsActions.changeError());
	};

	return (
		<header className="header">
			<div className="header_container">
				<Link to="/" className="header__a-store-link">
					<Typography.Title
						tag="div"
						weight="bold"
						className="header__text header__text_red"
						onClick={() => {
							handleClick();
						}}
					>
						A-Store
					</Typography.Title>
				</Link>
				<div className="header__menu" onClick={handleOpenMenu}>
					<img
						className="header__menu-logo"
						alt="burgermenu"
						src="https://static.tildacdn.com/tild3833-3762-4238-b266-663861633565/menu.svg"
					/>
					<Typography.Title
						tag="div"
						weight="bold"
						className="header__text header__text_black"
					>
						меню
					</Typography.Title>
				</div>
				<Menu />
			</div>
		</header>
	);
}
