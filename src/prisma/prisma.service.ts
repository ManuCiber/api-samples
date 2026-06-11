import { Injectable, Logger, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { envs } from "src/config";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    private readonly logger = new Logger('Sample - App')
    constructor(){
        super({ adapter: new PrismaPg(envs.DATABASE_URL) });
    }

    async onModuleInit(){
        try {
            await this.$connect();
        } catch (error) {
            this.logger.error('Error connecting to the database', error);
        }
        this.logger.log('Connected to Prisma');
    }

    async onModuleDestroy() {
        await this.$disconnect();
        this.logger.log('Database disconnected');
    }
}
