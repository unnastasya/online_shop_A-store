import axios from "axios";
import { ProductType } from "types/ProductType";

export const getMadeInAlfaProducts = (data: string): Promise<ProductType[]> => {
	return axios
		.get<ProductType[]>(`http://qa-games.ru/astore/${data}`)
		.then((response) => response.data);
};
