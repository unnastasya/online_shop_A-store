import React from "react";
import { Typography } from "@alfalab/core-components/typography";
import { Link } from "react-router-dom";
import "./MainPage.css";

export function MainPage() {
	return (
		<div className="main-page">
			<Link to="/made-in-alfa" className="main-page__link">
				<div className="main-page__image-link">
					<Typography.Title
						tag="div"
						weight="bold"
						className="main-page__text"
					>
						Сделано в Альфе
					</Typography.Title>
					<img
						src="images/Frame_46.jpeg"
						alt="made in alfa"
						className="main-page__image"
					/>
				</div>
			</Link>
			<Link to="/your-design" className="main-page__link">
				<div className="main-page__image-link">
					<Typography.Title
						tag="div"
						weight="bold"
						className="main-page__text"
					>
						Свой дизайн
					</Typography.Title>
					<img
						src="images/Frame_45.jpeg"
						alt="your design"
						className="main-page__image"
					/>
				</div>
			</Link>
		</div>
	);
}
