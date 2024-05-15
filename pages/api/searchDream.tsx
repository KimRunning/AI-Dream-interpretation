import connectToDatabase from "@/lib/mongoDB/connect";
import { NextApiRequest, NextApiResponse } from "next";

// MongoDB 연결을 위한 유틸리티 함수

export default async function searchDreams(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ message: "Query parameter is required" });
  }

  try {
    const db = await connectToDatabase();
    const collection = db.collection("dream");
    const regex = new RegExp(query.toString(), "i"); // 검색어를 정규식으로 변환
    const dreams = await collection.find({ "dream.content": regex }).sort({ _id: -1 }).toArray(); // 정규식으로 필터링
    return res.status(200).json(dreams);
  } catch (error) {
    console.error("Error searching dreams:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
