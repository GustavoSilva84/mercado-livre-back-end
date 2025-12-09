import { mercadoLivre } from "@prisma/client";
import MainMlRepository from "./main";
import { IProductPyloadUpdate, IVariation, IVariationPyloadCreate, IVariationResponseSimple } from "../types/variation.types";


export default class AccountMlRepository extends MainMlRepository {
    constructor() {
        super()
    }

    async delete(_id: number): Promise<IVariationResponseSimple> {
        return this.prisma.variation.update({
            where: { id: _id, isDeleted: false },
            data: { isDeleted: true }
        })
    }

    async find(_id: number): Promise<IVariation | null> {
        return this.prisma.variation.findFirst({
            where: { id: _id, isDeleted: false }
        });
    }

    async get(): Promise<Array<IVariation>> {
        return this.prisma.variation.findMany({
            where: { isDeleted: false }
        });

    }

    async update(_id: number, _data: IProductPyloadUpdate): Promise<IVariationResponseSimple> {
        return this.prisma.variation.update({
            where: { id: _id, isDeleted: false },
            data: _data,
            select: { id: true }
        });
    }

    async create(_data: IVariationPyloadCreate): Promise<IVariationResponseSimple> {
        return this.prisma.variation.create({
            data: _data,
            select: { id: true }
        });
    }
} 