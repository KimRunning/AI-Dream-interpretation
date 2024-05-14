import connectToDatabase from "@/lib/mongoDB/connect";
import { NextApiRequest, NextApiResponse } from "next";

// MongoDB 연결을 위한 유틸리티 함수

export default async function getDreams(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const db = await connectToDatabase();
    const collection = db.collection("dream");
    const dreams = await collection.find({}).sort({ _id: -1 }).toArray(); // 모든 문서를 내림차순으로 정렬하여 배열로 가져옴
    return res.status(200).json(dreams);
  } catch (error) {
    console.error("Error fetching dreams:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
