import { NextApiRequest, NextApiResponse } from "next";
import { ObjectId } from "mongodb";
import { connectToDatabase } from "@/lib/mongoDB/connect";

export default async function scrollDreams(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const db = await connectToDatabase();
    const collection = db.collection("dream");

    const { cursor, query, limit = 15 } = req.query;

    const searchQuery = query ? { "dream.content": { $regex: query.toString(), $options: "i" } } : {};
    const findQuery = cursor ? { ...searchQuery, _id: { $lt: new ObjectId(cursor as string) } } : searchQuery;

    console.log("searchQuery:", searchQuery); // 쿼리 조건 로그 추가
    console.log("findQuery:", findQuery); // 쿼리 조건 로그 추가

    const dreams = await collection.find(findQuery).sort({ _id: -1 }).limit(Number(limit)).toArray();

    console.log("Found dreams:", dreams); // 가져온 데이터 로그 추가

    const lastDream = dreams[dreams.length - 1];
    const nextCursor = lastDream ? lastDream._id : null;

    return res.status(200).json({ dreams, nextCursor });
  } catch (error: unknown) {
    let errorMessage = "An unexpected error occurred";
    if (error instanceof Error) {
      console.error("Error fetching dreams:", error);
      errorMessage = error.message;
    }
    return res.status(500).json({ message: `Internal server error: ${errorMessage}` });
  }
}
