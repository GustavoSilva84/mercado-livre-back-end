import { IProduct } from "./product.types";


export interface IVariation {
    id: number;
    sku: string;
    name: string;
    allocatedStock: number;
    stock: number;
    isDeleted: boolean | null;

    produto?: IProduct;
    productId: number;
}


export type IVariationPyloadCreate = Omit<IVariation,  "id" | "produto"  > 

export type IProductPyloadUpdate = {
    [K in keyof Omit<IVariation, "id"  | "isDeleted" | "produto">]?: IVariation[K] | undefined;
}






export type IVariationResponseSimple = Omit<IProduct, "name" | "sku" | "isDeleted" | "variation" >