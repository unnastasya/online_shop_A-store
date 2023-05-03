import axios from "axios";
import { DataCartModalForm } from "types/DataCartModalForm";

export const postOrder = (data: DataCartModalForm): Promise<void> => {
	return axios
		.post("http://qa-games.ru/astore/create-order", data)
		.then((response) => response.data);
};
