import { Request, Response } from "express";
import VariationRepository from "../repository/variation.repository";
import { mercadoLivre } from "@prisma/client";
import idIsValidUtils from "../utils/idIsValid.utils";
import { IVariation, IVariationResponseSimple } from "../types/variation.types";

export default class VariationServices {
    private rpy: VariationRepository;

    constructor() {
        this.rpy = new VariationRepository()
    }

    async create(_data: any): Promise<IVariationResponseSimple> {
        // validar formulario da forma correta

        return this.rpy.create(_data);
    }

    async update({ id: _id }: any, _data: any) {
        const id = idIsValidUtils(_id);

        // validar formulario da forma correta

        return this.rpy.update(id, _data);
    }
    
    async delete({ id: _id }: any): Promise<IVariationResponseSimple> {
        const id = idIsValidUtils(_id);
        
        return this.rpy.delete(id);
    }
    
    async get(): Promise<Array<IVariation>> {
        return this.rpy.get();
    }
    
    async find({ id: _id }: any): Promise<IVariation | null> {
        const id = idIsValidUtils(_id);
        
        return this.rpy.find(id);
    }
}