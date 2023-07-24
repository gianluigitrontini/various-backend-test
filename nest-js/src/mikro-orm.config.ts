import { defineConfig } from "@mikro-orm/core"

export default defineConfig({
    entities: ['./dist/entities'],
    entitiesTs: ['./src/entities'],
    dbName: './database/nestjs.sqlite3',
    type: 'sqlite',
}); 