import { PrismaClient } from "@prisma/client";

export default class MainMlRepository {
    public prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient()
    }
}