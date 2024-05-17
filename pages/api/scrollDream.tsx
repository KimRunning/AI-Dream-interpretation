import { NextApiRequest, NextApiResponse } from "next";
import { ObjectId } from "mongodb";
import connectToDatabase from "@/lib/mongoDB/connect";

// MongoDB 연결을 위한 유틸리티 함수
export default async function scrollDreams(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const db = await connectToDatabase();
    const collection = db.collection("dream");

    const { cursor, query, limit = 15 } = req.query;

    // 검색 조건을 배열 내의 content 필드에 대해 적용
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
