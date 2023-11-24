import "dotenv/config";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import db, { client } from "./index";

async function migrateDatabase() {
  console.log("👷 Starting migration...");
  await migrate(db, { migrationsFolder: "./db/migrations" });

  console.log("✨ Migration completed!");
  // await client .end();

  console.log("👋 Bye!");
  process.exit(0);
}

migrateDatabase().catch((err) => {
  console.error(err);
  process.exit(1);
});