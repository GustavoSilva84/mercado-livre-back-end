import { mercadoLivre } from "@prisma/client";
import MainMlRepository from "../../main";

export default class AccountMlRepository extends MainMlRepository {

    constructor() {
        super()
    }

    async update(id: number, token: string, refreshToken: string): Promise<mercadoLivre> {
        return this.prisma.mercadoLivre.update({
            data: { token, refreshToken },
            where: { id }
        });
    }

    async find(id: number): Promise<mercadoLivre | null> {
        return this.prisma.mercadoLivre.findFirst({
            where: { id }
        });
    }

    async create(name: string, token: string, refreshToken: string): Promise<mercadoLivre> {
        return this.prisma.mercadoLivre.create({
            data: { name, token, refreshToken }
        });
    }
} 