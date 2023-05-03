export interface DataProductCardForm {
    [index: string]: any;
	id: number;
	title: string;
	photo: string;
	price: number;
	count: number;
	model?: string;
	color?: string;
	size?: string;
	stickerNumber?: number;
}