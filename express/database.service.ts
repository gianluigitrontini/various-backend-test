// backend/database.ts
import { Database, open } from 'sqlite';
import sqlite3 from 'sqlite3';

let db: Database;

async function initializeExampleDatabase() {
  if (!db) {
    db = await open({
      filename: '../example.db',
      driver: sqlite3.Database,
    });

    // You can create tables here if they don't exist
    await db.run(`
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT NOT NULL UNIQUE,
                age INTEGER
            );
        `);
  }
  return db;
}

export { initializeExampleDatabase };
