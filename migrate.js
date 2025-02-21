require('dotenv').config()
const { neon } = require('@neondatabase/serverless')
const { drizzle } = require('drizzle-orm/neon-http')
const { migrate } = require('drizzle-orm/neon-http/migrator')

const sql = neon(process.env.DATABASE_URL)
const db = drizzle(sql)

const main = async () => {
    try {
        await migrate(db, { migrationsFolder: "./" })
        console.log("Migration completed")
    } catch (error) {
        console.error("Error during migration:", error)
        process.exit(1)
    }
}

main()