import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

export const client = new Client({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: "root",
  password: "password",
  database: "markit",
});

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to the database");
    // Perform database operations here after successful connection
  } catch (err) {
    console.error("Error connecting to the database:", err);
    process.exit(1);
  }
}

connectToDatabase();
const db = drizzle(client);
export default db;