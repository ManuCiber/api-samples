import "dotenv/config";

import {z} from "zod";

export const envSchema = z.object({
    PORT: z.string().min(1, {message: "The PORT is required"}),
    DATABASE_URL: z.string().min(1, {message: "The DATABASE_URL is required"})
}).passthrough();

type envType = z.infer<typeof envSchema>;

const envParsed = envSchema.safeParse(process.env);

if (!envParsed.success) {
    console.error("Invalid environment variables:", envParsed.error.format());
    throw new Error("Invalid environment variables");
}

export const envs: envType = {
    PORT: envParsed.data.PORT,
    DATABASE_URL: envParsed.data.DATABASE_URL
}