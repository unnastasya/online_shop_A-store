export type CartProductType = {
	[index: string]: any;
	id: number;
	title: string;
	photo: string;
	size?: string;
	color?: string;
	stickerNumber?: number;
	model?: string;
	count: number;
	price: number;
};