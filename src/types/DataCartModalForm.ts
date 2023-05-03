import { CartProductType } from "./CartProductType";
import { DeliveryType } from "./DeliveryType";

export interface DataCartModalForm {
	[index: string]: any;
	name: string;
	email: string;
	phone: string;
	address: string;
	comment?: string;
	policy?: boolean;
	paymentType: "Банковская карта";
	deliveryType: DeliveryType;
	products: CartProductType[];
}
