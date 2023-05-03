export const product1 = {
	color: "white",
	count: 1,
	id: 6,
	photo: "http://qa-games.ru/astore/public/images/61646585.png",
	price: 1799,
	title: "Футболка с бархатными стикерами",
};

export const CartProductStateWithoutProducts = {
	cartLength: 0,
	cartDrawerOpen: false,
	cartModalOpen: false,
	cartProducts: [],
	totalSum: 0,
};

export const CartProductStateWithOneProduct = {
	cartLength: 1,
	cartDrawerOpen: false,
	cartModalOpen: false,
	cartProducts: [product1],
	totalSum: 1799,
};

export const CartProductStateWithTwoProduct = {
	cartLength: 2,
	cartDrawerOpen: false,
	cartModalOpen: false,
	cartProducts: [
		{
			color: "white",
			count: 2,
			id: 6,
			photo: "http://qa-games.ru/astore/public/images/61646585.png",
			price: 1799,
			title: "Футболка с бархатными стикерами",
		},
	],
	totalSum: 3598,
};

export const CartProductStateOpenDrawerCart = {
	cartLength: 0,
	cartDrawerOpen: true,
	cartModalOpen: false,
	cartProducts: [],
	totalSum: 0,
};

export const CartProductStateOpenModalCart = {
	cartLength: 0,
	cartDrawerOpen: false,
	cartModalOpen: true,
	cartProducts: [],
	totalSum: 0,
};

export const CartProductStateDelivery = {
	cartLength: 0,
	cartDrawerOpen: false,
	cartModalOpen: false,
	cartProducts: [],
	totalSum: 0,
	valueDelivery: "Самовывоз (пр-т Андропова, 18 корп. 3)",
};
