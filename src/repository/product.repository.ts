import { mercadoLivre } from "@prisma/client";
import MainMlRepository from "./main";
import { IProduct, IProductPyloadCreate, IProductPyloadUpdate, IProductResponseSimple } from "../types/product.types";
import { IVariationPyloadCreate } from "../types/variation.types";

export default class AccountMlRepository extends MainMlRepository {
    constructor() {
        super()
    }

    async delete(_id: number): Promise<IProductResponseSimple> {
        return this.prisma.product.update({
            where: { id: _id, isDeleted: false },
            data: { isDeleted: true }
        })
    }

    async find(_id: number): Promise<IProduct | null> {
        return this.prisma.product.findFirst({
            where: { id: _id, isDeleted: false },
            include: {
                variation: true
            }
        });
    }

    async get(): Promise<Array<IProduct>> {
        return this.prisma.product.findMany({
            where: { isDeleted: false },
            include: { 
                variation: {
                    orderBy: { name: 'desc' }
                }
            }
        });

    }

    async update(_id: number, _data: IProductPyloadUpdate): Promise<IProductResponseSimple> {
        return this.prisma.product.update({
            where: { id: _id, isDeleted: false },
            data: _data,
            select: { id: true }
        });
    }

    async create(_data: IProductPyloadCreate, variation: Omit<IVariationPyloadCreate, "productId">): Promise<IProductResponseSimple> {
        return this.prisma.product.create({
            data: {
                ..._data,
                variation: {
                    create: variation
                }
            },
            select: { id: true }
        });
    }
} 