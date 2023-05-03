import { CartIcon } from "Components/CartBlock/CartIcon/CartIcon";
import { CartDrawer } from "Components/CartBlock/CartDrawer/CartDrawer";
import { Footer } from "Components/Footer/Footer";
import { Header } from "Components/Header/Header";
import React from "react";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "store";
import { cartLengthSelector } from "store/Cart";

import "./Page.css";
import { CartModal } from "Components/CartBlock/CartModal/CartModal";

interface PageProps {
	children: React.ReactNode;
}

export function Page(props: PageProps) {
	const count = useAppSelector(cartLengthSelector);

	return (
		<div className="page">
			<Header />
			<div className="page_content">
				<Outlet />
				{props.children}
			</div>
			<Footer />
			<>
				{count !== 0 && <CartIcon />}
				<CartDrawer />
			</>
			<CartModal />
		</div>
	);
}
