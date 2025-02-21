import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({ path: ".env.local" });

export default defineConfig({
  schema: "./database/schema.ts",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: 'postgresql://BookStore_owner:npg_kE4Lw2pamIsq@ep-mute-dawn-a5uxvf4f.us-east-2.aws.neon.tech/BookStore?sslmode=require',
  },
});
