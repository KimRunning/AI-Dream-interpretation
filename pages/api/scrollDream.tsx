import { NextApiRequest, NextApiResponse } from "next";
import { ObjectId } from "mongodb";
import { connectToDatabase } from "@/lib/mongoDB/connect";

export default async function scrollDreams(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const timeoutPromise = new Promise<never>(
    (_, reject) => setTimeout(() => reject(new Error("Request timed out")), 10000) // 10초 타임아웃
  );

  try {
    const dbPromise = connectToDatabase();
    const db = await Promise.race([dbPromise, timeoutPromise]); // 타임아웃과 DB 연결 중 먼저 완료되는 것을 기다림
    const collection = db.collection("dream");

    const { cursor, query, limit = 15 } = req.query;
    const searchQuery = query ? { "dream.content": { $regex: query.toString(), $options: "i" } } : {};
    const findQuery = cursor ? { ...searchQuery, _id: { $lt: new ObjectId(cursor as string) } } : searchQuery;

    const dreams = await collection.find(findQuery).sort({ _id: -1 }).limit(Number(limit)).toArray();
    const lastDream = dreams[dreams.length - 1];
    const nextCursor = lastDream ? lastDream._id : null;

    return res.status(200).json({ dreams, nextCursor });
  } catch (error) {
    console.error("Error fetching dreams:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
