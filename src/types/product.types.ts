import { IVariation } from "./variation.types";

export interface IProduct {
    id: number;
    name: string;
    sku: string;
    isDeleted: boolean | null;
    
    variation?: Array<IVariation>; 
}

export type IProductPyloadCreate = Omit<IProduct, "variation" | "id"> 
export type IProductPyloadUpdate = {
    [K in keyof Omit<IProduct, "id" | "variation" | "isDeleted">]?: IProduct[K] | undefined;
}






export type IProductResponseSimple = Omit<IProduct, "name" | "sku" | "isDeleted" | "variation" >