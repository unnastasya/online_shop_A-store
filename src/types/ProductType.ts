export type ProductType = {
    id: number;
    preview: string;
    images: string[];
    title: string;
    subtitle?: string;
    description: string;
    price: number;
    colors?: string[];
    sizes?: string[];
    models?: string[];
    stickerNumbers?: number[];
    availability: boolean;

}