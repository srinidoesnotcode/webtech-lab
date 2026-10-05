import { MongoClient } from "mongodb";
const client = new MongoClient(process.env.MONGODB_URI);
let db;
export async function connectDB() { try { await client.connect(); db = client.db("blogdb"); console.log("MongoDB connected successfully"); } catch (error) { console.error("MongoDB connection failed:", error); process.exit(1); } }
export function getDB() { if (!db) throw new Error("Database has not been connected yet."); return db; }
