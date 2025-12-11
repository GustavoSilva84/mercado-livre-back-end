import { Request, Response } from "express";
import ProductRepository from "../repository/product.repository";
import { mercadoLivre } from "@prisma/client";
import { IProduct, IProductResponseSimple } from "../types/product.types";
import idIsValidUtils from "../utils/idIsValid.utils";

export default class ProductServices {
    private rpy: ProductRepository;

    constructor() {
        this.rpy = new ProductRepository()
    }

    async create(_data: any): Promise<IProductResponseSimple> {
        // validar formulario da forma correta

        const variation = _data.variation;

        console.log(_data)

        return this.rpy.create(_data, variation);
    }

    async update({ id: _id }: any, _data: any) {
        const id = idIsValidUtils(_id);

        // validar formulario da forma correta

        return this.rpy.update(id, _data);
    }
    
    async delete({ id: _id }: any): Promise<IProductResponseSimple> {
        const id = idIsValidUtils(_id);
        
        return this.rpy.delete(id);
    }
    
    async get(): Promise<Array<IProduct>> {
        return this.rpy.get();
    }
    
    async find({ id: _id }: any): Promise<IProduct | null> {
        const id = idIsValidUtils(_id);
        
        return this.rpy.find(id);
    }
}