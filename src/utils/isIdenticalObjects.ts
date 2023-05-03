import { CartProductType } from "types/CartProductType";

export const isEdentificalObjects = (
	object1: CartProductType,
	object2: CartProductType
) => {
	const result = Object.keys({ ...object1, ...object2 }).every(
		(key) => object1[key] === object2[key]
	);
	return result;
};

export const isEdentificalObjectsForPush = (
	object1: CartProductType,
	object2: CartProductType
) => {
	const arr = Object.keys({ ...object2 });
	arr.splice(arr.indexOf("count"), 1);
	const result = arr.every((key) => object1[key] === object2[key]);
	return result;
};
