import { MongoClient, Db } from "mongodb";

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

const MONGODB_URI = process.env.MONGODB_URI!;
const MONGODB_DB = "AiHeamong";

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

export async function connectToDatabase(): Promise<Db> {
  if (cachedDb) {
    return cachedDb;
  }

  if (!cachedClient) {
    cachedClient = new MongoClient(MONGODB_URI, {
      serverSelectionTimeoutMS: 5000, // 서버 선택 타임아웃 (밀리초)
      socketTimeoutMS: 10000, // 소켓 타임아웃 (밀리초)
    });
    await cachedClient.connect();
  }

  cachedDb = cachedClient.db(MONGODB_DB);
  return cachedDb;
}
